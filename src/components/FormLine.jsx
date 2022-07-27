import React from 'react';


function FormLine (props){
    return (
            <div>
                  <label>{props.label}</label>
                  {props.children}
  
            </div>
    );

}

export default FormLine; 