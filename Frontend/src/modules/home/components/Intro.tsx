import React from 'react'

const Index = (): React.ReactNode => {
  return (
    <div>
      <div className='h-[5vh] xl:h-[10vh] w-full'></div>
        <div className="flex-grow flex flex-col items-center justify-center w-full px-4 ">
          <div className="flex flex-col gap-y-3 font-bold text-black text-4xl xl:text-5xl max-w-5xl items-center justify-center">
            <h1>
              <span className="text-blue-700">AI-Powered</span> Financial
              Insights <span className="text-blue-700">Automate</span>,
            </h1>
            <h1>Optimize
            and Dominate Your Wealth</h1>
          </div>
          <div className='flex flex-col gap-y-1 pt-6 lg:pt-10 text-xl xl:text-2xl w-full max-w-3xl justify-center items-center '>
            <p>Automate, optimize, and dominate your finances with AI-powered</p>
            <p>insights. Simplify wealth management effortles</p>
          </div>
        </div>  
    </div>
  )
}

export default Index