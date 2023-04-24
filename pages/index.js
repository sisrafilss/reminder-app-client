import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl text-center text-green-600 mt-10">
        Welcome to Remainder App
      </h1>
    </main>
  );
}
