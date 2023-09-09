import PageHeader from "../../components/PageHeader";
import ServicePageNode from "../../components/ServicePageNode";

export default async function Page() {

  const services = [
    {
      photo: "/bedroom.jpg",
      title: "Bedrooms",
      list: ["Sweep floors", "Make Beds", "Mirrors", "Empty Trash", "Mop Floors", "Dust Furniture", "Vacuum Floors", "Baseboards", "Ceiling Fans"]
    },
    {
      photo: "/kitchen.jpg",
      title: "Kitchen",
      list: ["Stovetop", "In/Outside Appliances", "Backsplash", "Sink", "Outside of Stove Hood", "Sweep/Mop Floors", "Polish Metal Surfaces", "Shelves", "Baseboards", "Ceiling Fans", "Counter Tops"]
    },
    {
      photo: "/officeSpace.jpg",
      title: "Office Space",
      list: ["Glass Surfaces", "Mirrors", "Shelves", "Sweep/Mop Floors", "Dusting of Furniture", "Vacuum Floors/Rugs", "Baseboards", "Ceiling Fans"]
    },
    {
      photo: "/bathroom.jpg",
      title: "Bathrooms",
      list: ["Shower", "Tub", "Polish Faucets", "Mirrors", "Toilets", "Counters", "Glass Surfaces", "Shelves", "Sink", "Baseboards", "Sweep/Mop Floors"]
    },
    {
      photo: "/livingroom.jpg",
      title: "Living/Dining Room",
      list: ["Glass Surfaces", "Mirrors", "Shelves", "Sweep/Mop Floors", "Dusting of Furniture", "Vacuum Floors/Rugs", "Baseboards", "Ceiling Fans"]
    },
    {
      photo: "/laundry.jpg",
      title: "Laundry Room",
      list: ["Outside of Appliances", "Glass Surfaces", "Sinks", "Sweep/Mop Floors", "Mirrors", "Vacuum Rugs", "Baseboards", "Dusting of Furniture"]
    },

  ]

  return (
    <>
      <PageHeader title={"Services"} />
      <div className="service-page-container">
        {services.map((service, i) => {
          return (
            <ServicePageNode key={i} photo={service.photo} room={service.title} list={service.list} />
          )
        })}
      </div>
    </>
  )
}