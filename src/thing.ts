//not working , condition is undefined
const condition = await new Promise( res => {
	setTimeout( () => res( '1234' ) , 500 );
} );

// is working
// const condition = '1234';

export const thing = JSON.stringify( condition ); 
