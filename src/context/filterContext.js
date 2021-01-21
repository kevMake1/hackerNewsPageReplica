import React from 'react'


const FilterContext = React.createContext({

    filter: 'Top Stories',
    setFilter: () => {}

});

export default FilterContext;
