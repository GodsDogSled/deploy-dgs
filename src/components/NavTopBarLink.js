import Image from "next/image"

export default function NavTopBarLink({ img, header, info, handleLink }) {
  return (
    <li className="nav-li">
      <a href={handleLink} style={{ display: "flex" }} className={handleLink ? "email-link" : ""}>
        <Image className="cs-icon mobile-hide" src={img} alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />
        <div className="text-content mobile-hide">
          <span className="mobile-hide">{header}</span>
          <span id="info">{info}</span>
        </div>
      </a>
    </li>
  )
}