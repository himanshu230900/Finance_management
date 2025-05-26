import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 xl:py-16 xl:px-12'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center max-w-4xl'>
        <p className='font-medium text-lg py-4 text-blue-600'>Pricing</p>
        <h2 className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3 text-gray-800'>
          Simple Pricing, Powerful Results
        </h2>
        <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
          Choose the perfect plan for your financial journey. Start free and upgrade as you grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className='flex flex-col lg:flex-row items-center justify-center w-full pt-12 space-y-6 lg:space-y-0 lg:space-x-8 max-w-6xl'>
        <PricingCard
          title="Starter"
          price="Free"
          period=""
          description="Perfect for individuals starting their financial journey"
          features={[
            "Basic expense tracking",
            "Monthly financial reports",
            "Goal setting (up to 3 goals)",
            "Mobile app access",
            "Email support"
          ]}
          buttonText="Get Started"
          buttonStyle="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          popular={false}
        />
        
        <PricingCard
          title="Professional"
          price="$9.99"
          period="/month"
          description="Advanced features for serious financial planning"
          features={[
            "Everything in Starter",
            "AI-powered insights",
            "Investment tracking",
            "Unlimited goals",
            "Advanced analytics",
            "Priority support",
            "Custom categories",
            "Export data"
          ]}
          buttonText="Start Free Trial"
          buttonStyle="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
          popular={true}
        />
        
        <PricingCard
          title="Enterprise"
          price="$29.99"
          period="/month"
          description="Complete financial management for power users"
          features={[
            "Everything in Professional",
            "Multi-account management",
            "Tax optimization tools",
            "Portfolio rebalancing",
            "Financial advisor access",
            "White-label options",
            "API access",
            "24/7 phone support"
          ]}
          buttonText="Contact Sales"
          buttonStyle="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
          popular={false}
        />
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">All plans include a 30-day money-back guarantee</p>
        <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-500">
          <span>✓ No setup fees</span>
          <span>✓ Cancel anytime</span>
          <span>✓ Secure payments</span>
          <span>✓ 99.9% uptime</span>
        </div>
      </div>
    </div>
  )
}

export default Pricing

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle: string;
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonStyle,
  popular
}) => {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm ${
      popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
    }`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-800">{price}</span>
          {period && <span className="text-gray-600 ml-1">{period}</span>}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${buttonStyle}`}>
        {buttonText}
      </button>
    </div>
  );
};
