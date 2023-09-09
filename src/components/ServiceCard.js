"use client"

import Image from "next/image"
import a from "../../public/hotel_8634407.png"
import Link from "next/link";

export default function ServiceCard({ service, isBlue, nth, picture }) {

  const blue = isBlue;

  return (
    <li className="service " id={(blue ? "blue" : '')} >
      <Image width={290} height={190} src={picture} alt={'temp icon'} style={{ objectFit: "cover", borderRadius: "0 40px 40px 40px", padding: "1em" }} />
      <h2>{service}</h2>
      <Link className="quote-button2" href={'#'} id={(!blue ? "blue" : '')} >Get a Quote</Link>
    </li>
  )
}