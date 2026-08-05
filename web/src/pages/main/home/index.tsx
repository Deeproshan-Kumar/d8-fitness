import { CTA, FAQs, Hero } from "../../../components/main/pages";

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
      <section className="section" id="services">
        <div className="container">
          <h2>Services</h2>
        </div>
      </section>
      <section className="section" id="memberships">
        <div className="container">
          <h2>Membership Plans</h2>
        </div>
      </section>
      <section className="section" id="trainers">
        <div className="container">
          <h2>Trainers</h2>
        </div>
      </section>
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