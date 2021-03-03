const URL = [
  'https://cdn.contentful.com/spaces/',
  process.env.CONTENTFUL_SPACE,
  '/entries?access_token=',
  process.env.CONTENTFUL_ACCESS_TOKEN,
  '&content_type=experience',
].join('')

async function getExperiences() {
  const res = await fetch(URL)
  const data = await res.json()
  return data.items
}

export { getExperiences }