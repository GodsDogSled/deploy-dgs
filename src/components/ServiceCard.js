"use client"

import Image from "next/image"
import a from "../../public/hotel_8634407.png"
import Link from "next/link";

export default function ServiceCard({ service, isBlue, nth, picture }) {

  const blue = isBlue;

  return (
    <li className="service " id={(blue ? "blue" : '')} >
      <div style={{ borderRadius: "0 40px 40px 40px", position: "relative", width: "100%", height: "11em", overflow: "hidden" }} className="img-container">
        {/* <Image fill src={picture} alt={'temp icon'} sizes="20vw"
          style={{
            width: '100%',

          }} /> */}
        <Image fill sizes="100vw" style={{ objectFit: "cover" }} src={picture} />
      </div>
      <h2>{service}</h2>
      <Link className="quote-button2" href={'/quote'} id={(!blue ? "blue" : '')} >More Info</Link>
    </li>
  )
}