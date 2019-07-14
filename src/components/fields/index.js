import React from 'react';

export const customInput = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} {...props.input} />
    </div>
  )
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option />
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  )
};