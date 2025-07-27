import DoughnutChartCard from "@/components/charts/DoughnutChart";
import Stats from "@/components/shared/Stats";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SeekerDashboardHome() {
  return (
    <section className="flex flex-row w-full gap-4">
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="py-4 px-6 rounded-2xl bg-white flex flex-row justify-between gap-5">
          <div className="flex flex-rwo gap-2 items-center">
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
        <div className="p-4 rounded-2xl bg-white"></div>
      </div>
      <div className="flex flex-col gap-4 w-[30%]">
        <div className="p-4 rounded-2xl bg-white">
          <DoughnutChartCard
            title="Status of Application"
            percentage={15}
            labels={['Under Review', 'Accepted', 'Rejected']}
            values={[0, 0, 0]}
            colors={['#4B0082', '#9370DB', '#D8BFD8']}
            footerText="January, 2025"
          />

        </div>
        <div className="p-4 rounded-2xl bg-white"></div>
      </div>
    </section>
  )
};