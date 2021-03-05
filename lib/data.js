async function getExperiences() {
  const URL = [
    'https://cdn.contentful.com/spaces/',
    process.env.CONTENTFUL_SPACE,
    '/entries?access_token=',
    process.env.CONTENTFUL_ACCESS_TOKEN,
    '&content_type=experience',
  ].join('');
  const res = await fetch(URL);
  const data = await res.json();
  return data.items;
}

async function getRepos() {
  const URL = 'https://api.github.com/users/oktay/repos';
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

async function getBookmarks() {
  const URL = 'https://api.raindrop.io/rest/v1/raindrops/16840801/';
  const res = await fetch(URL, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    }),
  });
  const data = await res.json();
  return data.items;
}

export { getExperiences, getRepos, getBookmarks };
