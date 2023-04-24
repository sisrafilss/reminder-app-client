import Header from "@/components/Header/Header";
import ReminderList from "@/components/ReminderList/ReminderList";
import Spinner from "@/components/Spinner/Spinner";
import useFirebase from "@/hooks/useFirebase";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user } = useFirebase();
  console.log(user);

  return (
    <main>
      <Header />
      <ReminderList />
    </main>
  );
}
