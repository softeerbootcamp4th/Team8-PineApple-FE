import React from 'react';
import PropTypes from 'prop-types';

function InputForm({ label, id, placeholder, value, onChange }) {
  return (
    <div className="flex mb-1000 w-[90%] gap-500">
      <label
        htmlFor={id}
        className="w-[15%] text-detail-1-bold text-neutral-800 set-center"
      >
        {label} *
      </label>
      <input
        id={id}
        className="w-[85%] px-400 py-200 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder:text-neutral-500 border-solid border-neutral-black focus:border-primary-blue border-[2px] rounded-[10px]"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
