# Styles Guide

Styling guidelines and conventions for Foodieland.

## Design System

### Color Palette

```css
/* Primary Colors */
--primary: #10b981;         /* Green accent */
--primary-dark: #059669;    /* Darker green */
--background: #ffffff;      /* Main background */
--surface: #f9fafb;         /* Card backgrounds */

/* Text Colors */
--text-primary: #111827;    /* Main text */
--text-secondary: #6b7280;  /* Secondary text */
--text-muted: #9ca3af;      /* Muted text */

/* Border Colors */
--border: #e5e7eb;          /* Subtle borders */
--border-dark: #d1d5db;     /* Darker borders */

/* Status Colors */
--success: #10b981;         /* Success state */
--error: #ef4444;           /* Error state */
--warning: #f59e0b;         /* Warning state */
--info: #3b82f6;            /* Info state */
```

### Typography

**Fonts**:
- **Primary**: System font stack (sans-serif)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

**Font Sizes**:
```css
text-xs: 0.75rem;    /* 12px */
text-sm: 0.875rem;   /* 14px */
text-base: 1rem;     /* 16px */
text-lg: 1.125rem;   /* 18px */
text-xl: 1.25rem;    /* 20px */
text-2xl: 1.5rem;    /* 24px */
text-3xl: 1.875rem;  /* 30px */
text-4xl: 2.25rem;   /* 36px */
text-5xl: 3rem;      /* 48px */
```

**Font Weights**:
```css
font-normal: 400;
font-medium: 500;
font-semibold: 600;
font-bold: 700;
```

### Spacing

```css
gap-1: 0.25rem;   /* 4px */
gap-2: 0.5rem;    /* 8px */
gap-4: 1rem;      /* 16px */
gap-6: 1.5rem;    /* 24px */
gap-8: 2rem;      /* 32px */
gap-12: 3rem;     /* 48px */
gap-16: 4rem;     /* 64px */
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
{/* Primary Button */}
<button className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300">
  Button Text
</button>

{/* Secondary Button */}
<button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
  Button Text
</button>

{/* Outline Button */}
<button className="px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
  Button Text
</button>
```

### Cards

```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

### Forms

```tsx
<input 
  type="text"
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
  placeholder="Enter text"
/>

<textarea
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
  rows={4}
  placeholder="Enter description"
/>

<select
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
>
  <option>Select option</option>
</select>
```

### Recipe Cards

```tsx
<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
  <img 
    src={recipe.image} 
    alt={recipe.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-xs text-gray-500">{recipe.cookingTime} min</span>
      <button className="text-primary hover:text-primary-dark">
        <HeartIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
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

