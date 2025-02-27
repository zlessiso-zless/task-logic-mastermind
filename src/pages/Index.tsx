
import Header from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";
import BenefitsSection from "../components/BenefitsSection";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="absolute top-0 right-0 w-full h-[30vh] bg-gradient-to-bl from-glam-light-gray/40 to-transparent -z-10"></div>
      <Header />
      <main className="relative">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-glam-light-gray/30 blur-3xl -z-10"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-glam-light-gray/40 blur-3xl -z-10"></div>
        <ProgressTracker />
        <BenefitsSection />
        <ExclusiveOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
