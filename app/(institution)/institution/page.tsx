import React, { useEffect } from "react";
import Image from "next/image";
import db from "../../inMemoryRepo";
import Ranking from "../../components/Ranking";
import TeachersList from "../../components/TeachersList";
import Stats from "../../components/Stats";
import Classes from "@/app/components/Classes";

const page = () => {
  return (
    <div className="p-4 w-full h-full max-h-[98vh]">
      <div className="flex flex-row justify-between">
        <h1 className="text-white text-5xl font-medium">Painel Principal</h1>
        <div className="bg-white rounded-md p-2 flex gap-3">
          <div className="flex flex-col">
            <h2 className="text-black text-1xl font-medium">
              {db.institutions[0].nome}
            </h2>
            <p className="text-right">{db.institutions[0].endereco}</p>
          </div>
          <Image
            src={db.institutions[0].imgUrl as string}
            alt="logo da sua instituição"
            width={50}
            height={50}
            className="rounded-sm"
            priority
          ></Image>
        </div>
      </div>
      <div className="bg-white w-full h-[100%] m-2 rounded-lg p-4 overflow-y-scroll">
        <div className="flex flex-wrap  gap-x-4 gap-y-1 ">
          <Ranking />
          <Stats />
          <TeachersList />
          <Classes />
        </div>
      </div>
    </div>
  );
};

export default page;
