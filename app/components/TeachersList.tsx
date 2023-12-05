import React from "react";
import Image from "next/image";
import db from "../inMemoryRepo";
import Link from "next/link";

const TeachersList = () => {
  return (
    <div className="m-2">
      <h1 className="text-lime-600 text-3xl font-semibold">Professores</h1>
      <div className="bg-amber-400 rounded-md w-[20rem] p-3 text-white flex flex-col">
        {db.teachers.slice(0, 3).map((teacher) => {
          return (
            <div
              key={teacher.id}
              className="bg-white rounded-md font-semibold text-black py-1 px-2 m-1 flex flex-row gap-2"
            >
              <Image
                src={teacher.imgUrl as string}
                alt={`foto de ${teacher.nome}`}
                width={50}
                height={50}
                className="rounded-full"
              ></Image>
              <div className="flex flex-col">
                <p>{teacher.nome}</p>
                <ul className="flex flex-row gap-1">
                  Turmas:{" "}
                  {teacher.turmas.map((turma, index) => {
                    return <li key={index}>{turma}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        <Link
          href={"/teachers"}
          className="text-center text-xl font-medium  underline"
        >
          + Mais professores
        </Link>
      </div>
    </div>
  );
};

export default TeachersList;
