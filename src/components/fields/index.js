import React from 'react';
// import ReactJson from 'react-json-view'; // displays all props of the component
import cx from 'classnames';
import { Field } from "redux-form";


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
  const { label, type, input, meta, autoFocus } = props;

  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input type={type} autoFocus={autoFocus} {...input} />
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

export const discounts = ({ fields }) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index} className="field-array-item">
        <Field
          name={code}
          component={customInput}
          type="text"
          label={`Discount Code #${index + 1}`}
          autoFocus // the field auto-focuses as soon as it renders on the page
        />
        <button
          type="button"
          onClick={() => fields.remove(index)}
        >
          &times;
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => fields.push()}
    >
      Add {!fields.length ? 'Discount Code(s)' : 'Another'}
    </button>
  </div>
);