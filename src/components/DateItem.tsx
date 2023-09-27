import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import React from "react";
import styled from "styled-components/native";

interface Props {
  status: number;
  date: string;
  today?: boolean;
}

const DateItem = ({status,date,today}:Props) => {
  return (
    <Item>
      <StatusBall status={status}/>
      <DateBox today={today}>
        <Typography size={15} weight={600} color={
          today ? "#FFF" : colors.gray200
        }>
          {date}
        </Typography>
      </DateBox>
    </Item>
  )
}

export default DateItem;

const DateBox = styled.View<{today?:boolean}>`
  display: flex;
  height: 31px;
  padding: 6px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${props => props.today ? colors.primary : "#FFF"};
`;

const StatusBall = styled.View`
  background: ${props => {
  switch (props.status) {
    case 0:
      return "#FFF";
    case 1:
      return colors.red;
    case 2:
      return colors.yellow;
    case 3:
      return colors.primary;
  }
}};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  ${props => props.today && "border: 4px solid ${colors.primary};"};
  `;

const Item = styled.View`
  display: flex;
  gap: 20px;
  align-items: center;
`;
