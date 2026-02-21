# Professional SaaS Dashboard

A production-grade SaaS dashboard built with **React**, **Tailwind CSS**, **GSAP**, and **Context API**. Features a beautiful UI without any third-party component libraries.

## 🎯 Features

- ✨ **Professional UI** - Clean, modern design with consistent styling
- 🎬 **GSAP Animations** - Smooth, hardware-accelerated animations throughout
- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom theme
- 🗂️ **Context API** - Global state management for customer data
- 📊 **Dashboard Overview** - Stats cards with animated counters
- 👥 **Customer Management** - CRUD operations with form validation
- 🔍 **Search & Filter** - Real-time search and status filtering
- 📱 **Responsive Design** - Fully responsive on all devices
- 🎯 **Persistent Sidebar** - Sticky navigation with collapse toggle
- 💫 **Page Transitions** - Smooth page transitions with animations

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Card.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── StatsCard.jsx
│   ├── OverviewCards.jsx
│   ├── CustomerForm.jsx
│   ├── CustomerTable.jsx
│   └── index.js
├── pages/              # Page components
│   ├── Dashboard.jsx
│   ├── Customers.jsx
│   ├── CustomerDetail.jsx
│   ├── Analytics.jsx
│   ├── Settings.jsx
│   └── index.js
├── context/            # Global state management
│   └── CustomerContext.jsx
├── hooks/              # Custom React hooks
│   └── useAnimation.js
├── animations/         # GSAP timelines and utilities
│   └── timelines.js
├── utils/              # Helper functions
│   └── helpers.js
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── assets/
```

## 🛠️ Technology Stack

- **React 19** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **GSAP 3** - Animation library
- **React Router 7** - Client-side routing
- **PostCSS** - CSS transformation tool

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd dashboared
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

## 📖 Component Documentation

### Layout Components

#### `Sidebar`
Persistent left sidebar with navigation menu and user profile.

**Features:**
- Collapsible sidebar with smooth animation
- Active route highlighting
- User profile display
- Navigation to all main pages

#### `Header`
Fixed top header with search, notifications, and user menu.

**Features:**
- Real-time search functionality
- Notification dropdown
- User menu with logout option
- Responsive design

#### `Layout`
Wrapper component that combines Sidebar and Header for consistent layout.

### UI Components

#### `Card`
Container component with shadow and hover effects.

```jsx
<Card className="p-6">
  <h2>Content</h2>
</Card>
```

#### `Button`
Customizable button with multiple variants and sizes.

```jsx
<Button variant="primary" size="md">
  Click me
</Button>
```

**Variants:** `primary`, `secondary`, `danger`, `ghost`
**Sizes:** `sm`, `md`, `lg`

#### `Input`
Form input with label, error message, and icon support.

```jsx
<Input
  label="Email"
  type="email"
  error={errors.email}
  icon="📧"
  required
/>
```

#### `StatsCard`
Animated statistics card with icon and trend.

```jsx
<StatsCard
  icon="👥"
  label="Total Customers"
  value={1248}
  trend="+12%"
  color="blue"
/>
```

### Feature Components

#### `OverviewCards`
Grid of animated statistics cards using GSAP stagger animation.

#### `CustomerForm`
Form for adding/editing customers with validation.

```jsx
<CustomerForm
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

#### `CustomerTable`
Responsive table with status badges and action buttons.

### Page Components

#### `Dashboard`
Main dashboard with overview cards and recent customers.

#### `Customers`
Customer management page with search, filter, and CRUD operations.

#### `CustomerDetail`
Detailed customer view with contact information and activity log.

#### `Analytics`
Business analytics with charts and metrics.

#### `Settings`
Account, notification, privacy, and billing settings.

## 🎬 Animation Hooks

### `useStaggerAnimation`
Stagger animation on multiple elements.

```jsx
useStaggerAnimation('.cards', {
  duration: 0.5,
  stagger: 0.1,
  delay: 0
});
```

### `useFadeInAnimation`
Fade in animation for elements.

```jsx
useFadeInAnimation('[data-content]', {
  duration: 0.6,
  delay: 0
});
```

### `useSlideInAnimation`
Slide in animation from specified direction.

```jsx
useSlideInAnimation('.element', 'left', {
  duration: 0.5,
  distance: 30
});
```

### `useHoverAnimation`
Scale animation on hover.

```jsx
useHoverAnimation(ref, {
  scale: 1.05,
  duration: 0.3
});
```

### `usePulseAnimation`
Continuous pulse animation.

```jsx
usePulseAnimation('.badge', {
  duration: 1,
  scale: 1.05
});
```

## 🌐 Context API

### CustomerContext
Global state management for customers.

**Provides:**
- `customers` - Array of all customers
- `addCustomer(customer)` - Add new customer
- `updateCustomer(id, data)` - Update customer
- `deleteCustomer(id)` - Delete customer
- `getCustomerById(id)` - Get single customer

**Usage:**
```jsx
import { useCustomers } from './context/CustomerContext';

function MyComponent() {
  const { customers, addCustomer } = useCustomers();
  // ...
}
```

## 🎨 Customization

### Color Theme
Modify colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      // ...
    }
  }
}
```

### Animations
Customize GSAP animations in `src/animations/timelines.js`:

```js
export const createCardStaggerTimeline = (selector) => {
  const tl = gsap.timeline();
  tl.fromTo(
    selector,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }
  );
  return tl;
};
```

## 📦 Building for Production

```bash
npm run build
```

The optimized build will be in the `build/` directory.

## 🔍 Code Quality

The project uses ESLint for code quality. Run linting:

```bash
npm run lint
```

## 📝 Best Practices

1. **Component Structure** - Keep components small and focused
2. **Animations** - Use GSAP hooks for reusable animations
3. **State Management** - Use Context API for global state, hooks for local state
4. **Styling** - Use Tailwind classes, avoid inline styles
5. **Performance** - Use React.memo for expensive components
6. **Accessibility** - Use semantic HTML and ARIA labels where needed

## 🚀 Performance Tips

1. **Code Splitting** - Use React.lazy for route-based code splitting
2. **Image Optimization** - Convert images to WebP format
3. **Bundle Analysis** - Analyze bundle size with `vite-plugin-visualizer`
4. **Lazy Loading** - Load data as needed
5. **Memoization** - Use useMemo and useCallback for expensive operations

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vite not serving correctly
```bash
npm run dev -- --host
```

### Tailwind not compiling
Ensure `postcss.config.js` exists and dependencies are installed.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 💡 Future Enhancements

- [ ] Dark mode support
- [ ] User authentication
- [ ] Database integration
- [ ] Export customer data (CSV/PDF)
- [ ] Advanced analytics charts
- [ ] Multi-language support
- [ ] Real-time updates with WebSocket
- [ ] Mobile app version

---

**Built with ❤️ for professional SaaS applications**
