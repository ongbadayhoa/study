# Hệ Thống Học Tập

Hệ thống học tập trực tuyến với các loại bài tập đa dạng, được xây dựng bằng Next.js, Tailwind CSS, shadcn/ui và Supabase.

## Tổng quan về hệ thống

### Mục tiêu và tầm nhìn
Hệ thống học tập được thiết kế để cung cấp trải nghiệm học tập tương tác, cá nhân hóa và hiệu quả cho học sinh. Hệ thống tập trung vào việc duy trì động lực học tập thông qua các cơ chế gamification như streak, chempoint và các loại bài tập đa dạng.

### Đối tượng người dùng mục tiêu
- Học sinh trung học cơ sở và trung học phổ thông
- Giáo viên và phụ huynh theo dõi tiến độ học tập
- Quản trị viên quản lý nội dung học tập

### Giá trị cốt lõi và điểm khác biệt
- Trải nghiệm học tập cá nhân hóa dựa trên kết quả học tập
- Hệ thống gamification để duy trì động lực học tập
- Tích hợp AI để tạo nội dung và phân tích kết quả học tập
- Đa dạng loại bài tập phù hợp với nhiều phong cách học tập khác nhau

## Kiến trúc hệ thống

### Công nghệ sử dụng
- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Supabase
- **Database**: PostgreSQL (thông qua Supabase)
- **Authentication**: Supabase Auth
- **AI Integration**: OpenAI API

### Cấu trúc dự án
```
learning-system/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (auth)/           # Các trang xác thực
│   │   ├── (main)/           # Các trang chính
│   │   └── api/              # API Routes
│   ├── components/           # React Components
│   │   ├── ui/               # UI Components
│   │   └── ...               # Các components khác
│   ├── lib/                  # Thư viện và utilities
│   └── types/                # TypeScript types
├── public/                   # Static assets
└── ...                       # Các file cấu hình
```

## Các loại bài tập

### 1. Streak
- **Mô tả**: Bài tập hàng ngày để duy trì chuỗi học tập
- **Đặc điểm**: 3 câu mỗi ngày (2 câu dễ + 1 câu khó)
- **Mục tiêu**: Duy trì thói quen học tập hàng ngày

### 2. Homework
- **Mô tả**: Bài tập theo lộ trình học tập
- **Đặc điểm**: 10 câu mỗi bài, 3 mức độ khó, gắn với video bài giảng
- **Mục tiêu**: Củng cố kiến thức từ bài giảng

### 3. Test
- **Mô tả**: Bài thi thử với cấu trúc giống thi thật
- **Đặc điểm**: 60 câu, có giới hạn thời gian, phân tích kết quả chi tiết
- **Mục tiêu**: Đánh giá năng lực và chuẩn bị cho kỳ thi

### 4. Practice
- **Mô tả**: Luyện tập tự do theo chủ đề
- **Đặc điểm**: Không giới hạn số câu, giải thích ngay sau mỗi câu
- **Mục tiêu**: Cải thiện kỹ năng theo từng chủ đề cụ thể

## Hệ thống tính điểm và chempoint

### Chempoint
- Đơn vị điểm thưởng trong hệ thống
- Nhận được khi hoàn thành bài tập, duy trì streak
- Dùng để mở khóa nội dung, tính năng đặc biệt

### Quy tắc tính điểm
- Mỗi câu đúng = 10 điểm
- Làm lại bài tập và cải thiện điểm số = thêm chempoint
- Streak càng dài = thưởng chempoint càng nhiều

## Tính năng AI

### Tạo câu hỏi tự động
- Sử dụng AI để tạo câu hỏi theo chủ đề, độ khó
- Tạo các lựa chọn và giải thích chi tiết

### Gợi ý luyện tập cá nhân hóa
- Phân tích kết quả học tập để đề xuất bài luyện tập phù hợp
- Tạo lộ trình học tập cá nhân hóa

### Phân tích kết quả học tập
- Xác định điểm mạnh, điểm yếu của học sinh
- Đề xuất chiến lược học tập hiệu quả

## Cài đặt và chạy dự án

### Yêu cầu
- Node.js 18+ và npm/yarn
- Tài khoản Supabase
- API Key của OpenAI (tùy chọn)

### Cài đặt
1. Clone repository
```bash
git clone https://github.com/yourusername/learning-system.git
cd learning-system
```

2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

3. Cấu hình biến môi trường
Tạo file `.env.local` với nội dung:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
OPENAI_API_KEY=your-openai-api-key
```

4. Chạy dự án
```bash
npm run dev
# hoặc
yarn dev
```

5. Truy cập http://localhost:3000

## Kế hoạch phát triển

### Giai đoạn 1: MVP
- Xây dựng các trang cơ bản
- Tích hợp Supabase cho xác thực và database
- Triển khai các loại bài tập cơ bản

### Giai đoạn 2: Tính năng nâng cao
- Tích hợp AI để tạo câu hỏi và phân tích kết quả
- Cải thiện hệ thống gamification
- Thêm tính năng xã hội và bảng xếp hạng

### Giai đoạn 3: Mở rộng
- Hỗ trợ nhiều môn học
- Tích hợp với các hệ thống học tập khác
- Phát triển ứng dụng di động

## Đóng góp

Chúng tôi rất hoan nghênh mọi đóng góp cho dự án. Vui lòng tạo issue hoặc pull request để đóng góp.

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.
