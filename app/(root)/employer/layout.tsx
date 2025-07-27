import Footer from "@/components/shared/Footer";
import EmployerHeader from "@/components/shared/Header/EmployerHeader";
import EmployerNavbar from "@/components/shared/Navbar/EmployerNavbar";

export default function EmployerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="bg-[color:var(--accentTwo)] w-full flex flex-col justify-center items-center">
        <EmployerNavbar />
        <EmployerHeader />
      </div>
      {children}
      <Footer />
    </div>
  )
};