import React from 'react';
import './Loading.css';
import loadingIcon from '../../assets/NIO_logo.svg';

export default function Loading() {
  return (
    <div className="loading-screen">
      <img src={loadingIcon} alt="Loading Icon" className="loading-icon" />
      <div className="spinner"></div>
    </div>
  );
}
