const HomePage: React.FC = () => {
  return (
    <>
      <section className="hero relative" id="hero">
        <div className="h-screen absolute inset-0">
          <video src={'/video/hero-bg.mp4'} autoPlay loop muted className="w-full h-full object-cover"></video>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-canvas"></div>
        </div>
        <div className="container relative z-1">
          <h2 className="gradient-text">Hero</h2>
        </div>
      </section>
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
      <section className="section" id="faqs">
        <div className="container">
          <h2>FAQs</h2>
        </div>
      </section>
      <section className="section" id="cta">
        <div className="container">
          <h2>CTA</h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;