import clsx from "clsx";
import { ArrowRightLeft, LayoutDashboard } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("dashboard");

  const handleNav = (state: string) => {
    setActive(state);
  };

  return (
    <div className="flex flex-col gap-6 w-3xs h-screen p-4 ">
      <div className="flex flex-row items-center justify-between">
        <h1 id="title" className="text-3xl font-bold text-accent">
          Perofin
        </h1>
        <p id="versions" className="text-base">
          v1.0
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="font-semibold text-sm text-gray-900 opacity-70">
          GENERAL
        </p>
        <ul className="flex flex-col gap-4 font-semibold">
          <li
            onClick={() => handleNav("dashboard")}
            className={clsx(
              "cursor-pointer p-2 flex flex-row gap-4",
              active === "dashboard"
                ? "font-bold bg-accent rounded-2xl text-textAlt"
                : ""
            )}
          >
            <LayoutDashboard />
            Dashboard
          </li>
          <li
            onClick={() => handleNav("transaction")}
            className={clsx(
              "cursor-pointer p-2 flex flex-row gap-4",
              active === "transaction"
                ? "font-bold bg-accent rounded-2xl text-textAlt"
                : ""
            )}
          >
            <ArrowRightLeft />
            Transactions
          </li>
        </ul>
      </div>
    </div>
  );
};
