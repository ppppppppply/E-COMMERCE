import React from "react";
import Largecard from "./Largecard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Tody Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      period: "This month",
      sales: 30000000,
      color: "bg-orange-600",
    },
    {
      period: "All-Time Sales",
      sales: 5000000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
      {
        orderStats.map((item,i)=>{
            return(
                <Largecard key={i} className=" bg-green-600" data={item} />
            )
        })
      }
    </div>
  );
}
