import { egyptianBurgers, BurgerData } from '../data/burgers';
import { RecipeType } from '../types/recipe';

export class RecipeService {
  // Convert BurgerData to RecipeType format
  private static convertBurgerToRecipe(burger: BurgerData): RecipeType {
    return {
      id: burger.id,
      name: burger.name,
      image: burger.image,
      time: burger.cookingTime,
      category: burger.category,
      isFavorite: burger.isFavorite,
      ingredients: burger.ingredients,
      directions: [
        burger.story,
        "Prepare all ingredients and let them come to room temperature.",
        "Season the meat with our signature Egyptian spice blend.",
        "Cook the patty to perfection using traditional techniques.",
        "Toast the bun lightly for the perfect texture.",
        "Assemble with fresh vegetables and our special sauces.",
        "Serve immediately while hot and enjoy the authentic flavors!"
      ],
      nutritionInfo: [
        { name: "Calories", measure: `${burger.nutritionInfo.calories} kcal` },
        { name: "Protein", measure: burger.nutritionInfo.protein },
        { name: "Carbs", measure: burger.nutritionInfo.carbs },
        { name: "Fat", measure: burger.nutritionInfo.fat }
      ]
    };
  }

  // Simulate API delay
  private static async simulateDelay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all recipes
  static async getAllRecipes(): Promise<RecipeType[]> {
    await this.simulateDelay();
    return egyptianBurgers.map(this.convertBurgerToRecipe);
  }

  // Get recipe by ID
  static async getRecipeById(id: number): Promise<RecipeType | null> {
    await this.simulateDelay();
    const burger = egyptianBurgers.find(b => b.id === id);
    return burger ? this.convertBurgerToRecipe(burger) : null;
  }

  // Get recipes by category
  static async getRecipesByCategory(category: string): Promise<RecipeType[]> {
    await this.simulateDelay();
    const filtered = egyptianBurgers.filter(b => 
      category === 'all' || b.category.toLowerCase() === category.toLowerCase()
    );
    return filtered.map(this.convertBurgerToRecipe);
  }

  // Get favorite recipes
  static async getFavoriteRecipes(): Promise<RecipeType[]> {
    await this.simulateDelay();
    const favorites = egyptianBurgers.filter(b => b.isFavorite);
    return favorites.map(this.convertBurgerToRecipe);
  }

  // Search recipes
  static async searchRecipes(query: string): Promise<RecipeType[]> {
    await this.simulateDelay();
    const filtered = egyptianBurgers.filter(b =>
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase()) ||
      b.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    return filtered.map(this.convertBurgerToRecipe);
  }

  // Get random recipes
  static async getRandomRecipes(count: number = 4): Promise<RecipeType[]> {
    await this.simulateDelay();
    const shuffled = [...egyptianBurgers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(this.convertBurgerToRecipe);
  }
}