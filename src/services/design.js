import { Configuration, OpenAIApi } from 'openai'

export async function createDesign(prompt) {
  try {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPEN_IA_KEY
    })

    const openai = new OpenAIApi(configuration)

    const res = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512'
    })

    return res.data.data[0].url
  } catch (error) {
    return ({ error })
  }
}

export async function uploadDesign(file) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'ml_default')
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', 756857925269576)
  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dtp9alejv/upload', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    return data
  } catch (error) {
    return { error }
  }
}

export async function uploadFont(font) {
  console.log(font)
  const formData = new FormData()
  formData.append('file', font)
  formData.append('upload_preset', 'pb3fqhhc')
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', 756857925269576)
  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dtp9alejv/upload', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    return { error }
  }
}
