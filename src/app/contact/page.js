"use client"
import PageHeader from "../../components/PageHeader";
import { useLoadScript, GoogleMap, InfoWindow, MarkerF, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { useFormik } from "formik";
import * as Yup from "yup"
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import emailjs from '@emailjs/browser';



export default function ContactPage() {

  const [messageSent, setMessageSent] = useState(false);

  //Router
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();



  const path = [ //google maps highlighted area polygon
    { lat: 49.35240428043805, lng: -123.17364566436771 },
    { lat: 49.29179474471887, lng: -122.9250359745285 },
    { lat: 49.302282948481555, lng: -122.74517886721836 },
    { lat: 49.212653635082724, lng: -122.75891177738337 },
    { lat: 49.13005088181783, lng: -122.45678775375244 },
    { lat: 49.01129308521319, lng: -122.49112002916503 },
    { lat: 49.025703089711776, lng: -122.87014834972025 },
    { lat: 49.121064016300295, lng: -123.09536807642695 },
    { lat: 49.125557652652404, lng: -123.19973819368128 },
    { lat: 49.22162389126516, lng: -123.20660464876381 },
    { lat: 49.26734687671688, lng: -123.27664249060555 },
    { lat: 49.28077191140164, lng: -123.24678387040758 },
    { lat: 49.28257846408502, lng: -123.15167300810364 },
  ];

  //Phone number regex
  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;



  //Handle Submit
  function handleSubmit(values) {
    setMessageSent(true);
    formik.values.message = '';
  }


  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },


    //Validate Form
    validationSchema: Yup.object({

      name: Yup.string().max(25, 'Name must be less than 25 characters'),
      email: Yup.string().email("Invalid email adress").max(35, 'Email must be less than 35 charaters long'),
      phone: Yup.string().matches(phoneRegExp, 'Phone Number must be 10 digits long and only contain numbers'),
      message: Yup.string().max(600, 'Message must be less than 600 characters'),

    }),

    //Submit Form
    onSubmit: (values) => {

      const serviceId = 'service_sa5f64z';
      const templateId = 'contact_form';
      const publicKey = 'AKeXt1pYcFpqNQFIC';

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'Daniella',
        from_phone: values.phone,
        message: values.message,
      };

      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setMessageSent(true);
          formik.values.message = '';
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }

  })

  const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;


  //--Load the google map api
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAxRbm42AMKJ2wBB1q-iGi-Vp3ipq1jTNg",
  });

  if (!isLoaded) return <div>Loading...</div>



  return (
    <>
      <PageHeader title={"Contact"} />
      <div className="contact-page">
        <section className="map-container" >


          <GoogleMap
            zoom={9}
            center={{ lat: 49.210859388486135, lng: -122.94293277359498 }}
            mapContainerClassName="map"
            options={{ streetViewControl: false, zoomControl: false, gestureHandling: "none" }}
          >
            <Polygon
              path={path}
            />
            <AnyReactComponent
              lat={49.210859388486135}
              lng={-122.94293277359498}
              text="Area of Service"
            />
          </GoogleMap>
        </section>

        <section className="contact-us">
          <span className="topper">CONTACT US</span>
          <h2>Get in Touch</h2>


          <form onSubmit={formik.handleSubmit} className="contact-form" method="post">
            {messageSent ?
              <div className="message-sent">
                <p >Thank you for reaching out {formik.values.name}.<br /> Will will be in touch with you soon</p>
                <button className="contact-button" onClick={() => { setMessageSent(false) }}>Send another message</button>
              </div>
              :
              <>
                <label className={`contact-label ${formik.touched.name && formik.errors.name ? "red-error" : ""}`}>
                  {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                  <input
                    id="name"
                    placeholder="Name"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="copntact-input"
                    onBlur={formik.handleBlur}
                    type="text"
                  />
                </label>

                <label className={`contact-label ${formik.touched.email && formik.errors.email ? "red-error" : ""}`}>
                  {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                  <input
                    onBlur={formik.handleBlur}
                    id="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="copntact-input"
                    type="email" />
                </label>

                <label className={`contact-label ${formik.touched.phone && formik.errors.phone ? "red-error" : ""}`}>
                  {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone Number"}
                  <input
                    id="phone"
                    placeholder="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="tel"
                    required
                    className="copntact-input" />
                </label>

                <label className={`contact-label ${formik.touched.message && formik.errors.message ? "red-error" : ""}`}>
                  {formik.touched.message && formik.errors.message ? formik.errors.message : "Your Message"}
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="copntact-input contact-textarea"
                    type="text" />
                </label>

                <button type="submit" className="contact-button" >
                  Submit
                </button>
              </>
            }
          </form>







        </section>
      </div>

    </>
  )
}