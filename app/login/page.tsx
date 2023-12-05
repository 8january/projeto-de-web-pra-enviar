"use client";
import React from "react";
import Image from "next/image";
import odisseia_src from "../../../public/Odisseia_logo2.svg";
import Link from "next/link";

import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  function submitProcess(e: React.FormEvent) {
    e.preventDefault();
    router.push("/institution");
  }

  return (
    <div className="bg-[url(/elipses.svg)] bg-center bg-cover bg-no-repeat h-full w-full flex justify-center items-center flex-col bg-[#134D86] ">
      {" "}
      <Image
        src={odisseia_src}
        alt="Odisseia logo"
        className="w-64"
        priority
      ></Image>
      <div
        className="container-md bg-white p-10 m-4 rounded-md min-w-[35rem] min-h-[30rem] flex flex-col gap-10
      "
      >
        <h1 className="text-center text-sky-800 text-4xl font-semibold">
          Efetuar Login
        </h1>

        <form
          action=""
          className="flex flex-col gap-4 items-center"
          onSubmit={submitProcess}
        >
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="" className="text-sky-800 text-3xl font-semibold">
              E-mail
            </label>
            <input
              type="text"
              name=""
              placeholder="seuemail@suaorganizacao.org"
              className="bg-zinc-100 border-sky-800  border-opacity-30 border-[3px]  rounded-md p-2 outline-none placeholder:text-sky-800 placeholder:text-opacity-50"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="" className="text-sky-800 text-3xl font-semibold">
              Senha
            </label>
            <input
              type="password"
              name=""
              placeholder="********"
              className="bg-zinc-100 border-sky-800  border-opacity-30 border-[3px]  rounded-md p-2 outline-none placeholder:text-sky-800 placeholder:text-opacity-50"
            />
          </div>
          <Link
            href="/forgot-password"
            className="text-blue-500 font-normal underline italic self-start"
          >
            Esqueceu a senha?
          </Link>
          <button className="bg-lime-600 rounded-2xl text-center text-neutral-50 text-2xl font-bold uppercase w-64 p-2">
            Entrar
          </button>
          <div className="w-[206px] h-[0px] border-[1px] border-sky-800"></div>
        </form>
        <div className="text-center">
          <span className="text-neutral-950 text-1xl font-normal">
            Não possui cadastro?{" "}
          </span>
          <span className="text-blue-500 text-1xl font-normal underline">
            <Link href="/signup">Cadastre-se aqui.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
