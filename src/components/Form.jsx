import React, {useState} from 'react'
import { MdMargin } from 'react-icons/md';

const form = () => {
  const [text, setName] = useState();
  console.log("Current Name:", text);
  return (
 <form>
  <div>
    <input type="text"placeholder="Enter Name"
    value={text}
    onChange={(e) => setName(e.target.value)}
    style={{
      border: '1px solid black',
      padding: '8px',
      bordreRadius: '4px',
      marginRight: '8px',
    }}
      />
    <input type="password" placeholder="Enter Password"
     style={{
      border: '1px solid black',
      padding: '8px',
      borderRadius: '10px',
      marginRight: '8px',
    }}
    />
    <button
    style={{
      padding: '8px 16px',
      borderRadius:'4px',
      background: 'white',
      border:'none',
    }}
    >submit</button>
  </div>
 </form>
  );
};

export default form;