import axios from 'axios';
import { APP } from './config';

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

export {
  UserApi,
};
