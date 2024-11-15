import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function PromotedProductCard() {
  return (
    <div className="bg-[#4779CC08] p-3 flex justify-between items-center rounded-md  ">
      <div className="flex items-center gap-5">
        <img className="w-[100px] border-[5px]" src="/promo.png"></img>
        <div>
          <p className="text-xl font-medium">Dunlop Wheel</p>
          <p>₹ 700</p>
        </div>
      </div>
      <button className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full">
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}
