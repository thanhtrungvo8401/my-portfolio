import React from 'react';
import Achievement from './honor-and-awards';
import HomeBanner from './banner';
import Projects from './projects';
import Languages from './languages';
import Contact from './contact';

export default function Home() {
  return (
    <>
      <HomeBanner />

      <Projects />

      <Achievement />

      <Languages />

      <Contact />
    </>
  );
}
