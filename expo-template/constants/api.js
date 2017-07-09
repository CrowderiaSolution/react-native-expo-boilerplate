import axios from 'axios';
import { APP } from './consts';

axios.defaults.baseURL = APP.api_base_url;

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login() {
    return {};
  }
}

export const User = new UserApi();

class DataApi {
  datalist;
  constructor() {
    this.datalist = [
      {
        title: 'ayiyoo salli 1',
        name: 'hellow',
      },
      {
        title: 'ayiyoo salli 2',
        name: 'hellow',
      },
      {
        title: 'ayiyoo salli 3',
        name: 'hellow',
      },
      {
        title: 'ayiyoo salli 4',
        name: 'hellow',
      },
      {
        title: 'ayiyoo salli 5',
        name: 'hellow',
      },
    ];
  }

  async getData() {
    const res = await this.datalist;
    return res;
  }
}

export {
  UserApi,
  DataApi,
};
