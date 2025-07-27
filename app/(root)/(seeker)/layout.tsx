import Footer from "@/components/shared/Footer";
import SeekerHeader from "@/components/shared/Header/SeekerHeader";
import SeekerNavbar from "@/components/shared/Navbar/SeekerNavbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="bg-[color:var(--accentTwo)] w-full flex flex-col justify-center items-center">
        <SeekerNavbar />
        <SeekerHeader />
      </div>
      {children}
      <Footer />
    </div>
  )
};