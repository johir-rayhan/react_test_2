import React from 'react';


const Action = (props) => (<div>
    <button 
        className="big-button"
        onClick={props.doSomthing} 
        disabled={!props.hasOptions}
        > What should I Do?</button>
    </div>
);


export default Action;