// src/components/OtpInput.jsx
import React, { useRef, useEffect, useState } from 'react';

const OtpInput = ({ onOtpChange, onResend }) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (onOtpChange) onOtpChange(updatedOtp);
      if (index < 5) inputsRef.current[index + 1].focus();
    } else {
      e.target.value = '';
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setCanResend(false);
    if (onResend) onResend();
    inputsRef.current[0].focus();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <div className="flex gap-3">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-10 h-10 text-center text-lg rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ref={(el) => (inputsRef.current[index] = el)}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      {!canResend ? (
        <p className="text-sm text-gray-600">Resend OTP in {timer}s</p>
      ) : (
        <button
          onClick={handleResend}
          className="text-blue-500 hover:underline text-sm"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default OtpInput;
