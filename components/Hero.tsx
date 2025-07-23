import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const checklistRefs = useRef<HTMLUListElement[]>([]);

  // Hero Typing Animation
  useEffect(() => {
    const heroText = "Hi, I’m Jackson Njihia ";
    const span = document.createElement("span");
    span.textContent = "👋";
    span.style.display = "inline-block";
    span.style.marginLeft = "0.5rem";
    span.style.animation = "wave 1s infinite ease-in-out";

    if (heroRef.current) {
      heroRef.current.innerHTML = "";
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

  // Typewriter Loop
  useEffect(() => {
    const text =
      "Full-stack web developer building clean, scalable, performant apps with Django, React, and Next.js.";
    let i = 0;

    function typeLoop() {
      if (!typewriterRef.current) return;
      typewriterRef.current.textContent = "";
      i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          typewriterRef.current!.textContent += text[i++];
        } else {
          clearInterval(interval);
          setTimeout(typeLoop, 4000);
        }
      }, 40);
    }

    typeLoop();
  }, []);

  // Checklist Animation
  useEffect(() => {
    let currentList = 0;
    let currentItem = 0;

    function tickNext() {
      if (currentList >= checklistRefs.current.length) return;
      const items = checklistRefs.current[currentList]?.children;
      if (!items) return;

      if (currentItem < items.length) {
        items[currentItem].classList.add("checked");
        currentItem++;
        setTimeout(tickNext, 400);
      } else {
        currentList++;
        currentItem = 0;
        setTimeout(tickNext, 600);
      }
    }

    setTimeout(tickNext, 1000);
  }, []);

  return (
    <>
      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #0d0e2d;
          color: #fff;
          font-family: 'Fira Code', monospace;
          overflow: hidden;
        }

        .background,
        .py-code {
          position: absolute;
          width: 50%;
          height: 100%;
          top: 0;
          font-size: 18px;
          white-space: pre;
          color: #00bfff;
          opacity: 0.95;
          animation: scroll 16s linear infinite;
          z-index: 0;
          padding: 2rem;
        }

        .background {
          left: 0;
          text-align: left;
        }

        .py-code {
          right: 0;
          text-align: right;
        }

        @keyframes scroll {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(20deg);
          }
          30% {
            transform: rotate(-10deg);
          }
          45% {
            transform: rotate(20deg);
          }
          60% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .foreground {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .hero {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .typed-text {
          font-size: 1.2rem;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #fff;
          margin-bottom: 2rem;
        }

        .qualities {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          padding: 1rem;
        }

        .quality {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1rem 1.2rem;
          text-align: left;
          box-shadow: 0 0 10px #000;
        }

        .quality h3 {
          margin-top: 0;
          font-size: 1.2rem;
          color: #00ffaa;
        }

        .qualities > .quality:nth-child(5) {
          grid-column: span 2;
          justify-self: center;
          width: 50%;
        }

        .checklist {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .checklist li {
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.4s ease;
          padding-left: 1.2rem;
          position: relative;
        }

        .checklist li::before {
          content: '☐';
          position: absolute;
          left: 0;
          color: #888;
        }

        .checklist li.checked {
          opacity: 1;
          transform: translateX(0);
        }

        .checklist li.checked::before {
          content: '✅';
          color: #00ff88;
        }
      `}</style>

      {/* Background Left: Blue JS */}
      <div className="background">
        const developer = &#123;
        <br />
        &nbsp;&nbsp;name: "Jackson Njihia",
        <br />
        &nbsp;&nbsp;stack: ["Django", "React", "Next.js"],
        <br />
        &nbsp;&nbsp;mission: "Build clean, fast, scalable apps"
        <br />
        &#125;;
        <br />
        <br />
        export default developer;
        <br />
        <br />
        // Craft. Code. Deploy. Repeat.
      </div>

      {/* Background Right: Python */}
      <div className="py-code">
        class Developer:
        <br />
        &nbsp;&nbsp;def __init__(self):
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.name = "Jackson Njihia"
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.stack = ["Django", "React", "Next.js"]
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.mission = "Build clean, scalable apps"
        <br />
        <br />
        dev = Developer()
        <br />
        print(dev.mission)
        <br />
        <br />
        # Automate. Optimize. Deliver.
      </div>

      {/* Foreground Content */}
      <div className="foreground">
        <div className="hero" ref={heroRef}></div>
        <div className="typed-text" ref={typewriterRef}></div>

        <div className="qualities">
          {[
            ["Clean", ["Readable code", "Organized folders", "No unused junk"]],
            ["Scalable", ["Modular structure", "Reusable components", "Smart data flow"]],
            ["Performant", ["Fast loading", "Optimized bundles", "Minimal API calls"]],
            ["Accessible", ["Screen reader friendly", "Keyboard nav", "High contrast UI"]],
            ["Maintainable", ["Commented logic", "Versioned git", "Linted + formatted"]],
          ].map(([title, items], index) => (
            <div className="quality" key={title}>
              <h3>{title}</h3>
              <ul
                className="checklist"
                ref={(el) => {
                  if (el) checklistRefs.current[index] = el;
                }}
              >
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
