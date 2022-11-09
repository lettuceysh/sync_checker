import { useQuery } from 'react-query';
import { dsManagementSearchAllDSInfoByDirection } from '../dsManagement';

export const DsManagementKey = {
  dsManagementSearchAllDSInfoByDirection: (params) => [
    'dsManagementSearchAllDSInfoByDirection',
    params
  ]
};

export const useSearchAllDSInfoByDirection = (params) => {
  return useQuery(
    DsManagementKey.dsManagementSearchAllDSInfoByDirection(params),
    () => dsManagementSearchAllDSInfoByDirection(params),
    {
      select: (data) => {
        console.log('dataaa', data);
        return data.data;
      }
    }
  );
};
