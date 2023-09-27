import React from "react";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import styled from "styled-components/native";
import RightButton from "@assets/icons/right.svg";

interface Props {
  title: string;
  onPress: () => void;
  children: React.ReactNode;
}

const Section = ({title,onPress,children}:Props) => {
  return (
    <Container>
      <Row>
        <Typography size={19} weight={600} color={colors.gray500}>
          {title}
        </Typography>
        <Icon onPress={() => onPress()}>
          <RightButton></RightButton>
        </Icon>
      </Row>
      {children}
    </Container>
  );
};

const Icon = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
`;


const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 6px;
  align-items: center;
`;


const Container = styled.View`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 35px;
`;

export default Section;
