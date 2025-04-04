import React from "react";
import { Features, Intro, Pricing, Process, Review, Testimonial } from "../components";

const Home = (): React.ReactNode => {
  return (
    <div className="space-y-12 pb-10">
      <Intro />
      <section id="features">
        <Features />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="pricing">
        <Pricing />
      </section>

    </div>
  );
};

export default Home;
