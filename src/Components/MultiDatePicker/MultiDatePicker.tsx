import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
function MultiDatePicker({
  placeholder,
  disable,
  ExtraClass=""
}: {
  placeholder?: string;
  disable: boolean;
  ExtraClass?:string;
}) {
  return (
    <DatePicker
      render={<CustomInput placeholder={placeholder} disable={disable} ExtraClass={ExtraClass} />}
      weekDays={weekDays}
      arrow={false}
      monthYearSeparator=" "
      calendar={persian}
      locale={persian_fa}
      className="green"
      calendarPosition="bottom-center"
      showOtherDays
      scrollSensitive={false}
      disabled={disable}
      mapDays={({
        date,
        today,
        selectedDate,
        currentMonth,
        isSameDate,
      }: {
        date: DateObject;
        today: DateObject;
        selectedDate: DateObject | [];
        currentMonth: { index: number };
        isSameDate: (a, b) => boolean;
      }) => {
        console.log("mounth:", date);
        const props = {
          style: {},
        };

        props.style = {
          backgroundColor:
            date.month.index === currentMonth.index ? "white" : "",
        };

        if (isSameDate(date, today))
          props.style = {
            ...props.style,

            color: "#417F56",
            backgroundColor: "white",
            fontWeight: "bold",
            border: "1px solid #417F56",
          };
        if (isSameDate(date, selectedDate))
          props.style = {
            ...props.style,
            color: "white",
            backgroundColor: "#417F56",
            fontWeight: "bold",
          };

        return props;
      }}
      renderButton={(direction, handleClick) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          className=" flex justify-center items-center w-6 h-6 rounded-full border border-primaryGreen text-primaryGreen mx-4"
        >
          {direction === "right" ? (
            <ArrowLeft2 size={16} />
          ) : (
            <ArrowRight2 size={16} />
          )}
        </button>
      )}
    />
  );
}

export default MultiDatePicker;
function CustomInput({
  onFocus,
  value,
  onChange,
  placeholder = "زمان ایده آل",
  disable,
  ExtraClass="",
}: {
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disable: boolean;
  ExtraClass?:string;
}) {
  return (
    <input
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disable}
      className={`w-full focus:outline-primaryGreen border border-gray-4 rounded bg-white ${ExtraClass}`}
    />
  );
}
