import Link from "next/link"
import Logo from "@/components/Logo"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <section className="top-section">
        <Link className="logo-footer" href="/"><Logo /></Link>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/faqs"}>FAQ</Link>
            </li>
            {/* <li>
              <Link href={"#"}>Tersm of Service</Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h2>Cleaning Services</h2>
          <ul>
            <li>
              <Link href={"/services"}>House and Apartment Cleaning</Link>
            </li>
            <li>
              <Link href={"/services"}>Move In/Out Cleaning</Link>
            </li>
            <li>
              <Link href={"/services"}>Deep Cleaning</Link>
            </li>
            <li>
              <Link href={"/services"}>Appliances</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <Image className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/c1cfbe976d616f7b9ef0e8624601e512b2e8d082/6692f/assets/images/phone-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />
              +1 (778 558-6314)
            </li>
            <a className="email-link" style={{ display: "flex", justifyItems: "center" }} href="mailto: dgscservices@gmail.com" ><Image className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/e6a6f6485c11e0a54e57b163cf955dadef981bde/c0825/assets/images/mail-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />dgscservices@gmail.com</a>
            <li><Image className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/031a45ce3d2104e44dfa82761a91b4c44a28f8d3/c2fbe/assets/images/pin-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />Greater Vancouver, BC</li>
          </ul>
        </div>

      </section>
      <section className="bottom-section">
        <span className="copyright" >Website hand coded by <br></br> <a target="_blank" href="https://premiumgabe.com/">PremiumGabe</a> Web Designs</span>
      </section>
    </footer>
  )
}
