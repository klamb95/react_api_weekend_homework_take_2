import React from 'react';
import CharacterContainer from '../containers/CharacterContainer';

const CharacterDetail = ({selectedCharacter}) => {
    return (

        <div>
            <h3>Name: {selectedCharacter.name}</h3>
            <p>Birthday: {selectedCharacter.birthday}</p>
            <p>Actor: {selectedCharacter.portrayed}</p>
            <p>Alive/Dead? {selectedCharacter.status}</p>
        </div>

    )
}

export default CharacterDetail;
