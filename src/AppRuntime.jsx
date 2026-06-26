import { useEffect } from "react";
import AppBase from "./AppBase.jsx";

function cleanPortfolioTitle() {
  const cleaned = document.title
    .replace("3D Full Stack Developer Portfolio", "Full Stack Developer Portfolio")
    .replace("3D Full Stack Developer", "Full Stack Developer")
    .replace("3D ", "");

  if (cleaned && cleaned !== document.title) {
    document.title = cleaned;
  }
}

export default function App() {
  useEffect(() => {
    cleanPortfolioTitle();

    const titleNode = document.querySelector("title");
    const observer = titleNode ? new MutationObserver(cleanPortfolioTitle) : null;
    observer?.observe(titleNode, { childList: true });

    return () => observer?.disconnect();
  }, []);

  return <AppBase />;
}
