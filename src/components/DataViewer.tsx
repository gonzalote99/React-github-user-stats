import React from 'react';

export default function DataViewer(data: any) {
  return(
    <div className='dataViewer'>
    <h3 style={{marginTop: 0}}>user data object: </h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}