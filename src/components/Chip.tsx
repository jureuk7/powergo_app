import React from "react";
import styled from "styled-components/native";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";

interface Props {
  title: string;
  onPress: () => void;
}

const Chip = ({
  title,
  onPress,
              }) => {
  return (
    <Container onPress={() => onPress}>
      <Typography size={12} color={colors.primary}>
        {title}
      </Typography>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: ${colors.primaryweek};
`;


export default Chip;
