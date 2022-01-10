import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { GiDiceFire } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div
    className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl servicecard lg:hover:pl-4"
    style={{ transition: "0.3s ease" }}
  >
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div
    className="flex w-full justify-center items-center gradient-bg-services"
    style={{
      background: "rgb(5,10,48)",
      background:
        "linear-gradient(90deg, rgba(5,10,48,1) 0%, rgba(60,5,65,1) 100%)",
    }}
  >
    <div className="flex mf:flex-row-reverse flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start lg:ml-28 mb-12 lg:mb-2">
        <h1 className="text-white text-6xl md:text-7xl py-3 text-gradient">
          Why choose Krysper ?
        </h1>
        <p className="text-left text-2xl my-4 text-white font-light md:w-9/12 w-11/12">
          Being a 100% secure, privacy focused and fun to use Ethereum transfer
          service with lightning fast transactions and the cheapest transaction
          rates in the market, Krysper is your best choice when it comes to
          Ethereum transfers.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#39c900]"
          title="100% Secure and Private"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Krysper is a privacy focused and 100% secure service. We do not collect or store any data about our customers. All the data is sourced from the blockchain itself."
        />
        <ServiceCard
          color="bg-[#FF69B4]"
          title="Fun to use"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="All transaction data is paired with a GIF image to make the experience a lot more fun and interesting."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Cheapest rates in the Market"
          icon={<GiReceiveMoney fontSize={21} className="text-white" />}
          subtitle="Krysper offers one of the lowest transaction fees in the market for transferring Ethereum. At just 0.000031
          ETH per transaction it's one of the cheapest services out there."
        />
        <ServiceCard
          color="bg-[#e25822]"
          title="Fastest transactions"
          icon={<GiDiceFire fontSize={21} className="text-white" />}
          subtitle="With minimal delays and processing overheads, Krysper is one of the fastest Ethereum remitting service in the market."
        />
      </div>
    </div>
  </div>
);

export default Services;
