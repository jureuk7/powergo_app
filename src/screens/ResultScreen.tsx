import React, { useEffect, useState } from "react";
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Image, View} from 'react-native';
import {Typography} from '@components/Atomic';
import ResultGood from '@assets/images/result_good.png';
import ResultBad from '@assets/images/result_bad.png';
import ResultNormal from '@assets/images/result_normal.png';
import {useRecoilState} from 'recoil';
import {diagnosisAtom} from '@/store/diagnosis';
import {colors} from '@/theme/colors';

function ResultScreen({navigation}) {
  const [funnelData, setFunnelData] = useRecoilState(diagnosisAtom);
  const [result,setResult] = useState();

  useEffect(() => {
    console.log(funnelData)
    const sum = funnelData.기분.strength + funnelData.스트레스.strength + funnelData.체력.strength + funnelData.건강.strength + funnelData.식사.strength;
    console.log(sum)
    const avg = sum / 5;
    if(avg >= 40){
      setResult('good');
    } else if (avg >= 20){
      setResult('normal');
    } else {
      setResult('bad');
    }
  },[funnelData]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Container>
          <Top>
            <Typography size={23} color={colors.gray500} weight={700}>
              오늘의 검사 결과
            </Typography>
            <Typography size={27} color={
              result === 'good' ? colors.primary : result === 'normal' ? colors.yellow : colors.red
            } weight={700}>
                {result === 'good' ? '좋음' : result === 'normal' ? '보통' : '나쁨' }
            </Typography>
          </Top>
          <Image
            source={
              result === 'good' ? ResultGood : result === 'normal' ? ResultNormal : ResultBad
            }
            style={{
              width: 212,
              height: 192,
            }}
          />
          <Typography size={18} color={colors.gray500} weight={500} lineHeight={25} align="center">
              {
                result === "good" && "오늘 당신의 정신상태는\n매우 맑아요! 계속 그 컨디션을\n유지할 수 있으면 좋겠네요"
              }
              {
                  result === "normal" && "오늘 당신의 정신상태는\n나쁘지도 않고, 좋지도 않아요\n내일 하루는 조금 더 건강하길!"
              }
              {
                  result === "bad" && "현재 마음상태가 매우 불안정해요\n일은 잠시 미루고 본인을 챙기는\n시간을 늘려가면 좋겠어요"
              }

          </Typography>
        </Container>
      </View>
      <ButtonGroup>
        <PrimaryButtonWeek
          onPress={() => {
            navigation.navigate('Memo');
          }}>
          <Typography size={18} color={colors.primary} weight={700}>
            메모 추가하기
          </Typography>
        </PrimaryButtonWeek>
        <PrimaryButton
          onPress={() => {
            setFunnelData({
              기분: {
                strength: 0,
              },
              스트레스: {
                strength: 0,
              },
              체력: {
                strength: 0,
              },
              건강: {
                strength: 0,
              },
              식사: {
                strength: 0,
              },
              memo: '',
            });
            navigation.navigate('Home');
          }}>
          <Typography size={18} color="white" weight={700}>
            완료
          </Typography>
        </PrimaryButton>
      </ButtonGroup>
    </SafeAreaView>
  );
}

const PrimaryButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  border-radius: 14px;
  background: ${props => (props.disabled ? colors.gray300 : colors.primary)};
`;

const PrimaryButtonWeek = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  border-radius: 14px;
  background: ${props => (props.disabled ? colors.gray300 : colors.primaryweek)};
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: 1;
`;

const Top = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.View`
  display: flex;
  padding: 10px 20px;
  gap: 12px;
`;

export default ResultScreen;
