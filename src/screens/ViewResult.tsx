import React from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import { Image, View } from "react-native";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import ResultGood from "@assets/images/result_good.png";
import ResultNormal from "@assets/images/result_normal.png";
import ResultBad from "@assets/images/result_bad.png";
import styled from "styled-components/native";

const ViewResult = ({route}) => {
    const result = route.params.result;
    return (
        <LayoutWithHeader
            backButton={true}
            title={"검사 결과"}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}>
                <Container>
                    <Top>
                        <Typography size={23} color={colors.gray500} weight={700}>
                            이날의 검사 결과
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
                </Container>
            </View>
        </LayoutWithHeader>
    );
};


const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: 1;
  margin-top: 50px;
`;

const Top = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default ViewResult;
