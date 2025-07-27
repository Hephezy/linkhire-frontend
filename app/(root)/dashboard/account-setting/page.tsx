import NameCard from "@/components/cards/settings/NameCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SeekerAccountSettingHome() {
  return (
    <section className="flex flex-row w-full gap-4">
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="flex flex-col p-4 rounded-2xl bg-white gap-3 w-full">
          <NameCard />
          <Card></Card>
          <Card></Card>
          <Card></Card>

          <div className="flex flex-row mt-6 items-center gap-6">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-semibold text-lg">Delete Account</h2>
              <p>
                We’d hate to see you go, but you’re welcome to delete your account anytime. Just remember, once you delete it, it’s gone forever.
              </p>
            </div>
            <div>
              <Button className="bg-[#DC0000] hover:bg-[#DC0000] cursor-pointer">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[30%]">
        <div className="p-4 rounded-2xl bg-white"></div>
        <div className="p-4 rounded-2xl bg-white"></div>
      </div>
    </section>
  )
};