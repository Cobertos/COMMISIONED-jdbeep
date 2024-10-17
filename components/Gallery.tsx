import React, { useCallback, useMemo, useState } from "react";
import { useConstructor } from "./util.tsx";
import Image from "next/image";
import style from './Gallery.module.scss';
import GalleryItemUI, { type GalleryItem } from "./GalleryItem";
import Modal, { useModal } from  './Modal.tsx';

interface GalleryComponentProps {
  items: GalleryItem[]
}

function unique<T>(a: T[]): T[] {
  return Array.from(new Set(a));
};

export default function GalleryComponent(props: GalleryComponentProps) {
  const { items } = props;

  const [localAgeGateAccepted, setLocalAgeGateAccepted] = useState(false);
  function getAgeGateAccepted() {
    if (typeof window === "undefined") {
      // Do not run this on the server
      return null;
    }
    return (window as any).localStorage.getItem("jdbigger-age-gate-accepted");
  }
  function setAgeGateAccepted(ageGateAccepted: boolean){
    setLocalAgeGateAccepted(ageGateAccepted);
    if (typeof window === "undefined") {
      return;
    }
    (window as any).localStorage.setItem("jdbigger-age-gate-accepted", ageGateAccepted);
  }
  useConstructor(()=>{
    if (typeof window === "undefined") {
      undefined;
    }
    setTimeout(()=>{
      // Read the NSFW flag and set the internal state, so we get around the
      // built version being the age gated version
      setLocalAgeGateAccepted(getAgeGateAccepted());
    }, 0);
  });


  const [showAgeGateModal, setShowAgeGateModal] = useState(false);
  useModal(showAgeGateModal);
  const [showLightboxModal, setShowLightboxModal] = useState(false);
  useModal(showLightboxModal);
  const [lightboxContent, setLightboxContent] = useState<React.ReactElement>("" as any);
  const allTags = useMemo(()=>unique(items.map(i => (i.tags ?? [])).flat()), [items]);
  const [selectedTag, setSelectedTag] = useState<string|null>(null);
  const filteredItems = useMemo(()=>{
    if (selectedTag === null) {
      return items;
    }
    return items.filter(i => (i.tags ?? []).includes(selectedTag));
  }, [selectedTag, items]);
  const toggleTag = useCallback(function toggleTag(tag: string) {
    if (selectedTag === null || selectedTag !== tag) {
      setSelectedTag(tag);
      return;
    }
    setSelectedTag(null);
  }, [selectedTag]);


  return <div className={style.Gallery}>
    <div className="g-top">
      <div className="g-top-content">
        <h2>Gallery</h2>
        <p>I painted this! :3</p>
      </div>
      <div className="g-filters">
        <h3>Filters</h3>
        <div className="g-filters-tags">
          {allTags.map(t => {
            return <button className={`jd-tag ${t === selectedTag ? 'active' : ''}`} onClick={()=>toggleTag(t)}>{t}</button>
          })}
        </div>
      </div>
    </div>
    {selectedTag !== null &&
      <div className="g-filter-status">
        <p>Showing {filteredItems.length} works tagged <code>{selectedTag}</code></p>
        <button onClick={()=>setSelectedTag(null)}>Clear filter</button>
      </div>
    }
    <div className="g-items">
    {filteredItems.map(i => {
      return <GalleryItemUI
        item={i}
        showNSFW={localAgeGateAccepted}
        onShowNSFW={()=>{
          setShowAgeGateModal(true);
        }}
        onLightbox={(content: React.ReactElement)=>{
          setShowLightboxModal(true);
          setLightboxContent(content);
        }}
      />;
    })}
    </div>
    <Modal
      isOpen={showLightboxModal}
      onClose={()=>{
        setShowLightboxModal(false);
        setLightboxContent("" as any);
      }}
    >
      {lightboxContent}
    </Modal>
    <Modal
      className="age-gate-modal"
      isOpen={showAgeGateModal}
      onClose={()=>{
        setShowAgeGateModal(false);
      }}
    >
      <p>Some of my art contains adult themes. It is hidden by default on my website.</p>
      <p>Please verify that you are 18+ and would like to view these images.</p>
      <div className="age-gate-buttons">
        <button onClick={()=>{
          setAgeGateAccepted(true);
          setShowAgeGateModal(false);
        }}>
          Yes, I am 18 or older
        </button>
        <button onClick={()=>setShowAgeGateModal(false)}>
          No, I am not
        </button>
      </div>
    </Modal>
  </div>;
}
