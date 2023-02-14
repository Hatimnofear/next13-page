//  import Image from 'next/image'
//  import { Inter } from '@next/font/google'
//  import styles from './page.module.css'

//  const inter = Inter({ subsets: ['latin'] })
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/../about"}> About </Link>
    </>
  );
}
