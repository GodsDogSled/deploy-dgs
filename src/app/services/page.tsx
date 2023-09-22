import PageHeader from "../../components/PageHeader";
import ServicePageNode from "../../components/ServicePageNode";
import ServiceCard from "@/components/ServiceCard";

export default async function Page() {



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
      Service: "Short-term Rentals",
      pic: "/bnb.jpeg"
    },
  ]

  return (
    <>
      <PageHeader title={"Services"} />
      <section style={{ textAlign: "center", margin: "0 auto", padding: " 4em 0 4em 0em", width: "50%" }}>
        <span className="topper">CLEANING SOLUTIONS</span>
        <h2>What We Offer</h2>
        <p>Experience the transformative difference a professionally cleaning can make to your home and wellbeing.
          Our Eco friendly cleaing solutions not only assure a thorough clean but also safeguard your family and the environment.</p>
      </section>
      {/* <div className="service-page-container">
        {services.map((service, i) => {
          return (
            <ServicePageNode key={i} order={i} photo={service.photo} room={service.title} list={service.list} />
          )
        })}
      </div> */}
      <section className="services section" style={{ marginBottom: "6em" }}>
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


    </>
  )
}