import React from "react";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StarItem, StarList, StyledStarsList } from "./styles";

function StarsList({ stars, level }) {
  return (
    <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Le nostre stelle</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
          <Button maxWidth={353} link="/buy">
            Acquista
          </Button>
        </>
      ) : null}
    </StyledStarsList>
  );
}

export default StarsList;
