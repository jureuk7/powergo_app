import styled from 'styled-components/native';
import { colors } from '@/theme/colors';

interface TypographyProps {
  color?: string;
  size?: number;
  weight?: number;
  align?: string;
  lineHeight?: number;
  style?: any;
  default?: boolean;
}

interface ContainerProps {
  spacing?: number;
  center?: boolean;
  justify?: boolean;
}

export const Typography = styled.Text<TypographyProps>`
  ${(props) => props.style && props.style};
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.size + 'px' || '16px'};
  font-weight: ${(props) => props.weight || 600};
  text-align: ${(props) => props.align || 'left'};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}px`};
`;

export const LayoutDivider = styled.View`
  width: 100%;
  height: 7px;
  background-color: ${colors.gray50};
`;

export const HStack = styled.View<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  justify-content: ${(props) =>
  props.justify ? 'space-between' : 'flex-start'};
  gap: ${(props) => (props.spacing ? `${props.spacing}px` : '0')};
`;

export const VStack = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  justify-content: ${(props) =>
  props.justify ? 'space-between' : 'flex-start'};
  gap: ${(props) => (props.spacing ? `${props.spacing}px` : '0')};
`;


