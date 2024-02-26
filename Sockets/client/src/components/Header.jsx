import React from 'react';

const Header = props => {

    return(
        <div className='text-center py-3 mx-auto border border-dark mt-5' style={{ backgroundColor: "#dddddd",  border: "2px solid black", width: "450px"}}>
            <h1>MERN Chat</h1>
        </div>
    );
}

export default Header;