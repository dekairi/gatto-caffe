import React, { useState } from "react";
import AccordionItem from "./accordionItem";
import { Ul } from "/src/components/styled";
import { StyledLi } from "./styles";

export function Accordion({ titleComponent, textComponent, content, isHtml }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
            titleComponent={titleComponent}
            textComponent={textComponent}
            title={item.title}
            text={item.description}
            open={index === openItemIndex}
            onClick={() => {
              setOpenItemIndex(index !== openItemIndex ? index : null);
            }}
            isHtml={isHtml}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}
