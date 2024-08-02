import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { FAQ } from './components/Faq';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ThirdBlock } from './components/ThirdBlock';

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <ThirdBlock />
      <Testimonials />
      {/* <FAQ /> */}
      <Form />
      <Footer />
    </>
  )
}

export default App
