import { Button } from "../../../components/main/ui";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="w-full md:1-1/2">
              <h1>Welcome to <span className="gradient-text">D8.Fitness</span></h1>
              <h2>The best gym in <strong>Lucknow</strong></h2>
              <p>
                At D8.Fitness, we're dedicated to helping you achieve your health and fitness goals in a supportive and motivating environment. Whether you're a seasoned athlete or just starting your fitness journey, we have something for everyone.
              </p>
              <Button>Join Now</Button>
            </div>
            <div className="w-full md:1-1/2">Right</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>About us</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Services</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Membership Plans</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Trainers</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Testimonials</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>FAQs</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>CTA</h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;