import React from "react";
import { View } from "react-native";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import { HStack, Typography, VStack } from "@components/Atomic";
import { colors } from "@/theme/colors";
import styled from "styled-components/native";
import Music from "@assets/images/music.png";

const MusicScreen = ({navigation}) => {
  return (
      <LayoutWithHeader
          title={"음악"}
          sticky
          icon={
            {
                icon: "search",
                onPress: () => navigation.navigate('Search'),
                }
          }
      >
        <TopController>
          <ControllButton>
            <Typography size={12} color={colors.gray400}>
              카테고리
            </Typography>
          </ControllButton>
          <ControllButton>
            <Typography size={12} color={colors.gray400}>
              최신순
            </Typography>
          </ControllButton>
          <ControllButton>
            <Typography size={12} color={colors.gray400}>
              인기순
            </Typography>
          </ControllButton>
        </TopController>
        <MusicContainer>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                    Im not the only one
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  Sam Smith
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  One Call Away
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  Charlie Puth
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  안녕
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  플킴
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  이 소설의 끝을 다시 써보려 해
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  한동근
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  서면역에서
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  순순희
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  선물
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  멜로망스
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
          <MusicCard>
            <HStack spacing={14}>
              <MusicImage
                  source={Music}
              />
              <VStack spacing={6}>
                <Typography size={19} color={colors.gray500}>
                  당신은사랑받기위해태어난사람
                </Typography>
                <Typography size={14} color={colors.gray300}>
                  백지영
                </Typography>
              </VStack>
            </HStack>
          </MusicCard>
        </MusicContainer>
      </LayoutWithHeader>
  );
};

const MusicImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: ${colors.gray50};
    `;


const MusicContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 0 20px;
  `;

const MusicCard = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    justify-content: space-between;
    gap: 20px;
    background: white;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.gray50};
`;


const TopController = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 6px 20px 14px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray50};
`;


const ControllButton = styled.TouchableOpacity`
  display: flex;
  padding: 9px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  border: 0.5px solid ${colors.gray100};
`

export default MusicScreen;
