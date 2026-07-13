"use client";

import { useEffect, useState } from "react";
import SEO from "@/components/common/seo";

export default function MyComponent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/refundpolicy.html")
      .then((res) => res.text())
      .then(setHtml);
  }, []);

  return (
    <>
      <SEO 
        title="Refund Policy | SIAWED" 
        description="Review SIAWED's refund policy covering event registrations, membership fees, and donations made through our platform." 
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}