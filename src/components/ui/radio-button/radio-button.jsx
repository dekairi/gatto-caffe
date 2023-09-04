import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "/src/components/styled";

const Label = styled.label`
  display: block;
`;

function RadioButton({
  labelComponent,
  selectValue,
  name,
  value,
  text,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="radio"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default RadioButton;
