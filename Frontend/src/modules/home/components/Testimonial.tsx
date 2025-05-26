import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 xl:py-16 xl:px-12'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center text-center max-w-4xl'>
        <p className='font-medium text-lg py-4 text-blue-600'>Testimonials</p>
        <h2 className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3 text-gray-800'>
          What Our Users Say
        </h2>
        <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
          Join thousands of satisfied users who have transformed their financial lives with our platform.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full pt-12 max-w-7xl'>
        <TestimonialCard
          name="Sarah Johnson"
          role="Marketing Manager"
          avatar="👩‍💼"
          rating={5}
          testimonial="This platform completely changed how I manage my finances. The AI insights helped me save $3,000 in just 6 months!"
        />
        <TestimonialCard
          name="Michael Chen"
          role="Software Engineer"
          avatar="👨‍💻"
          rating={5}
          testimonial="The investment tracking features are incredible. I can finally see all my portfolios in one place with real-time analytics."
        />
        <TestimonialCard
          name="Emily Rodriguez"
          role="Small Business Owner"
          avatar="👩‍🚀"
          rating={5}
          testimonial="The goal tracking feature motivated me to pay off my student loans 2 years early. The progress visualization is amazing!"
        />
        <TestimonialCard
          name="David Thompson"
          role="Financial Advisor"
          avatar="👨‍💼"
          rating={5}
          testimonial="I recommend this to all my clients. The security features and detailed reporting make it perfect for serious investors."
        />
        <TestimonialCard
          name="Lisa Park"
          role="Teacher"
          avatar="👩‍🏫"
          rating={5}
          testimonial="Finally, a finance app that's actually easy to use! The automated categorization saves me hours every month."
        />
        <TestimonialCard
          name="James Wilson"
          role="Entrepreneur"
          avatar="👨‍🚀"
          rating={5}
          testimonial="The enterprise features help me manage multiple business accounts effortlessly. ROI tracking has never been easier."
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl">
        <StatItem number="10,000+" label="Active Users" />
        <StatItem number="$50M+" label="Money Managed" />
        <StatItem number="4.9/5" label="User Rating" />
        <StatItem number="99.9%" label="Uptime" />
      </div>
    </div>
  )
}

export default Testimonial

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, rating, testimonial }) => {
  return (
    <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'>
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial */}
      <p className='text-gray-600 leading-relaxed mb-6 italic'>
        "{testimonial}"
      </p>

      {/* User Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};
