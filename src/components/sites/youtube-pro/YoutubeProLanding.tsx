"use client";

import { FormEvent, useEffect, useState } from "react";
import "./youtube-pro.css";

type ImgSlotProps = {
  label: string;
  className?: string;
  src?: string;
};

function ImgSlot({ label, className = "", src }: ImgSlotProps) {
  if (src) {
    return (
      <div className={`yp-slot yp-slot--filled ${className}`.trim()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} />
      </div>
    );
  }

  return (
    <div className={`yp-slot ${className}`.trim()} aria-label={label}>
      {label}
    </div>
  );
}

function HScrollSlots({
  count,
  labelPrefix,
  slotClassName = "yp-slot--square",
}: {
  count: number;
  labelPrefix: string;
  slotClassName?: string;
}) {
  return (
    <div className="yp-hscroll" role="region" aria-label={labelPrefix}>
      <div className="yp-hscroll__track">
        {Array.from({ length: count }, (_, i) => (
          <div className="yp-hscroll__item" key={`${labelPrefix}-${i}`}>
            <ImgSlot
              label={`${labelPrefix} ${i + 1}`}
              className={slotClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaButton({
  href = "#order",
  children = "Chốt bộ 2 cuốn 199K ngay",
}: {
  href?: string;
  children?: string;
}) {
  return (
    <a className="yp-cta yp-cta--block" href={href}>
      {children}
    </a>
  );
}

function useCountdown(hoursFromNow = 12) {
  const [left, setLeft] = useState(hoursFromNow * 3600);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return {
    days: Math.floor(left / 86400),
    hours: Math.floor((left % 86400) / 3600),
    mins: Math.floor((left % 3600) / 60),
    secs: left % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Countdown() {
  const { days, hours, mins, secs } = useCountdown(12);
  const boxes = [
    { value: days, label: "Ngày" },
    { value: hours, label: "Giờ" },
    { value: mins, label: "Phút" },
    { value: secs, label: "Giây" },
  ];

  return (
    <div className="yp-countdown" aria-label="Đếm ngược khuyến mãi">
      {boxes.map((box) => (
        <div className="yp-count-box" key={box.label}>
          <strong>{pad(box.value)}</strong>
          <span>{box.label}</span>
        </div>
      ))}
    </div>
  );
}

function OrderBlock({ id }: { id?: string }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert("Đã nhận thông tin — shop sẽ liên hệ xác nhận đơn.");
  };

  return (
    <section className="yp-section yp-order" id={id}>
      <div className="yp-stack yp-center">
        <p className="yp-price-old">Giá bìa: 598.000đ</p>
        <p className="yp-price-new">199.000đ</p>
        <p className="yp-h3">Ưu đãi sốc kết thúc sau</p>
        <Countdown />
        <ImgSlot label="Ảnh sản phẩm / ảnh giá" className="yp-slot--wide" />

        <form className="yp-form" onSubmit={onSubmit}>
          <h2 className="yp-h2">Chốt bộ 2 cuốn</h2>
          <label>
            Họ và tên
            <input name="name" placeholder="Họ và tên" required />
          </label>
          <label>
            Số điện thoại
            <input name="phone" type="tel" placeholder="Số điện thoại" required />
          </label>
          <label>
            Địa chỉ
            <textarea name="address" placeholder="Địa chỉ nhận hàng" required />
          </label>
          <button className="yp-cta" type="submit">
            Chốt bộ 2 cuốn 199K ngay
          </button>
          <p className="yp-note">
            Miễn phí ship + COD toàn quốc — nhận hàng kiểm tra rồi mới trả tiền
          </p>
        </form>
      </div>
    </section>
  );
}

const HERO_BENEFITS = [
  "Bí Kíp Hài Hước — nói chuyện cuốn, hết cảnh đứng hình",
  "Bí Kíp Tán Gái — mở lời tự tin, giữ nhịp hấp dẫn",
  "Nghệ thuật chém gió đỉnh cao — áp dụng tối nay",
  "Bộ 2 cuốn chỉ 199K — giảm sốc hơn nửa giá",
];

const AUDIENCE = [
  {
    text: "Muốn nói chuyện vui nhưng cứ cứng miệng, câu nào cũng nhạt",
    image: "/sites/books-combo/audience-1.jpg",
  },
  {
    text: "Thích người ta nhưng não đơ, không biết mở lời thế nào",
    image: "/sites/books-combo/audience-2.jpg",
  },
  {
    text: "Hay bị xếp vào “chỉ là bạn” vì hiền quá, thiếu độ cuốn hút",
    image: "/sites/books-combo/audience-3.jpg",
  },
  {
    text: "Muốn chém gió đỉnh, tán chủ động mà không biết học từ đâu",
    image: "/sites/books-combo/audience-4.jpg",
  },
];

const LEARNINGS = [
  {
    num: "01",
    title: "Bí kíp hài hước thực chiến",
    body: "Công thức câu chuyện vui, timing đúng lúc — nói là cuốn, không còn khí thế “cứng người”.",
  },
  {
    num: "02",
    title: "Mở lời tán không bị ngố",
    body: "Kịch bản mở đầu tự nhiên, thoát cảnh “Ơ… chào… rồi im”. Tán đâu cũng có đường đi.",
  },
  {
    num: "03",
    title: "Nghệ thuật chém gió đỉnh cao",
    body: "Giữ nhịp hấp dẫn, đẩy cảm xúc, biến cuộc trò chuyện thành “nghiện” gặp lại.",
  },
  {
    num: "04",
    title: "Thoát cảnh “chỉ là bạn” vì quá nhạt",
    body: "Nhận diện lỗi đang tự hủy sức hút — sửa ngay bằng đúng 2 vũ khí: hài + tán.",
  },
  {
    num: "05",
    title: "Áp dụng liền tay, không lý thuyết suông",
    body: "Đọc hiểu là dùng được tối nay. Không cần học lâu, không cần “đợi đủ tự tin”.",
  },
];

const GIFTS = [
  {
    title: "Bí Kíp Hài Hước + Bí Kíp Tán Gái",
    price: "Trọn bộ 2 cuốn — chỉ 199K",
    image: "/sites/books-combo/gift-1.jpg",
  },
  {
    title: "Miễn phí ship toàn quốc",
    price: "Ship nhanh — nhận hàng mới trả tiền",
    image: "/sites/books-combo/gift-2.jpg",
  },
  {
    title: "Danh sách mở lời & giữ nhịp",
    price: "Áp dụng ngay sau khi đọc",
    image: "/sites/books-combo/gift-3.jpg",
  },
  {
    title: "Ưu đãi khung giờ vàng",
    price: "Số suất có hạn — chậm là lỡ",
    image: "/sites/books-combo/gift-4.jpg",
  },
];

const RESULT_CHIPS = [
  "Nói chuyện cuốn hơn chỉ sau vài chương",
  "Mở lời tự tin — hết não đơ",
  "Chém gió đỉnh — tán đâu dính đó",
  "Hết cảnh “chỉ là bạn” vì quá nhạt",
];

const FEEDBACK_IMAGES = [
  "/sites/books-combo/feedback-1.jpg",
  "/sites/books-combo/feedback-2.jpg",
  "/sites/books-combo/feedback-3.jpg",
  "/sites/books-combo/feedback-4.jpg",
  "/sites/books-combo/feedback-5.jpg",
  "/sites/books-combo/feedback-6.jpg",
];

const REVIEWS = [
  {
    name: "Anh Minh",
    job: "Nông dân",
    text: "Sách rất hay và giá trị. Đọc xong biết mở lời thế nào, không còn đứng hình.",
    image: "/sites/books-combo/avatar-1.jpg",
  },
  {
    name: "Anh Dũng",
    job: "Công nhân xây dựng",
    text: "Bí kíp hài hước dùng được ngay. Bạn bè bảo nói chuyện vui hơn hẳn.",
    image: "/sites/books-combo/avatar-2.jpg",
  },
  {
    name: "Tuấn Anh",
    job: "Nhân viên văn phòng",
    text: "Bộ 2 cuốn 199K quá đáng. Có ích thật, không lý thuyết suông.",
    image: "/sites/books-combo/avatar-3.jpg",
  },
  {
    name: "Hoàng Long",
    job: "Công nhân nhà máy",
    text: "Công đức vô lượng. Ai đang cứng miệng nên chốt liền.",
    image: "/sites/books-combo/avatar-4.jpg",
  },
];

export function YoutubeProLanding() {
  return (
    <div className="yt-pro-page">
      <div className="yt-pro">
        {/* 1. Hero */}
        <section className="yp-section yp-hero">
          <div className="yp-stack yp-center">
            <span className="yp-badge">Học cách tán gái từ A-Z</span>
            <h1 className="yp-h1">
              <span className="yp-accent">
                Bí Kíp Tán Gái
                <br />
                Thực Chiến
              </span>
              <span className="yp-white yp-blink">TÁN LÀ ĐỔ</span>
            </h1>

            <div className="yp-hero-grid">
              {HERO_BENEFITS.map((item) => (
                <article className="yp-benefit-card" key={item}>
                  <span className="yp-check" aria-hidden>
                    ✓
                  </span>
                  <p>{item}</p>
                </article>
              ))}
            </div>

            <CtaButton />

            <div className="yp-hero-stage">
              <ImgSlot
                label="Ảnh sách nổi bật / đế trưng bày"
                className="yp-slot--hero-book yp-slot--light"
              />
            </div>
          </div>
        </section>

        {/* 2. Audience */}
        <section className="yp-section yp-audience">
          <div className="yp-stack">
            <p className="yp-audience-intro yp-center">
              Nếu bạn đang “dính” một trong những tình trạng dưới đây — bộ sách
              này chính là cứu tinh:
            </p>
            <h2 className="yp-h2 yp-center yp-audience-title">
              <span className="yp-line1">Bộ 2 bí kíp</span>
              <br />
              <span className="yp-line2">Dành cho ai?</span>
            </h2>

            <div className="yp-audience-list">
              {AUDIENCE.map((item, i) => (
                <article className="yp-audience-card" key={item.text}>
                  <ImgSlot
                    src={item.image}
                    label={`Ảnh đối tượng ${i + 1}`}
                    className="yp-slot--square yp-slot--audience"
                  />
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <p className="yp-text yp-center">
              Bí Kíp Hài Hước + Bí Kíp Tán Gái (Nghệ Thuật Chém Gió Đỉnh Cao) —
              bộ võ công xã hội giúp bạn tự tin mở lời, hài đúng lúc, tán chủ
              động.
            </p>
            <CtaButton />
          </div>
        </section>

        {/* 3. What you get */}
        <section className="yp-section yp-benefits">
          <div className="yp-stack">
            <h2 className="yp-h2 yp-center">
              Khi đọc bộ sách này?
              <br />
              <span className="yp-accent">Bạn sẽ nhận được gì</span>
            </h2>

            {LEARNINGS.map((item) => (
              <article className="yp-benefit-row" key={item.num}>
                <div className="yp-benefit-row__meta">
                  <span className="yp-num">{item.num}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
                <ImgSlot
                  label={`Minh họa ${item.num}`}
                  className="yp-slot--wide yp-slot--light"
                />
              </article>
            ))}

            <CtaButton />
          </div>
        </section>

        {/* 4. Gifts */}
        <section className="yp-section yp-gifts">
          <div className="yp-stack">
            <h2 className="yp-h2 yp-center">Bộ quà & ưu đãi sốc</h2>
            {GIFTS.map((gift, i) => (
              <article className="yp-gift-card" key={gift.title}>
                <ImgSlot
                  src={gift.image}
                  label={`Quà ${i + 1}`}
                  className="yp-slot--square yp-slot--gift"
                />
                <div>
                  <strong>
                    0{i + 1}. {gift.title}
                  </strong>
                  <span>{gift.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Results */}
        <section className="yp-section yp-results">
          <div className="yp-stack">
            <h2 className="yp-h2 yp-center">
              Cảm nhận của khách hàng sau khi đọc
            </h2>
            <div className="yp-chip-row">
              {RESULT_CHIPS.map((chip) => (
                <span className="yp-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="yp-gallery yp-gallery--feedback">
              {FEEDBACK_IMAGES.map((src, i) => (
                <ImgSlot
                  key={src}
                  src={src}
                  label={`Cảm nhận khách ${i + 1}`}
                  className="yp-slot--feedback"
                />
              ))}
            </div>
            <CtaButton />
          </div>
        </section>

        {/* 6. Book photos — horizontal slide */}
        <section className="yp-section yp-section--tight">
          <div className="yp-stack">
            <h2 className="yp-h2 yp-center">Hình ảnh bộ 2 cuốn</h2>
            <HScrollSlots count={8} labelPrefix="Ảnh sách" />
          </div>
        </section>

        {/* 7. Preview pages — horizontal slide */}
        <section
          className="yp-section yp-section--tight"
          style={{ background: "#f3f3f3" }}
        >
          <div className="yp-stack">
            <h2 className="yp-h2 yp-center">Đọc thử vài trang</h2>
            <HScrollSlots count={8} labelPrefix="Trang mẫu" />
          </div>
        </section>

        {/* 8. Order #1 */}
        <OrderBlock id="order" />

        {/* 10. Order #2 */}
        <OrderBlock />

        {/* 11. Reviews */}
        <section className="yp-section yp-reviews">
          <div className="yp-stack">
            <div className="yp-rating-head">
              <strong>4,9/5</strong>
              <span className="yp-stars">★★★★★</span>
              <span className="yp-rating-note">Hàng trăm anh em đã chốt</span>
            </div>
            <div className="yp-review-list">
              {REVIEWS.map((review) => (
                <article className="yp-review-card" key={review.name}>
                  <ImgSlot
                    src={review.image}
                    label={`Ảnh ${review.name}`}
                    className="yp-slot--avatar"
                  />
                  <div>
                    <h3>
                      {review.name}
                      <span className="yp-review-job"> · {review.job}</span>
                    </h3>
                    <div className="yp-stars">★★★★★</div>
                    <p>{review.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Footer */}
        <footer className="yp-section yp-footer">
          <div className="yp-footer-cols">
            <div>
              <h4>Shop Bí Kíp</h4>
              <p>Bí Kíp Hài Hước + Bí Kíp Tán Gái</p>
              <p>Gọi ngay: 0523.085.555</p>
              <p>Zalo: 0523.085.555</p>
              <p>Fanpage: bithuattangai</p>
            </div>
            <div className="yp-center">
              <ImgSlot
                label="Biểu tượng / mã quét"
                className="yp-slot--logo yp-slot--light"
              />
              <p style={{ marginTop: 10, fontWeight: 800 }}>
                Bộ 2 bí kíp — chỉ 199K / 2 cuốn
              </p>
            </div>
          </div>
        </footer>

        {/* Floating contacts */}
        <div className="yp-float" aria-label="Liên hệ nhanh">
          <a
            className="yp-float--zalo"
            href="https://zalo.me/84523085555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo"
          >
            Zalo
          </a>
          <a
            href="https://www.facebook.com/bithuattangai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trang mạng xã hội"
          >
            Mạng
          </a>
          <a
            className="yp-float--call"
            href="tel:0523085555"
            aria-label="Gọi 0523085555"
          >
            Gọi
          </a>
        </div>

        {/* Sticky CTA */}
        <div className="yp-sticky">
          <CtaButton />
        </div>
      </div>
    </div>
  );
}
