// Source in our stylesheet
// 'import' is similar to 'require' on the server
import './App.css';
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';
//App is a component
// useState updates the DOM when a variable changes
    // This looks like HTML but is really JSX create comp, put header into comp, 
//* Props- a way of taking data and passing it to a child component
//* Anything that you want to share through components, you have to 
//* use props
//* create a variable in app.jsx that we can pass into our Header component

  function App (){
    //*     value
    const [headerText, setHeaderText] = useState('Welcome to React!!!')
   
    return (
    <div>
      {/* Header headerTextProp is the name of our prop
       {headerText} is the value that we're assigning to it */}
      {/** TODO:Create Header and ClickCounter components */}
 {/** Render our Creature List on the DO*/}        
//*            prop name         value
      <Header 
            headerTextProp={headerText} 
            someOtherThing= {'Cake'}/>
    //* value gets passed into the function
      {/* <ClickCounter /> */}
      <Header  
      textColor="blue"
      headerTextProp={'Hello'}
      someOtherThing={'Cake'}
      />

      {/* <ClickCounter /> */}
      <CreatureList />
    </div>
    )
  }
export default App