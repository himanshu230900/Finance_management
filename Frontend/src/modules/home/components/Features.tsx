import React, { useState } from 'react';

const Features = (): React.ReactNode => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-slate-50 rounded-xl p-5 xl:py-8 xl:px-8'>
      {/* Text */}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-lg py-4'>Features</p>
        <p className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3'>Revolutionize Investing with AI-</p>
        <p className='font-bold text-3xl lg:text-5xl'>Powered tools</p>  
      </div>

      {/* Cards */}
      <div className='flex items-center justify-center w-full pt-10 space-x-2 xl:space-x-5'>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default Features;

const Card1 = () => {
  const [checkboxes, setCheckboxes] = useState({
    cirrusApr: false,
    cirrusMay: false,
    cirrusJul: false,
  });

  const handleCheckboxChange = (key: keyof typeof checkboxes) => {
    setCheckboxes((prev) => {
      const updatedState = { ...prev, [key]: !prev[key] };
      return updatedState;
    });
  };


  return (
    <div className='w-1/3 min-h-[28vh] bg-slate-200 rounded-xl'>
      <div className='flex flex-col w-full h-full p-3 xl:p-5 gap-y-2 xl:gap-y-3'>
        <CheckboxList 
          displaytext="Cirrus update Apr 2025" 
          is_checked={checkboxes.cirrusApr} 
          onChange={() => handleCheckboxChange('cirrusApr')} 
        />
        <CheckboxList 
          displaytext="Cirrus update May 2025" 
          is_checked={checkboxes.cirrusMay} 
          onChange={() => handleCheckboxChange('cirrusMay')} 
        />
        <CheckboxList 
          displaytext="Cirrus update Jul 2025" 
          is_checked={checkboxes.cirrusJul} 
          onChange={() => handleCheckboxChange('cirrusJul')} 
        />
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className='w-1/3 min-h-[28vh] bg-indigo-200 rounded-xl'></div>
  );
};

const Card3 = () => {
  return (
    <div className='w-1/3 min-h-[28vh] bg-slate-200 rounded-xl'></div>
  );
};

type CheckboxListProps = {
  displaytext: string;
  is_checked: boolean;
  onChange: () => void;
};

const CheckboxList = ({ displaytext, is_checked, onChange }: CheckboxListProps) => {
  return (
    <div className={`flex items-center justify-start w-full h-full p-4 xl:py-5 rounded-lg gap-x-2 
      ${is_checked ? 'bg-blue-100 border border-blue-400' : 'border-0'}`}>
      <input 
        type="checkbox" 
        className='w-5 h-5 checkbox' 
        checked={is_checked} 
        onChange={onChange} // Ensure onChange is being called
      />
      <p>{displaytext}</p>
    </div>
  );
};

