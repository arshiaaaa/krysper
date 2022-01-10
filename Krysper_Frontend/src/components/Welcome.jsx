import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import welcomeImage from "../welcomeimage.png";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-full p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div
      className="flex w-full justify-start items-center"
      style={{
        background: "rgb(5,10,48)",
        background:
          "linear-gradient(90deg, rgba(5,10,48,1) 0%, rgba(60,5,65,1) 100%)",
      }}
    >
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-5xl xl:text-7xl text-white text-gradient py-1">
            Sending Ethereum <br /> can be fun!
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Krysper is an Ethereum based crypto remittance platform developed by{" "}
            <a href={"https://www.linkedin.com/in/arshiasandhu/"}>
              <b> Arshia Sandhu </b>
            </a>
            that allows you to send Ethereum to anyone safely and securely using
            the MetaMask&nbsp;<sup style={{ fontSize: "8px" }}>TM</sup> wallet
            and records all your transactions with a fun GIF.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-6 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Your Wallet
              </p>
            </button>
          )}
          <div className="w-full flex justify-center items-center lg:justify-start lg:items-start -ml-8 mt-4">
            <img src={welcomeImage} />
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div
            className="p-3 flex justify-end items-start flex-col rounded-xl h-60 sm:w-96 w-full my-5 eth-card .white-glassmorphism hover:mb-16 lg:hover:mr-16"
            style={{ transition: "0.3s ease" }}
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-lg">
                  Your Wallet {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-3xl mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"
            style={{ transition: "0.3s ease" }}
          >
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                style={{ transition: "0.3s ease" }}
                className="text-white w-full mt-2 border-[1px] p-2 rounded-full cursor-pointer sendbtn"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
