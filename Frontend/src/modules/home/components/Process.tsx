import React from 'react'

const Process = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white rounded-2xl p-8 xl:py-16 xl:px-12'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center max-w-4xl'>
        <p className='font-medium text-lg py-4 text-blue-600'>How It Works</p>
        <h2 className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3 text-gray-800'>
          Get Started in 3 Simple Steps
        </h2>
        <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
          Transform your financial management in minutes, not hours. Our streamlined process gets you up and running quickly.
        </p>
      </div>

      {/* Process Steps */}
      <div className='flex flex-col lg:flex-row items-center justify-center w-full pt-12 space-y-8 lg:space-y-0 lg:space-x-8 max-w-6xl'>
        <ProcessStep
          step="01"
          title="Connect Your Accounts"
          description="Securely link your bank accounts, credit cards, and investment accounts with bank-level encryption."
          icon="🔗"
          gradient="from-blue-500 to-purple-600"
        />
        
        <div className="hidden lg:block">
          <svg className="w-12 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 12">
            <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <ProcessStep
          step="02"
          title="Set Your Goals"
          description="Define your financial objectives and let our AI create personalized strategies to achieve them."
          icon="🎯"
          gradient="from-green-500 to-teal-600"
        />
        
        <div className="hidden lg:block">
          <svg className="w-12 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 12">
            <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <ProcessStep
          step="03"
          title="Track & Optimize"
          description="Monitor your progress with real-time insights and receive AI-powered recommendations for optimization."
          icon="📈"
          gradient="from-orange-500 to-red-600"
        />
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
          Start Your Financial Journey
        </button>
        <p className="text-gray-500 text-sm mt-4">No credit card required • Free forever plan available</p>
      </div>
    </div>
  )
}

export default Process

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon, gradient }) => {
  return (
    <div className='flex flex-col items-center text-center max-w-sm'>
      {/* Step Number & Icon */}
      <div className="relative mb-6">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-3xl shadow-lg`}>
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
          <span className="text-sm font-bold text-gray-600">{step}</span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className='font-bold text-xl text-gray-800 mb-3'>
        {title}
      </h3>
      <p className='text-gray-600 leading-relaxed'>
        {description}
      </p>
    </div>
  );
};
