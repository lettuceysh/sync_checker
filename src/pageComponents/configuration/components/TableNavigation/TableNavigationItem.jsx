import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import DraggableTable from './DraggableTable';
import Navigation from './Navigation';

const TableNavigationItem = () => {
  return (
    <Wrapper>
      <Navigation />
      <DraggableTable />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-top: 10px;
  border: 1px solid ${colors.bluegray150};
  border-radius: 3px;
  padding: 10px;
`;

export default TableNavigationItem;
