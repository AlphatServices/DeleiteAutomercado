import AboutHeader from "@/app/components/about/AboutHeader";
import AboutSection from "@/app/components/about/AboutSection";
import ChefSection from "@/app/components/about/ChefSection";
import TestimonialsSection from "@/app/components/about/TestimonialsSection";
import GallerySection from "@/app/components/about/GallerySection";
import styles from "@/app/components/about/about.module.css";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "About Us | Our Restaurant",
  description:
    "Learn about our story, mission, and the team behind our restaurant.",
};

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <main className={styles.aboutPage}>
      <AboutHeader title="About Us" />

      <AboutSection
        title="Our Story"
        reverse={false}
        image="/about/card.svg"
        imageAlt="Our Story"
      >
        <p>
          When Lorem Ipsum is simply dummy text. Neque porro quisquam est qui
          dolorem ipsum quia dolor sit amet. Duis aute irure Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>If you duis auntesit. Sed ullam aut.</p>
      </AboutSection>

      <AboutSection
        title="Our Mission"
        reverse={true}
        image="/about/card.svg"
        imageAlt="Our Mission"
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AboutSection>

      <ChefSection
        title="Our Chefs"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate fames ut."
        chefs={[
          {
            id: 1,
            name: "Andrés Fernández",
            role: "Head Chef",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            image: "/about/profile.svg",
          },
          {
            id: 2,
            name: "Andrés Fernández",
            role: "Head Chef",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            image: "/about/profile.svg",
          },
          {
            id: 3,
            name: "Andrés Fernández",
            role: "Head Chef",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            image: "/about/profile.svg",
          },
          {
            id: 4,
            name: "Andrés Fernández",
            role: "Head Chef",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            image: "/about/profile.svg",
          },
        ]}
      />

      <TestimonialsSection
        title="Testimonials"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate fames ut."
        testimonials={[
          {
            id: 1,
            name: "Tamas Bunce",
            role: "CO-FOUNDER",
            rating: 4,
            text: "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed.",
            image: "/about/profile.svg",
          },
          {
            id: 2,
            name: "Santiago Valentín",
            role: "MANAGER",
            rating: 5,
            text: "The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening.",
            image: "/about/profile.svg",
          },
          {
            id: 3,
            name: "Harsha Buksh",
            role: "DESIGNER",
            rating: 4,
            text: "Requiring the individual to remember what not to think of infers that they have already thought it.",
            image: "/about/profile.svg",
          },
        ]}
      />

      <GallerySection
        images={[
          { id: 1, src: "/about/card.svg", alt: "Gallery image" },
          { id: 2, src: "/about/card.svg", alt: "Gallery image" },
          { id: 3, src: "/about/card.svg", alt: "Gallery image" },
          { id: 4, src: "/about/card.svg", alt: "Gallery image" },
        ]}
      />
    </main>
    <Footer />
    </>
  );
}
