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
  contents: string;
  tags: string[];
}

const Article = (
  {
    title,
    onPress,
    date,
    views,
    likes,
    comments,
    contents,
    tags
  }: Props
) => {
  return (
    <Container
      onPress={onPress}>
      <ArticleTags>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <Typography size={12} color={colors.gray300} weight={500}>
              {tag}
            </Typography>
          </Tag>
        ))}
      </ArticleTags>
      <ArticleContent>

        <Top>
          <Typography size={18} color={colors.gray500} weight={600}>
            {title}
          </Typography>
          <Typography size={14} color={colors.gray300} weight={400}>
            {date}
          </Typography>
        </Top>
        <Content>
          {contents}
        </Content>
      </ArticleContent>
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

const Content = styled.Text`
  color: ${colors.gray400};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const ArticleTags = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;

const Tag = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background: ${colors.gray50};
`;



const ArticleContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-top: 20px;
`;


const IconBox = styled.View`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Container = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 24px 20px;
  flex-direction: column;
  align-items: flex-start;
  background: #FFF;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray50};
`;

const Top = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
`

const Bottom = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
`;

const BottomItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;




export default Article;
