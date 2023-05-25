import "../../src/CSS/bodyCSS.css";
import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="My Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="mySkills" heading="My Skills" />
        <ProjectsSection sectionId="myProjects" heading="My Projects" />
        <ContactSection sectionId="contact" heading="Want to work with me?" />
      </Page>
    </>
  );
}
