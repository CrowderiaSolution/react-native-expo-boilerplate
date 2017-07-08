import axios from 'axios';
import { APP } from './consts';

axios.defaults.baseURL = APP.api_base_url;

class UserApi {
  constructor() {
    this.path = '/user';
  }

  async fetchUserProfile() {
    try {
      const { data } = await axios.get(this.path);
      return data.profile;
    } catch (e) {
      throw e;
    }
  }

  async createUser(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      console.log(res);
      return res;
    } catch (e) {
      throw e;
    }
  }
}

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
