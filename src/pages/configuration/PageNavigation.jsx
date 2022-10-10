import styled from '@emotion/styled';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DraggableTable from '../../pageComponents/configuration/pageNavigation/DraggableTable';
import Navigation from '../../pageComponents/configuration/pageNavigation/Navigation';

const PageNavigation = () => {
  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Configuration
        </Link>

        <Typography color="text.primary">Source Table Navigation</Typography>
      </Breadcrumbs>

      <Content>
        <Navigation />
        <DraggableTable />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

export default PageNavigation;
