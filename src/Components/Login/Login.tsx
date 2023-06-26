import { ArrowRight2, Clock, CloseCircle } from "iconsax-react";
import logo from "../../assets/Logo.svg";
import React, { useEffect, useRef, useState } from "react";
type LoginProps = {
  setIsShowLoginModal: (situation: boolean) => void;
};
function Login({ setIsShowLoginModal }: LoginProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isReceiveCode, setIsReceiveCode] = useState(false);
  const [errorMessagePhoneNumber, setErrorMessagePhoneNumber] = useState(
    "لطفا شماره را با فرمت ۰۹*****وارد کنید"
  );
  const onSubmitPhoneNumber = (e) => {
    e.preventDefault();
    setIsReceiveCode(true);
  };
  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (/^09\d{9}$/.test(e.target.value)) {
      setErrorMessagePhoneNumber("");
    } else {
      setErrorMessagePhoneNumber("لطفا شماره را با فرمت ۰۹*****وارد کنید");
    }
  };
  return (
    <div className="flex justify-center items-center  fixed top-0 left-0 w-full h-screen text-gray-7 z-40 bg-white lg:bg-transparent">
      <div
        className="absolute w-full h-full lg:bg-black/75   lg:backdrop-blur-sm "
        onClick={() => setIsShowLoginModal(false)}
      ></div>
      <div className="relative top-0 left-0 h-screen w-full flex flex-col items-center  p-5 lg:gap-3  lg:p-6  lg:w-[392px] lg:h-auto lg:bg-white lg:rounded-lg">
        <div className="w-full flex justify-between items-center">
          <ArrowRight2 className=" w-6 h-6 invisible" />
          <img
            src={logo}
            alt="لوگو"
            className=" hidden lg:block lg:w-[102px] lg:h-8"
          />
          <CloseCircle
            className=" w-6 h-6 cursor-pointer"
            onClick={() => setIsShowLoginModal(false)}
          />
        </div>
        <div className="w-full pt-28 px-24 pb-10 lg:p-0">
          <img src={logo} alt="لوگو" className=" w-full  h-28 lg:hidden" />
        </div>
        {!isReceiveCode && (
          <form
            className={`flex-col justify-center items-center gap-6 w-full py-10 lg:gap-1 lg:py-0 flex`}
            onSubmit={(e) => onSubmitPhoneNumber(e)}
          >
            <h1 className=" font-bold text-gray-8 ">ورود/ثبت نام</h1>
            <p className=" text-sm text-gray-7 lg:pb-6">
              شماره همراه خود را وارد کنید
            </p>{" "}
            <input
              type="tel"
              placeholder="شماره همراه"
              className={`w-full px-4 py-3 border border-gray-5 rounded ${
                errorMessagePhoneNumber.length
                  ? "focus:outline-error"
                  : "focus:outline-primaryGreen"
              }  `}
              onChange={(e) => onChangePhoneNumber(e)}
              value={phoneNumber}
            />
            <p className=" text-[10px] text-error lg:mb-6 ">
              {errorMessagePhoneNumber}
            </p>
            <input
              type="submit"
              value="ورود"
              className={` py-2 w-full rounded ${
                errorMessagePhoneNumber.length
                  ? " text-gray-6  bg-gray-3 "
                  : " bg-primaryGreen text-white cursor-pointer"
              }`}
              disabled={errorMessagePhoneNumber.length ? true : false}
            />
          </form>
        )}
        {isReceiveCode && (
          <ReceiveCode
            phoneNumber={phoneNumber}
            isReceiveCode={isReceiveCode}
            setIsReceiveCode={setIsReceiveCode}
          />
        )}
        {!isReceiveCode && (
          <div className="text-[10px]">
            <p>
              ورود و عضویت در ترخینه به منزله قبول{" "}
              <a href="#" className=" text-primaryGreen">
                قوانین
              </a>{" "}
              و{" "}
              <a href="#" className=" text-primaryGreen">
                مقررات
              </a>{" "}
              است.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
let currentIndex = 0;
const ReceiveCode = ({ phoneNumber, isReceiveCode, setIsReceiveCode }) => {
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(0);
  const [loginCode, setLoginCode] = useState<string>("12345");
  const [error, setError] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [progressError, setProgressError] = useState<boolean>(false);
  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentIndex] = value.substring(value.length - 1);
    if (!value) setActiveOtpIndex(currentIndex - 1);
    else setActiveOtpIndex(currentIndex + 1);
    setOtp(newOtp);
    console.log(currentIndex, value);
  };
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentIndex - 1);
    if (key === "ArrowRight") setActiveOtpIndex(currentIndex + 1);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes((prevState) => prevState - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds, loginCode]);
  const onSubmitCodeHandler = (e) => {
    e.preventDefault();
    if (otp.join("") !== loginCode) {
      setError("کد تائید نامعتبر !");
      setTimeout(() => {
        setProgressError(true);
      }, 1000);
      setTimeout(() => {
        setProgressError(false);
      }, 5000);
    } else {
      setError("");
    }
  };
  return (
    <form
      className={`flex flex-col justify-center items-center gap-6 w-full py-10 lg:gap-1 lg:py-0 ${
        isReceiveCode ? "w-full" : "w-0 h-0"
      } duration-500 ease-linear relative overflow-hidden`}
      onSubmit={onSubmitCodeHandler}
    >
      <h1 className=" font-bold text-gray-8 ">کد تائید</h1>
      <p className=" text-sm text-gray-7 lg:pb-6">
        کد تایید پنج‌رقمی به شماره {phoneNumber} ارسال شد.
      </p>{" "}
      <div className=" flex w-full gap-4" dir="ltr">
        {otp.map((_, index) => {
          return (
            <input
              type="text"
              ref={activeOtpIndex === index ? inputRef : null}
              maxLength={1}
              className={`w-full px-4 py-3  rounded   text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                error.length
                  ? " border-2 border-error focus:outline-error"
                  : " focus:outline-primaryGreen border border-gray-5"
              } `}
              key={index}
              pattern="\d*"
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full lg:mb-6">
        {seconds === 0 && minutes === 0 ? (
          <a
            href="#"
            className="text-[10px] text-primaryGreen "
            onClick={() => {
              setMinutes(2);
              setLoginCode("12345");
            }}
          >
            {" "}
            دریافت مجدد کد
          </a>
        ) : (
          <p className="text-[10px] flex justify-center items-center gap-[2px] ">
            <Clock size={16} />
            <span className=" text-primaryGreen">
              {minutes}:{seconds > 9 ? seconds : `0${seconds}`}{" "}
            </span>{" "}
            تا دریافت مجدد کد
          </p>
        )}
        <a
          href="#"
          className="text-[10px] hover:text-primaryGreen"
          onClick={() => {
            setIsReceiveCode(false);
          }}
        >
          ویرایش شماره
        </a>
      </div>
      <p className="w-full text-center text-[10px] text-error-light ">
        {" "}
        کد ورود ۱۲۳۴۵
      </p>
      <input
        type="submit"
        value="ثبت کد"
        className={` py-2 bg-gray-3 w-full rounded text-gray-6 mb-4 ${
          otp.join("").length !== 5
            ? " text-gray-6  bg-gray-3 "
            : " bg-primaryGreen text-white cursor-pointer"
        }`}
        disabled={otp.join("").length === 5 ? false : true}
      />
      <span
        className={`text-[10px] text-error bg-error-extralight font-semibold px-1 py-1 flex flex-col gap-1 rounded-md justify-center items-center  bottom-0 ${
          error.length ? " translate-y-0 block " : "translate-y-40 "
        } duration-700 ease-in ${
          !progressError ? "translate-y-40" : "translate-y-0 block "
        }`}
      >
        <CloseCircle
          size={5}
          className=" text-gray-6 self-start"
          onClick={() => setProgressError(false)}
        />
        <span className="px-2"> {error}</span>
        <div className=" w-full  bg-gray-4 h-1 rounded-lg overflow-hidden relative">
          <div
            className={`w-full h-full bg-error absolute top-0 left-0 rounded duration-[2000ms] ${
              progressError ? "translate-x-0" : " -translate-x-32"
            } ease-in`}
          ></div>
        </div>
      </span>
    </form>
  );
};
