import Image from 'next/image'
import styles from './page.module.css'
import AnimatedBackground from './_components/(home)/animatedBackground'

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimatedBackground></AnimatedBackground>
      
    </main>
  )
}
