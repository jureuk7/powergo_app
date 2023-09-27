import React, { useState } from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import styled from "styled-components/native";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import FormItem from "@components/layout/FormItem";
import { View } from "react-native";
import { useRecoilState } from "recoil";
import { diagnosisAtom } from "@/store/diagnosis";

const DiagnosisScreen = ({navigation}) => {

  const [step, setStep] = useState<'기분'|'스트레스'|'체력'|'건강'|'식사'>('기분');
  const stepIndex = {
    '기분': 1,
    '스트레스': 2,
    '체력': 3,
    '건강': 4,
    '식사': 5,
  }

  const indexReverse ={
    0: 50,
    1: 40,
    2: 30,
    3: 20,
    4: 10,
  }

  const [funnelData, setFunnelData] = useRecoilState(diagnosisAtom);

  const FunnelTitles = {
    '기분': '오늘의 기분은 다음 중\n어디에 해당하나요?',
    '스트레스': '하루 중 스트레스를\n얼마나 느끼셨나요?',
    '체력': '오늘의 체력 상태는 활동을\n하시기에 어떠셨나요?',
    '건강': '오늘 하루 동안 생활하시는데\n몸이 아프셨나요?',
    '식사': '오늘 식사는 식사 시간에\n제대로 챙겨 드셨나요?'
  };

  const FunnelQuestions = {
    '기분': [
      '매우 좋았다',
      '좋았다',
      '보통이었다',
      '조금 나빴다',
      '나쁘다',
    ],
    '스트레스': [
      '매우 좋았다',
      '좋았다',
      '보통이었다',
      '조금 나빴다',
      '나쁘다',
    ],
    '체력': [
      '매우 좋았다',
      '좋았다',
      '보통이었다',
      '조금 나빴다',
      '나쁘다',
    ],
    '건강': [
      '매우 좋았다',
      '좋았다',
      '보통이었다',
      '조금 나빴다',
      '나쁘다',
    ],
    '식사': [
      '매우 좋았다',
      '좋았다',
      '보통이었다',
      '조금 나빴다',
      '나쁘다',
    ]
  }

  return (
    <LayoutWithHeader
      backButton={true}
      funnel={true}
      onBack={ () => {
        switch(step) {
          case '기분':
            navigation.navigate('Home');
            break;
          case '스트레스':
            setStep('기분');
            break;
          case '체력':
            setStep('스트레스');
            break;
          case '건강':
            setStep('체력');
            break;
          case '식사':
            setStep('건강');
            break;
      }}}
    >
      <FunnelTop>
        <FunnelStep>
          <Typography size={16} weight={600} color={colors.gray500}>
            { stepIndex[step] }
          </Typography>
          <Typography size={16} weight={600} color={colors.gray300}>
            / 5
          </Typography>
        </FunnelStep>
        <Title>
          { FunnelTitles[step]}
        </Title>
      </FunnelTop>
      <FunnelForm>
        {FunnelQuestions[step].map((question, index) => (
          <FormItem
            key={index}
            title={question}
            checked={funnelData[step].strength === indexReverse[index]}
            onPress={(value) => {
              setFunnelData({
                ...funnelData,
                [step]: {
                  strength: indexReverse[index],
                }})
            }}
          />
        ))}
      </FunnelForm>
      <FunnelBottom>
        <RecordButton
          onPress={() => {
            if (step === '식사') {
              navigation.navigate('Result');
            } else {
              setStep(step => {
                switch (step) {
                  case '기분':
                    return '스트레스';
                  case '스트레스':
                    return '체력';
                  case '체력':
                    return '건강';
                  case '건강':
                    return '식사';
                }
              });
            }
          }}
          disabled={
            funnelData[step].strength === 0
          }
        >
          <Typography size={19} weight={700} color="#FFF">
            { step === '식사' ? '결과 보기' : '다음으로' }
          </Typography>
        </RecordButton>
      </FunnelBottom>
    </LayoutWithHeader>
  );
};

const FunnelBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

const RecordButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  border-radius: 14px;
  background: ${props => props.disabled ? colors.gray300 : colors.primary};
`;


const FunnelForm = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 30px;
  gap: 20px;
  width: 100%;
  flex: 1;
`;

const Title = styled.Text`
  color: ${colors.gray500};
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const FunnelTop = styled.View`
  padding: 0 20px;
  display: flex;
  gap: 14px;
  margin-top: 30px;
`;

const FunnelStep = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export default DiagnosisScreen;
