import React, { useState } from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import FormItem from "@components/layout/FormItem";
import styled from "styled-components/native";
import { Platform, View } from "react-native";

const WriteScreen = ({navigation}) => {

  const [step, setStep] = useState<'글작성','태그선택'>('글작성');
  const [funnelData, setFunnelData] = useState({
    title:'',
    content:'',
    tags:[],
  });

  const articleTags = [
    '연애',
    '취업',
    '진로',
    '학업',
    '인간관계',
    '가족',
    '친구',
    '건강',
    '스트레스',
    '자존감',
    '자해',
    '기타',
  ]

  return (
    <LayoutWithHeader
      backButton={true}
      funnel={true}
      onBack={
        () => {
          if (step === '글작성') {
            navigation.goBack();
          }
          else {
            setStep('글작성');
          }
      }}
    >
      {step === '글작성' && (
      <FunnelContainer>
          <Typography
            size={14}
            color={colors.gray400}
            >
            글 제목
          </Typography>
          <TitleInput
            value={funnelData.title}
            accessibilityHint={'글 제목을 입력해주세요.'}
            placeholder={'글 제목을 입력해주세요.'}
            onChangeText={(text) => setFunnelData({...funnelData, title: text})}
          />
          <ContentInput
            value={funnelData.content}
            onChangeText={(text) => setFunnelData({...funnelData, content: text})}
            multiline
            placeholder={'어떤 고민거리가 있으셨나요?\n익명으로 마음 편히 털어놓아보아요'}
            numberOfLines={10}
          />

      </FunnelContainer>
      )}
      {step === '태그선택' && (
        <FunnelContainer>
          <Title>
            게시글의 태그를{'\n'}
            선택해주세요
          </Title>
          <Typography
            size={14}
            color={colors.gray400}
            weight={400}
          >
            태그는 최소 1개, 최대 3개 선택 가능합니다.
          </Typography>
          <TagContainer>
            {articleTags.map((tag, index) => (
            <TagButton
              selected={funnelData.tags.includes(tag)}
              onPress={() => {
                if (funnelData.tags.includes(tag)) {
                  setFunnelData({...funnelData, tags: funnelData.tags.filter(item => item !== tag)});
                } else {
                  if(funnelData.tags.length >= 3) return;
                  setFunnelData({...funnelData, tags: [...funnelData.tags, tag]});
                }
              }}
            >
              <Typography size={14} color={
                funnelData.tags.includes(tag) ? "#FFF" : colors.gray400
              } weight={600}>
                {tag}
              </Typography>
            </TagButton>
            ))}
          </TagContainer>
        </FunnelContainer>
      )}
      <FunnelBottom>
        <RecordButton
          onPress={() => {
            if (step === '글작성') {
              setStep('태그선택');
            } else {
              navigation.navigate('Forum');
            }
          }}
          disabled={
            step === '글작성' && (funnelData.title === '' || funnelData.content === '') ||
            step === '태그선택' && funnelData.tags.length === 0
          }
        >
          <Typography size={19} weight={700} color="#FFF">
            {step === '글작성' ? '다음' : '등록'}
          </Typography>
        </RecordButton>
      </FunnelBottom>
    </LayoutWithHeader>
  );
};

const TagContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`;


const TagButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 16px;
  background: ${props => props.selected ? colors.primary : colors.gray50};
  margin-right: 10px;
  margin-bottom: 12px;
`;

const Title = styled.Text`
  color: ${colors.gray500};
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 14px;
`;

const ContentInput = styled.TextInput`
  width: 100%;
  color: ${colors.gray400};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 34px;
`;

const TitleInput = styled.TextInput`
  width: 100%;
  color: ${colors.gray500};
  font-size: 22px;
  font-weight: 600;
  margin-top: 14px;
`;


const FunnelContainer = styled.View`
  margin-top: 30px;
  padding: 0 20px;
  flex: 1;
`;

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
  background: ${props=> props.disabled
  ? colors.gray300 : colors.primary};
`;

export default WriteScreen;
