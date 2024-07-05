"use client";
import PageTemplate from "@/components/reusables/pageTemplate";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <PageTemplate></PageTemplate>
      <PageTemplate></PageTemplate>
      <PageTemplate></PageTemplate>
      <PageTemplate></PageTemplate>
      <PageTemplate></PageTemplate>
    </main>
  );
}
