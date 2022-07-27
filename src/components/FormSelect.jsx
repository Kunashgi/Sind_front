import React from 'react';
import FormLine from './FormLine';
 
function FormInput (props){
    return (
        <FormLine label = {props.label}>
                <select className="fullWhith">
                    {
                        props.options.map((option, key) => (
                            <option value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
        </FormLine>
    );

}

export default FormInput;