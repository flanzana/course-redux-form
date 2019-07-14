import React from 'react';
// import ReactJson from 'react-json-view'; // displays all props of the component
import cx from 'classnames';


const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const { label, type, input, meta } = props;

  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input type={type} {...input} />
      <label>{label}</label>
      {(meta.error && meta.touched && !meta.active) && (
        <div className="feedback-text error-text">
          {meta.error}
        </div>
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