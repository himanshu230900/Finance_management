import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Intro = (): React.ReactNode => {
  const navigate = useNavigate();
  const authStatus = useSelector((state: RootState) => state.auth.status);

  return (
    <div className="relative">
      <div className='h-[5vh] xl:h-[10vh] w-full'></div>
      <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
        {/* Main Heading */}
        <div className="flex flex-col gap-y-3 font-bold text-black text-4xl xl:text-6xl max-w-6xl items-center justify-center text-center">
          <h1 className="leading-tight">
            <span className="text-blue-700">AI-Powered</span> Financial
            Insights to <span className="text-blue-700">Automate</span>,
          </h1>
          <h1 className="leading-tight">
            Optimize and <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dominate</span> Your Wealth
          </h1>
        </div>

        {/* Subtitle */}
        <div className='flex flex-col gap-y-1 pt-6 lg:pt-10 text-xl xl:text-2xl w-full max-w-4xl justify-center items-center text-center text-gray-600'>
          <p>Transform your financial future with intelligent automation and personalized insights.</p>
          <p>Simplify wealth management and make smarter investment decisions effortlessly.</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 lg:pt-12 items-center">
          {authStatus ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Go to Dashboard
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Started Free
              </button>
              <button
                onClick={() => navigate('/login')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-200"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center pt-12 lg:pt-16">
          <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ users worldwide</p>
          <div className="flex items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">🏦</div>
            <div className="text-2xl font-bold text-gray-400">📊</div>
            <div className="text-2xl font-bold text-gray-400">🔒</div>
            <div className="text-2xl font-bold text-gray-400">📈</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;