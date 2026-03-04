import Hero from '../components/sections/Hero';
import Understand from '../components/sections/Understand';
import Conditions from '../components/sections/Conditions';
import HowItWorks from '../components/sections/HowItWorks';
import Care from '../components/sections/Care';
import BuiltForYou from '../components/sections/BuiltForYou';
import Stories from '../components/sections/Stories';
import Trusted from '../components/sections/Trusted';
import FinalCTA from '../components/sections/FinalCTA';

function HomePage() {
  return (
    <>
      <div className="accent-bar"></div>
      <Hero />
      <Understand />
      <Conditions />
      <HowItWorks />
      <Care />
      <BuiltForYou />
      <Stories />
      <Trusted />
      <FinalCTA />
    </>
  );
}

export default HomePage;
