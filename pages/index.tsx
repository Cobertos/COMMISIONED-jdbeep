import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from "next/image";
import style from './index.module.scss';
import Star from "../assets/star.svg?component";
import Instagram from "../assets/instagram.svg?component";
import Mail from "../assets/mail.svg?component";
import forest from "../assets/forest_trim.jpg";
import Gallery from "../components/Gallery";

const gallery = {
  "grin": {
    "title": "Grin",
    "size": "10x12(in)",
    "medium": "oil on canvas",
    "available": true,
    "price": "$200",
    "tags": [ "Landscape", "Portrait", "Figure", "Fantasy", "NSFW" ],
    "printURL": "https://www.etsy.com/listing/1780810833/hyena-grin-print?click_key=06ac146d7992ee51d8b49b6967f5a7ef1682bf84%3A1780810833&click_sum=1f08c213&ref=shop_home_feat_1",
    //"fileName": "butt.png",
    "thumbName": "https://i.etsystatic.com/54195083/r/il/f16406/6256046765/il_600x600.6256046765_ls7u.jpg",
    "fileName": "https://i.etsystatic.com/54195083/r/il/f16406/6256046765/il_794xN.6256046765_ls7u.jpg"
  },
  "blowing_bubbles": {
    "title": "Blowing Bubbles",
    "size": "5x6(ft)",
    "medium": "acrylic on canvas",
    "available": false,
    "price": "$1000",
    "tags": [  "Figure" ],
    "printURL": "https://www.etsy.com/listing/1780761457/blowing-bubbles-print?click_key=ab0adf07e6a5b40f20edfe515c2f44787aad9cef%3A1780761457&click_sum=207179b5&ref=shop_home_feat_2",
    "fileName": "https://i.etsystatic.com/54195083/r/il/8c031e/6255939173/il_794xN.6255939173_op51.jpg",
    "thumbName": "https://i.etsystatic.com/54195083/r/il/8c031e/6255939173/il_600x600.6255939173_op51.jpg"
  },
  "Freya": {
    "title": "Freya",
    "size": "14x16(in)",
    "medium": "Oil on canvas",
    "available": false,
    "price": "$150",
    "tags": [ "Portrait", "Figure", "Fantasy", "NSFW" ],
    "originalURL": "https://www.etsy.com/listing/1780810833/hyena-grin-print?click_key=06ac146d7992ee51d8b49b6967f5a7ef1682bf84%3A1780810833&click_sum=1f08c213&ref=shop_home_feat_1",
    "printURL": "https://www.etsy.com/listing/1780810833/hyena-grin-print?click_key=06ac146d7992ee51d8b49b6967f5a7ef1682bf84%3A1780810833&click_sum=1f08c213&ref=shop_home_feat_1",
    "fileName": "https://i.etsystatic.com/54195083/r/il/0f00ed/6210597264/il_794xN.6210597264_stee.jpg",
  },
  "kingOfTheNutt2": {
  "title": "King of the Nutt 2",
  "size": "14x16(in)",
  "medium": "Oil on canvas",
  "available": false,
  "price": "$150",
    "tags": [ "Portrait", "Figure", "Fantasy", "NSFW" ],
  "printURL": "",
  // "fileName": "kingOfTheNutt2.png"
  "fileName": "https://via.placeholder.com/800x800",
  },
  "oceanGate3": {
  "title": "Ocean Gate 3",
  "size": "8x10(in)",
  "medium": "Oil on canvas",
  "available": true,
  "price": "$250",
      "tags": [ "Landscape","Fantasy" ],
  "printURL": "https://www.etsy.com/listing/1427689800/extra-large-wall-art-oversized-wall-art?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_-home_and_living&utm_custom1=_k_CjwKCAjw5Ky1BhAgEiwA5jGujjDqSxj8-xBeNRcveOnHx3HY10oVuS7ouEQ4Nqb08D271bQAGlqrIhoCs7QQAvD_BwE_k_&utm_content=go_12665398257_121762925993_511610210343_pla-303628061699_c__1427689800_12768591&utm_custom2=12665398257&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujjDqSxj8-xBeNRcveOnHx3HY10oVuS7ouEQ4Nqb08D271bQAGlqrIhoCs7QQAvD_BwE",
  // "fileName": "oceanGate3.png"
  "fileName": "https://via.placeholder.com/800x800",
    "thumbName": "https://via.placeholder.com/200x200"
  }
};

export function IndexPage() {
  return (<main className={style.site}>
    <section className="about-clip">
      <section className="middle-content about-group">
          <div className="about-content">
            <h1>JD Bigger</h1>
            <p><span>I'm a self-taught artist based in Michigan, crafting oil paintings that merge themes of fantasy with diverse artistic styles, including impressionism, expressionism, realism, and surrealism.</span></p>
            <p><span>My work is deeply influenced by my passion for video games and fantasy and sci-fi literature, creating vivid, immersive worlds that invite viewers to explore the boundaries of imagination. Through this fusion of artistic traditions and personal interests, I aim to evoke a sense of wonder and emotional depth in each piece. My paintings attempt to create a feeling of being halfway in this word, and in a liminal space of aesthetics and symbols.</span></p>
            <p className="link"><Instagram className="icon"/><a href="https://www.instagram.com/jdbiggerart/" target="_blank">@jdbiggerart</a></p>
            <p className="link"><Mail className="icon"/><a href="mailto:jdbiggerart@gmail.com" target="_blank">jdbiggerart@gmail.com</a></p>
          </div>
          <div className="figure">
            <Star />
            <Star />
            <Star />
            <Image src={forest} alt="forest scene"/>
          </div>
      </section>
    </section>

    <section className="middle-content gallery-group">
      <Gallery items={Object.values(gallery)} />
    </section>

    <footer>
      <p>Coded by <a href="https://cobertos.com" target="_blank">Samantha / Cobertos</a></p>
    </footer>
  </main>);
}

export default IndexPage;
