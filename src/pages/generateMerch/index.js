import LinkCard from '@/components/LinkCard'
import RouteValidator from '@/components/RouteValidator'
import AiSvg from '../../../public/AiSvg'
import UploadSvg from '../../../public/UploadSvg'
import { Alert } from 'flowbite-react'
export default function SelectSource() {
  return (
    <RouteValidator>
      <div className='w-full min-h-screen flex justify-center items-center flex-col relative'>
        <div className='w-full absolute z-20 top-0'>
          <Alert
            color='warning'
            rounded
            className='w-3/4 mx-auto mt-8'
          >
            <span>
              <span className='font-medium'>
                Function remove background disabled!
              </span>
              {' '}However you can upload an image without background and edit it.
            </span>
          </Alert>
        </div>
        <div className='-mt-20 flex-col'>
          <h1 className='mb-20 text-2xl font-bold font dark:text-white text-center'>Select source</h1>
          <div className='flex gap-5'>
            <LinkCard
              title='Create Design using IA'
              description='If you dont have your design already'
              to='/generateMerch/GenerateDesign'
              icon={<AiSvg />}
            />
            <LinkCard
              title='Upload Design'
              description='If you already have your design'
              to='/generateMerch/UploadDesign'
              icon={<UploadSvg />}
            />
          </div>
        </div>
      </div>
    </RouteValidator>
  )
}
