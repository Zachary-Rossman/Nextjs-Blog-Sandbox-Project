"use client";

export default function HomePage() {
  function handleButtonClick() {
    console.log("Button clicked!");
  }

  return (
    <button onClick={handleButtonClick}>
      Click Me
    </button>
  );
}