import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Pattaya } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const pattaya = Pattaya({
  variable: "--font-pattaya",
  subsets: ["vietnamese", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bí Kíp Hài Hước + Bí Kíp Tán Gái | Chỉ 199K/2 cuốn",
  description:
    "Bộ 2 cuốn Bí Kíp Hài Hước và Bí Kíp Tán Gái (Nghệ Thuật Chém Gió Đỉnh Cao). Giá sốc 199K/2 cuốn — miễn phí ship, COD toàn quốc.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${pattaya.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={{
          fontFamily:
            "var(--font-be-vietnam), Be Vietnam Pro, system-ui, sans-serif",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
