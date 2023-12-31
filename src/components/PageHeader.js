'use client'

import Image from "next/image";
import banner from ".././app/images/banner.jpg"

export default function PageHeader({ title }) {
  return (
    <div className="page-banner">
      <Image priority={true} className="mobile-show" style={{ objectFit: "cover" }} width={1185} height={200} sizes="100vw" src={banner} alt={"clean kitchen"} />
      <Image priority={true} className="mobile-hide" style={{ objectFit: "cover" }} layout="responsive" sizes="100vw" src={banner} alt={"clean kitchen"} />
      <div className="gradient">

      </div>
      <h1>{title}</h1>
    </div>
  )
}