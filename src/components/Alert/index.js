import { ButtonNormalFill } from '@/components/Buttons';
import { useAlertStore } from '@/store';
import styled from '@emotion/styled';
import { Button, Dialog, DialogTitle } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const Alert = () => {
  const {
    props: { title, content, okText = 'Confirm', cancelText, onOk, onCancel, open },
    close
  } = useAlertStore();

  const clickCancel = () => {
    onCancel?.();
    close();
  };

  const clickOk = () => {
    onOk?.();
    close();
  };

  return (
    <Dialog onClose={close} open={open} style={{ zIndex: 9999 }}>
      <Top>
        <button type="button" onClick={close}>
          <ClearIcon />
        </button>
      </Top>
      {title && <DialogTitle>{title}</DialogTitle>}
      <Content>{content}</Content>
      <Buttons>
        <ButtonNormalFill onClick={clickOk}>{okText}</ButtonNormalFill>
        {cancelText && <Button onClick={clickCancel}>{cancelText}</Button>}
      </Buttons>
    </Dialog>
  );
};

const StyledDialog = styled(Dialog)``;

const Top = styled.div`
  position: relative;
  > button {
    position: absolute;
    right: 8px;
    top: 8px;
  }
`;

const Content = styled.div`
  padding: 20px;
  min-width: 300px;
  line-height: 1.7;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;

  > button {
    width: 100px;
  }
`;

export default Alert;
