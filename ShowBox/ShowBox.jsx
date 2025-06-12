import React, { useState } from 'react';

const ShowBox = () => {
  const [box, setBox] = useState(''); // will store which box is active
  const box1=()=>setBox('Box1')
   const box2=()=>setBox('Box2')
     const box3=()=>setBox('Box3')
  return (
    <div>
      <button onClick={box1}>Box1</button>
      <button onClick={box2}>Box2</button>
      <button onClick={box3}>Box3</button>
      <p> {box}</p>

      {/* {box && (
        <div style={{ border: '1px solid black', padding: '20px', marginTop: '10px' }}>
          Showing: {box}
        </div>
      )} */}
    </div>
  );
};

export default ShowBox;