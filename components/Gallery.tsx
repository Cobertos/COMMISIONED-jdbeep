import React, { useMemo } from "react";
import Image from "next/image";
import style from './Gallery.module.scss';
import GalleryItemUI, { type GalleryItem } from "./GalleryItem";

interface GalleryComponentProps {
  items: GalleryItem[]
}

function unique<T>(a: T[]): T[] {
  return Array.from(new Set(a));
};

export default function GalleryComponent(props: GalleryComponentProps) {
  const { items } = props;

  const allTags = useMemo(()=>unique(items.map(i => (i.tags ?? [])).flat()), [items]);

  return <div className={style.Gallery}>
    <div className="g-top">
      <div>
        <h2>Gallery</h2>
        <p>Here’s all my stuff! I sell originals, but I also sell prints. Maybe put some other stuff here if I need to communicate that. This is moreso for if you want to</p>
      </div>
      <div className="g-filters">
        <h3>Filters</h3>
        {allTags.map(t => {
          return <button className="tag">{t}</button>
        })}
      </div>
    </div>
    <p>{2} items</p>
    <div className="g-items">
    {items.map(i => {
      return <GalleryItemUI item={i}/>;
    })}
    </div>
  </div>;
}