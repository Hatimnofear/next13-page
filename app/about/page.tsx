import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}> Home </Link>
      <img src="/profile.jpg" alt="Khan" width={"150"} height={"150"} />
    </>
  );
}