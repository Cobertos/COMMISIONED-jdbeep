import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from "next/image";
import style from './index.module.scss';
import Star from "../assets/star.svg?component";
import Instagram from "../assets/instagram.svg?component";
import Mail from "../assets/mail.svg?component";
import forest from "../assets/forest_trim.jpg";
import Gallery from "../components/Gallery";

const gallery = {
  "butt": {
    "title": "Butt",
    "size": "10x12(in)",
    "medium": "oil on canvas",
    "available": true,
    "price": "$200",
    "tags": [ "Landscape", "Portrait", "Figure", "Fantasy", "NSFW" ],
    "printURL": "https://www.etsy.com/listing/1427689800/extra-large-wall-art-oversized-wall-art",
    "fileName": "butt.png"
  },
  "bigEgg": {
  "title": "A Really Big Egg",
  "size": "5x6(ft)",
  "medium": "acrylic on canvas",
  "available": false,
  "price": "$1000",
    "tags": [  "Figure" ],
  "printURL": "",
  "fileName": "bigEgg.png"
  },
  "kingOfTheNutt1": {
  "title": "King of the Nutt 1",
  "size": "14x16(in)",
  "medium": "Oil on canvas",
  "available": false,
  "price": "$150",
    "tags": [ "Portrait", "Figure", "Fantasy", "NSFW" ],
  "printURL": "",
  "fileName": "kingOfTheNutt1.png"
  },
  "kingOfTheNutt2": {
  "title": "King of the Nutt 2",
  "size": "14x16(in)",
  "medium": "Oil on canvas",
  "available": false,
  "price": "$150",
    "tags": [ "Portrait", "Figure", "Fantasy", "NSFW" ],
  "printURL": "",
  "fileName": "kingOfTheNutt2.png"
  },
  "oceanGate3": {
  "title": "Ocean Gate 3",
  "size": "8x10(in)",
  "medium": "Oil on canvas",
  "available": true,
  "price": "$250",
      "tags": [ "Landscape","Fantasy" ],
  "printURL": "https://www.etsy.com/listing/1427689800/extra-large-wall-art-oversized-wall-art?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_-home_and_living&utm_custom1=_k_CjwKCAjw5Ky1BhAgEiwA5jGujjDqSxj8-xBeNRcveOnHx3HY10oVuS7ouEQ4Nqb08D271bQAGlqrIhoCs7QQAvD_BwE_k_&utm_content=go_12665398257_121762925993_511610210343_pla-303628061699_c__1427689800_12768591&utm_custom2=12665398257&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujjDqSxj8-xBeNRcveOnHx3HY10oVuS7ouEQ4Nqb08D271bQAGlqrIhoCs7QQAvD_BwE",
  "fileName": "oceanGate3.png"
  }
};

export function IndexPage() {
  return (<main className={style.site}>
    <section className="middle-content about-group">
      <div>
        <h1>JD Bigger</h1>
        <p>I'm a self-taught artist based in Michigan, crafting oil paintings that merge themes of fantasy with diverse artistic styles, including impressionism, expressionism, realism, and surrealism.</p>
        <p>My work is deeply influenced by my passion for video games and fantasy and sci-fi literature, creating vivid, immersive worlds that invite viewers to explore the boundaries of imagination. Through this fusion of artistic traditions and personal interests, I aim to evoke a sense of wonder and emotional depth in each piece. My paintings attempt to create a feeling of being halfway in this word, and in a liminal space of aesthetics and symbols.</p>
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

    {/*<section className="gallery-group">
      <Gallery items={Object.values(gallery)} />
    </section>*/}

    <footer>
      <p>Coded by <a href="https://cobertos.com" target="_blank">Samantha / Cobertos</a></p>
    </footer>
  </main>);
}

export default IndexPage;
