import React from 'react';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="absolute left-[300px] top-1/2 transform -translate-y-1/2 space-y-12">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-start relative">
          {/* Circle Indicator */}
          <div
            className={`w-4 h-4 rounded-full border-4 ${
              currentStep === step.id
                ? "bg-red-600 border-red-600"
                : currentStep > step.id
                ? "bg-red-600 border-red-600"
                : "bg-white border-red-300"
            }`}
          ></div>

          {/* Connecting Line */}
          {index < steps.length - 2 && (
            <div className="absolute left-2 top-4 w-0.5 h-full bg-red-300"></div>
          )}

          {/* Step Label */}
          <div
            className={`ml-4 px-8 py-4 rounded-full ${
              currentStep === step.id
                ? "bg-red-600 text-white"
                : "bg-white text-red-600 border border-red-300"
            }`}
          >
            <span className="text-sm font-medium">{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
