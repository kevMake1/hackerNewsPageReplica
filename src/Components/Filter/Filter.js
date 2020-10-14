import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Filter(){

    const dropdownClickHandler = (e) =>{
        console.log(e.target.children)
    }

    return(
        <div>
            <DropdownButton  variant="outline-secondary" title="Dropdown button">
                <Dropdown.Item onClick={dropdownClickHandler} href="#/action-1" >Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

        </div>

    )
}

