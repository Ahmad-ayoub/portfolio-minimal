import { HeroSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

export default function example() {
  return (
    <>
      <Seo title="Example" />
      <Page>
        <HeroSection sectionId="hero" heading="this is a test">
          <p>This is a test</p>
        </HeroSection>
      </Page>
    </>
  );
}
