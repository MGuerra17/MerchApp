export async function createDesign(prompt) {
  try {
    const res = await fetch('/api/createDesign', {
      method: 'POST',
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    return data
  } catch (error) {
    return { error }
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
