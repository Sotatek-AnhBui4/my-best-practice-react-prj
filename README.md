# My Best Practice React Project 2025

Dự án React được xây dựng theo best practices năm 2025 với cấu trúc folder tối ưu cho doanh nghiệp.

## 🚀 Công nghệ sử dụng

- **React 19** - Thư viện UI hiện đại nhất
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool cực nhanh
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing cho React app
- **Zustand** - State management đơn giản và mạnh mẽ
- **ESLint** - Code linting
- **Prettier** - Code formatter
- **Husky** - Git hooks
- **Lint-staged** - Run linters on staged files
- **Commitlint** - Enforce conventional commits

## 📁 Cấu trúc dự án

```
/my-app
├── /public/                # Static files
│   ├── index.html
│   └── /images/
│
├── /src/
│   ├── /assets/           # Static assets (images, fonts)
│   │   └── react.svg
│   │
│   ├── /components/       # Reusable components
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Navbar.tsx
│   │
│   ├── /features/         # Feature-based modules
│   │   ├── /auth/        # Authentication feature
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── /dashboard/    # Dashboard feature
│   │   │   └── Dashboard.tsx
│   │   └── /profile/      # Profile feature
│   │       └── Profile.tsx
│   │
│   ├── /hooks/            # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── useForm.ts
│   │
│   ├── /layouts/          # Layout components
│   │   ├── MainLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   └── DashboardLayout.tsx
│   │
│   ├── /pages/            # Page components (routes)
│   │   ├── /Auth/
│   │   │   ├── SignInPage.tsx
│   │   │   └── SignUpPage.tsx
│   │   ├── Home.tsx
│   │   ├── Users.tsx
│   │   ├── Products.tsx
│   │   └── ContactUs.tsx
│   │
│   ├── /services/         # API services
│   │   ├── authService.ts
│   │   └── apiService.ts
│   │
│   ├── /store/            # State management (Redux, Zustand, Context)
│   │   └── (Thêm khi cần state management)
│   │
│   ├── /styles/           # Global styles
│   │   └── index.css
│   │
│   ├── /types/            # TypeScript types
│   │   ├── auth.d.ts
│   │   ├── api.d.ts
│   │   └── user.d.ts
│   │
│   ├── /utils/            # Utility functions
│   │   ├── formatDate.ts
│   │   └── validateEmail.ts
│   │
│   ├── /config/           # Configuration files
│   │   └── index.ts
│   │
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── router.tsx         # Router configuration
│
├── .env.example           # Environment variables example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📂 Chi tiết các thư mục

### `/assets`

Chứa các file static như images, fonts, icons.

### `/components`

Components tái sử dụng được trong toàn bộ ứng dụng:

- `Button.tsx` - Button component với variants
- `Modal.tsx` - Modal/Dialog component
- `Navbar.tsx` - Navigation bar

### `/features`

Tổ chức code theo tính năng (feature-based architecture):

- **auth/** - Xác thực người dùng (Login, Register)
- **dashboard/** - Trang dashboard
- **profile/** - Quản lý profile

Mỗi feature có thể chứa:

- Components riêng
- Hooks riêng
- Types riêng
- Utils riêng

### `/hooks`

Custom React hooks:

- `useAuth` - Quản lý authentication
- `useFetch` - Fetch data từ API
- `useForm` - Quản lý form state

### `/layouts`

Layout components cho các trang:

- `MainLayout` - Layout chính với header/footer
- `AdminLayout` - Layout cho admin panel
- `DashboardLayout` - Layout cho dashboard

### `/pages`

Page-level components (map với routes):

- Mỗi page tương ứng với 1 route
- Import components từ `/features` hoặc `/components`

### `/services`

API services và external integrations:

- `authService` - API calls cho authentication
- `apiService` - General API client

### `/types`

TypeScript type definitions:

- `auth.d.ts` - Types cho authentication
- `api.d.ts` - Types cho API responses
- `user.d.ts` - Types cho user data

### `/utils`

Utility functions:

- `formatDate` - Format ngày tháng
- `validateEmail` - Validate email, password, phone

### `/config`

Configuration và environment variables:

- Export các biến môi trường
- App settings

## 🛠️ Cài đặt

### Yêu cầu

- **Node.js**: 22 LTS hoặc cao hơn
- **pnpm**: Package manager (khuyên dùng)

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục
cd my-best-practice-react-prj

# Cài đặt dependencies
pnpm install

# Copy file .env
cp .env.example .env

# Chạy development server
pnpm dev
```

