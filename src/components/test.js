import React from 'react'

export default function Input(props) {
  const {id, type="text", value, onChange, label} = props
  return (
    <div className="form__group">
      <label htmlFor="country">{label}</label>
      <input
        name={id}
        type={type}
        className="form__group--edit"
        onChange={onChange}
        id={id}
        value={value}
      />
  </div>
  )
}
