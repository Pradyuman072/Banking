
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName:"Pradyuman",lastName:"Sharma"}
  return (
   <main className="flex h-screen w-full font-inter">
    {/* sidebar */}
    <Sidebar user={loggedIn}/>
    <div className="flex flex-col size-full">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
        <div className="">
          <MobileNavbar user={loggedIn}/>
        </div>
      </div>  {children}
    </div>
  
   </main>
  );
}
