import { Spinner } from '../../../components'

function ProtectedLoader() {
  return (
    <div className='absolute h-full w-full z-50 flex justify-center items-center bg-white'>
      <Spinner />
    </div>
  )
}

export default ProtectedLoader
