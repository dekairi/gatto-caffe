import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styles";

function StarCard({ name, about, feature, image }) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="immagine di gatto" />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
}

export default StarCard;
