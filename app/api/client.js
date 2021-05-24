import { create } from 'apisauce';

// define the api
const apiClient = create({
    baseURL: 'http://itransportindex.com:4500/api',
  });

export default apiClient;