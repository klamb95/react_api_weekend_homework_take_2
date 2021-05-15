import React from 'react';
import CharacterContainer from '../containers/CharacterContainer';

const CharacterDetail = ({selectedCharacter}) => {
    return (

        <div>
            <h3>{selectedCharacter.name}</h3>
        </div>

    )
}

export default CharacterDetail;
