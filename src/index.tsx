const App = () => {
	const [ count , setCount ] = useState( 0 );
	console.log(thing);
	return <span onClick = { () => setCount( count + 1 ) }>count:{ count }</span>;
};


const root = createRoot( document.getElementById( 'react-root' ) );
root.render(
	<App/>
);


import React , { useState,useEffect } from 'react';
import {createRoot} from 'react-dom/client';
