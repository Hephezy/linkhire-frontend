import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="bg-[color:var(--accentTwo)] w-full flex flex-col justify-center items-center">
        <Navbar />
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  )
};