# Architecture & Design Patterns

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│              React Application                   │
│         (BrowserRouter + Routes)                │
└──────────────────┬──────────────────────────────┘
                   │
                   ├─► Sidebar Navigation
                   ├─► Header with Search
                   └─► Main Content Area
                       │
                       ├─► Dashboard Page
                       ├─► Customers Page
                       ├─► Customer Detail Page
                       ├─► Analytics Page
                       └─► Settings Page
                           │
                           ├─► Context API
                           │   └─► CustomerContext
                           │
                           ├─► GSAP Animations
                           │   ├─► useAnimation Hooks
                           │   └─► timelines.js
                           │
                           └─► Reusable Components
                               ├─► Layout Components
                               ├─► UI Components
                               └─► Feature Components
```

## 🎯 Core Concepts

### 1. Component Tree Structure

**Layout Hierarchy:**
```
App.jsx (Router Setup)
├── CustomerProvider (Context)
│   └── Dashboard/Customers/etc
│       └── Layout
│           ├── Sidebar
│           ├── Header
│           └── Main Content
│               ├── Cards
│               ├── Forms
│               └── Tables
```

**Component Categories:**

1. **Page Components** (`pages/`)
   - Full-page components with routing
   - Handle page-level state and layout
   - Include Layout wrapper
   - Examples: Dashboard, Customers, Analytics

2. **Layout Components** (`components/`)
   - Sidebar - Navigation and branding
   - Header - Search and notifications
   - Layout - Combines sidebar and header

3. **UI Components** (`components/`)
   - Reusable, generic components
   - No business logic
   - Customizable via props
   - Examples: Card, Button, Input, StatsCard

4. **Feature Components** (`components/`)
   - Domain-specific components
   - Combine multiple UI components
   - Include business logic
   - Examples: CustomerForm, CustomerTable, OverviewCards

### 2. State Management

**Context API Pattern:**

```jsx
// Create Context
const CustomerContext = createContext();

// Provider Component
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  
  const addCustomer = useCallback((customer) => {
    setCustomers(prev => [customer, ...prev]);
  }, []);

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

// Custom Hook
export const useCustomers = () => {
  const context = useContext(CustomerContext);
  return context;
};
```

**Usage Pattern:**
```jsx
function MyComponent() {
  const { customers, addCustomer } = useCustomers();
  // Use context values
}
```

### 3. Animation Architecture

**GSAP Integration Pattern:**

```jsx
// Custom Hook (reusable)
export const useStaggerAnimation = (selector, options) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(selector, fromVars, toVars);
    return () => tl.kill();
  }, [selector]);
};

// Timeline Functions
export const createCardStaggerTimeline = (selector) => {
  const tl = gsap.timeline();
  // Animation logic
  return tl;
};

// Usage in Component
function Dashboard() {
  useStaggerAnimation('.cards', { duration: 0.5 });
  return <div className="cards">...</div>;
}
```

**Animation Patterns:**
- **Hooks** - For reusable, repeating animations
- **Timelines** - For complex, coordinated animations
- **Ref-based** - For direct DOM manipulation
- **Class-based** - For CSS-driven animations

### 4. Form Handling Pattern

**Controlled Component Pattern:**
```jsx
const [formData, setFormData] = useState(initialState);
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  // validation logic
  return newErrors;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  if (Object.keys(newErrors).length === 0) {
    // Submit form
  }
};
```

### 5. Routing Architecture

**React Router Setup:**
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/customers/:id" element={<CustomerDetail />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</BrowserRouter>
```

## 🎨 Design Patterns Used

### 1. Container/Presentational Pattern

**Container Component** (Smart):
```jsx
// pages/Customers.jsx
function Customers() {
  const { customers, deleteCustomer } = useCustomers();
  const [filteredData, setFilteredData] = useState([]);

  // Business logic here

  return <CustomerTable customers={filteredData} onDelete={deleteCustomer} />;
}
```

**Presentational Component** (Dumb):
```jsx
// components/CustomerTable.jsx
function CustomerTable({ customers, onDelete }) {
  return (
    <table>
      {customers.map(customer => (
        <tr key={customer.id}>
          {/* Display only */}
          <button onClick={() => onDelete(customer.id)}>Delete</button>
        </tr>
      ))}
    </table>
  );
}
```

**Benefits:**
- Separation of concerns
- Reusable presentational components
- Easy to test

### 2. Compound Components Pattern

```jsx
// Layout combines Sidebar and Header
const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <Header />
    <main>{children}</main>
  </div>
);

// Usage
<Layout>
  <Dashboard />
</Layout>
```

### 3. Custom Hooks Pattern

