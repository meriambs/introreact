import React from 'react';

const myStyle = {
  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '100px',
  backgroundColor: 'yellow',
};

const otherStyle = {
  color: 'white',
  backgroundColor: 'blue',
  fontFamily: 'sans-serif',
  fontSize: '100px',
};

let condition = true;

const ThirdComponent = () => {
  return (
    <h3 style={condition ? myStyle : otherStyle}>
      {condition
        ? 'The component background is yellow'
        : 'The component background is blue'}
    </h3>
  );
};

export default ThirdComponent;
