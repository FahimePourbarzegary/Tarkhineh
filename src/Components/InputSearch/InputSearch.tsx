import { SearchNormal1 } from "iconsax-react";
type InputSearchProps = {
  ExtraCssDiv?: string;
  ExtraCssInput?: string;
};
function InputSearch({
  ExtraCssDiv = "",
  ExtraCssInput = "",
}: InputSearchProps) {
  return (
    <div
      className={` text-gray-8   flex py-3 px-4 items-center justify-between border border-gray-4  my-4  ${ExtraCssDiv}`}
    >
      <input
        type="text"
        placeholder="جستجو"
        className={`w-full outline-none ${ExtraCssInput}`}
      />
      <SearchNormal1 className=" " />
    </div>
  );
}

export default InputSearch;
