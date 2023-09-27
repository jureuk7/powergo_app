import React from "react";
import { View } from "react-native";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import Article from "@components/Article";
import styled from "styled-components/native";
import { colors } from "@/theme/colors";
import { Typography } from "@components/Atomic";

const ForumScreen = ({navigation}) => {
  return (
    <LayoutWithHeader
      title={"게시판"}
      icon={{
        icon: "pencil",
        onPress: () => navigation.navigate('Write'),
      }}
      twoIcon={{
        icon: "search",
        onPress: () => navigation.navigate('Search'),
      }}
      sticky
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
      <Article
        onPress={() => navigation.navigate('Article')}
        date="3일 전"
        views={35}
        title={"헤어진 남자친구가 준 선물들을 버..."}
        likes={12}
        comments={35}
        contents={"내가 며칠전에 남자친구랑 헤어졌는데 그 남자친구가 줬던 선물들을 버리지도 못하고 있어... 남자친구랑은 10년동안 사겼고..."}
        tags={["#헤어짐", "#선물", "#남자친구"]}
      />
      <Article
        onPress={() => console.log('hello')}
        date="3일 전"
        views={35}
        title={"헤어진 남자친구가 준 선물들을 버..."}
        likes={12}
        comments={35}
        contents={"내가 며칠전에 남자친구랑 헤어졌는데 그 남자친구가 줬던 선물들을 버리지도 못하고 있어... 남자친구랑은 10년동안 사겼고..."}
        tags={["#헤어짐", "#선물", "#남자친구"]}
      />
      <Article
        onPress={() => console.log('hello')}
        date="3일 전"
        views={35}
        title={"헤어진 남자친구가 준 선물들을 버..."}
        likes={12}
        comments={35}
        contents={"내가 며칠전에 남자친구랑 헤어졌는데 그 남자친구가 줬던 선물들을 버리지도 못하고 있어... 남자친구랑은 10년동안 사겼고..."}
        tags={["#헤어짐", "#선물", "#남자친구"]}
      />
      <Article
        onPress={() => console.log('hello')}
        date="3일 전"
        views={35}
        title={"헤어진 남자친구가 준 선물들을 버..."}
        likes={12}
        comments={35}
        contents={"내가 며칠전에 남자친구랑 헤어졌는데 그 남자친구가 줬던 선물들을 버리지도 못하고 있어... 남자친구랑은 10년동안 사겼고..."}
        tags={["#헤어짐", "#선물", "#남자친구"]}
      />

    </LayoutWithHeader>
  );
};

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

export default ForumScreen;
