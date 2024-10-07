import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from "next/image";
import style from './index.module.scss';
import Star from "../assets/star.svg?component";
import Instagram from "../assets/instagram.svg?component";
import Etsy from "../assets/etsy.svg?component";
import Mail from "../assets/mail.svg?component";
import forest from "../assets/forest_trim.jpg";
import Gallery from "../components/Gallery";

const gallery = {
  "grin": {
   "title": "Grin",
   "size": "11x14(in)",
   "medium": "Oil on Panel",
   "available": false,
   "price": "$200",
   "tags": [ "Portrait", "Figure", "Animals" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/GrinWM.JPG"
 },
 "futureSky": {
   "title": "Future Sky",
   "size": "6x4(in)",
   "medium": "Oil on Paper",
   "available": false,
   "price": "$100",
   "tags": [ "Landscape", "Fantasy" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/FuturesSkyWM.JPG"
 },
 "smoke":{
   "title": "Blowing Bubbles",
   "size": "11x14(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": [ "Portrait", "Figure" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/SmokeWM.JPG"
 },
 "freya":{
   "title": "Freya",
   "size": "30x40(in)",
   "medium": "Oil on Canvas",
   "available": false,
   "price": "$2,000",
   "tags": [ "Figure", "Fantasy" ,"Animals" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/FreyjaWM.JPG"
 },
 "absolution":{
   "title": "Absolution",
   "size": "30x40(in)",
   "medium": "Oil on Canvas",
   "available": true,
   "price": "$1,000",
   "tags": [ "Figure", "NSFW" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/AbsolutionWM.JPG"
 },
 "blueUndies":{
   
   "title": "Underwear Series 1 Blue ",
   "size": "12x12(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": [ "Figure", "NSFW" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/BlueUndiesWM.JPG"
 },
 "framed1":{
   "title": "Framed 1",
   "size": "4x5(ft)",
   "medium": "Oil on Canvas",
   "available": true,
   "price": "$1,500",
   "tags": [ "Figure", "NSFW" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/FramedWM.JPG"
 },
 "joshuaTree":{
   "title": "Joshua Tree Plein Air",
   "size": "9x12(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$100",
   "tags": [ "Landscape" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/JoshuaTreeWM.JPG"
 },
 "purpleUndies":{
   "title": "Underwear Series 1 - Purple",
   "size": "12x12(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": [ "Figure", "NSFW" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/PurpleUndiesWM.JPG"
 },
 "redUndies":{
   "title": "Underwear Series 1 - Red",
   "size": "12x12(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": [ "Figure", "NSFW" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/RedUndiesWM.JPG"
 },
 "tanktop":{
   "title": "Tanktop",
   "size": "9x12(in)",
   "medium": "Oil on Paper",
   "available": true,
   "price": "$150",
   "tags": [ "Portrait", "Figure" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/TanktopWM.JPG"
 },
 "theBirds2":{
   "title": "Spy Birds Series - Red",
   "size": "8x8(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": [ "Animals", "Fantasy" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/TheBirds2WM.JPG"
 },
 "theBirds1":{
   "title": "Spy Birds Series - Yellow",
   "size": "8x8(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": ["Animals", "Fantasy"],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/TheBirds1WM.JPG"
 },
 "tigerBlep":{
   "title": "Majestic Blep",
   "size": "12x12(in)",
   "medium": "Oil on Panel",
   "available": true,
   "price": "$200",
   "tags": ["Animals", "Figure"],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/TigerBlepWM.JPG"
 },
 "worldsAndImages":{
   "title": "Worlds and Images",
   "size": "4x5(ft)",
   "medium": "Oil on Canvas",
   "available": true,
   "price": "$2,000",
   "tags": [ "Figure", "Fantasy" ],
   "fileName": "https://websitephotosjdbiggerart.s3.us-east-2.amazonaws.com/WorldsAndImagesWM.JPG"
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
            <p className="link"><Etsy className="icon"/><a href="https://www.etsy.com/shop/JDBiggerArt" target="_blank">@JDBiggerArt</a></p>
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
