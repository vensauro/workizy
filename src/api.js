import wretch from 'wretch'

export const api = () => wretch(`${process.env.REACT_APP_API_URL}/api`)
  .accept('application/json')
  .content('application/json')
  .auth(`Bearer ${JSON.parse(localStorage.getItem('user')).api_token}`)
