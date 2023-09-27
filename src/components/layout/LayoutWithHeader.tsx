import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { Typography } from "@components/Atomic";
import { colors } from "@/theme/colors";
import Back from "@assets/icons/backarrow.svg";
import Logo from "@assets/icons/logo.svg";
import Search from "@assets/icons/search.svg";
import Notification from "@assets/icons/notification.svg";
import Pencil from "@assets/icons/pencil.svg";
import { useNavigation } from "@react-navigation/native";

interface IconProps {
  icon: string;
  onPress: () => void;
}

interface Props {
  title?: string;
  children: React.ReactNode;
  backButton?: boolean;
  titleLogo?: boolean;
  icon?: IconProps;
  twoIcon?: IconProps;
  gray?: boolean;
  funnel?: boolean;
  onBack?: () => void;
  sticky?: boolean;
}

const LayoutWithHeader = ({
  title,
  children,
  backButton,
  titleLogo,
  icon,
  twoIcon,
  gray,
  funnel,
  onBack,
  sticky
}: Props) => {
  const navigate = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        }}
    >
      <HeaderContainer>
        <Left>
          {backButton &&
            <Icon left onPress={
              onBack ? onBack : () => navigate.goBack()}
            >
              <Back />
            </Icon>
          }
          {titleLogo &&
            <Logo />
          }
          {title &&
            <Typography color={colors.gray500} size={22} weight={600}>
              {title}
            </Typography>
          }
        </Left>
        <Right>
          {icon &&
            <Icon onPress={icon.onPress}>
              {icon.icon === 'notifications' &&
                <Notification fill="#353839" />
              }
              {icon.icon === 'search' &&
                <Search fill="#353839" />
              }
              {icon.icon === 'pencil' &&
                <Pencil fill="#353839"   />
              }
            </Icon>
          }
          {twoIcon &&
            <Icon onPress={twoIcon.onPress}>
              {twoIcon.icon === 'emergency' &&
                <Emergency fill="#353839" />
              }
              {twoIcon.icon === 'notifications' &&
                <Notification fill="#353839" />
              }
              {twoIcon.icon === 'search' &&
                <Search fill="#353839" />
              }
              {twoIcon.icon === 'pencil' &&
                <Pencil fill="#353839" height={20} />
              }
            </Icon>
          }
        </Right>
      </HeaderContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: gray ? '#F6F6F6' : '#fff',
          }}
      >
        {funnel ?
          <KeyboardAvoidingView
            style={{
              flex: 1,
              backgroundColor: gray ? '#F6F6F6' : '#fff',
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {children}
          </KeyboardAvoidingView>

          :
          <ScrollView
          style={{
            flex: 1,
            backgroundColor: gray ? '#F6F6F6' : '#fff',

          }}
          stickyHeaderIndices={sticky ? [0] : []}
        >
          {children}
        </ScrollView>
        }
      </View>
    </SafeAreaView>
  )
}

export default LayoutWithHeader;

const Left = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
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



