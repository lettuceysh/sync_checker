import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import { Buttons, FormTitle } from '@/styles/components/AddFormArea';
import styled from '@emotion/styled';
import { Dialog } from '@mui/material';
import Navigation from './Navigation';
import TableNavigationItem from './TableNavigationItem';

const TableNavigation = ({ onClose }) => {
  return (
    <Dialog open={true} PaperProps={{ sx: { width: 900 } }} fullWidth="true" maxWidth="xl">
      <Wrapper>
        <FormTitle>Source Table Navigation</FormTitle>
        <TableNavigationItem />
        <TableNavigationItem />
        <Buttons>
          <ButtonNormalFill className="blue" type="submit">
            Save
          </ButtonNormalFill>
          <ButtonNormal className="blue" onClick={onClose}>
            Cancel
          </ButtonNormal>
        </Buttons>
      </Wrapper>
    </Dialog>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default TableNavigation;
