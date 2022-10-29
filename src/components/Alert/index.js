import { ButtonNormal, ButtonNormalFill } from '@/components/Buttons';
import { useAlertStore } from '@/store';
import styled from '@emotion/styled';
import { Button, Dialog, DialogTitle } from '@mui/material';

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

const Content = styled.div`
  padding: 20px;
  min-width: 300px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;

  > button {
    flex: 1;
    width: 80px;
  }
`;

export default Alert;
