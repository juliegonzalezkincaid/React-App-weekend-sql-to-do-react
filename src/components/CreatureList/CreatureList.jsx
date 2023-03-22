import {useState, useEffect } from 'react';
import axios from 'axios';
import CreatureForm from './CreatureForm.jsx';

function CreatureList (){
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
    const [listOfCreatures, setListOfCreatures] = useState([]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array, React does the rest!
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }
    // ! Don't do this, it will potentially mess up Reacts timing
    // fetchCreatureList();
    useEffect(() => {
        // At this point, React is ready!
        fetchCreatureList();
    }, []); // ! Remember the empty Array



return (
    <div>
        <CreatureForm
            creatureName={creatureName}
            setCreatureName= {setCreatureName}
            creatureOrigin= {creatureOrigin}
            setCreatureOrigin={setCreatureOrigin}
            fetchCreatureList={fetchCreatureList}
        />
        <h2>Creature List</h2>
        {/* Used for testing
        { JSON.stringify(listOfCreatures) } */}
      
        <ul>
            {
                listOfCreatures.map((creature) => (
                    // what we want to render
                    <li key={creature.id}>
                        {creature.name} from {creature.origin}
                    </li>
                ))
            }
        </ul>
    </div>
);
        }
        
// All components must export
export default CreatureList