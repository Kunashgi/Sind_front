import React from 'react';


function Navbar (props){
    console.log(props.links);
    return (
<header>
            <nav>
                <ul>
                    {
                        props.links.map((link, i) => <li key = {i}>{link}</li>)
                        
                    }
                </ul>
            </nav>
        </header>
    );

}

export default Navbar;