type InputFooterTypes = {
  type: string;
  placeholder: string;
};
function InputFooter({ type, placeholder }: InputFooterTypes) {
  return (
    <input
      type={type}
      className=" bg-transparent border border-white/40 rounded text-sm  px-4 py-2 focus:border-0 focus:outline-white/30"
      placeholder={placeholder}
    />
  );
}

export default InputFooter;
