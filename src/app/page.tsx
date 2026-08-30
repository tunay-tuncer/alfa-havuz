import styles from "./page.module.css";
import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import SampleProjects from "@/components/SampleProjects/SampleProjects";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <main className={styles.page}>
      <Landing />
      <About />
      <SampleProjects />
      <Process />
    </main>
  );
}
