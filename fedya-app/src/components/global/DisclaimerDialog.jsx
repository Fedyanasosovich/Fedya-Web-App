"use client";
import { useState, useEffect } from "react";
import Button from "@/components/global/button";

export default function DisclaimerDialog() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-lg w-full mx-4 bg-[var(--background)] text-[var(--foreground)] rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
        <div className="text-sm space-y-3 mb-8 text-center">
          <p>
            The photographs on this website are the property of Fedya
            Nasosovich. Any trademarks, logos, or brand identifiers depicted in
            these photographs are the property of their respective owners
            (Sandoz AG) and are used for illustrative purposes only according to
            fair use.
          </p>
          <p>
            We do not claim ownership of or affiliation with these trademarks.
          </p>
          <p>We do not operate an online pharmacy.</p>
          <p>We do not sell hgh.</p>
          <p>
            We provide a bespoke service whereby we obtain a prescription from
            the doctor on your behalf (after being given authorisation and
            consent from you) and we then use your prescription to purchase hgh
            from the pharmacy on your behalf.
          </p>
          <p>Please check local laws if ordering internationally.</p>
        </div>
        <Button
          title="I agree"
          containerClass="bg-[#5d3fd3] text-white w-full"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
