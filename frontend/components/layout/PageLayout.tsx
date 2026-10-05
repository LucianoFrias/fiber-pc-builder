import styles from "./PageLayout.module.css"

import Sidebar from './Sidebar'
import MainContent from './MainContent'


type Props = {}

export default function PageLayout({}: Props) {
  return (
    <div className={styles.page_layout}>
        <Sidebar />
        <MainContent />

    </div>
  )
}