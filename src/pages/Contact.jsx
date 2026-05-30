import "bootstrap/dist/css/bootstrap.min.css";
import { Camera, MessageCircle, Music2, Phone, Sparkles } from "lucide-react";
import NavBar from "../components/NavBar";
import SetFireImage from "../Photos/SetFire.png";
import "../styles/contact.css";

const contactItems = [
  {
    name: "Instagram",
    value: "@set_fire961",
    href: "https://www.instagram.com/set_fire961/",
    icon: Camera,
  },
  {
    name: "Phone Number",
    value: "+961 81 148 425",
    href: "tel:+96181148425",
    icon: Phone,
  },
  {
    name: "TikTok",
    value: "@set_fire961",
    href: "https://www.tiktok.com/@set_fire961",
    icon: Music2,
  },
  {
    name: "Facebook",
    value: "Set Fire",
    href: "https://facebook.com/setfire.lb",
    icon: MessageCircle,
  },
  {
    name: "Threads",
    value: "@setfire.lb",
    href: "https://www.threads.com/@setfire.lb",
    icon: Sparkles,
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <NavBar />

      <main className="container contact-content">
        <div className="contact-sticker-wrap">
          <img src={SetFireImage} alt="Set Fire" className="contact-sticker" />
        </div>

        <section className="contact-hero text-center">
          <p className="contact-eyebrow">Stay connected</p>
          <h1>Contact Set Fire</h1>
          <p className="contact-subtitle">
            Find us on your favorite platforms and order your next meal anytime.
          </p>
        </section>

        <section className="contact-links-shell">
          <div className="contact-links-intro">
            <p>Pick your favorite way to order now.</p>
          </div>

          <div className="contact-links-list">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                className="contact-link-row"
                href={item.href}
                target={item.href.startsWith("tel:") ? undefined : "_blank"}
                rel={item.href.startsWith("tel:") ? undefined : "noreferrer"}
              >
                <span className="contact-icon-wrap">
                  <Icon size={22} strokeWidth={2.1} />
                </span>
                <span className="contact-link-text">
                  <span className="contact-label">{item.name}</span>
                  <span className="contact-value">{item.value}</span>
                </span>
              </a>
            );
          })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
