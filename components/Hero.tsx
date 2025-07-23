import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Typing animation
    const texts = ["Hi, I'm Jackson Njihia"];
    let textIndex = 0;
    let charIndex = 0;
    const typedElement = document.getElementById("typed-text");
    const handEmoji = document.getElementById("hand-emoji");

    const type = () => {
      if (charIndex < texts[textIndex].length) {
        typedElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        handEmoji.classList.add("animate-wiggle");
      }
    };

    setTimeout(type, 800);

    // Checklist animation
    const checklists = document.querySelectorAll(".checklist");
    let currentList = 0,
      currentItem = 0;

    const tickNext = () => {
      if (currentList >= checklists.length) return;

      const items = checklists[currentList].children;
      if (currentItem < items.length) {
        items[currentItem].classList.add("checked");
        currentItem++;
        setTimeout(tickNext, 400);
      } else {
        currentList++;
        currentItem = 0;
        setTimeout(tickNext, 600);
      }
    };

    setTimeout(tickNext, 1500);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white bg-black px-4">
      <p className="text-sm md:text-base mb-2 text-center">
        <code>
          const developer = &#123; name: "Jackson Njihia", stack: ["Django",
          "React", "Next.js"], mission: "Build clean, fast, scalable apps"
          &#125;; <br />
          export default developer; // Craft. Code. Deploy. Repeat.
        </code>
      </p>

      <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
        <span className="inline-block mr-2" id="hand-emoji">
          👋
        </span>
        <span id="typed-text" className="whitespace-nowrap"></span>
      </div>

      <p className="text-center text-lg mt-3 mb-8">
        Full-stack web developer building clean, scalable, performant apps with
        Django, React, and Next.js.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 checklist">
          <h3 className="text-xl font-semibold mb-2">Clean</h3>
          <ul className="space-y-2">
            <li className="opacity-50">✅ Readable code</li>
            <li className="opacity-50">✅ Organized folders</li>
            <li className="opacity-50">✅ No unused junk</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 checklist">
          <h3 className="text-xl font-semibold mb-2">Scalable</h3>
          <ul className="space-y-2">
            <li className="opacity-50">✅ Modular structure</li>
            <li className="opacity-50">✅ Reusable components</li>
            <li className="opacity-50">✅ Smart data flow</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 checklist">
          <h3 className="text-xl font-semibold mb-2">Performant</h3>
          <ul className="space-y-2">
            <li className="opacity-50">✅ Fast loading</li>
            <li className="opacity-50">✅ Optimized bundles</li>
            <li className="opacity-50">✅ Minimal API calls</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 checklist col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Accessible</h3>
          <ul className="space-y-2">
            <li className="opacity-50">✅ Screen reader support</li>
            <li className="opacity-50">✅ Keyboard navigation</li>
            <li className="opacity-50">✅ High contrast text</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 checklist col-span-2">
          <h3 className="text-xl font-semibold mb-2">Modern</h3>
          <ul className="space-y-2">
            <li className="opacity-50">✅ Dark mode ready</li>
            <li className="opacity-50">✅ Responsive design</li>
            <li className="opacity-50">✅ Uses latest tools</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .checked {
          opacity: 1 !important;
        }

        #hand-emoji {
          transition: transform 0.3s ease-in-out;
        }

        .animate-wiggle {
          animation: wiggle 1s infinite;
        }

        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
