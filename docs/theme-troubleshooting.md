# Hướng dẫn khắc phục lỗi nút theme trong Chrome Extension

## Các vấn đề thường gặp

Nút theme có thể không hoạt động do một trong các nguyên nhân sau:

1. **Content Security Policy (CSP) vi phạm**
   - Chrome Extensions với Manifest V3 có các chính sách bảo mật nghiêm ngặt
   - Inline scripts bị chặn hoàn toàn

2. **Đường dẫn import không chính xác**
   - Đường dẫn tương đối có thể không hoạt động đúng trong Chrome Extensions
   - Sử dụng đường dẫn tuyệt đối hoặc đặt file trong cùng thư mục

3. **Lỗi JavaScript không được xử lý**
   - Thiếu try/catch để bắt lỗi
   - Console không hiển thị chi tiết lỗi

## Giải pháp triệt để

File `direct-theme-toggle.js` được thêm vào làm giải pháp dự phòng đơn giản nhưng đáng tin cậy:

1. Chỉ cung cấp chức năng chuyển đổi giữa dark và light
2. Không phụ thuộc vào hệ thống theme phức tạp
3. Ưu tiên tính ổn định thay vì tính năng đầy đủ

## Cách triển khai

1. **Đảm bảo đúng thứ tự load scripts**:
   ```html
   <!-- Direct theme toggle cho độ tin cậy tối đa -->
   <script src="direct-theme-toggle.js"></script>
   
   <!-- Hệ thống theme nâng cao (có thể sử dụng trong tương lai) -->
   <script type="module" src="theme-init.js"></script>
   ```

2. **Tránh xung đột giữa hai hệ thống**:
   - direct-theme-toggle.js hoạt động trước
   - theme-init.js kiểm tra nếu direct-theme-toggle đã hoạt động thì không khởi tạo nữa

## Hướng dẫn mở rộng trong tương lai

Nếu muốn phát triển hệ thống theme đầy đủ:

1. Đầu tiên đảm bảo direct-theme-toggle.js hoạt động tốt
2. Dần dần chuyển tính năng sang theme.js và theme-init.js
3. Luôn giữ direct-theme-toggle.js như giải pháp dự phòng
4. Thử nghiệm kỹ trong chế độ incognito (không có localStorage)

## Kiểm tra khi gặp lỗi

1. Mở DevTools (F12)
2. Kiểm tra Console để xem lỗi CSP
3. Thử tắt/bật extension
4. Kiểm tra trên cả chế độ thường và incognito