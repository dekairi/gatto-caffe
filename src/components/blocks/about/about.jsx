import React from "react";
import Title, { TitleLevel, TitleSize } from "/src/components/ui/title/title";
import { Address, Text, StyledSection, WorkTime, TextWrapper } from "./styles";

function About({ level }) {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Il primo gatto-bar in Italia
        </Title>
        <Text>
          Il bar più grande per gatti in Italia, in cui vivono 50 gatti e gatte,
          e ciascuno di loro in cerca di una nuova casa. Gli animali possono
          essere accarezzati, fotografati, giocati.
        </Text>
        <WorkTime>Orario di lavoro dalle 8:00 alle 23:00</WorkTime>
        <Address>Firenze, via dei Gattini 4</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
