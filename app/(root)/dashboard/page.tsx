import DoughnutChartCard from "@/components/charts/DoughnutChart";
import Stats from "@/components/shared/Stats";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DemoSavedJobs } from "@/constants";

export default function SeekerDashboardHome() {

  const isSavedJobs = DemoSavedJobs.length > 0;

  return (
    <section className="flex flex-row w-full gap-4">
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="py-4 px-6 rounded-2xl bg-white flex flex-row justify-between gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/images/profileImage.png"
              alt="profileImage"
              width={88}
              height={88}
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">
                <span className="text-[color:var(--main)] mr-1">70%</span>
                of Your Resume is Complete
              </h2>
              <h4 className="font-normal text-sm">Almost there! Just a little more effort to make it perfect.</h4>
              <Image
                src="/images/progress.png"
                alt="progress"
                width={286}
                height={6}
              />
              <h4 className="mt-3 text-[#003E93]">Complete your resume</h4>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Card className="rounded-xl p-2 flex flex-col gap-2">
              <Image
                src="/icons/view.png"
                alt="view"
                width={32}
                height={32}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <h3 className="font-semibold text-lg">5</h3>
                  <h4 className="font-semibold text-sm">people</h4>
                </div>
                <h2 className="font-medium text-sm">viewed your profile</h2>
              </div>
            </Card>
            <Card className="rounded-xl p-2 flex flex-col gap-2">
              <Image
                src="/icons/like.png"
                alt="like"
                width={32}
                height={32}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <h3 className="font-semibold text-lg">10</h3>
                  <h4 className="font-semibold text-sm">people</h4>
                </div>
                <h2 className="font-medium text-sm">liked your resume</h2>
              </div>
            </Card>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white">
          <Stats />
        </div>
        <div className="p-4 rounded-2xl bg-white">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <h2 className="text-black font-semibold text-[16px]">Save Jobs</h2>
              <Link
                href="/"
                className={`flex flex-row gap-3 ${isSavedJobs ? "text-[color:var(--main)]" : "text-[#A5A5A5]"}`}
              >
                view all
                <ArrowRight />
              </Link>
            </div>
            <div>
              {!isSavedJobs ? (
                <div className="text-center justify-center items-center">
                  <h2 className="text-[#A5A5A5] font-medium text-[16px]">
                    You have no saved jobs
                  </h2>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {DemoSavedJobs.map((item, index) => (
                    <Card
                      key={index}
                      className="flex flex-row justify-between p-4"
                    >
                      <div className="flex flex-row gap-2">
                        <Image
                          src={item.image}
                          alt={item.companyName + item.jobTitle}
                          width={40}
                          height={40}
                        />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-[14px] font-medium text-black">
                            {item.jobTitle}
                          </h2>

                          <div className="flex flex-row gap-1.5 text-[12] font-normal">
                            <p>{item.companyName}</p>
                            .
                            <p>{item.jobType}</p>
                            .
                            <p>{item.location}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm text-[#DC0000]">
                          {item.timeLeft} {item.timeLeft === 1 ? "day" : "days"} to apply
                        </h2>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[30%]">
        <div className="p-4 rounded-2xl bg-white">
          <DoughnutChartCard
            title="Status of Application"
            percentage={15}
            labels={["Under Review", "Accepted", "Rejected"]}
            values={[0, 0, 0]}
            colors={["#4B0082", "#9370DB", "#D8BFD8"]}
            footerText="January, 2025"
          />
        </div>
        <div className="p-4 rounded-2xl bg-white">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <h2 className="text-black font-semibold text-[16px]">Messages</h2>
              <Link
                href="/"
                className={`flex flex-row gap-3 ${isSavedJobs ? "text-[color:var(--main)]" : "text-[#A5A5A5]"}`}
              >
                more
                <ArrowRight />
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}