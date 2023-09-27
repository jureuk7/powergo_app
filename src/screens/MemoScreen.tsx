import React, { useEffect, useState } from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import { diagnosisAtom } from "@/store/diagnosis";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { colors } from "@/theme/colors";
import { Typography } from "@components/Atomic";

const MemoScreen = ({navigation}) => {
  const [funnelData, setFunnelData] = useRecoilState(diagnosisAtom);
  const [memo, setMemo] = useState<string>('');

  useEffect(() => {
    if(funnelData.memo) {
      setMemo(funnelData.memo);
    }
  },[funnelData.memo]);

  return (
    <LayoutWithHeader
      backButton={true}
      title={"메모 추가하기"}
      funnel={true}
    >
      <MemoInput
        multiline
        value={memo}
        onChangeText={(text) => setMemo(text)}
        placeholder={
          '오늘은 당신에게 어떤 날이었나요?\n오늘 하루가 어떤 모습이었는지\n간단한 메모를 남겨보세요!'
        }
      />
      <Bottom>
        <CTAButton
          disabled={!memo.length>0}
          onPress={() => {
            setFunnelData({
              ...funnelData,
              memo: memo,
            });
            navigation.goBack()
          }}
        >
          <Typography
            color={"white"}
            weight={600}
            size={16}
          >
            메모 추가하기
          </Typography>
        </CTAButton>
      </Bottom>
    </LayoutWithHeader>
  );
};

const CTAButton  = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.disabled ? colors.gray300 : colors.primary};
  justify-content: center;
  align-items: center;
`;


const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  `;


const MemoInput = styled.TextInput`
  padding: 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.408px;
`;

export default MemoScreen;
