import React, {useState, useEffect} from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import CharacterSelector from '../components/CharacterSelect';


const CharacterContainer = () => {
    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = function(){
        fetch('https://breakingbadapi.com/api/characters')
        .then(results => results.json())
        .then(characters => setCharacters(characters))
    }

    const onCharacterSelected = function(character){
        setSelectedCharacter(character)
    }

    return (
        <div>
            <p>CharacterContainer</p>
            <CharacterSelector characters={characters} onCharacterSelected={onCharacterSelected}/>
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter}/> : null}
            
        </div>
    )
}

export default CharacterContainer;