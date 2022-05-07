import React from "react";

interface IProps {
  labelText?: string;
  name: string;
  value: string;
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
  list: any[];
  jobType?: string;
}

const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
}: IProps) => {
  return (
    <div className="mb-[1rem]">
      <label
        htmlFor={name}
        className="bolck mb-[0.5rem] capitalize tracking-wider"
      >
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full py-[0.375rem] px-[0.75rem] bg-backgroundColor border-2 "
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
