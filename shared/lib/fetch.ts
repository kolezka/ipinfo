import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://api.ipstack.com'
});

fetch.interceptors.request.use(
  req => {
    if (!req.params) {
      req.params = {};
    }

    req.params['access_key'] = process.env.NEXT_PUBLIC_API_KEY;

    return req;
  },
  err => Promise.reject(err)
);

fetch.interceptors.response.use(
  res => {
    if (res.data?.detail) {
      throw res.data.detail;
    }

    if (res.data.success === false) {
      throw res.data.error.info;
    }

    return res.data;
  },
  err => {
    if (err.isAxiosError) {
      if (err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);

export { fetch };
