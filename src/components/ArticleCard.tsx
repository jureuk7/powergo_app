import React from "react";
import styled from "styled-components/native";
import { colors } from "@/theme/colors";
import { Typography } from "@components/Atomic";

import ViewIcon from "@assets/icons/view.svg";
import LikeIcon from "@assets/icons/likes.svg";
import CommentIcon from "@assets/icons/comment.svg";

interface Props {
  title: string;
  onPress: () => void;
  date: string;
  views: number;
  likes: number;
  comments: number;
}

const ArticleCard = (
  {
    title,
    onPress,
    date,
    views,
    likes,
    comments
  }: Props
) => {
  return (
    <Container
      onPress={onPress}>
      <Top>
        <Typography size={18} color={colors.gray500} weight={600}>
          {title}
        </Typography>
        <Typography size={14} color={colors.gray300} weight={400}>
          {date}
        </Typography>
      </Top>
      <Bottom>
        <BottomItem>
          <IconBox>
            <ViewIcon></ViewIcon>
          </IconBox>
          <Typography size={12} color={colors.gray300} weight={500}>
            {views}
          </Typography>
        </BottomItem>
        <BottomItem>
          <IconBox>
            <LikeIcon></LikeIcon>
          </IconBox>
          <Typography size={12} color={colors.gray300} weight={500}>
            {likes}
          </Typography>
        </BottomItem>
        <BottomItem>
          <IconBox>
            <CommentIcon></CommentIcon>
          </IconBox>
          <Typography size={12} color={colors.gray300} weight={500}>
            {comments}
          </Typography>
        </BottomItem>
      </Bottom>
    </Container>
  );
};

const IconBox = styled.View`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Container = styled.TouchableOpacity`
  display: flex;
  width: 350px;
  padding: 18px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 14px;
  background: #FFF;
`;

const Top = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`

const Bottom = styled.View`
display: flex;
align-items: flex-start;
  flex-direction: row;
gap: 8px;
   `;

const BottomItem = styled.View`
display: flex;
justify-content: center;
align-items: center;
  flex-direction: row;
gap: 5px;
`;




export default ArticleCard;
