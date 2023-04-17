import React from "react";

export const MusicPlayer = () => {
  return (
    <div className="hidden cursor-pointer items-center rounded px-5 py-3 transition-colors hover:bg-slate-800 lg:flex">
      <button className="opacity-70 hover:opacity-100">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 13.17v3.33a1 1 0 1 1-2 0v-9a1 1 0 0 1 2 0v3.33l8.15-4.66c.82-.48 1.85.11 1.85 1.06v9.54c0 .95-1.03 1.54-1.85 1.06z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="opacity-70 hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M18.5 11.13a1 1 0 0 1 0 1.74l-9 5.2A1 1 0 0 1 8 17.2V6.8a1 1 0 0 1 1.5-.86l9 5.2Z" />
        </svg>
      </button>
      <button className="opacity-70 hover:opacity-100">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 10.83V7.5a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0v-3.33l-8.15 4.66A1.23 1.23 0 0 1 4 16.77V7.23c0-.95 1.03-1.54 1.85-1.06z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <p className="ml-3 text-base font-medium">pistenkov — она ему сосала..</p>
    </div>
  );
};
