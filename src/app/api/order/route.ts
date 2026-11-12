import { NextResponse } from "next/server";

type OrderBody = {
  name?: string;
  phone?: string;
  address?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Chưa cấu hình GOOGLE_SHEETS_WEBHOOK_URL." },
      { status: 500 },
    );
  }

  let body: OrderBody;
  try {
    body = (await request.json()) as OrderBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const address = clean(body.address);

  if (!name || !phone || !address) {
    return NextResponse.json(
      { ok: false, error: "Vui lòng điền đủ họ tên, số điện thoại và địa chỉ." },
      { status: 400 },
    );
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    address,
    product: "Combo Bí Kíp Hài Hước + Bí Kíp Tán Gái",
    price: 199000,
    source: "ladipage",
  };

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Không gửi được đơn sang Google Sheets." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Lỗi kết nối Google Sheets. Thử lại sau." },
      { status: 502 },
    );
  }
}
