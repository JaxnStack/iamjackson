// components/About.tsx
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Journey into Full-Stack Development</h1>
        <p className={styles.text}>
          Hey, I'm Jackson Njihia — a passionate full-stack developer who believes in building
          technology that matters. My journey started with a love for problem-solving and a desire
          to create digital experiences that empower people.
        </p>
        <p className={styles.text}>
          From designing sleek front-end interfaces to architecting powerful back-end systems,
          I find joy in stitching together the entire puzzle. Full-stack isn't just a buzzword —
          it's a mindset. A mindset of curiosity, empathy, and holistic thinking.
        </p>
        <div className={styles.visionMission}>
          <div>
            <h2>🌍 Vision</h2>
            <p>To craft intuitive, scalable, and beautiful products that elevate the human experience.</p>
          </div>
          <div>
            <h2>🎯 Mission</h2>
            <p>To deliver end-to-end web solutions with empathy, excellence, and continuous learning at heart.</p>
          </div>
        </div>
        <div className={styles.cta}>
          <h3>🚀 Want to see my work in action?</h3>
          <a href="/projects" className={styles.button}>Explore My Projects</a>
        </div>
      </div>
    </section>
  )
}
