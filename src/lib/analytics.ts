declare global {
  interface Window {
    fbq?: (
      action: "track" | "trackCustom" | "init",
      event: string,
      params?: Record<string, unknown>,
    ) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackLead() {
  const params = {
    content_name: "Combo Bí Kíp Hài Hước + Bí Kíp Tán Gái",
    currency: "VND",
    value: 199000,
  };

  // Lead = chuẩn cho form; CompleteRegistration = sự kiện web phụ để Ads chọn được
  trackMetaEvent("Lead", params);
  trackMetaEvent("CompleteRegistration", params);

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", params);
  }

  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    url.searchParams.set("dat_hang", "ok");
    window.history.replaceState({}, "", `${url.pathname}${url.search}#order-form`);
  }
}
