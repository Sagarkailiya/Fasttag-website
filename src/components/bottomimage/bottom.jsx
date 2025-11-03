import React from 'react';
import Website from '../../assets/Website Banner 4.png'

const FastagFullImage = () => {
  return (
    <div className="w-full">
      <img
        src={Website}
        alt="FASTag Promotional Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default FastagFullImage;