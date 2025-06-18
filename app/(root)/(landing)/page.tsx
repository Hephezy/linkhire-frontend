import Category from "@/components/seeker/Category";
import NewJobs from "@/components/seeker/NewJobs";

export default function Home() {
  return (
    <section className="flex w-[95%]">
      <div className="flex flex-col w-full mt-6">
        <Category />
        <NewJobs />
      </div>
    </section>
  );
};
