import React from "react";
import Image from "next/image";
import db from "../inMemoryRepo";
const Ranking = () => {
  let rank = 1;
  return (
    <div className="bg-blue-500 rounded-md w-[18rem] p-3 text-white flex flex-col">
      <h1 className="text-3xl font-semibold">Ranking</h1>
      {db.students.map((student) => {
        return (
          <div
            key={student.id}
            className="bg-white rounded-md font-semibold text-black py-1 px-2 m-1 flex flex-row gap-2"
          >
            <p className="self-center text-xl">{rank++}º</p>
            <Image
              src={student.imgUrl as string}
              alt={`foto de ${student.nome}`}
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <div className="flex flex-col">
              <p>{student.nome}</p>
              <p>Turma: {student.turma}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
