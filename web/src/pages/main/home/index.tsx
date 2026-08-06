import { CTA, FAQs, Hero, Services, Trainers, Memberships } from "../../../components/main/pages/home";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <section className="section" id="about">
        <div className="container">
          <h2>About us</h2>
        </div>
      </section>
      {/* Services Section */}
      <Services />
      <Memberships />
      <Trainers />
      <section className="section" id="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
        </div>
      </section>
      {/* FAQs Section */}
      <FAQs />
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default HomePage;