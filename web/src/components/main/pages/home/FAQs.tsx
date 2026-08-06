import { useState } from "react";
import { faqs } from "../../../../constants/main";
import { Minus, Plus } from "lucide-react";

const FAQs: React.FC = () => {
    const [active, setActive] = useState<number | null>(0);
    return (
        <section className="section faqs" id="faqs">
            <div className="container">
                <div className="text-center mb-4">
                    <h2>FAQs</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        {faqs?.length > 0 && <ul className="space-y-6">
                            {faqs.map((faq, index) => (
                                <li key={index} className="faq-item">
                                    <button onClick={() => setActive(active === index ? null : index)} className={`faq-header ${active === index ? 'bg-primary-active' : 'bg-primary-soft'}`}>
                                        <span>{faq.question}</span>
                                        <span className="icon">{active === index ? <Minus size={16} /> : <Plus size={16} />}</span>
                                    </button>
                                    <div className={`grid transition-all duration-300 ease-in-out ${active === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="faq-body">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>}
                    </div>
                    <div>
                        <img src="/assets/images/faq.webp" alt="faq" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs;