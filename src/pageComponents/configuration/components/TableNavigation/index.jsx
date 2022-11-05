import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import { useAlertStore } from '@/store';
import { Buttons, FormTitle } from '@/styles/components/AddFormArea';
import styled from '@emotion/styled';
import { Dialog } from '@mui/material';
import Navigation from './Navigation';
import { useTable } from './store/useTableStore';
import TableNavigationItem from './TableNavigationItem';

const TableNavigation = ({ onClose }) => {
  const { alert } = useAlertStore();
  const { sourceList, targetList, clearTable } = useTable();

  const saveTable = () => {
    if (sourceList && targetList) {
      alert({
        content: '적용하시겠습니까?',
        cancelText: 'cancel',
        onOk: submitSaveData
      });
    } else {
      alert({ content: 'source와 Target Table 모두 선택 하셔야 합니다.', okText: 'ok' });
    }
  };

  const submitSaveData = () => {
    clickCancel();
  };

  const clickCancel = () => {
    clearTable();
    onClose();
  };

  return (
    <Dialog open={true} PaperProps={{ sx: { width: 900 } }} fullWidth="true" maxWidth="xl">
      <Wrapper>
        <FormTitle>Source Table Navigation</FormTitle>
        <TableNavigationItem list={sourceList} type="source" />
        <TableNavigationItem list={targetList} type="target" />
        <Buttons>
          <ButtonNormalFill className="blue" type="submit" onClick={saveTable}>
            Save
          </ButtonNormalFill>
          <ButtonNormal className="blue" onClick={clickCancel}>
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
