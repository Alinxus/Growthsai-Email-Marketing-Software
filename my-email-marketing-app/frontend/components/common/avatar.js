// frontend/components/Avatar.js
import React from 'react';

const Avatar = ({ imageUrl, altText, size, onClick, isClickable }) => {
  const handleClick = () => {
    if (isClickable && onClick) {
      onClick();
    }
  };

  return (
    <div className={`avatar ${size} ${isClickable ? 'clickable' : ''}`} onClick={handleClick}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Avatar;
