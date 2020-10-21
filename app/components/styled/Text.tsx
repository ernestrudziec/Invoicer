import styled from 'styled-components/native';
import { Text } from 'react-native';

export const Bold = styled(Text)`
  font-weight: 700;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '26px')}};
  color: ${({ color }) => (color ? color : 'white')}};
`;
