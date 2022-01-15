const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN 

//Get Search Results
export const searchUsers = async(text) => {
  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    header: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })

  const {items} = await response.json()

  return items
}

//Get Single User Results
export const getUser = async(login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    header: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })

  if (response.status === 404) {
    window.location = './notfound'
  } else {
    const data = await response.json()

    return data;
  }
}

//Get User Repos
export const getUserRepos = async(login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    header: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })

  const data = await response.json()

  // dispatch({
  //   type: 'GET_REPOS',
  //   payload: data
  // })

  return data
}