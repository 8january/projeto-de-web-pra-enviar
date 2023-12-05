"use client";
import React, { FormEvent, useState } from "react";

import Card from "@/app/components/Card";
import TeacherView from "@/app/components/TeacherView";

const page = () => {
  const [visible, setVisible] = React.useState(false);
  const [id, setId] = React.useState(-1);
  const reference = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = React.useState("");
  function processForm(e: FormEvent) {
    e.preventDefault();
    const inputValue = reference.current?.value || "";
    setQuery(inputValue);
  }

  return (
    <div className="bg-[url(/elipses.svg)] bg-center bg-cover bg-no-repeat h-full w-full flex justify-center items-center flex-col bg-[#134D86] ">
      {visible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
          <TeacherView id={id} setVisible={setVisible} />
        </div>
      )}
      <div className="bg-white h-[85%] w-[80%] p-3 flex flex-col rounded-md">
        <div className="flex justify-between">
          <h1 className="text-blue-500 text-4xl font-medium">
            Lista de Professores
          </h1>
          <form
            action=""
            className="flex flex-col justify-start"
            onSubmit={processForm}
          >
            <input
              type="text"
              placeholder="Pesquisar"
              className=" bg-gray-400 placeholder:text-gray-800 px-2 py-1 rounded-full m-1"
              ref={reference}
            />
            <p className="m-1 text-blue-400 font-medium">Filtros</p>
          </form>
        </div>
        <div>
          <Card setVisible={setVisible} setId={setId} query={query} />
        </div>
      </div>
    </div>
  );
};

export default page;
