import axios from 'axios';




function CreatureForm ({
    creatureName,
    setCreatureName,
    creatureOrigin,
    setCreatureOrigin, 
    fetchCreatureList
}){
    const submitForm = (evt)=> {
        evt.preventDefault();
        console.log(`${creatureName} ${creatureOrigin}`);
        axios.post('/creature', {
            name: creatureName,
            origin: creatureOrigin,
        }).then((response) => {
            setCreatureName('');
            setCreatureOrigin('');
            fetchCreatureList('');
        }).catch((error)=> {
            console.log(`Error in POST ${error}`)
            alert('Something went wrong.');
        })
}
return (
    <>
    <form onSubmit={submitForm}>
        Name:
        <input type="text"
         value={creatureName}
         onChange={(e) => setCreatureName(e.target.value)}></input>
         <br />
         Origin:
         <input type="text"
          value={creatureOrigin}
          onChange={(e) => setCreatureOrigin(e.target.value)}></input>
          <input type="submit"></input>
         </form>
         </>
         )
}
export default CreatureForm;
