import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "./styles";
import Gallery from "/src/components/ui/gallery/gallery";

function BarGallery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Galleria del nostro bar
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}

export default BarGallery;
