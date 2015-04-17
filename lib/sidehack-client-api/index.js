const base = 'http://localhost:8000/api/v1',
      baseConfig = { mode: 'cors', 'credentials': 'include' };

// TODO: Look to add a "retry" hook for when the request fails.

const API = {
  async get(...path) {
    const data = await this.request('get', undefined, ...path);

    return data;
  },

  async post(body, ...path) {
    const data = await this.request('post', body, ...path);

    return data;
  },

  async put(body, ...path) {
    const data = await this.request('put', body, ...path);

    return data;
  },

  async delete(...path) {
    const data = await this.request('delete', undefined, ...path);

    return data
  },

  async request(method, body, ...path) {
    const config = Object.assign({}, baseConfig, { method, body });

    try {
      const response = await fetch([base, ...path].join('/'), config),
            data = await response.json();

      return data;
    }
    catch (e) {
      throw e;
    }
  }
};

export default API;
