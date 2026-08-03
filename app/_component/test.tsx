"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Test() {
useGSAP(() => {
  gsap.fromTo(
    ".move",
    {
      x: -300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
    }
  );
});

  return (
    <div style={{ padding: "100px" }}  className="move w-24 h-24 bg-red-500">
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          background: "red",
        }}
      />
    </div>
  );
}