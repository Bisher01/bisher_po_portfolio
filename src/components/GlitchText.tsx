import { useState, useEffect, useRef } from "react";

type GlitchTextProps =
  | { text: string; texts?: never }
  | { texts: string[]; text?: never };

export function GlitchText({ text, texts }: GlitchTextProps) {
  const words = texts ?? [text!];
  const [index, setIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (words.length <= 1) return;

    const schedule = () => {
      timeoutRef.current = setTimeout(() => {
        setGlitching(true);
        timeoutRef.current = setTimeout(() => {
          setIndex((i) => (i + 1) % words.length);
          setGlitching(false);
          schedule();
        }, 600);
      }, 2800);
      
    };

    schedule();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words.length]);

  const upper = words[index].toUpperCase();

  return (
    <span
      className={`glitch-title${glitching ? " glitch-title--switching" : ""}`}
      data-text={upper}
    >
      {upper}
    </span>
  );
}
