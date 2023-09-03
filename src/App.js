import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log("useEffect called");
  });

  useEffect(() => {
    document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>I have been clicked {count}</button>;
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type away..."></input>
      <DogPics />
    </div>
  )
}

export default App;
