import './formInput.styles.scss'

export default function FormInput({label,...otherProps}) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps}></input>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
