import react from "react";
import Bio from "./Bio";
import StatCard from "./StatCard";
import Hire from "./Hire";

export default function Profile({followers, rate}) {
  return (
    <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
      <Bio />
      <StatCard followers={followers} rate={rate} />
      <Hire rate={rate} />
    </div>
    );
}