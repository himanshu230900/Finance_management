import React from 'react';

const Features = (): React.ReactNode => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 xl:py-16 xl:px-12'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center max-w-4xl'>
        <p className='font-medium text-lg py-4 text-blue-600'>Features</p>
        <h2 className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3 text-gray-800'>
          Revolutionize Your Finances with
        </h2>
        <h2 className='font-bold text-3xl lg:text-5xl text-blue-600'>
          AI-Powered Tools
        </h2>
        <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
          Experience the future of financial management with intelligent automation, 
          real-time insights, and personalized recommendations.
        </p>
      </div>

      {/* Feature Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full pt-12 max-w-7xl'>
        <FeatureCard
          icon="🤖"
          title="AI-Powered Analytics"
          description="Get intelligent insights into your spending patterns, investment opportunities, and financial health with advanced machine learning algorithms."
          gradient="from-blue-500 to-purple-600"
        />
        <FeatureCard
          icon="📊"
          title="Real-Time Tracking"
          description="Monitor your expenses, income, and investments in real-time with automatic categorization and smart notifications."
          gradient="from-green-500 to-teal-600"
        />
        <FeatureCard
          icon="🎯"
          title="Goal Management"
          description="Set and track financial goals with personalized roadmaps, milestone tracking, and automated savings recommendations."
          gradient="from-orange-500 to-red-600"
        />
        <FeatureCard
          icon="🔒"
          title="Bank-Level Security"
          description="Your financial data is protected with enterprise-grade encryption, multi-factor authentication, and secure cloud storage."
          gradient="from-purple-500 to-pink-600"
        />
        <FeatureCard
          icon="📈"
          title="Investment Insights"
          description="Make informed investment decisions with AI-driven market analysis, portfolio optimization, and risk assessment tools."
          gradient="from-indigo-500 to-blue-600"
        />
        <FeatureCard
          icon="💡"
          title="Smart Recommendations"
          description="Receive personalized financial advice, budget optimizations, and investment suggestions tailored to your unique situation."
          gradient="from-yellow-500 to-orange-600"
        />
      </div>
    </div>
  );
};

export default Features;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className='group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
      {/* Icon */}
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className='font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
        {title}
      </h3>
      <p className='text-gray-600 leading-relaxed'>
        {description}
      </p>
      
      {/* Hover Effect */}
      <div className={`h-1 w-0 bg-gradient-to-r ${gradient} mt-4 group-hover:w-full transition-all duration-300 rounded-full`}></div>
    </div>
  );
};

