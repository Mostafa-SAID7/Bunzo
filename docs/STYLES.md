# Styles Guide

Styling guidelines and conventions for Bunzo.

## Design System

### Color Palette

```css
/* Primary Colors - Bunzo Brand */
--primary: #10b981;         /* Emerald green (main brand) */
--primary-dark: #059669;    /* Darker emerald */
--primary-light: #34d399;   /* Lighter emerald */
--background: #ffffff;      /* Main background */
--surface: #f9fafb;         /* Card backgrounds */

/* Text Colors */
--text-primary: #111827;    /* Main text (gray-900) */
--text-secondary: #6b7280;  /* Secondary text (gray-500) */
--text-muted: #9ca3af;      /* Muted text (gray-400) */

/* Border Colors */
--border: #e5e7eb;          /* Subtle borders (gray-200) */
--border-dark: #d1d5db;     /* Darker borders (gray-300) */

/* Status Colors */
--success: #10b981;         /* Success state (emerald-500) */
--error: #ef4444;           /* Error state (red-500) */
--warning: #f59e0b;         /* Warning state (amber-500) */
--info: #3b82f6;            /* Info state (blue-500) */

/* Background Gradients */
--gradient-primary: linear-gradient(135deg, #10b981, #059669);
--gradient-hero: linear-gradient(135deg, #064e3b, #10b981);
```

### Typography

**Fonts**:
- **Primary**: Inter (sans-serif) - Modern, clean, readable
- **Secondary**: Public Sans (monospace) - Technical content
- **Accent**: Lobster (cursive) - Decorative headings
- **Fallback**: System font stack

**Font Sizes**:
```css
text-xs: 0.75rem;    /* 12px - Small labels */
text-sm: 0.875rem;   /* 14px - Body text */
text-base: 1rem;     /* 16px - Default */
text-lg: 1.125rem;   /* 18px - Large body */
text-xl: 1.25rem;    /* 20px - Small headings */
text-2xl: 1.5rem;    /* 24px - Medium headings */
text-3xl: 1.875rem;  /* 30px - Large headings */
text-4xl: 2.25rem;   /* 36px - Hero headings */
text-5xl: 3rem;      /* 48px - Display headings */
```

**Font Weights**:
```css
font-normal: 400;    /* Regular text */
font-medium: 500;    /* Emphasized text */
font-semibold: 600;  /* Subheadings */
font-bold: 700;      /* Headings */
```

### Spacing System

```css
gap-1: 0.25rem;   /* 4px - Tight spacing */
gap-2: 0.5rem;    /* 8px - Small spacing */
gap-4: 1rem;      /* 16px - Default spacing */
gap-6: 1.5rem;    /* 24px - Medium spacing */
gap-8: 2rem;      /* 32px - Large spacing */
gap-12: 3rem;     /* 48px - Extra large spacing */
gap-16: 4rem;     /* 64px - Section spacing */
```

## Bunzo Brand Elements

### Logo Usage
- **Primary Logo**: `bunzo_logo.svg` (140x48px)
- **Favicon**: `favicon.svg` (32x32px)
- **Colors**: Emerald green (#10b981) on white/transparent
- **Minimum Size**: 80px width for readability

### Scrollbar Styling
```css
/* Custom Bunzo Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 4px;
  border: 1px solid #f1f5f9;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #059669, #047857);
}
```

## Tailwind CSS

### Utility Classes

**Layout**:
```tsx
<div className="flex flex-col md:flex-row gap-4">
  {/* Responsive flexbox */}
</div>
```

**Grid**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

**Responsive Design**:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Responsive text */}
</div>
```

**Hover Effects**:
```tsx
<button className="hover:bg-primary hover:text-white transition-all duration-300">
  {/* Smooth hover */}
</button>
```

### Custom Classes

**Animations**:
```css
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Component Styles

### Buttons

```tsx
{/* Primary Button - Bunzo Brand */}
<button className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg">
  Button Text
</button>

{/* Secondary Button */}
<button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
  Button Text
</button>

{/* Outline Button - Bunzo Style */}
<button className="px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
  Button Text
</button>

{/* Gradient Button */}
<button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg hover:from-primary-dark hover:to-emerald-800 transition-all duration-300">
  Gradient Button
</button>
```

### Cards - Recipe Style

```tsx
<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
  <img 
    src={recipe.image} 
    alt={recipe.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
    <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500 flex items-center gap-1">
        <ClockIcon className="w-4 h-4" />
        {recipe.cookingTime} min
      </span>
      <button className="text-primary hover:text-primary-dark transition-colors">
        <HeartIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
```

### Forms - Bunzo Style

```tsx
<input 
  type="text"
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400"
  placeholder="Enter text"
/>

<textarea
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder-gray-400"
  rows={4}
  placeholder="Enter description"
/>

<select
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
>
  <option>Select option</option>
</select>
```

### Navigation - Bunzo Header

```tsx
<nav className="bg-white shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <img src={bunzo_logo} alt="Bunzo" className="w-32 md:w-36" />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-primary transition-colors">Home</a>
        <a href="/recipes" className="text-gray-700 hover:text-primary transition-colors">Recipes</a>
        <a href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
      </div>
    </div>
  </div>
</nav>
```

## Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Usage

```tsx
<div className="
  text-sm sm:text-base md:text-lg
  px-4 sm:px-6 md:px-8
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
">
  {/* Responsive content */}
</div>
```

## Animations

### AOS (Animate On Scroll)

**Initialization**:
```tsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
```

**Usage**:
```tsx
<div data-aos="fade-up">
  {/* Animated content */}
</div>

<div data-aos="fade-left" data-aos-delay="200">
  {/* Delayed animation */}
</div>
```

### CSS Transitions

```tsx
<button className="transition-all duration-300 hover:scale-105">
  {/* Smooth transitions */}
</button>
```

## Swiper Carousel

### Configuration

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  <SwiperSlide>{/* Content */}</SwiperSlide>
</Swiper>
```

## Best Practices

1. **Mobile-first**: Start with mobile styles, add larger breakpoints
2. **Consistent spacing**: Use Tailwind spacing scale
3. **Reusable classes**: Extract common patterns
4. **Performance**: Minimize custom CSS
5. **Accessibility**: Maintain color contrast ratios
6. **Dark mode ready**: Use semantic color names (future)

## Theme Configuration

### Tailwind Config

**File**: `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-dark': '#059669',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
}
```

## Icons

### Heroicons

**Usage**:
```tsx
import { HeartIcon, ClockIcon } from '@heroicons/react/24/outline';

<HeartIcon className="w-6 h-6 text-primary" />
<ClockIcon className="w-5 h-5 text-gray-500" />
```

**Sizes**:
- Small: `w-4 h-4` (16px)
- Medium: `w-5 h-5` (20px)
- Large: `w-6 h-6` (24px)

---

For more details, see [STRUCTURE.md](./STRUCTURE.md) and [FEATURES.md](./FEATURES.md)

