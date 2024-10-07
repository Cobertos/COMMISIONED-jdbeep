import React from "react";
import Image from "next/image";
import style from './GalleryItem.module.scss';

export interface GalleryItem {
  /**The title of the work*/
  title: string;
  /**Size, optional, used in the subtext*/
  size?: string;
  /**Medium, optional, used in the subtext*/
  medium?: string;
  /**Currently unused*/
  available?: boolean;
  /**Currently unused*/
  price?: string;
  /**The tags of this item*/
  tags?: string[];
  /**The URL to a original for this item, if it exists. Otherwise no link shown*/
  originalURL?: string;
  /**The URL to a print for this item, if it exists. Otherwise no link shown*/
  printURL?: string;
  /**The URL of the image to show*/
  fileName: string;
  /**A thumbnail to show, should be smaller size than fileName to make base site load faster. If not provided, falls back to fileName*/
  thumbName?: string;
}

function getGalleryItemSubtext(i: GalleryItem) {
  const s = i.size ? `${i.size}\n` : ''
  const m = i.medium ? `${i.medium}\n` : '';
  return `${s}${m}`;
}

interface GalleryItemComponentProps {
  item: GalleryItem
  onLightbox: (content: React.ReactElement)=>void;
  showNSFW?: boolean;
  onShowNSFW: ()=>void;
}

export default function GalleryItemComponent(props: GalleryItemComponentProps) {
  const { item, onLightbox, onShowNSFW, showNSFW } = props;
  const isNSFW = (item.tags ?? []).map(t => t.toUpperCase()).includes("NSFW");
  const needsBlur = isNSFW && !showNSFW;

  function lb() {
    onLightbox(<>
      <h3>{item.title}</h3>
      <img src={item.fileName} />
    </>);
  }

  return <div className={`${style.GalleryItem} ${isNSFW ? style.NSFW : ''}`}>
    {needsBlur &&
      <button className="gi-showNSFW" onClick={onShowNSFW}>
        Show NSFW
      </button>
    }
    <div className={`gi-blurbox ${needsBlur ? "gi-blur" : ""}`}>
      <div className="gi-top">
        <button onClick={lb} className="gi-image-button">
          <img className="gi-image" src={item.thumbName ?? item.fileName} alt={"Artistic work by JD titled " + item.title}/>
        </button>
      </div>
      <div className="gi-bottom">
        <div className="gi-card">
          <h3>{item.title}</h3>
          <p>{getGalleryItemSubtext(item)}</p>
        </div>
        <div className="gi-buttons">
          {item.originalURL &&
            <a className="button" href={item.originalURL}>
              Buy Original
            </a>
          }
          {item.printURL &&
            <a className="button" href={item.printURL}>
              Buy Prints
            </a>
          }
        </div>
      </div>
    </div>
    {/*
      <div>
      {(item.tags ?? []).map(t => {
        return <button className="jd-tag">{t}</button>
      })}
      </div>
    </div>*/}
  </div>
}