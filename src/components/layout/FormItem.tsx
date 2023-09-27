import React from "react";
import Checkbox from "@components/button/Checkbox";
import { Typography } from "@components/Atomic";

import styled from "styled-components/native";
import { colors } from "@/theme/colors";

interface Props {
  title: string;
  onPress?: () => void;
  checked?: boolean;
}

const FormItem = ({title,checked,onPress}:Props) => {
  return (
    <Container>
      <Checkbox
        checked={checked}
        onPress={() => onPress()}
      />
      <Typography size={18} color={colors.gray400}>
        {title}
      </Typography>
    </Container>

  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;


export default FormItem;
