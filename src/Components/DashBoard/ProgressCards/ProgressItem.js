import React from 'react'

export default function ProgressItem({props}) {
    return (
    <div className="Item">
        <div className="Progress-top">
            <span>{props.topleft}</span>
            <span>{props.topRight}</span>
        </div>
        <div className="Progress-middle">
            <span>{props.bottomLeft}</span>
            <span>{props.bottomRight}</span>
        </div>
        <div className="Progress-bottom">
            <span>{props.bottomLeft}</span>
            <span>{props.bottomRight}</span>
        </div>
    </div>
    )
}
