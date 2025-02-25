import 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import JoinPlatform from '../components/JoinPlatform';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Statistics />
      <JoinPlatform />
      <Footer />
    </>
  );
};

export default Home;
