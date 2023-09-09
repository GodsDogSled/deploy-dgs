import Image from "next/image"

export default function NavTopBarLink({ img, header, info }) {
  return (
    <li className="nav-li">
      <Image className="cs-icon mobile-hide" src={img} alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />
      <div className="text-content mobile-hide">
        <span className="mobile-hide">{header}</span>
        <span>{info}</span>
      </div>
    </li>
  )
}