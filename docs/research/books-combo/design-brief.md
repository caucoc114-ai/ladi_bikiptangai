# Thiết kế landing — Combo 2 bí kíp

Route: `/`  
Component: `src/components/sites/youtube-pro/YoutubeProLanding.tsx`  
CSS: `src/components/sites/youtube-pro/youtube-pro.css`  
Assets: `public/sites/books-combo/`

## Sản phẩm
- Combo 2 cuốn: **Bí Kíp Hài Hước** + **Bí Kíp Tán Gái (Nghệ Thuật Chém Gió Đỉnh Cao)**
- Giá bìa: **598.000đ**
- Giá bán: **199.000đ / 2 cuốn**
- Ship + COD (giữ 2 từ này; còn lại Việt hóa)

## Khung giao diện
- Chỉ tối ưu **mobile**, max-width **430px**, căn giữa
- Sẵn sàng đẩy Vercel (`output: "standalone"`)
- Font body: Be Vietnam Pro
- Font headline hero: Pattaya
- Liên hệ: Zalo `0523085555`, Fanpage `bithuattangai`, gọi `0523085555`

## Hero
- Badge: Học cách tán gái từ A-Z
- Headline viết hoa chữ đầu: **Bí Kíp Tán Gái / Thực Chiến**
- Dòng nhấn **TÁN LÀ ĐỔ** — hiệu ứng nhấp nháy
- Mọi CTA nhấp nháy cùng nhịp

## Form đặt hàng
- Chỉ: Họ tên, SĐT, Địa chỉ (không email)
- Ghi chú: Miễn phí ship + COD toàn quốc

## Ảnh đã chốt
| Slot | File |
|------|------|
| Đối tượng 1–4 | `audience-1.jpg` … `audience-4.jpg` |
| Quà 1–4 | `gift-1.jpg` … `gift-4.jpg` |
| Cảm nhận chat 1–6 | `feedback-1.jpg` … `feedback-6.jpg` |
| Avatar đánh giá 1–4 | `avatar-1.jpg` … `avatar-4.jpg` |

### Đối tượng (pain points)
1. Cứng miệng / nói chuyện nhạt  
2. Não đơ khi muốn mở lời  
3. Bị xếp “chỉ là bạn”  
4. Muốn học tán / chém gió  

### Quà / ưu đãi
1. Combo 2 cuốn — 199K  
2. Miễn phí ship toàn quốc  
3. Danh sách mở lời & giữ nhịp  
4. Ưu đãi khung giờ vàng  

### Đánh giá sao
- Điểm: **4,9/5**
- Dòng giữa: **Hàng trăm anh em đã chốt** (bỏ “đánh giá trung bình”, bỏ “Hôm nay”)
- Avatar đời thường ~30 tuổi, cười tỉm tỉm + nghề:
  - Anh Minh · Nông dân  
  - Anh Dũng · Công nhân xây dựng  
  - Tuấn Anh · Nhân viên văn phòng (mặt mụn)  
  - Hoàng Long · Công nhân nhà máy  

## Footer
- Bỏ khối “Hỗ trợ khách hàng”
- Giữ Shop Bí Kíp + Fanpage: bithuattangai + slot logo/mã quét

## Slot còn trống (placeholder)
- Ảnh hero sách / đế trưng bày
- Minh họa phần “Bạn sẽ nhận được gì” (01–05)
- Slider ảnh sách + trang mẫu đọc thử
- Ảnh sản phẩm / ảnh giá trong form
- Logo / mã quét footer
