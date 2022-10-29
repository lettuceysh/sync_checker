import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Footer = ({ footerColor }) => {
  return (
    <Wrapper className={footerColor}>
      <Typography variant="normal">COPYRIGHT ⓒ 2022 GOLDENUS ALL RIGHT RESERVED</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: ${colors.bluegray100};
  color: ${colors.gray900};
  border-top: 1px solid ${colors.bluegray150};

  &.white {
    background-color: white;
  }
`;

export default Footer;
