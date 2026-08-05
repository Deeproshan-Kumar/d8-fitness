import { Link } from "react-router";
import { Button } from "../../ui"
import { Phone } from "lucide-react";

const CTA: React.FC = () => {
    return (
        <section className="cta relative" id="cta">
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover z-0" poster='/images/hero.jpg'>
                <source src="/videos/bg.mp4" />
            </video>
            <div className="container text-center relative z-1 py-10 space-y-2">
                <h3 className="text-body">Call Us Today</h3>
                <h1>+91-1234567890</h1>
                <p>Join The Best Experience In Your Fitness Journey At D8 Fitness</p>
                <Button className="mt-3">
                    <Link to="tel:911234567890">Call Now <Phone size={16} strokeWidth={2} className="inline-block ml-0.5" /></Link>
                </Button>
            </div>
        </section>
    )
}

export default CTA;