import { ImageResponse } from "next/og";

export const alt = "Жанна Кононенко — психолог и сексолог";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f7efff 0%, #efe2ff 45%, #ffffff 100%)",
          color: "#2b173b",
          padding: "56px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "860px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: "999px",
              background: "rgba(104,75,123,0.12)",
              color: "#684b7b",
              fontSize: 24,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "14px 22px",
            }}
          >
            Психолог и сексолог
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            <div>Жанна</div>
            <div>Кононенко</div>
          </div>

          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#5b4a67",
              maxWidth: "860px",
            }}
          >
            Индивидуальная работа, консультации для пар и сексология. Запись
            на приём через анкету на сайте.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: "999px",
                background: "#684b7b",
                color: "#ffffff",
                fontSize: 26,
                padding: "12px 20px",
              }}
            >
              Индивидуально
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: "999px",
                background: "#684b7b",
                color: "#ffffff",
                fontSize: 26,
                padding: "12px 20px",
              }}
            >
              Для пар
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: "999px",
                background: "#684b7b",
                color: "#ffffff",
                fontSize: 26,
                padding: "12px 20px",
              }}
            >
              Онлайн
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "8px",
              color: "#684b7b",
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 700 }}>Психологическая помощь</div>
            <div style={{ fontSize: 22, color: "#7d6a89" }}>Онлайн-запись через анкету</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
