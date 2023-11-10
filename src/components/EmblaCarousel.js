
'use client'

import TestimonialCard from "./TestimonialCard";
import Autoplay from 'embla-carousel-autoplay'


import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  DotButton,
  PrevButton,
  NextButton
} from './ArrowsDotts'


const EmblaCarousel = (props) => {

  const testimonials = [
    {
      testimonial: "Daniela has helped me out with cleaning so many times ! Her and her staff are amazing , meticulous and so helpful .  She makes herself available on an urgent basis which is very much appreciated! They are excellent value and I highly recommend DGS for any of your cleaning needs !",
      name: "Carolyn McLean"
    },
    {
      testimonial: "I love working with DGS Cleaning Services! Very professional and they do a fantastic job.",
      name: "Svetlana Kayumova "
    },
    {
      testimonial: "I was very pleased with the work, the communication was excellent and Daniela was very accomodating.  I will recomend DGS to my friends",
      name: "Laura Roman"
    },
    {
      testimonial: "DGS was prompt and efficient. Daniela was very pleasant to deal with and was an excellent communicator. She and her team arrived right on time and were clear with the expectations to complete the job. She helped me out immensely and did a very detailed, thorough job. I would 10/10 recommend to anyone moving forward.",
      name: "Kristy Schiewe "
    },
    {
      testimonial: "I'd highly recommend DGS Cleaning Services. They did an amazing job cleaning my apartment. They're quick to respond and very professional 🙂",
      name: "Elaine Earley"
    },
    {
      testimonial: "Just wanted to say I was very impressed with DGS. Booking  was smooth and easy, they were on time and the cleaning itself was a really great job! Reasonably priced as well! Will def use them again!",
      name: "Jennifer Li "
    },
  ]
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <ul className="embla__container">
            {testimonials.map((x, i) => {
              return (
                <TestimonialCard key={i} testimonial={x.testimonial} name={x.name} />
              )
            })}
          </ul>
        </div>

        <div className="embla__buttons mobile-hide-buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel





