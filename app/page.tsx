"use client";

import { useState } from "react";

export default function HomePage() {
  const [showBio, setShowBio] = useState(false);

  function handleToggle() {
    setShowBio(!showBio);
  }

  return (
    <main>
      <button onClick={handleToggle}>
        Toggle Bio
      </button>

      {showBio && (
        <p>
          I am learning React and Next.js.
        </p>
      )}
    </main>
  );
}