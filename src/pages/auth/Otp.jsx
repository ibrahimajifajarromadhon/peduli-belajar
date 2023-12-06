import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Otp = () => {
  const [counter, setCounter] = useState(60);
  const [userOtp, setUserOtp] = useState('');
  const expectedOtp = '123456'; // Replace this with your actual OTP

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 10);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  useEffect(() => {
    function OTPInput() {
      const inputs = document.querySelectorAll('#otp > *[id]');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function (event) {
          if (event.key === 'Backspace') {
            inputs[i].value = '';
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== '') {
              setUserOtp((prevOtp) => prevOtp + inputs[i].value);
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    }

    OTPInput();
  }, []);

  const handleResendOtp = () => {
    setCounter(60);
    setUserOtp('');
  };

  const handleLogin = () => {
    if (userOtp === expectedOtp) {
      // Successful login
      console.log('Login Successful!');
      // You can redirect or perform any action here
    } else {
      // Invalid OTP
      console.log('Invalid OTP. Please try again.');
      // You can show an error message or take any other action
    }
  };

  return (
    <div className="" style={{ padding: '2em' }}>
      <Link to="/register">
        <FaArrowLeft style={{ color: 'var(--neutral-black)' }} />
      </Link>
  
      <h3 className='' style={{ marginTop: '20px', color: 'var(--primary-purple)', fontWeight: 700 }}>
        Masukan OTP
      </h3>
      <br />
      <div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <div className="">
            <h6 className='text-center'>Ketik 6 digit kode yang dikirimkan ke <b>J*****@gmail.com</b></h6>
            <br />
            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2 gap-2">
              {[...Array(6).keys()].map((index) => (
                <input
                  key={index}
                  className="m-1 text-center form-control rounded-4"
                  style={{
                    width: '3em',
                    height: '3em',
                    border: '1px solid var(--primary-purple)',
                    color: 'black',
                    fontWeight: 700,
                  }}
                  type="text"
                  id={`otp-${index + 1}`}
                  maxLength="1"
                />
              ))}
            </div>
            <br />
            {counter > 0 ? (
              <p style={{ textAlign: 'center' }}>Kirim Ulang OTP dalam {counter} detik</p>
            ) : (
              <span
                style={{
                  textAlign: 'center',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  color: 'red',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
                onClick={handleResendOtp}
              >
                Kirim Ulang OTP
              </span>
            )}
            <br />
            <Link to="/myclass">
              <button
                id="loginButton"
                className="btn rounded-4 text-light"
                style={{ backgroundColor: 'var(--primary-purple)', width: '100%' }}
                onClick={handleLogin}
              >
                Masuk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Otp;
