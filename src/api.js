import wretch from 'wretch'

export const api = wretch('http://localhost:8000/api')
  .accept('application/json')
  .content('application/json')
  .auth(`Bearer ${JSON.parse(localStorage.getItem('user')).api_token}`)
