import styles from "./Sidebar.module.css"

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className={styles.sidebar}>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>


        </ul>
    
    </div>
  )
}