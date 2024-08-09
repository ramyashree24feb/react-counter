import React, { useState } from 'react';

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <p>Current Click Count: {clickCount}</p>
      <button onClick={() => setClickCount(clickCount + 1)}>Increment</button>
      <button onClick={() => setClickCount(clickCount - 1)}>Decrement</button>
    </div>
  );
}

export default ClickCounter;
