import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full h-screen justify-center items-center py-3 px-9">
      <div className="w-1/2 h-fit">
        {children}
      </div>
      <div className="w-1/2 h-fit">
        <Image
          src="/images/authImage.png"
          alt="auth image"
          width={560}
          height={500}
        />
      </div>

    </div>
  )
};