import React from 'react';
import FormLine from './FormLine';

function FormInput (props){
    return (
        <FormLine label = {props.label}>
            <input type={props.type} placeholder={props.placeholder} className="fullWhith" required
             onChange={props.onChange}/>
        </FormLine>
    );

}

export default FormInput; 