import React from "react";
import SmallCard from "./Smallcard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Tody Orders",
      numbers: 150,
      iconBg: "bg-green-600",
      icon:ShoppingCart,
    },
    {
      title: "Orders Pending",
      numbers: 100,
      iconBg: "bg-blue-600",
      icon:Loader2,
    },
    {
      title: "Orders Processing",
      numbers: 200,
      iconBg: "bg-orange-600",
      icon:RefreshCcw,
    },
    {
      title: "Orders Delivered",
      numbers: 300,
      iconBg: "bg-purple-600",
      icon:CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
      {
        orderStatus.map((data,i)=>{
            return(
                <SmallCard key={i} className=" bg-green-600" data={data} />
            )
        })
      }
    </div>
  );
}