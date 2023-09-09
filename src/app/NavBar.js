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

    if (this.scrollY > 0) {
      topBarLi.forEach((li) => li.classList.add("top-bar-scrolled"));
      topBar.classList.add("remove-border");
      mobileNavMenu.style.top = "65px";
      logo.classList.add("scale-logo");
    } else {
      topBarLi.forEach((li) => li.classList.remove("top-bar-scrolled"));
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
        <Link className="logo" href="/"><Logo></Logo></Link>
        <div className="stacking-bars">

          <ul className="top-bar ">
            <li className="mobile-show phone-number">+1(778) 558-6341</li>
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
                  <Link target="_blank" href="https://www.instagram.com/dgs_cleaningservices/"><Instagram /></Link>
                  <Link target="_blank" href="https://www.facebook.com/p/DGS-Cleaning-Services-100087457822323/"><Facebook /></Link>
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
            <li><Link onClick={handleHamburger} href="/about">About</Link></li>
            <li><Link onClick={handleHamburger} href="/services">Services</Link></li>
            <li><Link onClick={handleHamburger} href="/faqs">FAQs</Link></li>
            <li><Link onClick={handleHamburger} href="/contact">Contact</Link></li>
            <li>
              <Link target="_blank" href="https://www.instagram.com/dgs_cleaningservices/"><Instagram /></Link>
              <Link target="_blank" href="https://www.facebook.com/p/DGS-Cleaning-Services-100087457822323/"><Facebook /></Link>
            </li>

          </ul>
        </div>
      </nav>

    </>


  )
}