import React from "react";
import Image from "next/image";
import style from './GalleryItem.module.scss';

export interface GalleryItem {
  title: string;
  size?: string;
  medium?: string;
  available?: boolean;
  price?: string;
  tags?: string[];
  printURL?: string;
  fileName?: string;
}

function getGalleryItemSubtext(i: GalleryItem) {
  const s = i.size ? `${i.size}\n` : ''
  const m = i.medium ? `${i.medium}\n` : '';
  return `${s}${m}`;
}

interface GalleryItemComponentProps {
  item: GalleryItem
}

export default function GalleryItemComponent(props: GalleryItemComponentProps) {
  const { item } = props;
  return <div className={style.GalleryItem}>
    <img src="https://via.placeholder.com/200x200" alt="asdf" width="200" height="200" />
    <div className="gi-content">
      <div className="gi-text">
        <h3>{item.title}</h3>
        <p>{getGalleryItemSubtext(item)}</p>
      </div>
      {item.printURL &&
        <a className="button" href={item.printURL}>
          Buy Prints
        </a>
      }
      <div>
      {(item.tags ?? []).map(t => {
        return <button className="tag">{t}</button>
      })}
      </div>
    </div>
  </div>
}