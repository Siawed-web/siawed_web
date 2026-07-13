"use client";

import { useEffect, useState } from "react";
import SEO from "@/components/common/seo";

export default function MyComponent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/privacypolicy.html")
      .then((res) => res.text())
      .then(setHtml);
  }, []);

  return (
    <>
      <SEO 
        title="Privacy Policy | SIAWED" 
        description="Read SIAWED's privacy policy to understand how we collect, use, and protect your personal data when you interact with our platform." 
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}