import React from 'react';
import ListItem from './ListItem';

const CharacterList = ({characters, onCharacterClick}) => {
    const characterItems = characters.map((character, index) => {
        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    })

    return (
        <div>
            <ul>
                <p>This is the character list</p>
                {characterItems}
            </ul>
        </div>
    )
};


export default CharacterList;