import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "This is really good there’s just a few changes I think we can make to make it better",
      name: "Client USC",
      title: "Initial Feedback",
    },
    {
      quote: "The approach is good. Maybe not this army music.",
      name: "Cemar",
      title: "Initial Feedback",
    },
    {
      quote: "Thanks, on time",
      name: "Abdul Rahman",
      title: "Acknowledgement",
    },
    {
      quote: "Looks great to me lets see what the ✨ client thinks",
      name: "Abdul-Rahman",
      title: "Feedback",
    },
  ];
  return (
    <section id="testimonial" className="scroll-mt-28 md:scroll-mt-36 py-6">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </section>
  )
}

export default Testimonial