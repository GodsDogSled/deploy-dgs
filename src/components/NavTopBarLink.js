import Image from "next/image"
import React from "react";

export default function NavTopBarLink({ img, header, info, handleLink }) {

  const isValid = React.isValidElement(img);


  return (
    <li className="nav-li">
      <a target="blank" aria-label="email link" href={handleLink} style={{ display: "flex" }} className={handleLink ? "email-link" : ""}>
        {isValid ? img : <Image className="cs-icon mobile-hide" src={img} alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />}
        <div className="text-content mobile-hide">
          <span className="mobile-hide">{header}</span>
          <span id="info">{info}</span>
        </div>
      </a>
    </li>
  )
}