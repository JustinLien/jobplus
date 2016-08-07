import axios from 'axios';

export const fetchJobs = (jobSearch, city) => {
  const request = axios.post('/api/v1/jobs', {
    jobTitle: jobSearch,
    city: city
  });

  console.log('request: ', request);

  return {
    type: 'FETCH_JOBS',
    payload: request
  };
};

export const selectJob = (job) => {
  console.log('A job has been selected:', job);
  return {
    type: 'JOB_SELECTED',
    payload: job
  };
};
