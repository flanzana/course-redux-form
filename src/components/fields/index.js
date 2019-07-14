import React from 'react';
import ReactJson from 'react-json-view'; // displays all props of the component

export const customInput = props => {
  const { label, type, input, meta } = props;

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} />
      {(meta.error && meta.touched) && (
        <div style={{ color: 'red'}}>{meta.error}</div>
      )}
      {/*<ReactJson src={meta} />*/}
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
      {/*<ReactJson src={props.meta} />*/}
    </div>
  )
};