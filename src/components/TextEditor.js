import useDesign from '@/hooks/useDesign'
import { useState } from 'react'

export default function TextEditor() {
  const [textContent, setTextContent] = useState('')
  const [fontName, setFontName] = useState('')
  const [fontSize, setFontSize] = useState('')
  const [color, setColor] = useState('')
  const [angle, setAngle] = useState(0)

  const { handleModification, fonts } = useDesign()

  const handleValueChange = () => {
    handleModification({ name: 'addText', value: { textContent, fontName, fontSize, angle, color } })
  }

  return (
    <div className='mx-3 flex-col'>
      <label htmlFor='name'>Texto</label>
      <div className='flex'>
        <select name='fontType' onChange={(e) => setFontName(e.target.value)}>
          {fonts.map((font) => <option key={font} value={font}>{font.split('.')[0]}</option>)}
        </select>
        <input
          type='text'
          className='bg-gray-100 rounded-md p-2 w-20 mx-1'
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          required
        />
      </div>
      <span>Contenido</span>
      <input
        type='text'
        className='bg-gray-100 rounded-md p-2 w-40 mx-1'
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
        required
      />
      <input
        type='text'
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={color}
        placeholder='Color'
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <input
        type='text'
        className='bg-gray-100 rounded-md p-2 w-20 mx-1'
        value={angle}
        placeholder='Angulo'
        onChange={(e) => setAngle(e.target.value)}
        required
      />
      <button onClick={handleValueChange}>Guardar</button>
    </div>
  )
}
