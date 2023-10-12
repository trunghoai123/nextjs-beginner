import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href={"/users"}>Go to About User page</Link>
    </main>
  );
}
