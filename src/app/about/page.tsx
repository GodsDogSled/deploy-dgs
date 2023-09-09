import PageHeader from "../../components/PageHeader";
import woman from "../images/aboutUs.jpg";
import Image from "next/image";
import ContactIcon from "../../components/ContactIcon";
import Link from "next/link";

export default async function Page() {

  return (
    <>
      <PageHeader title={"About Us"} />
      <div className="about-page">
        <section className=" sub-page">
          <div className="content about ">
            <span className="topper">About Us</span>
            <h2 className="page-head">Premier Cleaners in the Greater Vancouver Area</h2>
            <p>
              At DGS Cleaning, we understand that a clean home is essential for your well-being, and we are dedicated to creating a spotless environment where you can relax and thrive.
            </p>
            <p>
              We know that your time is valuable, which is why we offer flexible scheduling options tailored to your needs. Whether you require a one-time deep cleaning or regular maintenance, we have you covered with affordable rates. We are dedicated to making a positive impact in the cities we serve, contributing to the betterment of our local communities.
            </p>
            <p>
              So, why wait? Experience the difference with DGS Cleaning, the leading choice for residential house cleaning. Contact us today, whether you have a house, a condo or an apartment, and let our professional team transform your home into a pristine sanctuary you'll love coming back to.
            </p>

          </div>

          <div className="picture">
            <Image
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              alt="woman cleaning a house"
              src={woman}
            />
          </div>
        </section>

        <section>
          <div className="contact">
            <div className="icon-group">
              <ContactIcon
                img={"https://d33wubrfki0l68.cloudfront.net/c1cfbe976d616f7b9ef0e8624601e512b2e8d082/6692f/assets/images/phone-stroke.svg"}
                header={"Reach Out"}
                info={"123-456-7890"}
              />
              <ContactIcon
                img={"https://d33wubrfki0l68.cloudfront.net/e6a6f6485c11e0a54e57b163cf955dadef981bde/c0825/assets/images/mail-stroke.svg"}
                header={"Send us a Message"}
                info={"email@email.com"}
              />
            </div>

            <Link href={"#"} className="quote">
              Get a Quote
            </Link>
          </div>
        </section>
      </div>

    </>
  )
}