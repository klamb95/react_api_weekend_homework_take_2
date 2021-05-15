import React, {useState, useEffect} from 'react';
import CharacterList from '../components/CharacterList';


const CharacterContainer = () => {
    const [characters, setCharacters] = useState([])
    

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(results => results.json())
        .then(characters => setCharacters(characters))
    }

    return (
        <div>
            <p>CharacterContainer</p>
            <CharacterList/>
        </div>
    )
}

export default CharacterContainer;