export const getHeaderList = (oosRecords) => {
  console.log('oosRecords', oosRecords);
  if (!oosRecords) return;

  let columDatas;
  oosRecords.forEach((element) => {
    columDatas = element.source || element.target;
    if (columDatas) {
      return;
    }
  });

  return columDatas ? Object.keys(columDatas) : [];
};
