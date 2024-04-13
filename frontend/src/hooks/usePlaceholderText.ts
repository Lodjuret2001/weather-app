import { useState, useEffect } from "react";

const usePlaceholderText = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);

  const placeholderTexts: string[] = [
    "Tokyo",
    "New York",
    "Stockholm",
    "Paris",
    "London",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) =>
        prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { placeholderTexts, placeholderIndex };
};

export default usePlaceholderText;
