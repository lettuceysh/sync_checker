import { colors } from '@/styles/colors';
import NoSimIcon from '@mui/icons-material/NoSim';
const { default: styled } = require('@emotion/styled');

const NoData = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100px;
  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${colors.gray900};
  font-weight: 500;
`;

export default NoData;
