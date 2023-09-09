import Link from "next/link"
import Logo from "@/components/Logo"

export default function Footer() {
  return (
    <footer>
      <section className="top-section">
        <Link className="logo-footer" href="/"><Logo /></Link>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Services</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>FAQ</Link>
            </li>
            <li>
              <Link href={"#"}>Tersm of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Cleaning Services</h2>
          <ul>
            <li>
              <Link href={"#"}>House and Apartment Cleaning</Link>
            </li>
            <li>
              <Link href={"#"}>Move In/Out Cleaning</Link>
            </li>
            <li>
              <Link href={"#"}>Deep Cleaning</Link>
            </li>
            <li>
              <Link href={"#"}>Appliances</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <img className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/c1cfbe976d616f7b9ef0e8624601e512b2e8d082/6692f/assets/images/phone-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />
              Phone Number
            </li>
            <li><img className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/e6a6f6485c11e0a54e57b163cf955dadef981bde/c0825/assets/images/mail-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />email</li>
            <li><img className="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/031a45ce3d2104e44dfa82761a91b4c44a28f8d3/c2fbe/assets/images/pin-stroke.svg" alt="icon" loading="lazy" decoding="async" width="24" height="24" aria-hidden="true" />Greater Vancouver, BC</li>
          </ul>
        </div>

      </section>
      <section className="bottom-section">
        <span className="copyright" href="premiumgabe.com">Website hand coded by <br></br> <a href="premiumgabe.com">PremiumGabe</a> Web Designs</span>
      </section>
    </footer>
  )
}
