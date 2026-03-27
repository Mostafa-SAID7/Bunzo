# Bunzo Egyptian Burgers - Project Structure

## Overview
This document outlines the organized structure of the Bunzo Egyptian Burgers application after the recent refactoring to improve code organization and maintainability.

## Directory Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (if needed)
│   └── *.tsx            # Feature-specific components
├── data/                # Static data and mock data
│   ├── burgers.ts       # Egyptian burger data
│   ├── blog.ts          # Blog posts data
│   ├── restaurant.ts    # Restaurant information
│   └── testimonials.ts  # Customer testimonials
├── hooks/               # Custom React hooks
│   ├── useAOS.ts        # Animation on scroll
│   ├── useBlog.tsx      # Blog data management
│   ├── useRecipe.tsx    # Recipe data management
│   ├── use-mobile.tsx   # Mobile breakpoint detection
│   └── use-toast.ts     # Toast notifications
├── pages/               # Page components
│   ├── About.tsx        # About page
│   ├── Blog.tsx         # Individual blog post
│   ├── BlogList.tsx     # Blog listing page
│   ├── Contact.tsx      # Contact page
│   ├── NotFound.tsx     # 404 page
│   ├── RecipeDetails.tsx # Individual recipe page
│   └── Recipes.tsx      # Recipe listing page
├── services/            # Business logic and data services
│   ├── blogService.ts   # Blog operations
│   ├── recipeService.ts # Recipe operations
│   ├── restaurantService.ts # Restaurant data
│   ├── testimonialService.ts # Testimonial operations
│   └── index.ts         # Service exports
├── styles/              # CSS and styling files
│   ├── gradients.css    # Gradient definitions
│   └── utils.css        # Utility styles
├── types/               # TypeScript type definitions
│   ├── blog.ts          # Blog-related types
│   ├── common.ts        # Shared utility types
│   ├── form.ts          # Form and input types
│   ├── hero.ts          # Hero section types
│   ├── recipe.ts        # Recipe-related types
│   ├── ui.ts            # UI component types
│   ├── user.ts          # User-related types
│   └── index.ts         # Centralized type exports
├── utils/               # Utility functions and components
│   ├── Pagination.tsx   # Pagination component
│   ├── RecipeShortList.tsx # Recipe list utility
│   ├── RecipeSideList.tsx  # Sidebar recipe list
│   ├── SelectDropdown.tsx  # Dropdown component
│   ├── Utils.tsx        # Utility components
│   └── utilFunctions.ts # Helper functions
├── App.tsx              # Main application component
├── GlobalContext.tsx    # Global state management
├── index.css            # Global styles
└── main.tsx             # Application entry point
```

## Key Features

### 🏗️ Service Layer Architecture
- **RecipeService**: Handles all recipe-related operations (CRUD, search, filtering)
- **BlogService**: Manages blog posts and content operations
- **RestaurantService**: Provides restaurant information, locations, and team data
- **TestimonialService**: Manages customer testimonials and reviews

### 📝 Type Organization
- **Modular Types**: Split into logical modules (recipe, blog, ui, form, etc.)
- **Centralized Exports**: All types available through `src/types/index.ts`
- **Type Safety**: Full TypeScript coverage for all data structures

### 🎣 Custom Hooks
- **useRecipe**: Recipe data management with local data simulation
- **useBlog**: Blog data operations and state management
- **use-mobile**: Responsive design breakpoint detection
- **use-toast**: Toast notification system for user feedback

### 📊 Data Management
- **Local Data**: Complete Egyptian restaurant data structure
- **Service Simulation**: Realistic API simulation with delays
- **Type Conversion**: Seamless data transformation between formats

## Benefits of This Structure

1. **Separation of Concerns**: Clear separation between data, business logic, and presentation
2. **Maintainability**: Easy to locate and modify specific functionality
3. **Scalability**: Simple to add new features and services
4. **Type Safety**: Comprehensive TypeScript coverage
5. **Reusability**: Modular components and services can be easily reused
6. **Testing**: Clear boundaries make unit testing straightforward

## Usage Examples

### Using Services
```typescript
import { RecipeService } from '../services/recipeService';

// Get all recipes
const recipes = await RecipeService.getAllRecipes();

// Search recipes
const searchResults = await RecipeService.searchRecipes('pharaoh');
```

### Using Types
```typescript
import { RecipeType, BlogCardProps } from '../types';

const recipe: RecipeType = {
  id: 1,
  name: "Pharaoh's Burger",
  // ... other properties
};
```

### Using Hooks
```typescript
import { useIsMobile } from '../hooks/use-mobile';
import { useToast } from '../hooks/use-toast';

const isMobile = useIsMobile();
const { toast } = useToast();

toast.success("Recipe saved successfully!");
```

## Development Guidelines

1. **New Features**: Add new services in `src/services/` and corresponding types in `src/types/`
2. **Components**: Keep components focused and use services for data operations
3. **Types**: Define types in appropriate modules and export through `index.ts`
4. **Hooks**: Create custom hooks for reusable stateful logic
5. **Data**: Add new data structures in `src/data/` and access through services

This structure provides a solid foundation for the Bunzo Egyptian Burgers application, making it easy to maintain, extend, and scale as the project grows.