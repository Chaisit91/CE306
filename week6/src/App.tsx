import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const handleButtonClick = (type: string) => {
    alert(`${type} button clicked`);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Button Component Test
        </h1>

        <div className="bg-green-200 border border-green-500 text-green-700 p-3 rounded-md ">
          If you see this box styled, Tailwind base setup is likely working.
        </div>

        <div className="space-x-2">
          <Button variant="primary" size="sm" onClick={() => handleButtonClick('Primary SM')}>
            Primary SM
          </Button>
          <Button variant="primary" size="md" onClick={() => handleButtonClick('Primary MD')}>
            Primary MD
          </Button>
          <Button variant="primary" size="lg" onClick={() => handleButtonClick('Primary LG')}>
            Primary LG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
