  // fichier Home.js
  import { useState } from 'react';
  import './Home.css'
  function Home( ) {
    const [animation, setAnimation] = useState(true)

    const toggleAnimation = () => {
      console.log(animation)
      setAnimation(animation => !animation)
    }
    return (
        <div className="container">
         <img src={"../Images/2.png"} 
        className={`App-logo ${ animation && "rotate"}`} alt="logo" />         
      <h1>TP React Développeur Web et Web Mob</h1>	
	 <button
 		className="App-button"
 		onClick={ toggleAnimation }> Modifier l’animation </button>
        </div>

    )}
   
 export default Home