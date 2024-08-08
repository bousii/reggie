"use client";
import Translate from "@/actions/Translate";
import { useState } from "react";
export default function Home() {
  const [output, setOutput] = useState("");
  return (
    <main className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="flex text-red-500 text-9xl italic">REGGIE</h1>
      <p>Welcome to Reggie</p>
      <textarea
        className="w-1/2 h-64 text-black rounded-lg border-[6px] border-slate-500"
        placeholder="  Input your regex here"
        onChange={(e) => {
          setOutput(Translate(e.target.value));
        }}
      />
      {output.length > 0 && (
        <p className="flex text-white w-1/2 break-all text-wrap">{output}</p>
      )}
      {output === "REGGIE!" && (
        <img
          src={
            "https://private-user-images.githubusercontent.com/59903940/355638980-35894e55-e4a4-4eb5-8977-3a0960ec9989.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMxMDAyMTUsIm5iZiI6MTcyMzA5OTkxNSwicGF0aCI6Ii81OTkwMzk0MC8zNTU2Mzg5ODAtMzU4OTRlNTUtZTRhNC00ZWI1LTg5NzctM2EwOTYwZWM5OTg5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA4VDA2NTE1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc2YzU1Yzk5NGE0YTlhMDUyNzE2NjBlNjdhMmYxMDUyMGZiMmFiMTZjYTIyYTc0MzY3MDljNjIwMDE1ZTFlZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mhRpboQCQUFxuRJOQs2g-qQ_KPUpMsiPQgOm7iOui48"
          }
        />
      )}
    </main>
  );
}
