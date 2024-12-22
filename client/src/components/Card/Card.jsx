import React from 'react';

const Card = ({ data }) => {
  const imageBuffer = data?.images?.[0]?.data?.data;
  const contentType = data?.images?.[0]?.contentType || 'image/jpeg';
  
  
  // Convert binary data to Base64
  const imageUrl = imageBuffer
    ? `data:${contentType};base64,${btoa(
        new Uint8Array(imageBuffer)
          .reduce((acc, byte) => acc + String.fromCharCode(byte), '')
      )}`
    : 'fallback-image-url';

  return (
    <div className="mb-2">
      {/* Top Section */}
      <div className="overflow-hidden">
        {/* Zoom the image 5-10% on hover */}
        <img
          src={imageUrl}
          alt={data?.name || 'Product Image'}
          className="transform transition duration-300 hover:scale-110 w-96"
        />
      </div>
      {/* Bottom Section */}
      <p className="text-xl">{data?.name || 'Unknown Product'}</p>
      <p className="text-xl font-semibold">
        ${data?.price !== undefined ? data.price : '0.00'}
      </p>
    </div>
  );
};

export default Card;
