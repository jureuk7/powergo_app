import React, {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import { HStack, Typography, VStack } from "@components/Atomic";
import SadFace from '@assets/images/sad_face.png';
import BrokenFace from '@assets/images/broken_face.png';
import HappyFriends from '@assets/images/happy_friends.png';
import Kakao from '@assets/icons/kakao.svg';
import {colors} from '@/theme/colors';

function RegisterScreen() {
  const [step, setStep] = useState(0);
  const textList = [
    '최근 들어 무력함이 느껴지거나\n힘들다고 생각한 적이 있나요?',
    '혼자 참으려 하지 말아요 \n몸의 구조 신호일 수 있습니다.',
    '힘내GO에서 고민을 털어놓고\n더 나은 내일을 만들어보아요',
  ];
  const imageList = [SadFace, BrokenFace, HappyFriends];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF"
      }}>
      {step !== 3 ? (
        <Container>
          <Image
            style={{
              width: 180,
              height: 310,
            }}
            resizeMode="stretch"
            source={imageList[step]}
          />
          <Typography lineHeight={34} weight={600} size={23} color={colors.gray500} align="center">
            {textList[step]}
          </Typography>
        </Container>
      ) : (
        <Image />
      )}

      <ButtonContainer>
        {step !== 3 ? (
          <StepButton onPress={() => setStep(step + 1)}>
            <Typography weight={600} size={18} color={colors.gray50}>
              {step < 2 ? '다음' : '시작하기'}
            </Typography>
          </StepButton>
        ) : (
          <KakaoButton>
            <Kakao />
            <Typography>암틈 카카오임</Typography>
          </KakaoButton>
        )}
      </ButtonContainer>
    </SafeAreaView>
  );
}

const Container = styled(VStack)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 67px;
`;

const Spacer = styled.View`
  height: 67px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const StepButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 12px;
  background: ${colors.primary};
`;

const KakaoButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 12px;
  background: #fee500;
`;

export default RegisterScreen;
