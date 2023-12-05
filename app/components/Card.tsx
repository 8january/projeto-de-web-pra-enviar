"use client";
import db from "@/app/inMemoryRepo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

interface ICard {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
  query?: string;
}

const Card = ({ setVisible, setId, query }: ICard) => {
  const [teachers, setTeachers] = useState(db.teachers);

  React.useEffect(() => {
    if (query) {
      setTeachers(
        db.teachers.filter((teacher) => teacher.nome.startsWith(query))
      );
    } else {
      setTeachers(db.teachers);
    }
  }, [query]);
  return (
    <>
      {teachers.map((teacher) => {
        return (
          <div
            key={teacher.id}
            className="flex items-center gap-2 m-2 border-b-2 font-bold p-3 justify-between"
          >
            <div
              className="flex gap-2 items-center"
              onClick={() => {
                setVisible(true);
                setId(teacher.id);
              }}
            >
              <Image
                src={teacher.imgUrl}
                alt="imagem do professor"
                width={100}
                height={100}
                className="rounded-full  h-[75px] w-[75px]"
              ></Image>
              <div>
                <h2>{teacher.nome}</h2>
                <ul className="flex gap-1">
                  Turmas:
                  {teacher.turmas.map((turma, index) => {
                    return <li key={index}>{turma}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="flex gap-2 text-white">
              <Link
                href={""}
                className="px-3 py-2 bg-yellow-400 rounded-md flex items-center gap-3"
              >
                <FaPen />
                Editar
              </Link>
              <button
                className="px-3 py-2 bg-red-600 rounded-md flex items-center gap-3"
                onClick={() => {
                  setTeachers(
                    teachers.filter((teacherDb) => teacherDb.id !== teacher.id)
                  );
                }}
              >
                <FaTrash />
                Excluir
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
