import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1> Tokyo Traveler </h1>
            <p> Hello {props.user ? props.user : 'anonymous'}! Get you trip started! </p>
        </div>
    )
}

export default Header; 