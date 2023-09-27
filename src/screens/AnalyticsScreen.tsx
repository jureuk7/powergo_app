import React from "react";
import { Image, View } from "react-native";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import styled from "styled-components/native";
import DateItem from "@components/DateItem";
import { HStack, LayoutDivider, Typography, VStack } from "@components/Atomic";
import { colors } from "@/theme/colors";
import GoodAvatar from "@assets/images/good_avatar.png";
import BadAvatar from "@assets/images/bad_avatar.png";
import NormalAvatar from "@assets/images/normal_avatar.png";

const AnalyticsScreen = ({ navigation }) => {
  return (
    <LayoutWithHeader
      title={"분석"}
    >
      <Container>

        <DateContainer>
          <DateItem status={1} date="월" />
          <DateItem status={2} date="화" />
          <DateItem status={3} date="수" />
          <DateItem today status={1} date="목" />
          <DateItem status={0} date="금" />
          <DateItem status={0} date="토" />
          <DateItem status={0} date="일" />
        </DateContainer>


        <RecordButton onPress={() => navigation.navigate("Diagnosis")}>
          <Typography size={15} weight={700} color="#FFF">
            오늘의 정신건강 진단하기
          </Typography>
        </RecordButton>

        <VStack
          style={
            {
              marginTop: 30
            }
          }
          spacing={18}
        >
          <HStack
            spacing={10}
            center
          >
            <Typography size={18} weight={600} color={colors.gray500}>
              이 주의 점수 평균
            </Typography>
            <Typography size={18} weight={600} color={colors.primary}>
              좋음
            </Typography>
          </HStack>
        </VStack>
        <Spacer height={18} />
        <Typography size={14} weight={500} color={colors.gray400} lineHeight={21}>
          이 주는 별다른일이 없었나봐요! 상태가 매우 좋네요 {"\n"}
          앞으로도 컨디션 관리 잘해보아요!
        </Typography>
      </Container>

      <LayoutDivider />
      <Second>
        <Typography size={20} weight={600} color={colors.gray500}>
          검사 내역
        </Typography>
        <LogContainer>
          <Log onPress={
              () => navigation.navigate("ViewResult",
                  {
                    result: "good"
                  }
                )
          }>
            <Image
              source={GoodAvatar}
              style={
                {
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }
              }
            />
            <VStack spacing={5}>
              <Typography size={18} weight={600} color={colors.gray500}>
                9월 12일
              </Typography>
              <Typography size={14} weight={500} color={colors.gray300}>
                검사내역 보기
              </Typography>
            </VStack>

          </Log>
          <Log
          onPress={() => navigation.navigate("ViewResult",
          {
            result: "good"
          })}
          >
            <Image
              source={GoodAvatar}
              style={
                {
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }
              }
            />
            <VStack spacing={5}>
              <Typography size={18} weight={600} color={colors.gray500}>
                9월 11일
              </Typography>
              <Typography size={14} weight={500} color={colors.gray300}>
                검사내역 보기
              </Typography>
            </VStack>

          </Log>
          <Log
        onPress={() => navigation.navigate("ViewResult", { result: "normal" })}
          >
            <Image
              source={NormalAvatar}
              style={
                {
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }
              }
            />
            <VStack spacing={5}>
              <Typography size={18} weight={600} color={colors.gray500}>
                9월 10일
              </Typography>
              <Typography size={14} weight={500} color={colors.gray300}>
                검사내역 보기
              </Typography>
            </VStack>

          </Log>
          <Log
      onPress={() => navigation.navigate("ViewResult",
      {
        result: "bad"
      })}
          >
            <Image
              source={BadAvatar}
              style={
                {
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }
              }
            />
            <VStack spacing={5}>
              <Typography size={18} weight={600} color={colors.gray500}>
                9월 9일
              </Typography>
              <Typography size={14} weight={500} color={colors.gray300}>
                검사내역 보기
              </Typography>
            </VStack>

          </Log>
        </LogContainer>
      </Second>

    </LayoutWithHeader>
  );
};

const Log = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const LogContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;


const Second = styled.View`
  padding: 28px 20px;
  background-color: white;
  gap: 24px;
`;


const RecordButton = styled.TouchableOpacity`
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 8px;
  margin-top: 30px;

`;


const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
;

const Container = styled.View`
  padding: 26px 20px;
  background-color: white;
  margin-top: 20px;
`;

const Spacer = styled.View<{ height: number }>`
  height: ${props => props.height}px;
`;


export default AnalyticsScreen;