```jsx
// Reusable animation logic
export const useStaggerAnimation = (selector, options) => {
  useEffect(() => {
    // Animation setup
    return () => {
      // Cleanup
    };
  }, []);
};

// Usage in multiple components
function Dashboard() {
  useStaggerAnimation('.cards');
}

function Customers() {
  useStaggerAnimation('tbody tr');
}
```

### 4. Higher Order Pattern (HOC)

```jsx
// Layout as a wrapper
function Dashboard() {
  return (
    <Layout>
      <DashboardContent />
    </Layout>
  );
}
```

### 5. Render Props / Children as Function

```jsx
// Card component accepts children
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>

// Button with variants
<Button variant="primary" size="lg">
  Click Me
</Button>
```

## 📚 Data Flow

### Customer CRUD Flow

```
User Interaction
      ↓
Event Handler (onClick, onChange)
      ↓
State Update (setFormData, addCustomer)
      ↓
Context Update (CustomerContext)
      ↓
Component Re-render
      ↓
GSAP Animation Trigger
      ↓
DOM Update (Visual Change)
```

### Example: Adding a Customer

```
1. User fills form
   ↓
2. handleSubmit() called
   ↓
3. validateForm() checks errors
   ↓
4. addCustomer() adds to context
   ↓
5. CustomerContext state updates
   ↓
6. All components using useCustomers() re-render
   ↓
7. CustomerTable receives new customers array
   ↓
8. useEffect triggers GSAP animation on new rows
   ↓
9. New customer appears with animation
```

## 🔄 Component Communication

### Direct Props (Simple)
```jsx
// Parent to Child
<Button onClick={handleClick}>Click</Button>

// Child to Parent
const handleClick = () => {
  onSubmit?.(data);
};
```

### Context API (Global State)
```jsx
// Provide at top level
<CustomerProvider>
  <App />
</CustomerProvider>

// Access anywhere
const { customers } = useCustomers();
```

### Event Bubbling (Events)
```jsx
<form onSubmit={handleSubmit}>
  <input onChange={handleChange} />
  <button type="submit">Submit</button>
</form>
```

## ⚡ Performance Optimizations

### 1. Memoization

**React.memo** - Prevent unnecessary re-renders:
```jsx
const StatsCard = React.memo(({ value, label }) => (
  <div>{label}: {value}</div>
));

export default StatsCard;
```

**useMemo** - Memoize expensive computations:
```jsx
const filteredCustomers = useMemo(() => {
  return customers.filter(c => c.name.includes(search));
}, [customers, search]);
```

**useCallback** - Memoize functions:
```jsx
const handleDelete = useCallback((id) => {
  deleteCustomer(id);
}, [deleteCustomer]);
```

### 2. Code Splitting

**Lazy Loading:**
```jsx
const Analytics = React.lazy(() => import('./pages/Analytics'));

<Suspense fallback={<Loading />}>
  <Analytics />
</Suspense>
```

### 3. GSAP Cleanup

**Always kill timelines:**
```jsx
useEffect(() => {
  const tl = gsap.timeline();
  // setup
  return () => tl.kill(); // Cleanup!
}, []);
```

## 🧪 Testing Strategy

### Component Unit Tests
```jsx
// Test Button component
describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
});
```

### Context Tests
```jsx
// Test CustomerContext
describe('CustomerContext', () => {
  it('adds customer', () => {
    const wrapper = ({ children }) => (
      <CustomerProvider>{children}</CustomerProvider>
    );
    const { result } = renderHook(() => useCustomers(), { wrapper });
    
    act(() => {
      result.current.addCustomer({ name: 'John' });
    });
    
    expect(result.current.customers[0].name).toBe('John');
  });
});
```

## 📋 Checklist for New Features

- [ ] Create component file
- [ ] Define prop types/interface
- [ ] Add error handling
- [ ] Include animations (if visual)
- [ ] Add keyboard support (accessibility)
- [ ] Test with different data
- [ ] Document usage examples
- [ ] Add to index.js exports
- [ ] Update README if public API

## 🚀 Best Practices Summary

1. **Keep Components Small** - Single responsibility principle
2. **Use Context for Global State** - Avoid prop drilling
3. **Animate with GSAP** - For smooth, performant animations
4. **Clean Up Effects** - Prevent memory leaks
5. **Validate Forms** - Before submission
6. **Handle Errors** - Gracefully
7. **Write Semantic HTML** - For accessibility
8. **Use TypeScript** - For type safety (optional)
9. **Document Components** - JSDoc comments
10. **Test Thoroughly** - Unit and integration tests

---

This architecture ensures scalability, maintainability, and performance while keeping the code clean and professional.
