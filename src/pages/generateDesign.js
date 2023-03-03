import { useState } from 'react'
import { createDesign, uploadDesign } from '../services/design'
import useDesign from '../hooks/useDesign'

export default function GenerateDesign() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const { setOriginalFile, setPublicId, setModifiedFile } = useDesign()

  const handleGenerateImage = async () => {
    const file = await createDesign(prompt)
    setResult(file)
  }

  const handleUploadImage = async () => {
    const res = await uploadDesign(result)
    window.localStorage.setItem('publicId', res.public_id)
    window.localStorage.setItem('modifiedFile', res.secure_url)
    window.localStorage.setItem('originalFile', res.secure_url)
    setPublicId(res.public_id)
    setModifiedFile(res.secure_url)
    setOriginalFile(res.secure_url)
  }

  return (
    <div className='flex flex-col w-full bg-slate-100 items-center justify-center'>
      <h1 className='my-3'>Welcome to merch generator</h1>
      <textarea className='w-80' placeholder='Write prompt...' onChange={(e) => setPrompt(e.target.value)} />
      <button className='bg-sky-300 rounded-md p-2 my-5' onClick={handleGenerateImage}>Generar imagen</button>
      <div className='my-5 bg-slate-200 p-8 w-96 h-96 flex items-center justify-center'>
        {result.length > 0
          ? <img className='w-full object-cover' src={result} alt={result} />
          : <p>Genera una imagen</p>}
      </div>
      <button className='bg-sky-300 rounded-md p-2 my-5' onClick={handleUploadImage}>Upload</button>
    </div>
  )
}
