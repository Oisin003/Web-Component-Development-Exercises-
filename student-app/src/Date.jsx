function Date() {
 const tomorrow = new Date().toDateString()
 return (
   <div>
	 <p>Hello <b>World</b></p>
	 <p>fix this console.error();</p>
     <p>Tomorrow is: {tomorrow}</p>
   </div>
 );
}
export default Date;