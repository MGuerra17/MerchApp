import useDesign from '@/hooks/useDesign'
import { useEffect, useState } from 'react'
import { Select, Label, TextInput, RangeSlider, Button } from 'flowbite-react'
import dynamic from 'next/dynamic'
import RotationSvg from '../../public/RotationSvg'
const ChromePicker = dynamic(() => import('react-color').then((module) => module.ChromePicker), {
  ssr: false
})
export default function TextEditor() {
  const [textContent, setTextContent] = useState('')
  const [fontName, setFontName] = useState('Arial')
  const [fontSize, setFontSize] = useState('')
  const [color, setColor] = useState('#ffffff')
  const [angle, setAngle] = useState(0)
  const [xPosition, setXPosition] = useState('')
  const [yPosition, setYPosition] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [someChange, setSomeChange] = useState(false)

  const { handleModification, fonts, setNewModification, modificationsList } = useDesign()

  useEffect(() => {
    if (modificationsList.addText) {
      const textConfig = modificationsList.addText
      setTextContent(textConfig.textContent)
      setFontName(textConfig.fontName)
      setFontSize(textConfig.fontSize)
      setAngle(textConfig.angle)
      setColor(textConfig.color)
    }
  }, [modificationsList])

  const handleSaveConfig = () => {
    handleModification({ name: 'addText', value: { textContent, fontName, fontSize, angle, color, xPosition, yPosition } })
    setNewModification(true)
    setSomeChange(false)
  }

  const handleFontNameChange = (e) => {
    setFontName(e.target.value)
    setSomeChange(true)
  }

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value)
    setSomeChange(true)
  }

  const handleTextContentChange = (e) => {
    setTextContent(e.target.value)
    setSomeChange(true)
  }

  const handleColorChange = (color) => {
    setColor(color.hex)
    setSomeChange(true)
  }

  const handleAngleChange = (e) => {
    setAngle(e.target.value)
    setSomeChange(true)
  }

  const handleXPosition = (e) => {
    setXPosition(e.target.value)
    setSomeChange(true)
  }

  const handleYPosition = (e) => {
    setYPosition(e.target.value)
    setSomeChange(true)
  }

  return (
    <div className='flex-col'>
      <p className='text-slate-200 text-sm font-bold mb-4'>Add text</p>
      <div className='flex'>
        <Select
          className='flex-1'
          name='fontExtension' value={fontName} onChange={handleFontNameChange}
        >
          {fonts.map((font) => <option key={font} value={font}>{font.split('.')[0]}</option>)}
          <option value='Arial'>Arial</option>
          <option value='Helvetica'>Helvetica</option>
          <option value='Times'>Times</option>
          <option value='Verdana'>Verdana</option>
          <option value='Georgia'>Georgia</option>
          <option value='Impact'>Impact</option>
          <option value='Roboto'>Roboto</option>
          <option value='Lato'>Lato</option>
          <option value='Monserrat'>Monserrat</option>
          <option value='Raleway'>Raleway</option>
        </Select>
        <div className='flex mb-4 items-center'>
          <div className='pl-4 pr-2'>
            <Label
              htmlFor='small'
              value='Font size'
            />
          </div>
          <TextInput
            className='w-14'
            id='small'
            type='text'
            sizing='md'
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
      </div>
      <div className='flex mb-2 w-full'>
        <div className='mb-2 flex items-center'>
          <Label
            htmlFor='small'
            value='Text'
          />
        </div>
        <TextInput
          className='flex-1 ml-5'
          id='small'
          type='text'
          sizing='md'
          value={textContent}
          onChange={handleTextContentChange}
        />
      </div>
      <div className='flex w-full'>
        <div className='relative pt-2 flex items-center'>
          <p className='text-slate-200 text-sm font-semibold pb-2 pr-4'>Color</p>
          <div className='w-10 h-10 bg-slate-700 rounded-lg p-2' onClick={() => setShowColorPicker(!showColorPicker)}>
            <div style={{ backgroundColor: color }} className='w-full aspect-square rounded-sm' />
          </div>
          {showColorPicker && <ChromePicker className='z-10 absolute bottom-full' color={color} onChange={handleColorChange} disableAlpha />}
        </div>
        <div className='flex w-full mb-3'>
          <div className='w-4 pt-7 mx-3 text-white'>
            <RotationSvg />
          </div>
          <div className='flex-1'>
            <div>
              <Label
                className=''
                htmlFor='sm-range'
                value='Rotation'
              />
            </div>
            <RangeSlider
              id='sm-range'
              sizing='sm'
              min={0}
              max={360}
              value={angle}
              onChange={handleAngleChange}
            />
          </div>
          <p className='text-white self-end px-3 w-14 whitespace-nowrap text-center'>{angle}°</p>
        </div>

      </div>
      <div className='relative mx-3 flex flex-col'>
        <Label
          className='mb-5'
          htmlFor='small'
          value='Position'
        />
        <div className='flex justify-center'>

          <div className='flex mb-4'>
            <div className='mb-2 block'>
              <Label
                htmlFor='small'
                value='X'
              />
            </div>
            <TextInput
              className='w-14 mx-5'
              id='small'
              type='text'
              sizing='sm'
              value={xPosition}
              onChange={handleXPosition}
            />
          </div>
          <div className='flex'>
            <div className='mb-2 block'>
              <Label
                htmlFor='small'
                value='Y'
              />
            </div>
            <TextInput
              className='w-14 mx-5'
              id='small'
              type='text'
              sizing='sm'
              value={yPosition}
              onChange={handleYPosition}
            />
          </div>
        </div>
      </div>
      {someChange && <Button className='mx-auto mt-5' disabled={!someChange} onClick={handleSaveConfig}>Save configuration</Button>}
    </div>
  )
}
