import styles from "./Header.module.css"

import Link from "next/link"
import FiberLogo from "@/components/ui/FiberLogo"
import Navbar from "../ui/Navbar"


type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>

        {/* LOGO SECTION */}
        <section className={styles.header_logo__section}>
            <Link href={"/"}> 
                <FiberLogo className="h-12 w-auto text-slate-900 dark:text-white" />
            </Link>
        </section>

        {/* NAVBAR SECTION */}
        
        <Navbar />


        {/* USER SECTION (WIP) */}
        <section>

            User data
        </section>
    </header>
  )
}