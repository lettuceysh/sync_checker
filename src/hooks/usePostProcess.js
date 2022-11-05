const { useAlertStore } = require('@/store');

export const TYPE_TEXT = {
  save: '저장',
  modify: '수정',
  remove: '삭제',
  start: '시작',
  stop: '정지'
};

const usePostProcess = () => {
  const { alert } = useAlertStore();

  const goProcess = ({ api, requestData, title, onClose }) => {
    alert({
      content: `${title} 하시겠습니까?`,
      cancelText: 'Cancel',
      onOk: saveOrModify
    });

    async function saveOrModify() {
      try {
        await api(requestData);
      } catch (e) {
        alert({
          content: '요청 하신 작업에 실패 하였습니다',
          okText: 'ok'
        });
        return;
      }

      alert({
        content: '정상 처리 되었습니다!',
        okText: 'ok',
        onOk: onClose
      });
    }
  };

  return { goProcess };
};
export default usePostProcess;
