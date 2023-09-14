import { useEffect, useState } from "react";
import spiderwebimg from "../../assets/spiderweb.svg";
import Button from "../Button/Button";
import { ArrowRight2, CloseCircle, Edit, Edit2, Trash } from "iconsax-react";
import GoogleMapReact from "google-map-react";
import GeneralInput from "../GeneralInput/GeneralInput";
import CardPopUpBox from "../CardPopUpBox/CardPopUpBox";
const AnyReactComponent = ({
  text,
}: {
  lat: number;
  lng: number;
  text: string;
}) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 51.4934,
    lng: 0.0098,
  },
  zoom: 11,
};
type addressType = {
  id: number;
  addressTitle: string;
  phoneNumber: string;
  address: string;
  reciver: boolean;
  nameFamily: string;
};
function Address() {
  const [popUpAddress, setPopUpAddress] = useState(false);
  const [popUpAddressSubmit, setPopUpAddressSubmit] = useState(false);
  const [addresses, setAddresses] = useState<addressType[]>([]);
  const [isEdit, setIsEdit] = useState(-1);
  const [isTrashCard, setIsTrashCard] = useState<number | null>(null);
  // const [isDeleteAddress, setIsDeleteAddress] = useState(false);
  const trashHandler = (id: number) => {
    const filteredAddress = addresses.filter((address) => address.id !== id);
    setAddresses(filteredAddress);
  };
  return (
    <>
      <div className=" w-full h-screen absolute top-0 right-0   px-6 bg-white md:static  md:h-[500px] md:w-4/5  md:border md:border-gray-4 md:rounded-md z-30 ">
        <header className="  flex justify-center items-center  py-6 md:border-b md:border-b-gray-5 mb-2 ">
          <ArrowRight2 className=" md:hidden" />
          <h1 className="w-full text-center md:text-start">آدرس ها</h1>
          {addresses.length ? (
            <div
              className=" hidden md:flex  text-primaryGreen text-xs w-full justify-end items-center gap-2 cursor-pointer"
              onClick={() => setPopUpAddress(true)}
            >
              <CloseCircle size={16} className=" rotate-45" />
              <p>افزودن آدرس جدید</p>{" "}
            </div>
          ) : null}
        </header>
        {addresses.length ? (
          <div className="w-full grid md:grid-cols-2 gap-3 mdd:gap-4 mt-4 ">
            {addresses.map((address) => {
              return (
                <div
                  key={address.id}
                  className=" bg-gray-1 border border-gray-4 rounded-lg p-4 flex flex-col gap-2 justify-between  text-gray-8"
                >
                  <div className=" flex justify-between items-center gap-1">
                    <div
                      className={` text-start text-[10px] md:text-sm  ${
                        address.address.length > 80
                          ? " overflow-hidden text-ellipsis whitespace-nowrap "
                          : ""
                      }`}
                    >
                      {address.address}
                    </div>
                    <div className=" flex gap-3">
                      <Trash
                        className=" w-4 h-4 md:w-6 md:h-6 cursor-pointer"
                        onClick={() => setIsTrashCard(address.id)}
                      />
                      <Edit2
                        className=" w-4 h-4 md:w-6 md:h-6 cursor-pointer"
                        onClick={() => {
                          setIsEdit(address.id);
                          setPopUpAddress(true);
                        }}
                      />
                    </div>
                  </div>
                  <div className=" flex justify-between items-center w-full text-gray-7 text-[10px] md:text-sm">
                    <p>{address.addressTitle}</p>
                    <p>{address.nameFamily}</p>
                    <p>{address.phoneNumber}</p>
                  </div>
                  {isTrashCard === address.id && (
                    <CardPopUpBox
                      title="حذف  آدرس"
                      description="آیا آدرس حذف شود؟"
                      buttonTitle="حذف آدرس"
                      action={() => trashHandler(address.id)}
                      setIsCloseCard={setIsTrashCard}
                    />
                  )}
                </div>
              );
            })}
            <div className=" flex justify-center items-center">
              <Button ExtraClass=" bg-white !text-primaryGreen px-4 py-2 hover:!bg-primaryGreen border border-primaryGreen hover:!text-white md:hidden ">
                افزودن آدرس جدید
              </Button>
            </div>
          </div>
        ) : (
          <div className="  h-96 flex flex-col gap-6 justify-center items-center ">
            <div className=" relative  flex flex-col justify-center items-center ">
              <div>
                <img src={spiderwebimg} alt="img" />
              </div>
              <h1 className=" absolute top-16 text-gray-6 w-max">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </h1>
              <div
                onClick={() => {
                  setPopUpAddress(!popUpAddress);
                }}
              >
                <Button ExtraClass=" w-max absolute left-1/2 top-3/4  -translate-x-1/2 -translate-y-1/2 p-2 px-16 md:px-24 bg-white !text-primaryGreen flex items-center gap-2 border hover:!text-white  ">
                  <span>افزودن آدرس </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {popUpAddress && (
        <AddressPopUp
          popUpAddress={popUpAddress}
          setPopUpAddress={setPopUpAddress}
          popUpAddressSubmit={popUpAddressSubmit}
          setPopUpAddressSubmit={setPopUpAddressSubmit}
        />
      )}
      {popUpAddressSubmit && (
        <AddressSubmit
          setPopUpAddressSubmit={setPopUpAddressSubmit}
          addresses={addresses}
          setAddresses={setAddresses}
          setPopUpAddress={setPopUpAddress}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}

export default Address;
const AddressPopUp = ({
  setPopUpAddress,
  popUpAddress,
  setPopUpAddressSubmit,
  popUpAddressSubmit,
}: {
  setPopUpAddress: (value: boolean) => void;
  popUpAddress: boolean;
  setPopUpAddressSubmit: (value: boolean) => void;
  popUpAddressSubmit: boolean;
}) => {
  return (
    <>
      {popUpAddress && (
        <div className=" flex justify-center items-start  absolute md:fixed top-0 right-0 w-full h-screen bg-white md:bg-transparent z-30">
          <div
            className="md:absolute md:w-full md:h-full md:bg-black/75   md:backdrop-blur-sm"
            onClick={() => {
              setPopUpAddress(false);
            }}
          ></div>
          <div className="relative w-full h-full">
            <div
              className={` fixed   flex justify-center items-start  md:top-32 w-full h-full `}
            >
              <div className="  w-full h-screen  md:w-[600px] md:h-max overflow-hidden bg-white md:rounded-lg ">
                <div className=" w-full flex items-center justify-between p-6 md:bg-gray-3  md:rounded-t-lg">
                  <ArrowRight2 className=" md:hidden" />
                  <h2 className=" w-full text-center font-semibold text-xl text-gray-8">
                    افزودن آدرس
                  </h2>
                  <CloseCircle
                    className="hidden md:block text-gray-7 cursor-pointer"
                    onClick={() => {
                      setPopUpAddress(false);
                    }}
                  />
                </div>
                <div className=" h-[80vh] w-full md:h-[50vh] relative">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
                <div
                  className="absolute bottom-32 md:bottom-64 right-[30%] md:right-[38%]  "
                  onClick={() => {
                    setPopUpAddressSubmit(!popUpAddressSubmit);
                    setPopUpAddress(!popUpAddress);
                  }}
                >
                  <Button ExtraClass="  p-2 px-16 md:px-24 ">ثبت موقعیت</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const AddressSubmit = ({
  setPopUpAddressSubmit,
  addresses,
  setAddresses,
  setPopUpAddress,
  isEdit,
  setIsEdit,
}: {
  addresses: addressType[];
  setPopUpAddressSubmit: (value: boolean) => void;
  setAddresses: (value: addressType[]) => void;
  setPopUpAddress: (value: boolean) => void;
  isEdit;
  setIsEdit: (value: number) => void;
}) => {
  const [address, setAddress] = useState<addressType>({
    id: new Date().getTime(),
    addressTitle: "",
    phoneNumber: "",
    address: "",
    nameFamily: "",
    reciver: false,
  });

  useEffect(() => {
    if (isEdit !== -1) {
      const filteredAddressEdit = addresses.filter(
        (address) => address.id === isEdit
      );
      if (filteredAddressEdit.length !== 0) setAddress(filteredAddressEdit[0]);
    }
  }, [addresses, isEdit]);
  const onChangeHandlerCheckBox = () => {
    setAddress({ ...address, reciver: !address.reciver });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const SubmitAdressHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit === -1) {
      setAddresses([...addresses, address]);
      setPopUpAddressSubmit(false);
      console.log(addresses);
    } else {
      const filteredAddressEdit = addresses.filter(
        (address) => address.id !== isEdit
      );
      console.log(filteredAddressEdit);
      setAddresses([...filteredAddressEdit, address]);
      setIsEdit(-1);
      setPopUpAddressSubmit(false);
    }
  };
  return (
    <div className=" flex justify-center items-start absolute md:fixed top-0 right-0 w-full h-screen bg-white md:bg-transparent z-30  ">
      <div
        className="md:absolute md:w-full md:h-full md:bg-black/75   md:backdrop-blur-sm"
        onClick={() => {
          setPopUpAddressSubmit(false);
        }}
      ></div>
      <div className="relative w-full h-full">
        <div
          className={` fixed   flex justify-center items-start  md:top-24 w-full h-full `}
        >
          <div className="  w-full h-screen  md:w-[600px] md:h-max overflow-hidden bg-white md:rounded-lg ">
            <div className=" w-full flex items-center justify-between p-6 md:bg-gray-3  md:rounded-t-lg">
              <ArrowRight2 className=" md:hidden" />
              <h2 className=" w-full text-center font-semibold text-xl text-gray-8">
                {isEdit ? "ویرایش آدرس" : "  ثبت آدرس"}
              </h2>
              <CloseCircle
                className="hidden md:block text-gray-7 cursor-pointer"
                onClick={() => {
                  setPopUpAddressSubmit(false);
                }}
              />
            </div>
            <div className=" h-60 w-full p-4 px-5 md:hidden relative">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
              <div
                className=" absolute bottom-5 right-10 bg-primaryGreen p-2 rounded cursor-pointer hover:bg-shade-4"
                onClick={() => {
                  setPopUpAddressSubmit(false);
                  setPopUpAddress(true);
                }}
              >
                <Edit size={16} color="white" />
              </div>
            </div>
            <form
              className=" p-6 flex flex-col gap-4"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                SubmitAdressHandler(e)
              }
            >
              <GeneralInput
                tag={`input`}
                name="addressTitle"
                type="text"
                placeHolder="عنوان آدرس"
                value={address.addressTitle}
                onChange={(e) => handleOnChange(e)}
              />
              <div className=" flex gap-2 items-center">
                <input
                  type="checkbox"
                  className=" accent-primaryGreen"
                  onChange={onChangeHandlerCheckBox}
                />
                <label htmlFor="#" className=" text-gray-7 text-sm">
                  تحویل گیرنده خودم هستم.
                </label>
              </div>
              {!address.reciver ? (
                <>
                  <GeneralInput
                    tag={`input`}
                    name="nameFamily"
                    type="text"
                    placeHolder="نام و نام خانوادگی گیرنده"
                    value={address.nameFamily}
                    onChange={(e) => handleOnChange(e)}
                  />{" "}
                  <GeneralInput
                    tag={`input`}
                    name="phoneNumber"
                    type="text"
                    placeHolder="شماره همراه گیرنده"
                    value={address.phoneNumber}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <GeneralInput
                    tag={`textarea`}
                    name="address"
                    placeHolder="آدرس دقیق گیرنده"
                    value={address.address}
                    onChange={(e) => handleOnChange(e)}
                  />
                </>
              ) : (
                <>
                  <GeneralInput
                    tag={`input`}
                    name="phoneNumber"
                    type="tel"
                    placeHolder="شماره همراه"
                    value={address.phoneNumber}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <GeneralInput
                    tag={`textarea`}
                    name="address"
                    placeHolder="آدرس دقیق"
                    value={address.address}
                    onChange={(e) => handleOnChange(e)}
                  />
                </>
              )}
              <div className="flex justify-between md:gap-4 items-center [&>*]:w-full">
                <div
                  onClick={() => setPopUpAddressSubmit(false)}
                  className=" md:hidden"
                >
                  <Button ExtraClass="w-full bg-white !text-primaryGreen p-2 hover:!bg-primaryGreen hover:!text-white md:hidden ">
                    انصراف
                  </Button>
                </div>
                <div
                  onClick={() => {
                    setPopUpAddressSubmit(false);
                    setPopUpAddress(true);
                  }}
                >
                  <Button ExtraClass="w-full bg-white !text-primaryGreen p-2 hover:!bg-primaryGreen hover:!text-white hidden md:block ">
                    ویرایش آدرس انتخابی
                  </Button>
                </div>
                <Button type="submit" ExtraClass="w-full p-2">
                  ثبت آدرس انتخابی
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
