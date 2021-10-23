function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/anagirardi'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
