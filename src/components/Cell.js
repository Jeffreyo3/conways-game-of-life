import React from 'react';
import { cellDisplay } from '../grid/display'


export default function Cell(props) {
    return (
        <div
            className={props.alive ? "alive" : "dead"}
            style={cellDisplay(props.alive, props.gridSize)}
            onClick={props.clickable ? props.toggleLife : null}
        />
    )
}