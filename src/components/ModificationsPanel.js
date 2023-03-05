import { Accordion, Button } from 'flowbite-react'
import RangeInput from './RangeInput'
import useDesign from '@/hooks/useDesign'
import { useState } from 'react'
import FullPageLoading from './FullPageLoading'
import BrightnessSvg from '../../public/BrightnessSvg'
import VibranceSvg from '../../public/VibranceSvg'
import SaturationSvg from '../../public/SaturationSvg'
import ContrastSvg from '../../public/ContrastSvg'
import CheckInput from './CheckInput'
import BlurSvg from '../../public/BlurSvg'
import ShapeInput from './ShapeInput'

export default function ModificationsPanel() {
  const {
    modificationsList,
    applyModifications,
    newModification,
    setNewModification
  } = useDesign()
  const [loading, setLoading] = useState()
  const handleApplyChanges = () => {
    setLoading(true)
    setNewModification(false)
    applyModifications(modificationsList)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  return (
    <div className='pl-5 maxw'>
      {loading && <FullPageLoading />}
      <div className='flex items-center justify-between py-5'>
        <h2 className=' font-bold text-lg text-white'>Editing Panel</h2>
        <Button outline disabled={!newModification} onClick={handleApplyChanges}>Apply</Button>
      </div>
      <Accordion alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Ajustes
          </Accordion.Title>
          <Accordion.Content>
            <RangeInput title='Brillo' min={-100} max={100} modificationName='adjustBrightness' icon={<BrightnessSvg />} />
            <RangeInput title='Saturacion' min={-100} max={100} modificationName='adjustSaturation' icon={<SaturationSvg />} />
            <RangeInput title='Contraste' min={-100} max={100} modificationName='adjustContrast' icon={<ContrastSvg />} />
            <RangeInput title='Vibracion' min={-100} max={100} modificationName='adjustVibrance' icon={<VibranceSvg />} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Background
          </Accordion.Title>
          <Accordion.Content>
            <CheckInput name='Remove Background' modificationName='removeBg' />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Transformaciones
          </Accordion.Title>
          <Accordion.Content />
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Shapes
          </Accordion.Title>
          <Accordion.Content>
            <ShapeInput />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Filtros
          </Accordion.Title>
          <Accordion.Content>
            <CheckInput name='Gray scale' modificationName='grayScaleFilter' />
            <CheckInput name='Cartoonify' modificationName='cartoonifyFilter' />
            <RangeInput title='Blur' min={0} max={100} modificationName='blurFilter' icon={<BlurSvg />} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='focus:ring-0'>
            Text
          </Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Learn more about these technologies:
            </p>
            <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
              <li>
                <a
                  href='https://flowbite.com/pro/'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href='https://tailwindui.com/'
                  rel='nofollow'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
