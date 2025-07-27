import Achievement from "@/components/seeker/Achievement";
import Category from "@/components/seeker/Category";
import NewJobs from "@/components/seeker/NewJobs";
import SeekerCTA from "@/components/seeker/SeekerCTA";
import Steps from "@/components/seeker/Steps";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col w-[95%] mt-6">
        <Category />
        <NewJobs />
        <Steps />
        <Achievement />
      </div>
      <div className="w-full">
        <SeekerCTA />
      </div>
    </section>
  );
};
