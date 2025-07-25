'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css'; // ✅ Make sure Hero.module.css uses only local class selectors

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const checklistRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const [phase1Done, setPhase1Done] = useState(false);

  // Typing animation for name
  useEffect(() => {
    const heroText = 'Hi, I am Jackson Njihia ';
    const span = document.createElement('span');
    span.textContent = '👋';
    span.className = styles.waveEmoji;

    if (heroRef.current) {
      heroRef.current.innerHTML = '';
      let i = 0;
      const interval = setInterval(() => {
        if (i < heroText.length) {
          heroRef.current!.textContent += heroText[i++];
        } else {
          clearInterval(interval);
          heroRef.current!.appendChild(span);
        }
      }, 60);
    }
  }, []);

  // Typing animation for description
  useEffect(() => {
    const text =
      'Full-stack web developer building clean, scalable, performant apps with Django, React, and Next.js.';
    let i = 0;

    if (!typewriterRef.current) return;
    typewriterRef.current.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        typewriterRef.current!.textContent += text[i++];
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setHasTransitioned(true);
          setTimeout(() => setPhase1Done(true), 1000);
        }, 1000);
      }
    }, 40);
  }, []);

  // Checklist animation
  useEffect(() => {
    if (!hasTransitioned) return;

    let currentList = 0;
    let currentItem = 0;

    function tickNext() {
      if (currentList >= checklistRefs.current.length) return;
      const list = checklistRefs.current[currentList];
      if (!list) return;
      const items = Array.from(list.children) as HTMLElement[];

      if (currentItem < items.length) {
        items[currentItem].classList.add(styles.checked);
        currentItem++;
        setTimeout(tickNext, 400);
      } else {
        currentList++;
        currentItem = 0;
        setTimeout(tickNext, 600);
      }
    }

    setTimeout(tickNext, 500);
  }, [hasTransitioned]);

  const qualities: Array<[string, string[]]> = [
    ['Clean', ['Readable code', 'Organized folders', 'No unused junk']],
    ['Scalable', ['Modular structure', 'Reusable components', 'Smart data flow']],
    ['Performant', ['Fast loading', 'Optimized bundles', 'Minimal API calls']],
    ['Accessible', ['Screen reader friendly', 'Keyboard nav', 'High contrast UI']],
    ['Maintainable', ['Commented logic', 'Versioned git', 'Linted + formatted']],
  ];

  return (
    <>
      {!phase1Done && (
        <>
          <div className={styles.scrollingBackground}>
            {`const developer = {
  name: "Jackson Njihia",
  stack: ["Django", "React", "Next.js"],
  mission: "Build clean, fast, scalable apps"
};`}
          </div>
          <div className={styles.pyCode}>
            {`class Developer:
  def __init__(self):
    self.name = "Jackson Njihia"
    self.stack = ["Django", "React", "Next.js"]
    self.mission = "Build clean, scalable apps"

dev = Developer()
print(dev.mission)`}
          </div>
        </>
      )}

      <div className={`${styles.backgroundImage} ${hasTransitioned ? styles.visible : ''}`} />

      <div className={styles.foreground}>
        <div className={styles.hero} ref={heroRef}></div>
        <div className={styles.typedText} ref={typewriterRef}></div>

        <div className={styles.qualities}>
          {qualities.map(([title, items], index) => (
            <div className={styles.quality} key={title}>
              <h3>{title}</h3>
              <ul
                className={styles.checklist}
                ref={(el) => {
                  checklistRefs.current[index] = el;
                }}
              >
                {items.map((item) => (
                  <li key={`${title}-${item}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
