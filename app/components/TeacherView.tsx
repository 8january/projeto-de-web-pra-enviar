import React from "react";
import db from "../inMemoryRepo";
import { ITeacher } from "../inMemoryRepo/teachers";
import Image from "next/image";
const findTeacherById = (id: number): ITeacher | undefined => {
  return db.teachers.find((teacher) => teacher.id === id);
};
const TeacherView = ({
  id,
  setVisible,
}: {
  id: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const teacher = findTeacherById(id) as ITeacher;
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="bg-white w-2/5 h-3/5 rounded-md p-8">
        <div className="flex flex-col gap-2  font-bold text-2xl">
          <div className="flex gap-2 items-center">
            <Image
              src={teacher.imgUrl}
              alt="img"
              width={200}
              height={200}
              className="rounded-full h-[7rem] w-[7rem]"
            ></Image>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">{teacher.nome}</h1>
              <ul className="text-2xl font-bold flex gap-2    ">
                Turmas:{" "}
                {teacher.turmas.map((turma, index) => {
                  return <li key={index}>{turma}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="px-3 flex flex-col gap-4 m-2">
            <p>
              <span className="text-sky-800">Email Pessoal:</span>{" "}
              {teacher.emailpessoal ? teacher.emailpessoal : "indefinido"}
            </p>
            <p>
              <span className="text-lime-600">Email Institucional:</span>{" "}
              {teacher.emailinstitucional
                ? teacher.emailinstitucional
                : "indefinido"}
            </p>
            <ul className="flex gap-2">
              <span className="text-red-600">Materias Lecionadas:</span>{" "}
              {teacher.materiaslecionadas
                ? teacher.materiaslecionadas?.map((materia, index) => {
                    return <li key={index}>{materia}</li>;
                  })
                : "Indefinido"}
            </ul>
            <p>
              <span className="text-amber-400">Formação:</span>{" "}
              {teacher.formacao ? teacher.formacao : "Indefinido"}
            </p>
            <p>
              <span className="text-blue-500">Nivel Superior:</span>{" "}
              {teacher.nivelsuperior ? teacher.nivelsuperior : "Indefinido"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherView;
