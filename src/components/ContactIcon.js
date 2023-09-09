import Image from "next/image"

export default function ContactIcon({ img, header, info }) {
  return (
    <li className="contact-icon">
      <Image className="cs-icon " src={img} alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />
      <div className="text-content">
        <span >{header}</span>
        <span>{info}</span>
      </div>
    </li>
  )
}