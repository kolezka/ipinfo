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
  res => res.data,
  err => Promise.reject(err.isAxiosError ? err.response.data : err)
);

export { fetch };
