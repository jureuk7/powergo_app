import React, { useState } from "react";
import LayoutWithHeader from "@components/layout/LayoutWithHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Article from "@components/Article";
import styled from "styled-components/native";
import Back from "@assets/icons/backarrow.svg";
import { colors } from "@/theme/colors";
import { ScrollView } from "react-native";

const ArticleSearch = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        }}
    >
      <HeaderContainer>
        <Icon left onPress={
          () => navigation.goBack()
        }>
          <Back />
        </Icon>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          value={search}
          onChangeText={setSearch}
        />
      </HeaderContainer>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const SearchInput = styled.TextInput`
  display: flex;
  height: 37px;
  padding: 0px 20px;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 30px;
  background: ${colors.gray50};
  color: ${colors.gray500};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.408px;
  `;


const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  align-items: center;
  height: 60px;
  background-color: #fff;
`;

const Icon = styled.TouchableOpacity<{left?:boolean}>`
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: ${props => props.left ? 'flex-start' : 'center'};
`;

export default ArticleSearch;
