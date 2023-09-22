"use client"

import Image from "next/image";
import { useState } from "react";


export default function LandingCarousel() {

  const srcs = ["/daniLiving.jpeg", "/bathroom.jpg", "/DanielaKitchen.jpg"];
  const [imgSrc, setImgSrc] = useState("/daniLiving.jpeg");
  let ranOnce;
  let srcIndex;

  if (!ranOnce) {
    srcIndex = 0;
  }


  setInterval(function () {

    setImgSrc(srcs[srcIndex]);

    srcIndex++;
    if (srcIndex > 2) { srcIndex = 0 };

    ranOnce = true;

  }, 1000);



  return (
    <>
      <div className="landing-carousel">
        <Image fill sizes="50vw" src={imgSrc} alt={imgSrc}></Image>
      </div>
    </>
  )
}