## 📝 Scripts

```bash
# Development
pnpm dev

# Build cho production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Fix linting errors tự động
pnpm lint:fix

# Format code với Prettier
pnpm format

# Kiểm tra code formatting
pnpm format:check
```

## 🌐 Environment Variables

Tạo file `.env` từ `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=My Best Practice React App
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

## 🔧 Sử dụng React Router (Optional)

Để sử dụng routing, cài đặt React Router:

```bash
pnpm add react-router-dom
```

Sau đó update `App.tsx`:

```tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./router";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## 🔧 Thêm State Management (Optional)

### Zustand

```bash
pnpm add zustand
```

### Redux Toolkit

```bash
pnpm add @reduxjs/toolkit react-redux
```

## 🔒 Code Quality & Git Hooks

Dự án sử dụng các công cụ để đảm bảo chất lượng code:

### Husky

Git hooks tự động chạy khi commit:

- **pre-commit**: Tự động chạy ESLint và Prettier trên các file staged
- **commit-msg**: Kiểm tra format của commit message theo Conventional Commits

### Prettier

Code formatter đảm bảo code style nhất quán:

- Cấu hình trong `.prettierrc`
- Ignore files trong `.prettierignore`
- Tự động format khi commit

### ESLint

Phát hiện và fix lỗi code:

- Cấu hình trong `eslint.config.js`
- Tự động fix lỗi với `pnpm lint:fix`

### Commitlint

Enforce commit message convention:

- Format: `type(scope): subject`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Ví dụ: `feat(auth): add login functionality`

### Lint-staged

Chỉ chạy linters trên files đã staged, giúp tăng tốc độ:

- Cấu hình trong `.lintstagedrc`
- Tự động chạy khi pre-commit hook

Xem thêm chi tiết trong [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📚 Best Practices

### 1. **Feature-Based Architecture**

- Tổ chức code theo tính năng thay vì loại file
- Mỗi feature độc lập, dễ maintain và scale

### 2. **TypeScript**

- Sử dụng TypeScript cho type safety
- Định nghĩa types rõ ràng trong `/types`

### 3. **Custom Hooks**

- Tách logic ra khỏi components
- Tái sử dụng code dễ dàng

### 4. **Service Layer**

- Tách API logic ra khỏi components
- Centralized error handling

### 5. **Code Organization**

- Components nhỏ, single responsibility
- Tách presentational và container components

### 6. **Naming Conventions**

- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with "use" prefix (e.g., `useAuth.ts`)
- Utils: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase with descriptive names

## 🎨 Styling

Project sử dụng **Tailwind CSS** cho styling:

- Utility-first approach
- Responsive design
- Custom theme trong `tailwind.config.js`

## 📖 Hướng dẫn thêm tính năng mới

### Thêm một feature mới:

1. Tạo folder trong `/src/features/`:

```
/features/
  └── /orders/
      ├── OrderList.tsx
      ├── OrderDetail.tsx
      ├── useOrders.ts
      └── types.ts
```

2. Tạo service nếu cần:

```typescript
// /services/orderService.ts
export const orderService = {
  getOrders: async () => { ... },
  createOrder: async (data) => { ... },
};
```

3. Tạo page:

```typescript
// /pages/Orders.tsx
import OrderList from "@/features/orders/OrderList";

const Orders = () => <OrderList />;
export default Orders;
```

4. Thêm route vào router.tsx (nếu dùng React Router)

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License

## 👨‍💻 Author

Your Name - your.email@example.com

---

**Happy Coding! 🚀**
