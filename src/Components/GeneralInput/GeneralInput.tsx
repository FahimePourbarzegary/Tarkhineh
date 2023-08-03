import { useState } from "react";

type GeneralInputProps = {
  tag: keyof JSX.IntrinsicElements;
  name: string;
  type?: string;
  onClick?: () => void;
  placeHolder: string;
  value: string;
  onChange?: (e) => void;
};
function GeneralInput({
  tag: Tag = `input`,
  name,
  type,
  onClick = () => {
    return;
  },
  placeHolder,
  value,
  onChange,
  ...rest
}: GeneralInputProps) {
  const [placeHolderHandler, setPlaceHolderHandler] = useState(placeHolder);
  return (
    <div className="relative">
      {placeHolderHandler.length ? null : (
        <label
          htmlFor={name}
          className=" absolute -top-3 right-4 text-sm bg-white text-gray-8 px-1 "
        >
          {placeHolder}
        </label>
      )}
      {Tag === `input` ? (
        <Tag
          name={name}
          type={type}
          onFocus={() => {
            setPlaceHolderHandler("");
          }}
          onChange={onChange}
          onBlur={() => setPlaceHolderHandler(placeHolder)}
          {...rest}
          placeholder={placeHolderHandler}
          value={value}
          onClick={onClick}
          className=" px-2 lg:px-4 py-3 focus:outline-primaryGreen border border-gray-4 rounded w-full"
        />
      ) : (
        <Tag
          name={name}
          onFocus={() => {
            setPlaceHolderHandler("");
          }}
          onBlur={() => setPlaceHolderHandler(placeHolder)}
          {...rest}
          placeholder={placeHolderHandler}
          onChange={onChange}
          onClick={onClick}
          className=" px-2 lg:px-4 py-3 focus:outline-primaryGreen border border-gray-4 rounded w-full"
        />
      )}
    </div>
  );
}

export default GeneralInput;
