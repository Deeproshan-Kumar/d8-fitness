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