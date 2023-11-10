"use client"

import { useRouter } from 'next/router'
import Instagram from "../components/Instagram"
import Facebook from "../components/Facebook"
import Link from "next/link"
import Image from "next/image"
import TopNavBarLink from "../components/NavTopBarLink";
import Logo from "../components/Logo";


export default function NavBar() {


  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBar);
  }



  function changeNavBar() {
    const topBarLi = document.querySelectorAll(".top-bar > li");
    const topBar = document.querySelector(".top-bar");
    const mobileNavMenu = document.querySelector(".mobile-nav");
    const logo = document.querySelector("svg");
    const whatsapp = document.querySelector(".whatsapp-logo")

    if (this.scrollY > 0) {
      topBarLi.forEach((li) => li.classList.add("top-bar-scrolled"));
      whatsapp.classList.add("top-bar-scrolled");
      topBar.classList.add("remove-border");
      mobileNavMenu.style.top = "65px";
      logo.classList.add("scale-logo");
    } else {
      topBarLi.forEach((li) => li.classList.remove("top-bar-scrolled"));
      whatsapp.classList.remove("top-bar-scrolled");
      topBar.classList.remove("remove-border");
      mobileNavMenu.style.top = "110px";

      logo.classList.remove("scale-logo");

    }
  }

  //Open and close the hamburger menu
  function handleHamburger() {
    const ham = document.getElementById("nav-icon1");
    const nav = document.querySelector(".mobile-nav");
    const bars = document.querySelector("header");
    document.querySelector(".phone-number").classList.toggle('top-bar-color');
    bars.classList.toggle('toggled-color')
    ham.classList.toggle('open');
    nav.classList.toggle('nav-open')
  }

  return (
    <>
      <header>
        <Link aria-label="Logo Home Link" className="logo" href="/"><Logo></Logo></Link>
        <div className="stacking-bars">

          <ul className="top-bar ">
            <li className="mobile-show phone-number"><a href="tel:+1778-558-6341">+1(778) 558-6341</a></li>
            <li>
              <Link className="mobile-show whatsapp-logo" style={{ alignSelf: "center", paddingLeft: "3em" }} aria-label="dgs whatsapp link" target="_blank" href="https://wa.me/17785586341">
                <svg style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </Link>
            </li>


            <TopNavBarLink
              img={<svg className='mobile-hide' height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }}><path d="m0 15.521c0-8.922 6.984-15.521 16-15.521s16 6.599 16 15.521c0 8.917-6.984 15.521-16 15.521-1.615 0-3.172-.214-4.625-.615-.286-.078-.589-.052-.854.068l-3.188 1.401c-.833.37-1.776-.224-1.802-1.135l-.094-2.854c-.01-.349-.167-.672-.422-.906-3.245-2.927-5.073-7.109-5.016-11.479zm11.094-2.922-4.693 7.469c-.469.703.427 1.521 1.094 1l5.052-3.828c.349-.266.802-.266 1.161 0l3.729 2.802c1.125.839 2.724.531 3.469-.641l4.693-7.469c.469-.703-.427-1.505-1.094-1l-5.052 3.828c-.333.266-.802.266-1.146 0l-3.734-2.802c-1.125-.849-2.729-.552-3.479.641z" /></svg>}
              header={"Messanger"}
              info={"Click to send us a message"}
              handleLink={"https://m.me/104589139140345"}
            />
            {/* <TopNavBarLink
              img={<svg className='mobile-hide' style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>}
              header={"Whatsapp"}
              info={"Reach out any time"}
              handleLink={"mailto: dgscservices@gmail.com"}
            /> */}
            <TopNavBarLink
              img={"https://d33wubrfki0l68.cloudfront.net/c1cfbe976d616f7b9ef0e8624601e512b2e8d082/6692f/assets/images/phone-stroke.svg"}
              header={"Reach Out"}
              info={"+1 (778) 558-6341"}
            />
            <TopNavBarLink
              img={"https://d33wubrfki0l68.cloudfront.net/e6a6f6485c11e0a54e57b163cf955dadef981bde/c0825/assets/images/mail-stroke.svg"}
              header={"Send us a Message"}
              info={"dgscservices@gmail.com"}
              handleLink={"mailto: dgscservices@gmail.com"}
            />
            <TopNavBarLink
              img={"https://d33wubrfki0l68.cloudfront.net/031a45ce3d2104e44dfa82761a91b4c44a28f8d3/c2fbe/assets/images/pin-stroke.svg"}
              header={"Servicing"}
              info={"Greater Vancouver Area"}
            />



          </ul>

          <div className="bottom-bar">
            <div className="hamburger-icon mobile-show" onClick={handleHamburger}>
              <div id="nav-icon1" >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <nav className="mobile-hide">
              <ul className="nav-list ">
                <li><Link href="/">Home</Link></li>
                <li ><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/contact">Contact</Link></li>

              </ul>
              <div className="right-side">
                <Link href={"/quote"} className="quote quote-button" >Get a Quote</Link>
                <div className="socials">
                  <Link aria-label="dgs instagram link" target="_blank" href="https://www.instagram.com/dgs_cleaningservices/"><Instagram /></Link>
                  <Link aria-label="dgs facebook link" target="_blank" href="https://www.facebook.com/p/DGS-Cleaning-Services-100087457822323/"><Facebook /></Link>
                </div>
              </div>
            </nav>



            <button className="book-now">Book Now</button>
          </div>
        </div>
      </header>

      <nav className="mobile mobile-nav" >
        <div className="ul-wrapper">
          <ul className="nav-list">
            <li><Link onClick={handleHamburger} href="/">Home</Link></li>
            <li><Link onClick={handleHamburger} href="/contact">Contact</Link></li>
            <li><Link onClick={handleHamburger} href="/about">About</Link></li>
            <li><Link onClick={handleHamburger} href="/services">Services</Link></li>
            <li><Link onClick={handleHamburger} href="/quote">Get a Quote</Link></li>
            <li><Link onClick={handleHamburger} href="/faqs">FAQs</Link></li>

            <li>
              <Link aria-label="dgs instagram link" target="_blank" href="https://www.instagram.com/dgs_cleaningservices/"><Instagram /></Link>
              <Link aria-label="dgs facebook link" target="_blank" href="https://www.facebook.com/p/DGS-Cleaning-Services-100087457822323/"><Facebook /></Link>
              <Link aria-label="dgs whatsapp link" target="_blank" href="https://wa.me/17785586341">
                <svg style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </Link>
              <Link aria-label="dgs messanger link" target="_blank" href="https://m.me/104589139140345">
                <svg height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }}><path d="m0 15.521c0-8.922 6.984-15.521 16-15.521s16 6.599 16 15.521c0 8.917-6.984 15.521-16 15.521-1.615 0-3.172-.214-4.625-.615-.286-.078-.589-.052-.854.068l-3.188 1.401c-.833.37-1.776-.224-1.802-1.135l-.094-2.854c-.01-.349-.167-.672-.422-.906-3.245-2.927-5.073-7.109-5.016-11.479zm11.094-2.922-4.693 7.469c-.469.703.427 1.521 1.094 1l5.052-3.828c.349-.266.802-.266 1.161 0l3.729 2.802c1.125.839 2.724.531 3.469-.641l4.693-7.469c.469-.703-.427-1.505-1.094-1l-5.052 3.828c-.333.266-.802.266-1.146 0l-3.734-2.802c-1.125-.849-2.729-.552-3.479.641z" /></svg>
              </Link>

            </li>

          </ul>
        </div>
      </nav>

    </>


  )
}