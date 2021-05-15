import React from 'react';

const CharacterSelector = ({characters, onCharacterSelected}) => {
    const handleChange = function(event) {
        const chosenCharacter = characters[event.target.value];
        onCharacterSelected(chosenCharacter);
    }

    const characterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>{character.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Character</option>
            {characterOptions}
        </select>
    )
}

export default CharacterSelector;