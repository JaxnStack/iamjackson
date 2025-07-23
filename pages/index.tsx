'use client';
import { useEffect, useState } from 'react';

const checklistData = [
  {
    title: 'Clean',
    items: ['Readable code', 'Organized folders', 'No unused junk'],
  },
  {
    title: 'Scalable',
    items: ['Modular structure', 'Reusable components', 'Smart data flow'],
  },
  {
    title: 'Performant',
    items: ['Fast loading', 'Optimized bundles', 'Minimal API calls'],
  },
  {
    title: 'Accessible',
    items: ['Screen reader support', 'Keyboard navigation', 'High contrast text'],
  },
  {
    title: 'Modern',
    items: ['Dark mode ready', 'Responsive design', 'Uses latest tools'],
  },
];

const fullIntro = "Full-stack web developer building clean, scalable, performant apps with Django, React, and Next.js.";

export default function Hero() {
  const [introText, setIntroText] = useState('');
  const [checked, setChecked] = useState<boolean[][]>(checklistData.map(() => []));
  const [wave, setWave] = useState(false);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setIntroText((prev) => prev + fullIntro[index]);
      index++;
      if (index >= fullIntro.length) clearInterval(typeInterval);
    }, 40);
    return () => clearInterval(typeInterval);
  }, []);

  // Checklist animation
  useEffect(() => {
    let listIndex = 0;
    let itemIndex = 0;

    const tickNext = () => {
      setChecked((prev) => {
        const newChecked = [...prev];
        if (!newChecked[listIndex]) newChecked[listIndex] = [];
        newChecked[listIndex] = [...newChecked[listIndex], true];
        return newChecked;
      });

      itemIndex++;
      if (itemIndex >= checklistData[listIndex].items.length) {
        itemIndex = 0;
        listIndex++;
      }

      if (listIndex < checklistData.length) {
        setTimeout(tickNext, 400);
      }
    };

    setTimeout(tickNext, 1200);
  }, []);

  // Emoji wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWave(true);
      setTimeout(() => setWave(false), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1740&q=80')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center">
          <span>Hi, I’m Jackson Njihia&nbsp;</span>
          <span
            className={`text-5xl transition-transform duration-300 ${
              wave ? 'rotate-[30deg]' : 'rotate-0'
            }`}
          >
            👋
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-mono h-[3.5rem]">{introText}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {checklistData.map((list, i) => (
            <div key={i} className="bg-black/50 p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{list.title}</h3>
              <ul className="text-left space-y-1">
                {list.items.map((item, j) => (
                  <li
                    key={j}
                    className={`transition-opacity duration-300 ${
                      checked[i]?.[j] ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
