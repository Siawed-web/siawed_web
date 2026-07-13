"use client";

import { useEffect, useState } from "react";
import SEO from "@/components/common/seo";

export default function MyComponent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/terms-and-conditions.html")
      .then((res) => res.text())
      .then(setHtml);
  }, []);

  return (
    <>
      <SEO 
        title="Terms & Conditions | SIAWED" 
        description="Read the terms and conditions for using SIAWED's website, programs, and services, detailing our mutual obligations and rights." 
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}