import React  from 'react';
import Profil from './Profil'
import ChildComponent from './ChildComponent'
const App = () => {
 const handleAlert = (name) => {
     alert(`Hi, I am  ${name}` )
 }   
        return (
            <div className="App">
           <Profil
            //FullName='slim mezrigui' 
            Bio= 'développement web , région de sousse, Tunisie' 
            Func= 'Ingénier Civil'   
            handleAlert={handleAlert} 
            />
       <ChildComponent
       IMG= 'image'
       IMG= ''
       />

         </div>
        )
    }
export default App;