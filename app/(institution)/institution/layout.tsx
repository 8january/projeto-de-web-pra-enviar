import React from "react";
import SideBar from "../../components/SIdeBar";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-full w-full bg-blue-500 max-h-[100vh]">
      <SideBar />
      {children}
    </div>
  );
}
