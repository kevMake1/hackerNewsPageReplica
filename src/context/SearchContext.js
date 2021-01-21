import React from 'react';


const SearchContext = React.createContext({
    searchValue: '',
    setSearchValue: ()=> {}
});

export default SearchContext;