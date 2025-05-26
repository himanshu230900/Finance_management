import React from 'react'

const Review = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white rounded-2xl p-8 xl:py-16 xl:px-12'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center max-w-4xl'>
        <p className='font-medium text-lg py-4 text-blue-600'>Why Choose Us</p>
        <h2 className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3 text-gray-800'>
          Transform Your Financial Future
        </h2>
        <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
          Discover why thousands of users trust us with their financial management and wealth building journey.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full pt-12 max-w-6xl items-center'>
        {/* Left Side - Benefits List */}
        <div className='space-y-8'>
          <BenefitItem
            icon="⚡"
            title="Save 10+ Hours Per Month"
            description="Automate your financial tracking and spend more time on what matters most to you."
            stat="10+ hrs"
          />
          <BenefitItem
            icon="💰"
            title="Increase Savings by 30%"
            description="Our AI identifies spending patterns and suggests optimizations to boost your savings rate."
            stat="30% more"
          />
          <BenefitItem
            icon="📊"
            title="Better Investment Returns"
            description="Make data-driven investment decisions with our advanced analytics and market insights."
            stat="15% ROI"
          />
          <BenefitItem
            icon="🔒"
            title="Bank-Level Security"
            description="Your data is protected with 256-bit encryption and multi-factor authentication."
            stat="100% secure"
          />
        </div>

        {/* Right Side - Visual Dashboard Preview */}
        <div className='relative'>
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-2xl'>
            <div className='bg-white rounded-xl p-6 mb-4 shadow-lg'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='font-semibold text-gray-800'>Monthly Overview</h3>
                <span className='text-green-500 text-sm font-medium'>+12.5%</span>
              </div>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Income</span>
                  <span className='font-semibold text-gray-800'>$8,500</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Expenses</span>
                  <span className='font-semibold text-gray-800'>$5,200</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Savings</span>
                  <span className='font-semibold text-green-600'>$3,300</span>
                </div>
              </div>
            </div>
            
            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <h3 className='font-semibold text-gray-800 mb-4'>Investment Portfolio</h3>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 bg-blue-500 rounded-full mr-2'></div>
                    <span className='text-gray-600 text-sm'>Stocks</span>
                  </div>
                  <span className='text-sm font-medium'>60%</span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 bg-green-500 rounded-full mr-2'></div>
                    <span className='text-gray-600 text-sm'>Bonds</span>
                  </div>
                  <span className='text-sm font-medium'>25%</span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 bg-purple-500 rounded-full mr-2'></div>
                    <span className='text-gray-600 text-sm'>Crypto</span>
                  </div>
                  <span className='text-sm font-medium'>15%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className='absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg'>
            +$1,250
          </div>
          <div className='absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg'>
            Goal: 85%
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Finances?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their financial lives. Start your journey today.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, stat }) => {
  return (
    <div className='flex items-start space-x-4'>
      <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0'>
        {icon}
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='font-bold text-xl text-gray-800'>{title}</h3>
          <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>
            {stat}
          </span>
        </div>
        <p className='text-gray-600 leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};
