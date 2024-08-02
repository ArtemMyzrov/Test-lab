import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';
import { Header } from './components/header/Header';
import { HowItWorks } from './components/works/HowItWorks';
import { Testimonials } from './components/testimonials/Testimonials';
import { ThirdBlock } from './components/third/ThirdBlock';

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <ThirdBlock />
      <Testimonials />
      <Form />
      <Footer />
    </>
  )
}

export default App
