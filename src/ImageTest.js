import React from 'react';

function ImageTest() {
  return (
    <div>
      <h2>Image Test</h2>
      <img src="/me.jpeg" alt="Test Image" style={{ width: '100px', height: '100px', border: '1px solid red' }} />
      <p>If you see a red-bordered box, the image path is likely correct. If you see the alt text "Test Image", there might be an issue with the image file itself.</p>
    </div>
  );
}

export default ImageTest;
