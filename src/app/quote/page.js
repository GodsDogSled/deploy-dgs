"use client"
import PageHeader from "../../components/PageHeader";
import { useFormik, Field } from "formik";
import * as Yup from "yup"
import { useState } from "react";
import emailjs from '@emailjs/browser';



export default function QuotePage() {

  const [messageSent, setMessageSent] = useState(false);

  const numberRegex = /^\d+$/;

  //Formik Logics
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      service: "",
      size: "",
      bedrooms: "",
      bathrooms: "",
      pets: "",
      extras: []
    },




    // Validate Form
    validationSchema: Yup.object({
      size: Yup.string().max(6, 'Number must be 6 characters or less').matches(numberRegex, "Must be a number"),
      name: Yup.string().max(25, 'Name must be less than 25 characters'),
      email: Yup.string().email("Invalid email adress").max(35, 'Email must be less than 35 charaters long'),
    }),

    //Submit Form
    onSubmit: (values) => {

      console.log(values);


      const serviceId = 'service_sa5f64z';
      const templateId = 'quote_form';
      const publicKey = 'AKeXt1pYcFpqNQFIC';

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        service_type: values.service,
        size: values.size,
        number_bedrooms: values.bedrooms,
        number_bathrooms: values.bathrooms,
        pets: values.pets,
        extras: values.extras
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
          alert(error);
        });

    }

  })

  //Form dropdown menu options
  const serviceTypes = ["Air Bnb", "Move In/Out", "Deep Cleaning", "Post Construction", "Office Space"];
  const spaceOptions = ["0-599", "1500-1799", "1800-3000"];
  const bedrooms = [1, 2, 3, 4, 5, "6+"];
  const bathrooms = [1, 2, 3, 4, 5, "6+"];


  return (
    <>
      <PageHeader title={"Estimate"} />
      <section className="quote-page">
        <span className="topper">Free Estimate</span>
        <h2>Details</h2>

        <form onSubmit={formik.handleSubmit} className="contact-form" method="post">
          {messageSent ?
            <div className="message-sent">
              <p >Thank you for reaching out.<br /> Will will be in touch with in 24hrs with your estimate.</p>
              <button className="contact-button" onClick={() => { setMessageSent(false) }}></button>
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
              <label className="dropdown" >
                Type of Service
                <select as="select" name="service" value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                  <option className="greyed-out" value="" disabled={true}>Select Service Type</option>
                  {serviceTypes.map((option, i) => {
                    return (
                      <option value={option} key={i}>{option}</option>
                    )
                  })}
                </select>
              </label>
              <label className={`dropdown ${formik.touched.size && formik.errors.size ? "red-error" : ""}`}>
                {formik.touched.size && formik.errors.size ? formik.errors.size : "Size of Space (sqr feet)"}
                <input
                  id="size"
                  placeholder="Size of Space"
                  required
                  value={formik.values.size}
                  onChange={formik.handleChange}
                  className="quote-dropdown"
                  onBlur={formik.handleBlur}
                  type="text"
                >
                </input>
              </label>

              <label className="dropdown" >
                Number of Bedrooms
                <select as="select" name="bedrooms" value={formik.values.bedrooms} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                  <option className="greyed-out" value="" disabled={true}>Select Number of Bedrooms</option>
                  {bedrooms.map((option, i) => {
                    return (
                      <option value={option} key={i}>{option}</option>
                    )
                  })}
                </select>
              </label>

              <label className="dropdown" >
                Number of Bathrooms
                <select as="select" name="bathrooms" value={formik.values.bathrooms} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                  <option className="greyed-out" value="" disabled={true}>Select Number of Bathrooms</option>
                  {bathrooms.map((option, i) => {
                    return (
                      <option value={option} key={i}>{option}</option>
                    )
                  })}
                </select>
              </label>

              <label>
                Are there any pets living in the space?
                <div className="radio-group">
                  <input type="radio" id="yes" name="pets" value={formik.values.pets = "yes"} />
                  <label htmlFor="yes">Yes</label>
                  <input type="radio" id="no" name="pets" value={formik.values.pets = "no"} />
                  <label htmlFor="no">No</label>
                </div>
              </label>

              <label >
                Select any Extras
                <div className="checkboxes">
                  <label>
                    <input
                      name="extras"
                      type="checkbox"
                      onChange={formik.handleChange}
                      value="Inisde Fridge"
                    />
                    Inisde Fridge
                  </label><br />
                  <label>
                    <input
                      name="extras"
                      type="checkbox"
                      onChange={formik.handleChange}
                      value="Inside Oven"
                    />
                    Inside Oven
                  </label><br />
                  <label>
                    <input
                      name="extras"
                      type="checkbox"
                      onChange={formik.handleChange}
                      value="Inside Cabinets"
                    />
                    Inside Cabinets
                  </label><br />

                </div>
              </label>

              <button type="submit" className="contact-button" >
                Submit
              </button>
            </>
          }
        </form>


      </section>
    </>

  )
}