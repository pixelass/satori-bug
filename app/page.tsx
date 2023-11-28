import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex">
      <div
        style={{
          height: 500,
          width: 500,
          position: "relative",
          display: "flex",
          fontFamily: hennyPenny.style.fontFamily,
          fontSize: "4rem",
          outline: "4px solid red",
        }}
      >
        <div>This is a long text that will span several rows, oo, ee, ff</div>
      </div>
      <div
        style={{
          height: 500,
          width: 500,
          position: "relative",
          display: "flex",
          fontFamily: hennyPenny.style.fontFamily,
          fontSize: "4rem",
          outline: "4px solid red",
        }}
      >
        <img src="/og" alt="" height={500} width={500} />
      </div>
    </main>
  );
}
