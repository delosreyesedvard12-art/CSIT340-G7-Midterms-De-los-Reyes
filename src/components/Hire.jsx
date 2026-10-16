import { useState } from "react";

export default function Hire({ rate }) {
  const [hours, setHours] = useState(0);

  function handleAddHour() {
    setHours((currentHours) => currentHours + 1);
  }

  function handleClear() {
    setHours(0);
  }

  return (
    <div className="w-fit rounded-xl bg-[#FAF3E1] p-4 text-center">
      <p className="text-2xl font-bold text-[#FA8112]">
        Hire me for{" "}
        <span className="text-[#222222]">PHP {rate} per hour</span>
      </p>

      <p className="my-4 text-lg">
        {hours} {hours === 1 ? "hour" : "hours"} · Total: PHP {rate * hours}
      </p>

      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
          onClick={handleAddHour}
        >
          Add hour
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#FA8112] px-8 py-3 text-xl font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
