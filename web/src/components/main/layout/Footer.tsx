import { ChevronsRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4 gap-20">
          <div>
            <Link to="/">
              <img src="/images/logo.png" alt="D8 Fitness" height={72} width={72} className="h-18 w-18" />
            </Link>
            <ul className="text-sm mt-4 space-y-2">
              <li>
                <Link to="tel:911234567890" className="link"><Phone size={16} strokeWidth={2} className="text-primary" /><h2>+91-1234567890</h2></Link>
              </li>
              <li>
                <Link to="mailto:contact@d8fitness.com" className="link"><Mail size={16} strokeWidth={2} className="text-primary" />contact@d8fitness.com</Link>
              </li>
              <li>
                <Link to="https://maps.app.goo.gl/ezZPq4mQu8gexQpG6" target="_blank" rel="noopener noreferrer" className="link">
                  <MapPin size={16} strokeWidth={2} className="text-primary" />Lucknow, India</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about/services" className="link"><ChevronsRight size={16} />Services</Link>
              </li>
              <li>
                <Link to="/about/membership" className="link"><ChevronsRight size={16} />Membership</Link>
              </li>
              <li>
                <Link to="/about/trainers" className="link"><ChevronsRight size={16} />Trainers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/testimonials" className="link"><ChevronsRight size={16} />Testimonials</Link>
              </li>
              <li>
                <Link to="/faqs" className="link"><ChevronsRight size={16} />FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="link"><ChevronsRight size={16} />Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>D8 Fitness</h4>
            <p className="mt-4">At D8 Fitness, we believe fitness is more than just a workout—it's a lifestyle. Our mission is to help you build strength, improve your health, and achieve lasting results in a motivating and supportive environment.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;