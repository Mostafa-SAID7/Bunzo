# Project Structure

Comprehensive guide to the architecture and organization of Foodieland.

## Table of Contents

- [Directory Structure](#directory-structure)
- [Component Architecture](#component-architecture)
- [File Organization](#file-organization)
- [Naming Conventions](#naming-conventions)
- [State Management](#state-management)

## Directory Structure

```
foodieland/
├── .github/                     # GitHub configuration
│   ├── workflows/              # CI/CD workflows
│   │   ├── code-quality.yml
│   │   ├── security.yml
│   │   └── labeler.yml
│   ├── dependabot.yml          # Dependabot config
│   ├── labeler.yml             # PR labeler config
│   └── CREATE_LABELS.md        # Label creation guide
├── docs/                        # Documentation
│   ├── CHANGELOG.md
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   ├── FEATURES.md
│   ├── PERFORMANCE.md
│   ├── PROJECT_STATUS.md
│   ├── STRUCTURE.md
│   └── STYLES.md
├── node_modules/                # Dependencies
├── public/                      # Static assets
│   ├── images/                 # Public images
│   ├── favicon.ico
│   └── robots.txt
├── src/                         # Source code
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable components
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── RecipeDetail.tsx
│   │   ├── Blog.tsx
│   │   └── Admin.tsx
│   ├── styles/                 # Global CSS
│   ├── utils/                  # Utilities and types
│   ├── GlobalContext.tsx       # Global state
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project README
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment config
└── vite.config.ts               # Vite configuration
```

## Component Architecture

### Functional Components with Hooks

The project uses modern React functional components:

```tsx
import { useState, useEffect } from 'react';

export function ExampleComponent() {
  const [state, setState] = useState('');
  
  useEffect(() => {
    // Side effects
  }, []);
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Component Types

#### 1. Page Components
**Location**: `src/pages/`

**Purpose**: Full page views with routing

**Examples**:
- `Home.tsx` - Main landing page with recipe grid
- `RecipeDetail.tsx` - Individual recipe view
- `Blog.tsx` - Blog listing page
- `Admin.tsx` - Admin dashboard

#### 2. Layout Components
**Location**: `src/components/`

**Purpose**: Structural components used across pages

**Examples**:
- `Navigation.tsx` - Header navigation
- `Footer.tsx` - Site footer
- `HeroSection.tsx` - Hero banner

#### 3. Feature Components
**Location**: `src/components/`

**Purpose**: Specific feature implementations

**Examples**:
- `RecipeCard.tsx` - Recipe display card
- `FilterBar.tsx` - Search and filter controls
- `BlogEditor.tsx` - Rich text editor

#### 4. UI Components
**Location**: `src/components/ui/`

**Purpose**: Reusable UI primitives

**Examples**:
- `Button.tsx`
- `Card.tsx`
- `Input.tsx`
- `Modal.tsx`

### Component Communication

#### Props (Parent to Child)
```tsx
// Parent
<RecipeCard recipe={recipeData} onFavorite={handleFavorite} />

// Child
interface RecipeCardProps {
  recipe: Recipe;
  onFavorite: (id: string) => void;
}

export function RecipeCard({ recipe, onFavorite }: RecipeCardProps) {
  // Component logic
}
```

#### Context (Global State)
```tsx
// Provider
<GlobalContext.Provider value={contextValue}>
  {children}
</GlobalContext.Provider>

// Consumer
const { recipes, favorites } = useContext(GlobalContext);
```

## File Organization

### Component Files

Each component is a single TypeScript file:

```
ComponentName.tsx
```

### Component Structure

```tsx
// Imports
import { useState } from 'react';
import type { Recipe } from '@/utils/types';

// Types/Interfaces
interface ComponentProps {
  data: Recipe;
}

// Component
export function ComponentName({ data }: ComponentProps) {
  // State
  const [state, setState] = useState('');
  
  // Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // Handlers
  const handleClick = () => {
    // Logic
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

## Naming Conventions

### Files
- **Components**: `ComponentName.tsx` (PascalCase)
- **Pages**: `PageName.tsx` (PascalCase)
- **Hooks**: `use-hook-name.tsx` (kebab-case)
- **Utils**: `utility-name.ts` (kebab-case)
- **Types**: `types.ts` or inline

### Functions
- **Components**: `ComponentName` (PascalCase)
- **Hooks**: `useHookName` (camelCase with 'use' prefix)
- **Utilities**: `utilityName` (camelCase)
- **Handlers**: `handleEvent` (camelCase with 'handle' prefix)

### Variables
- **State**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Props**: `camelCase`

### CSS Classes
- **Tailwind**: Utility classes
- **Custom**: `kebab-case`

## State Management

### Global Context

**File**: `src/GlobalContext.tsx`

**Purpose**: Share state across the application

**State Includes**:
- Recipe data
- Blog data
- Favorites list
- Filter settings
- Admin state

**Usage**:
```tsx
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Component() {
  const { recipes, favorites, toggleFavorite } = useContext(GlobalContext);
  
  return (
    // Use state
  );
}
```

### Local State

**Usage**: Component-specific state with `useState`

```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Local Storage

**Purpose**: Persist user preferences

**Implementation**:
```tsx
// Save
localStorage.setItem('favorites', JSON.stringify(favorites));

// Load
const saved = localStorage.getItem('favorites');
const favorites = saved ? JSON.parse(saved) : [];
```

## Routing

### React Router v7

**File**: `src/App.tsx`

**Routes**:
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigation

```tsx
import { Link, useNavigate } from 'react-router-dom';

// Link component
<Link to="/recipe/123">View Recipe</Link>

// Programmatic navigation
const navigate = useNavigate();
navigate('/recipe/123');
```

## Data Flow

### Application State

```
User Interaction
      ↓
  Component
      ↓
   Context
      ↓
  API Call
      ↓
   Response
      ↓
  Context Update
      ↓
   Component Re-render
      ↓
    View
```

### Form Data Flow

```
User Input
    ↓
Controlled Component
    ↓
State Update
    ↓
Form Submit
    ↓
Validation
    ↓
API Call
    ↓
Success/Error
```

## TypeScript Types

### Location
`src/utils/types.ts`

### Common Types

```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookingTime: number;
  servings: number;
  category: string;
  ingredients: string[];
  instructions: string[];
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  date: string;
}
```

## Best Practices

### Component Design
- Single responsibility principle
- Small, focused components
- Reusable where possible
- Clear prop interfaces
- Proper TypeScript typing

### File Organization
- Group related files
- Consistent structure
- Logical hierarchy
- Easy navigation

### Code Organization
- Imports at top (React, libraries, local)
- Types/interfaces next
- Component definition
- Export at bottom

### Performance
- React.memo for expensive components
- useMemo for expensive calculations
- useCallback for stable functions
- Lazy loading routes
- Image lazy loading

## Architecture Patterns

### Container vs Presentational

**Container Components**:
- Handle business logic
- Manage state
- API calls
- Data fetching

**Presentational Components**:
- Display data
- Receive props
- Emit events
- No business logic
- Highly reusable

### Example

```tsx
// Container Component
function RecipeListContainer() {
  const { recipes, loading } = useRecipes();
  
  if (loading) return <Loader />;
  
  return <RecipeList recipes={recipes} />;
}

// Presentational Component
interface RecipeListProps {
  recipes: Recipe[];
}

function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="grid">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
```

## Custom Hooks

### Location
`src/hooks/`

### Examples

**useMobile**:
```tsx
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}
```

## Testing Structure (Future)

```
ComponentName.tsx
ComponentName.test.tsx    # Unit tests
```

## Documentation Standards

Each component should include:

```tsx
/**
 * RecipeCard component displays a recipe with image, title, and metadata.
 * 
 * @param recipe - Recipe object with all details
 * @param onFavorite - Callback when favorite button is clicked
 * 
 * @example
 * <RecipeCard recipe={recipeData} onFavorite={handleFavorite} />
 */
export function RecipeCard({ recipe, onFavorite }: RecipeCardProps) {
  // Implementation
}
```

---

For more details, see:
- [FEATURES.md](./FEATURES.md) - Feature documentation
- [STYLES.md](./STYLES.md) - Styling guidelines
- [PERFORMANCE.md](./PERFORMANCE.md) - Performance guide

