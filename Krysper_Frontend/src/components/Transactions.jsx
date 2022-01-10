import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl transactioncard"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2 font-bold">
          <div className="">
            <a
              href={`https://ropsten.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-base w-full p-2 rounded-full border-2 border-white my-2">
                From: {shortenAddress(addressFrom)}
              </p>
            </a>
            <a
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-base w-full p-2 rounded-full border-2 border-white my-2">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-white text-base w-full p-2 rounded-full border-2 border-white my-2">
              Amount: {amount} ETH
            </p>
          </div>
          {message && (
            <>
              <br />
              <p className="text-white text-lg">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl datebg">
          <p className="text-[#ffffff] font-bold date">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div
      className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"
      style={{
        background: "rgb(5,10,48)",
        background:
          "linear-gradient(90deg, rgba(5,10,48,1) 0%, rgba(60,5,65,1) 100%)",
      }}
    >
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl lg:text-6xl text-center my-2 lg:mt-20 lg:mb-16">
            Your latest transactions with a Fun GIF
          </h3>
        ) : (
          <h3 className="text-white text-4xl lg:text-6xl text-center mt-24 -mb-8">
            Connect your wallet to see the latest transactions here.
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
