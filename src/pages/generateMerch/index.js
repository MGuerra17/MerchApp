import LinkCard from '@/components/LinkCard'
import RouteValidator from '@/components/RouteValidator'
import AiSvg from '../../../public/AiSvg'
import TextSvg from '../../../public/TextSvg'
import UploadSvg from '../../../public/UploadSvg'

export default function SelectSource() {
  return (
    <RouteValidator>
      <div className='w-full min-h-screen flex justify-center items-center flex-col'>
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
            <LinkCard
              title='Only Text'
              description='If you want to use only text'
              to='/generateMerch/UploadDesign'
              icon={<TextSvg />}
            />
          </div>
        </div>
      </div>
    </RouteValidator>
  )
}
