import React from 'react'

export default function ToggleSwitch(props) {
    const {name} = props;

    return (
        <div className="toggle-switch">
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}
