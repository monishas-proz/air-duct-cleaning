"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 35,
  cursor = true,
  start = true,
}) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!start) return;

    setDisplayText("");
    setIsTyping(true);

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return (
    <>
      {displayText}
      {cursor && isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </>
  );
}