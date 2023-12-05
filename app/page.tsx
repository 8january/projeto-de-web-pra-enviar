import Image from "next/image";
import odisseia_src from "../../public/Odisseia_logo.svg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-[url(/Background.svg)] bg-center bg-cover bg-no-repeat h-full w-full flex justify-center items-center">
        <Link href="/login">
          <Image
            src={odisseia_src}
            alt="Odisseia logo"
            className="w-64"
            priority
          ></Image>
        </Link>
      </div>
    </>
  );
}
