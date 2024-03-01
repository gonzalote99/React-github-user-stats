import React from 'react';
import {useState} from 'react';

export default function Navbar({onChange = () => false, value = ""} : any) {
  const [input, setInput ] = useState(value);

  const handleInputChange = (e: any) => {
    setInput(e.target.value.trim());
  };

  return(
    <div className='navbar'>
    <div>
    <input
         placeholder='enter github username'
      onChange={handleInputChange}
      value={input}
      />
      <button
        onClick={(e: any) => {
          e.preventDefault();
          onChange(input);
        }}

        >
      fetch
      </button>
    </div>
      <div>
      <a href='https://github.com/gonzalote99'>view</a>
      </div>
    </div>
  )




}
