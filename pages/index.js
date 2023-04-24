import Header from "@/components/Header/Header";
import ReminderList from "@/components/ReminderList/ReminderList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <ReminderList />
    </main>
  );
}
