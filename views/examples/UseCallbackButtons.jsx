import React from "react";

const UseCallbackButtons = props => {
    return (
        <div>
            <div className="btn"
                onClick={() => props.inc(6)} >+6</div>
            <div className="btn"
                onClick={() => props.inc(12)}>+12</div>
            <div className="btn"
                onClick={() => props.inc(18)}>+18</div>
        </div>
    )
}

export default React.memo(UseCallbackButtons)