import React, { useState } from 'react';

const App = () => {
  const [pressedColor, setPressedColor] = useState('');

  const handlePress = (color) => {
    setPressedColor(color);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div 
        onClick={() => handlePress('green')}
        style={{ width: '100px', height: '100px', backgroundColor: 'green', margin: '10px', display: 'inline-block' }}
      />
      <div 
        onClick={() => handlePress('red')}
        style={{ width: '100px', height: '100px', backgroundColor: 'red', margin: '10px', display: 'inline-block' }}
      />
      {pressedColor && <p>You have pressed {pressedColor} color</p>}
    </div>
  );
};

export default App;