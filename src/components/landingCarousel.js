"use client"

import Image from "next/image";
import { useState, useRef, useEffect } from "react";


export default function LandingCarousel() {
  const [imgSrc, setImgSrc] = useState("/bathroom.jpg");
  const indexRef = useRef(1);

  useEffect(() => {

    const srcs = ["/bathroom.jpg", "/daniLiving.jpeg", "/DanielaKitchen.jpg"];

    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (indexRef.current > 2) {
        indexRef.current = 0;
      }
      setImgSrc(srcs[indexRef.current]);
      indexRef.current++;
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className="landing-carousel">
        <Image fill sizes="50vw" src={imgSrc} alt={imgSrc}></Image>
      </div>
    </>
  )
}