import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='box'>
        <span className='text'>Welcome to</span>
        <span className='text-2'>EpochStudio</span>
        <span className='text-3'>
          A place where you can track all your <br />
          Work and Data...
        </span>
      </div>
      <span className='text-4'>Let’s Get Started...</span>
      <div className='section'>
        <div className='pic' />
        <span className='text-5'>Continue with Google</span>
      </div>
      <div className='box-2'>
        <span className='text-6'>Continue with Email</span>
        <div className='pic-2' />
      </div>
      <div className='box-3'>
        <span className='text-7'>Already have an account?</span>
        <span className='text-8'>Login</span>
      </div>
    </div>
  );
}
