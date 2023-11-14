"use client"

import Image from "next/image"

import Link from "next/link";

export default function ServiceCard({ service, isBlue, nth, picture }) {
  let paramLink = service.replace(/\s/g, '');
  const blue = isBlue;
  if (service.includes("/")) { paramLink = paramLink.replace('/', '') }

  return (
    <li className={(blue ? "service blue" : 'service')} >
      <div style={{ borderRadius: "0 40px 40px 40px", position: "relative", width: "100%", height: "11em", overflow: "hidden" }} className="img-container">
        <Image priority={true} alt={service} fill sizes="(max-width: 768px) 60vw, (max-width: 1200px) 18vw, 10vw" style={{ objectFit: "cover" }} src={picture} />
      </div>
      <h2 style={blue ? { color: "white" } : { color: "black" }} >{service}</h2>
      <Link href={{ pathname: `/service-info/${paramLink}`, query: { image: picture } }} className={(!blue ? "quote-button2 blue" : 'quote-button2')} >Service Details</Link>
    </li>
  )
}