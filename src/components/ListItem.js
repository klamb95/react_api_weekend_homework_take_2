import React from 'react';

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function(){
        onCharacterClick(character);
    }
    return <li onClick={handleClick}>{character.nickname}</li>
};


export default ListItem;