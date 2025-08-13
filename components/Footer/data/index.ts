import { FooterLinksType } from "../types";

export const footerLinks: FooterLinksType = [
  {
    title: "Quick Links",
    links: [
      { id: 1, name: "Hero", href: "#hero" },
      { id: 2, name: "Services", href: "#services" },
      { id: 3, name: "About", href: "#about" },
      { id: 4, name: "Projects", href: "#projects" },
      { id: 5, name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "More Links",
    links: [
      { id: 1, name: "Testimonials", href: "#testimonials" },
      { id: 2, name: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Contact Me",
    links: [
      {
        id: 1,
        label: "Phone",
        value: "+971 544 772 940",
        href: "tel:+971544772940",
      },
      {
        id: 2,
        label: "Email",
        value: "sanjeedofficial22@gmail.com",
        href: "mailto:sanjeedofficial22@gmail.com",
      },
      {
        id: 3,
        label: "Location",
        value: "Al Mutheena, Deira, Dubai, UAE",
        href: "https://goo.gl/maps/your-location-link",
      },
    ],
  },
];
