import React from 'react';
import ReactJson from 'react-json-view'; // displays all props of the component

export const customInput = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} {...props.input} />
      <ReactJson src={props.meta} />
    </div>
  )
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      <ReactJson src={props.meta} />
    </div>
  )
};