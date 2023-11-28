import { ImageResponse } from "@vercel/og";

export async function GET() {
  const hennyPenny = await fetch(
    new URL(
      "../../src/assets/Henny_Penny/HennyPenny-Regular.ttf",
      import.meta.url,
    ),
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          display: "flex",
          fontFamily: "hennyPenny",
          fontSize: "4rem",
        }}
      >
        <div>This is a long text that will span several rows, oo, ee, ff</div>
      </div>
    ),
    {
      width: 500,
      height: 500,
      fonts: [
        {
          name: "hennyPenny",
          data: hennyPenny,
          style: "normal",
        },
      ],
    },
  );
}

export const runtime = "edge";
