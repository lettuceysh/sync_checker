import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Wrapper>
      <Typography variant="normal">COPYRIGHT ⓒ 2022 GOLDENUS ALL RIGHT RESERVED</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export default Footer;
