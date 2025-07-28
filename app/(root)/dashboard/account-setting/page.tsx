import DevicesCard from "@/components/cards/settings/DevicesCard";
import EmailCard from "@/components/cards/settings/EmailCard";
import NameCard from "@/components/cards/settings/NameCard";
import NotificationCard from "@/components/cards/settings/NotificationCard";
import SecurityCard from "@/components/cards/settings/SecurityCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function SeekerAccountSettingHome() {
  return (
    <section className="flex flex-row w-full gap-4 mb-6">
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="flex flex-col p-4 rounded-2xl bg-white gap-3 w-full">
          <NameCard />
          <EmailCard />
          <SecurityCard />
          <NotificationCard />

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
        <div className="p-4 rounded-2xl bg-white">
          <DevicesCard />
        </div>
        <div className="p-4 rounded-2xl bg-white flex flex-col gap-4 ">
          <div className="flex flex-col gap-3 px-2">
            <div className="flex w-fit rounded-full p-2 bg-[#EFF5FF]">
              <Image
                src="/icons/lock.png"
                alt="lock"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">Why isn’t my info shown here?</h2>

              <p className="font-medium text-sm mt-3 text-[#757575]">
                We’re hiding some account details to protect your identiWe’re
                hiding some account details to protect your identity.We’re hiding
                ome account details to protect your identity.We’re hiding some account
                details to protect your identity.We’re hiding some
              </p>
            </div>
          </div>
          <Separator className='bg-[#ededed] w-[90%] justify-center' orientation="horizontal" />
          <div className="flex flex-col gap-3 px-2">
            <div className="flex w-fit rounded-full p-2 bg-[#EFF5FF]">
              <Image
                src="/icons/protected.png"
                alt="lock"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">Which details can be edited?</h2>

              <p className="font-medium text-sm mt-3 text-[#757575]">
                Details Airbnb uses to verify your identity can’t be changed.
                Contact info and some personal details can be edited, but we may
                ask you verify your identity the next time you book or create a listing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};