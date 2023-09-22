
'use client'
import PageHeader from '@/components/PageHeader';
import ServicePageNode from '@/components/ServicePageNode';
import { useRouter } from 'next/navigation';


export default function Page({ params }) {
  const router = useRouter();
  const data = router.query;
  const header = params.slug.replace(/([A-Z])/g, ' $1').trim()

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
      <PageHeader title={header} />

      <div className="service-page-container" style={{ width: "fit-content", margin: "0 auto ", paddingTop: "4em" }}>
        <div className="title">
          <span className='topper'>DETAILS</span>
          <h2>{"Whats Included"}</h2>
        </div>
        {services.map((service, i) => {
          return (
            <ServicePageNode key={i} order={i} photo={service.photo} room={service.title} list={service.list} />
          )
        })}
      </div>
    </>
  )
}