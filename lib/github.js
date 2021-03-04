const URL = 'https://api.github.com/users/oktay/repos';

async function getRepos() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export { getRepos };
