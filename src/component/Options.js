import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header_title">Your Options</h3>
            <button className="button button--link" onClick={props.removeAllOptions}>Remove All </button>
        </div>
        {props.options.length === 0 && <p className="widget__message"> Please add an option to get started!</p>}
        {props.options.map((option, index) => (
            <Option 
            key={option} 
            count={index + 1}
            optionTex={option} 
            removeOption={props.removeOption} 
            />))}
    </div>
);



export default Options;