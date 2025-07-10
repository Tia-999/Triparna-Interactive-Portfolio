import React from 'react';
import TitleHeader from '../components/TitleHeader';
import GlowCard from '../components/GlowCard';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What people say about me?" sub="Review and Recommendation" />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-5 space-y-5">
          {testimonials.map(({ imgPath, name, mentions, review }, index) => (
            <GlowCard key={index} card={review}>
              <div className="flex items-center gap-4">
                <img
                  src={imgPath}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
              <p className="mt-4 text-base text-white-800">{review}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
