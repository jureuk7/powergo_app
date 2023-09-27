import React from "react";
import CheckIcon from "@assets/icons/check";
import styled from "styled-components/native";
import { colors } from "@/theme/colors";

interface Props {
  checked?: boolean;
  onPress?: () => void;
}

const Checkbox = ({checked,onPress}) => {
  return (
    <Container onPress={() => onPress()} checked={checked}>
      <CheckIcon fill={checked ? "#fff" : colors.gray100} />
    </Container>
  );
};

const Container = styled.TouchableOpacity<{checked?:boolean}>`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: ${props => props.checked ? colors.primary : "#FFF"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${colors.gray100};
  border-width: ${props => props.checked ? 0 : 2}px;
`;

export default Checkbox;
