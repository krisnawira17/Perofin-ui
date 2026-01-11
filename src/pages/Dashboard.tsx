import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BanknoteArrowDown, BanknoteArrowUp, Diff } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="font-base text-xl">
          Welcome,{" "}
          <span className="text-primary font-semibold">
            Krisna Wira Indrawan
          </span>
        </p>
        <Button className="w-36 h-10">Add +</Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-baseline gap-4 w-full">
        <Card className="flex flex-1 w-full">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2 b">
              <BanknoteArrowUp />
              <p>Income</p>
            </CardTitle>
            <CardDescription>Your income for this month</CardDescription>
          </CardHeader>
          <CardContent className="font-bold text-3xl">
            Rp.100.000.000
          </CardContent>
        </Card>
        <Card className="flex flex-1 w-full">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
              <BanknoteArrowDown />
              <p>Expenses</p>
            </CardTitle>
            <CardDescription>Your expenses for this month</CardDescription>
          </CardHeader>
          <CardContent className="font-bold text-3xl">
            Rp.100.000.000
          </CardContent>
        </Card>
        <Card className="flex flex-1 w-full">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
              <Diff />
              <p>Ratio</p>
            </CardTitle>
            <CardDescription>Income / Expense ratio</CardDescription>
          </CardHeader>
          <CardContent className="font-bold text-3xl">0.5</CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
