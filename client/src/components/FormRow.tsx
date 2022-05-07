interface IProps {
  value?: string | number | readonly string[];
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  labelText?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}
const FormRow = ({
  value,
  name,
  type,
  labelText,
  handleChange,
  placeholder,
}: IProps) => {
  return (
    <div className="mb-[1rem]">
      <label
        className="bolck mb-[0.5rem] capitalize tracking-wider"
        htmlFor="name"
      >
        {labelText || name}
      </label>
      <input
        className="w-full py-[0.375rem] px-[0.75rem] bg-backgroundColor border-2 "
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormRow;
