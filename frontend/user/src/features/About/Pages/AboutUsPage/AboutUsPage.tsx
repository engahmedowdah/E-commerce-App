import React from 'react';
import "./AboutUsPage.css";

import {AboutHero, CoreValuesSection, ShowroomBanner, StorySection, VisionSection} from "../../"

function AboutUsPage(): React.ReactNode {
  return (
    <main className="overflow-hidden text-right">
      <AboutHero />
      <StorySection/>
      <CoreValuesSection/>
      <ShowroomBanner/>
      <VisionSection/>
    </main>
  );
}

export default AboutUsPage;
