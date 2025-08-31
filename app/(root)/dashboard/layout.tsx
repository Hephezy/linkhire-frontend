import LeftSideBar from "@/components/shared/LeftSideBar";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[#F9F9F9] relative p-3 flex flex-row gap-4 w-full">
      <LeftSideBar />
      <div className="flex flex-col gap-4 w-full lg:ml-[266px]">
        <DashboardNavbar />
        {children}
      </div>
    </section>
  );
}