import React, { useState } from "react";
import { Form, Label, Li, Ul } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import { Accordion } from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  Price,
  AccordionText,
  RadioLabelForTime,
  FormItem,
  StyleTitle,
  RadioLabelForType
} from "./styles";

function Buy({ buyOptions: { durationOptions = [], ticketOptions = [] } }) {
  const canBuy = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);

  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type ? type.price : 0);

  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));

  const handleBuy = () => {
    alert(
      `Grazie per il suo ordine.
              Ha preso: .
              Il prezzo:  €`
    );
  };

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Acquista
      </StyleTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Durata (ore)</Label>
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Tipo di biglietto</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Prezzo
          </Label>
          <Price>{price} €</Price>
          <Button minWidth={460} onClick={handleBuy}>
            Acquista
          </Button>
        </Form>
      ) : (
        <p>L'acquisto dei biglietti è temporaneamente non disponibile</p>
      )}
    </StyledSection>
  );
}

export default Buy;
