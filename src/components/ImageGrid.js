import React from 'react';

const ImageGrid = ({ images }) => {
  return (
     <div className="grid grid-cols-4 gap-4">
       {images.map((image, index) => (
         <div key={index} className="relative w-10 h-10"> {/* Adjusted size to w-16 h-16 */}
           <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
         </div>
       ))}
     </div>
  );
 };

export default ImageGrid;