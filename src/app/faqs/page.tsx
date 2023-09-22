import PageHeader from "../../components/PageHeader";
import Accordion from "../../components/Accordian";
export default async function Page() {

  const faqs = [
    {
      question: "Do I need to provide supplies or equipment for my scheduled cleaning service?",
      answer: "No, you do not need to worry about cleaning supplies and equipment. Our cleaners will bring all that is required to complete the job correctly. Also, the rate quoted typically includes cleaning supplies and equipment."
    },
    {
      question: "What method of payment is accepted, and what are your payment terms?",
      answer: "We accept all major credit cards, checks, cash, and e-transfers, but payment terms vary depending on the service. For additional information on our payment terms, you can contact our customer service team at 778-653-7737, and we will gladly answer any questions or concerns you may have."
    },
    {
      question: "Do I need to be at home for the cleaning?",
      answer: "It’s completely up to you. If you’re not going to be home, make sure you let us know how to access your house."
    },
    {
      question: "How do I prepare for my cleaning appointment?",
      answer: "One of the best things you can do is make sure there is as little clutter as possible. The cleaners will need to have access to surfaces to clean and if they are covered up by too much clutter they may be inaccessible. Make sure the floors are clear of items and debris. Communicate with your cleaner when they arrive (if you are home) a plan to make sure the cleaner has space to clean. Children, pets and other adults in the way can really hinder a job from being done in the best way possible. It can also be hazardous. Vacuum cords, cleaning products and supplies will be in the area with the cleaner and to mitigate accidents from happening it is best to give them space. If you have any questions about how to better prepare, feel free to reach out and ask any questions at all!"
    },
    {
      question: "Are you pet friendly?",
      answer: "We are! However, if your pet is unattended when we are entering your home please have them put away in a secure location for the duration of the cleaning. While we love animals, sometimes they don't feel the same way. An agiatated pet can quickly become a hazard to our cleaners and prevent them from providing service to the DGS standard "
    },
    {
      question: "What is your cancellation/rescheduling policy?",
      answer: "Service reliability is extremely important because we reserve a time, especially for you, we request that you give us a minimum of 24 Hrs. advance notice if you need to cancel or reschedule for any reason to avoid incurring a $100 cancellation fee.        *Please note that if service is canceled with less than 24 hours notice, OR we are unable to access the home upon arrival, OR we are turned away at the door, a cancelation/lockout fee of $150 will be charged to the credit card on file.*"
    },
    {
      question: "How many cleaners can I expect?",
      answer: "We send 1 or 2 cleaners, depending on availability and your needs. More may be available upon reuqest."
    },
    {
      question: "What do you not clean?/ What do cleaners not do?",
      answer: "Our professional housecleaning services are designed to keep your home comfortable and clean. We customize services to accommodate your preferences so you never have to worry about paying for a service you don’t need or want. We typically do not help with the following:<ul><li className='faq-li'>Clean inside of fireplace</li><li className='faq-li'>Do Laundry</li><li className='faq-li'>Clean Carpets</li><li className='faq-li'>Mold: (Some amount of pink/orange mildew, or even darker mold, is common in some homes. Don't worry- the cleaners can clean small amounts of mold. Large amounts of mold in shower areas, on walls, etc. can affect air quality and pose a health safety issue. The cleaners aren't able to clean in rooms that are heavily affected by mold, or in homes with heavy mold infestations.)</li><li className='faq-li'>Weight: (We have a 30 lb. weight limit for safety reasons. Moving smaller items like dining table chairs, small ottomans, etc. to clean under is perfectly ok. If you would like any heavier furniture or appliances cleaned under, you're welcome to move it and the cleaners will be happy to clean under it upon request.)</li><li className='faq-li'>Extensive grease or fire damage</li><li className='faq-li'>Bodily Fluids</li><li className='faq-li'>Pet messes</li><li className='faq-li'>Bug Infestations</li><li className='faq-li'>Heights: (There is a limit to a 2 foot or shorter step stool. Safety is of the utmost importance to us. Please keep in mind that in most cases, the tops of standard kitchen cupboards is approximately the maximum limit of height. Some lighting fixtures may also be out of reach.)</li></ul>"
    },
  ]


  return (
    <>
      <PageHeader title={"FAQs"} />
      <section className="faqs" style={{ margin: "4em auto", maxWidth: "1200px" }}>

        {faqs.map((faq, i) => {

          return (
            <Accordion key={i} title={faq.question} content={faq.answer} />
          )
        })}
      </section>
    </>
  )
}