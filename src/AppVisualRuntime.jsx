import { useEffect } from "react";
import AppRuntime from "./AppRuntime.jsx";

function cleanPortfolioTitle() {
  const cleaned = document.title
    .replace("3D Full Stack Developer Portfolio", "Full Stack Developer Portfolio")
    .replace("3D Full Stack Developer", "Full Stack Developer")
    .replace("3D ", "");

  if (cleaned && cleaned !== document.title) {
    document.title = cleaned;
  }
}

function cleanVisibleCopy() {
  if (!document.body) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentName = node.parentElement?.tagName;
      if (!node.nodeValue?.match(/internship/i)) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(parentName || "")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const cleaned = node.nodeValue
      .replace(/Internship-Ready/g, "Project-Ready")
      .replace(/internship-ready/g, "project-ready")
      .replace(/,\s*internships/gi, "")
      .replace(/internships,\s*/gi, "")
      .replace(/\binternships\b/gi, "junior roles")
      .replace(/\binternship\b/gi, "junior role");

    if (cleaned !== node.nodeValue) {
      node.nodeValue = cleaned;
    }
  });
}

export default function App() {
  useEffect(() => {
    const clean = () => {
      cleanPortfolioTitle();
      cleanVisibleCopy();
    };

    clean();

    const observer = new MutationObserver(clean);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return <AppRuntime />;
}
