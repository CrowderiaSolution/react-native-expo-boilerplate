import { DataApi } from '../../../constants/api';

const dataApi = new DataApi();

export const FETCH_DATA_LIST = 'FETCH_DATA_LIST';

export const fetchDataList = () => ({
  type: FETCH_DATA_LIST,
  payload: dataApi.getData(),
});
