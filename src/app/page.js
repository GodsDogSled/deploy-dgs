

import Link from "next/link";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import CompleteServiceCard from "../components/CompleteServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import window from "./images/window.jpeg";
import mop from "./images/swifer.jpeg";
import hands from "./images/Transparent Bottole.png";
import EmblaCarousel from "../components/EmblaCarousel";
import Head from 'next/head';



export default function Home() {
  // const projectsPath = "https://premiumgabe.com/portfolio/wp-json/wp/v2/fwd-project/?_embed&acf_format=standard"
  // const query = await fetch(projectsPath);
  // const response = await query.json();

  // const services = ["Deep Cleaning", "Post Construction", "Movie In/Move Outs", "Air BnB Cleaning",]

  const services = [
    {
      Service: "Deep Cleaning",
      pic: "/deepClean.jpeg"
    },
    {
      Service: "Post Construction",
      pic: "/construct.jpeg"
    },
    {
      Service: "Move In/Out",
      pic: "/movein.jpeg"
    },
    {
      Service: "Vacation Rental",
      pic: "/bnb.jpeg"
    },
  ]

  const completeServices = [
    {
      type: "Kitchen Cleaning",
      description: "Our Ecvo friendly cleaing solutions not only assure a thorough clean but also safeguard your family's jeal;tj and the enmvironment"
    },
    {
      type: "Bathroom Cleaning",
      description: "For a spotless clean, fresh and hygenic bathroom , trust Vancouvers top bathroom cleaning company"
    },
    {
      type: "Bedroom Cleaning",
      description: "Experience the transformative difference a professionally cleaned bedroom can make to your home and wellbeing."
    },
    {
      type: "Appliance Cleaning",
      description: "Our experienced team specializes in deep-cleaning all types of appliances, from refrigerators and ovens to washers and dryers."
    },
    {
      type: "Living Rooms/Common Area",
      description: "Trust Vancovuer's best living room cleaning service to refresh your space, making it the perfect place to entertain guests or simply unwind after a long day."
    },

    {
      type: "Complete Dusting",
      description: " We methodically dust all surfaces, from bookshelves and picture frames to ceiling fans and window sills, leaving your home immaculately clean."
    },
  ]



  return (
    <>
      <Head>
        <title>
          DGS Cleaning - Cleaning Services | Greater Vancouver Area
        </title>
        <meta
          name="dgs cleaning vancouver"
          content="Your local cleaning solution for every mess "
          key="desc"
        />
      </Head>
      <section className="hero section">
        <div className="content">
          <span className="topper">100% Satisfaction</span>
          <h1>Trusted Cleaning <span className="color">Professionals</span></h1>
          <p>Spend more time on the important things. Leave the cleaning to us at DGS Cleaning Services with peace of mind guaranteed.</p>

          <div className="button-group">
            <Link href={"/quote"} className="left-button quote-button">
              Get a Quote
            </Link>
            <Link href={"/contact"} scroll={true} className="right-button quote-button">
              Contact Us
            </Link>
          </div>

        </div>

        <div className="picture">
          <Image
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', transform: "scaleX(-1)" }}
            alt="hero image cleaning service"
            src={"/daniLiving.jpeg"}
          />
        </div>
      </section>

      <section className="services section">
        <ul id="services">
          {services.map((service, i) => {
            let blue = false;
            if (i % 2 == 0) blue = true;
            return (
              <ServiceCard key={i} service={service.Service} picture={service.pic} isBlue={blue} nth={i} />
            )
          })}
        </ul>
      </section>

      <section className="about">

        <div className="picture mobile-hide">
          <Image
            height={600}
            width={620}
            style={{ padding: "6em", maxWidth: "785px", margin: "0 auto" }}
            alt="hero image cleaning service"
            src={"/danikitchen.jpeg"}
          />
        </div>


        <div className="content about">
          <span className="topper">WHO WE ARE</span>
          <h2>About DGS Cleaning Services</h2>
          <p>Welcome to DGS Cleaning Services, the premeir cleaning service in the greater vancouver area. We proudly serve in and around Vancouver, The North Shore, Burnaby, Richmond, Surrey, and more.  </p>
          <p>
            Our team of professional maids is passionate about delivering outstanding cleaning services. With meticulous attention to detail, we ensure that every nook and cranny of your home is thoroughly cleaned. We take pride in our work and strive to maintain our reputation as the most trusted cleaning service in the greater vancovuer area.
          </p>
          <Link className="quote-button2" href={"/about"}  >More About Us</Link>
        </div>


      </section>

      {/* <section className="complete-services">
        <div className="content complete-services">
          <span className="topper">Our Services</span>
          <h2>Our Complete List Of <span className="color">Services</span></h2>
          <p>
            Our services span across comprehensive house cleaning, meticulous dusting, thorough floor cleaning, expert window cleaning, and specialized deep cleaning services in Greater Vancouver.
          </p>
          <ul className="card-group">
            {completeServices.map((x, i) => {
              return (
                <CompleteServiceCard key={i} title={x.type} description={x.description} />
              )
            })}
          </ul>
        </div>

      </section> */}

      <section className="testimonials">
        <div className="testimonial-container">
          <div className="content ">
            <span className="topper">Testimonials</span>
            <h2>Trusted by Hundreds</h2>
            <p>We believe that every interaction is an opportunity to showcase our values of honesty, reliability, and excellence. Our team listens to your needs, tailors our services to match your requirements, and follows through with a prompt and efficient cleaning. Trust DGS Cleaning to experience the difference of a clean home, enhanced by our commitment to unparalleled customer service.</p>
          </div>
          <div className="sandbox">
            <section className="sandbox__carousel">
              <EmblaCarousel />
            </section>
          </div>
        </div>
      </section>

    </>
  )
}