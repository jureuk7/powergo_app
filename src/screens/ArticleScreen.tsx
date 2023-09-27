import React from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import styled from "styled-components/native";
import { HStack, Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import { View } from "react-native";
import Heart from "@assets/icons/heart.svg";

const ArticleScreen = () => {
  return (
    <LayoutWithHeader
      backButton={true}
      funnel={true}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          }}
      >

      <ArticleContainer>
        <ArticleTop>
          <Profile>
            <ProfileImage />
            <Typography
              size={18}
              weight={600}
              color={colors.gray400}
            >
              익명의 오리
            </Typography>
          </Profile>
          <Typography
            size={14}
            weight={600}
            color={colors.gray300}
          >
            3시간 전
          </Typography>
        </ArticleTop>
        <Spacer height={30} />
        <HStack spacing={10} center>
            <Typography
              size={16}
              weight={500}
              color={colors.gray300}
            >
              #이별
            </Typography>
            <Typography
              size={16}
              weight={500}
              color={colors.gray300}
            >
              #연애
            </Typography>
        </HStack>
        <Spacer height={14} />
        <Typography
          size={24}
          weight={600}
          color={colors.gray500}
        >
          헤어진 남자친구가 준 선물
        </Typography>
        <Spacer height={22} />
        <Content>
          내가 며칠전에 남자친구랑 헤어졌는데 그 남자친구가 줬던 선물들을 버리지도 못하고 있어... 남자친구랑은 10년동안 사겼고 얼마 전에 헤어졌는데 남친 부모님 중 한분이 부고하셨는데 남기고 간 빚이 좀 큰가봐.. 감당할 수가 없어서 다른곳 가서 산다는데 이렇게 헤어지니까 너무 억울하고 힘든데 어떡하지
                  </Content>
      </ArticleContainer>
      <Spacer height={30} />
      <LayoutDivider />
      <Spacer height={30} />
      <CommentContaienr>
        <HStack
          spacing={10}
          center={true}
        >
          <Typography
            size={20}
            weight={600}
            color={colors.gray500}
          >
            댓글
          </Typography>
          <Typography
            size={16}
            weight={500}
            color={colors.gray300}
          >
            0개
          </Typography>
        </HStack>
      </CommentContaienr>
      </View>
      <Bottom>
        <Heart></Heart>
        <CommentInput
          placeholder="댓글을 입력하세요"
          />
      </Bottom>
    </LayoutWithHeader>
  );
};

const Bottom = styled.View`
  width: 100%;
  height: 56px;
  border-top-width: 1px;
  border-top-color: ${colors.gray100};
  background: white;
  padding: 0 20px;
  gap:20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentInput = styled.TextInput`
  flex:1;
  color: ${colors.gray400};
  font-size: 16px;
  font-weight: 400;
  `;



const Tag = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background: ${colors.gray50};
`;



const CommentContaienr = styled.View`
  padding: 0 20px;
`;
const LayoutDivider = styled.View`
  height: 6px;
  background: ${colors.gray50};
`;


const Content = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray400};
  line-height: 24px;
`;

const ProfileImage = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: ${colors.gray100};
`;

const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;


const ArticleContainer = styled.View`
  padding: 0 20px;
`;

const ArticleTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`

const Spacer = styled.View<{height:number}>`
  height: ${props => props.height}px;
`;

export default ArticleScreen;
