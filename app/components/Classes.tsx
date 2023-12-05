import React from "react";
import db from "../inMemoryRepo";

const Classes = () => {
  return (
    <div className="m-2">
      <h1 className="text-lime-600 text-3xl font-semibold">Turmas</h1>
      <div className="bg-lime-600 rounded-md max-w-[50rem] w-[48rem] h-[15rem] p-3 text-white flex flex-row flex-wrap justify-center">
        {db.classes.map((turma) => {
          return (
            <div
              key={turma.id}
              className="bg-white rounded-md font-semibold text-black py-1 px-2 m-1 flex flex-row gap-2 w-[45%] h-[45%]"
            >
              <div className="flex flex-col">
                <p>{turma.nome}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
