import React from "react";
import styled from "styled-components/native";
import { colors } from "@/theme/colors";
import { HStack, Typography, VStack } from "@components/Atomic";

import ViewIcon from "@assets/icons/view.svg";
import LikeIcon from "@assets/icons/likes.svg";
import CommentIcon from "@assets/icons/comment.svg";
import Music from "@assets/images/music.png";

interface Props {
  title: string;
  artist: string;
}

const MusicCard = ({
    title,
    artist
  }: Props
) => {
  return (
    <Container>
      <HStack spacing={16} center>
        <MusicImage
          source={Music}
        />
        <VStack spacing={6}>
          <Typography size={19} color={colors.gray500}>
            {title}
          </Typography>
          <Typography size={14} color={colors.gray300}>
            {artist}
          </Typography>
        </VStack>
      </HStack>
    </Container>
  );
};

const MusicImage = styled.Image`
    width: 70px;
    height: 50px;
    border-radius: 10px;
    background: ${colors.gray50};
    `;

const Container = styled.TouchableOpacity`
  display: flex;
  width: 350px;
  padding: 18px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 14px;
  background: #FFF;
`;

export default MusicCard;
