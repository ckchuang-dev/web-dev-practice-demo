import React from 'react';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected, listOfPokemon, bsSize, totalPages, activePage, onSelect, openModal}) => {

  let style = { display: 'none' }
  if (display) {
    style.display = 'initial'
  } else {
    style.display = 'none'
  }

  return (
    <div style={style}>

      <SelectItemsPerPageButtons
        options={options}
        selectedValue={selectedValue}
        allValue={allValue}
        onOptionSelected={onOptionSelected} />

      <PokeList
        listOfPokemon={listOfPokemon}
        openModal={openModal} />

      <PaginationContainer
        bsSize={bsSize}
        totalPages={totalPages}
        activePage={activePage}
        onSelect={onSelect} />

    </div>
  )
}


export default PokemonIndexList;