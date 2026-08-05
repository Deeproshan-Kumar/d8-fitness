// Nav Links
export const navLinks: NavLinkProps[] = [
    {
        id: "home",
        title: "Home",
        href: "/",
    },
    {
        id: "about",
        title: "About",
        href: "/about",
        children: [
            {
                id: "services",
                title: "Services",
                href: "/about/services",
            },
            {
                id: "membership",
                title: "Membership",
                href: "/about/membership",
            },
            {
                id: "trainers",
                title: "Trainers",
                href: "/about/trainers",
            },
        ]
    },
    {
        id: "testimonials",
        title: "Testimonials",
        href: "/testimonials",
    },
    {
        id: "faq",
        title: "FAQs",
        href: "/faqs",
    },
    {
        id: "contact",
        title: "Contact",
        href: "/contact",
    },
];

// FAQs 
export const faqs: FAQProps[] = [
    {
        question: "Do I need prior gym experience to join?",
        answer:
            "Not at all! Whether you're a beginner or an experienced athlete, our trainers will create a workout plan that matches your fitness level and goals.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
            "Yes! We offer a free trial session so you can explore our facilities, meet our trainers, and experience our training environment before joining.",
    },
    {
        question: "What are your membership plans?",
        answer:
            "We offer flexible monthly, quarterly, and yearly membership plans. Visit our Membership page or contact us for the latest pricing and offers.",
    },
    {
        question: "Are certified trainers available?",
        answer:
            "Yes. Our certified fitness professionals are available to guide you with workouts, proper form, and personalized training programs.",
    },
    {
        question: "What are your gym timings?",
        answer:
            "Our gym is open from 6:00 AM to 10:00 PM, Monday through Saturday. Please check our contact page for holiday hours.",
    },
    {
        question: "Do you provide personal training?",
        answer:
            "Absolutely! We offer one-on-one personal training sessions tailored to your fitness goals, whether it's weight loss, muscle gain, or strength training.",
    },
    {
        question: "What should I bring for my first workout?",
        answer:
            "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We'll take care of the rest.",
    },
    {
        question: "Can I freeze or cancel my membership?",
        answer:
            "Yes. Memberships can be frozen or canceled according to our membership policy. Speak with our team for complete details.",
    },
];