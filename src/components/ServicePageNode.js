

import Image from "next/image";
import Link from "next/link"


export default function ServicePageNode({ room, photo, list }) {
  return (
    <section className="service-page-node">
      <div className="image-container">
        <Image className="pic" width={100} height={200} style={{ height: "100%", objectFit: "cover", borderRadius: "0px 15px 15px 15px", border: "solid 6px white" }} layout="responsive" src={photo} alt={`image of ${room}`}></Image>
        <Link className="hover-link" href={"/quote"} ><span className="quote-button2">Get a Quote</span></Link>
      </div>
      <div className="text-container">
        <h2>{room}</h2>
        <ul className="service-page-ul">
          {list.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}