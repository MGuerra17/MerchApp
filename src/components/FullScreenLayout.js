export default function FullScreenLayout({ children, ...props }) {
  return (
    <div className='w-full h-screen bg-slate-50 d-flex items-center justify-center' {...props}>
      {children}
    </div>
  )
}
