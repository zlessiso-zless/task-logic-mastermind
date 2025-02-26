
import Header from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";
import BenefitsSection from "../components/BenefitsSection";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <ProgressTracker />
        <BenefitsSection />
        <ExclusiveOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
