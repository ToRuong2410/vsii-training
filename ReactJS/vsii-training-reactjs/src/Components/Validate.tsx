import React, { useState, useEffect } from 'react';

const Validate = () => {
  const [value, setValue] = useState<any>('');
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<any>(null);

  useEffect(() => {
    const validateInput = (input: any) => {
      if (!input) {
        setError('Không được bỏ trống');
        return false;
      } else if (input.length < 5 || input.length > 10) {
        setError('Input cần có độ dài từ 5 đến 10 ký tự');
        setSuccess('');
        return false;
      } else {
        setSuccess('Chấp nhận');
        setError('');
        return true;
      }
    };
    validateInput(value);
  }, [value]);

  return (
    <div className="q1">
      <h2>Bài 1</h2>
      <p>Nhập vào 1 số bất kỳ</p>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Validate;
