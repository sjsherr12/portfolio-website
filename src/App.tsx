import { useEffect } from "react";

import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { EssayPage } from "./components/EssayPage";
import { Essays } from "./components/Essays";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NotFound } from "./components/NotFound";
import { Projects } from "./components/Projects";
import { essayBySlug } from "./data/essays";
import { profile } from "./data/profile";
import { useReveal } from "./hooks/useReveal";
import { useRoute, useScrollAfterNavigation } from "./hooks/useRoute";

export default function App() {
  const route = useRoute();
  const essay = route.name === "essay" ? essayBySlug(route.slug) : undefined;

  // Re-run the scroll-reveal observer whenever the page changes, since each
  // route renders a different set of [data-reveal] elements.
  useReveal(route.name === "essay" ? route.slug : route.name);
  useScrollAfterNavigation();

  useEffect(() => {
    document.title = essay ? `${essay.title} · ${profile.name}` : profile.name;
  }, [essay]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className={route.name === "home" ? "wrap" : undefined}>
        {route.name === "home" ? (
          <>
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Essays />
            <Contact />
          </>
        ) : essay ? (
          <EssayPage essay={essay} />
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </>
  );
}
