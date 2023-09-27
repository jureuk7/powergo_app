import React from 'react';
import {View} from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import styled from 'styled-components/native';
import {Typography} from '@components/Atomic';
import Chip from '@components/Chip';
import ArticleCard from '@components/ArticleCard';
import Section from '@components/layout/Section';
import DateItem from '@components/DateItem';
import {colors} from '@/theme/colors';
import MusicCard from "@components/MusicCard";

function HomeScreen ({navigation}) {
  return (
    <LayoutWithHeader
      titleLogo
      icon={{
        icon: 'notifications',
        onPress: () => navigation.navigate('Notification'),
      }}
      gray>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}>
        <Box>
          <Row>
            <Typography size={19} weight={600} color={colors.gray500}>
              일주일 간 감정 변화
            </Typography>
            <Chip title="더보기" onPress={() => console.log('pressed')} />
          </Row>
          <Row>
            <DateItem status={1} date="월" />
            <DateItem status={2} date="화" />
            <DateItem status={3} date="수" />
            <DateItem today status={1} date="목" />
            <DateItem status={0} date="금" />
            <DateItem status={0} date="토" />
            <DateItem status={0} date="일" />
          </Row>
          <RecordButton onPress={() => navigation.navigate('Diagnosis')}>
            <Typography size={15} weight={700} color="#FFF">
              오늘의 건강상태 진단하기
            </Typography>
          </RecordButton>
        </Box>
        <Section title="많이 공감한 고민거리" onPress={() => navigation.navigate("Forum")}>
          <ArticleList>
            <ArticleCard
              title="남자친구 고민"
              onPress={() => console.log('hello')}
              date="3일 전"
              views={30}
              likes={12}
              comments={4}
            />
            <ArticleCard
              title="너무 힘들다 하루하루가"
              onPress={() => console.log('hello')}
              date="3일 전"
              views={30}
              likes={12}
              comments={4}
            />
            <ArticleCard
              title="진짜 내가 이걸 잘못한건가..?"
              onPress={() => console.log('hello')}
              date="3일 전"
              views={3}
              likes={12}
              comments={4}
            />
          </ArticleList>
        </Section>
        <Section title="오늘의 음악" onPress={() => navigation.navigate("Music")}>
          <ArticleList>
            <MusicCard
              title="안녕"
              artist={"플킴"}
            />
            <MusicCard
              title="ETA"
              artist={"New Jeans"}
            />
            <MusicCard
              title="One Call Away"
              artist={"Charile Puth"}
            />
            <MusicCard
              title="Im not the only one"
              artist={"Sam Smith"}
            />
          </ArticleList>
        </Section>
      </View>
    </LayoutWithHeader>
  );
}

const RecordButton = styled.TouchableOpacity<{disabled?: boolean}>`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background: ${props => (props.disabled ? colors.gray300 : colors.primary)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.View`
  width: 100%;
  border-radius: 14px;
  background: #fff;
  padding: 22px 20px 18px 20px;
  gap: 22px;
`;

const ArticleList = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

export default HomeScreen;
