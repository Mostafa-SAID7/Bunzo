import { useState, useEffect } from "react";
import { egyptianBurgers, BurgerData } from "../data/burgers";
import { RecipeType } from "../utils/Types";

const useRecipe = () => {
  const [recipeData, setRecipeData] = useState<RecipeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Convert BurgerData to RecipeType format
  const convertBurgerToRecipe = (burger: BurgerData): RecipeType => ({
    id: burger.id,
    name: burger.name,
    image: burger.image,
    time: burger.cookingTime,
    category: burger.category,
    isFavorite: burger.isFavorite,
    ingredients: burger.ingredients,
    directions: [burger.story], // Use story as directions
    nutritionInfo: [
      { name: "Calories", measure: `${burger.nutritionInfo.calories} kcal` },
      { name: "Protein", measure: burger.nutritionInfo.protein },
      { name: "Carbs", measure: burger.nutritionInfo.carbs },
      { name: "Fat", measure: burger.nutritionInfo.fat }
    ]
  });

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API delay for realistic experience
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const convertedData = egyptianBurgers.map(convertBurgerToRecipe);
      setRecipeData(convertedData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching recipes.");
      }
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const addRecipe = async (recipe: RecipeType): Promise<RecipeType | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newRecipe = {
        ...recipe,
        id: Math.max(...recipeData.map(r => r.id || 0)) + 1
      };
      
      setRecipeData((prevRecipes) => [...prevRecipes, newRecipe]);
      return newRecipe;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while adding the recipe.");
      }
      console.error("Error adding recipe:", error);
      return null;
    } finally {
      console.log("Recipe added successfully");
    }
  };

  const editRecipe = async (
    id: number | undefined,
    recipe: RecipeType
  ): Promise<RecipeType | void> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedRecipe = { ...recipe, id };
      setRecipeData((prevRecipes) =>
        prevRecipes.map((r) => (r.id === id ? updatedRecipe : r))
      );
      return updatedRecipe;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while editing the recipe.");
      }
      console.error("Error editing recipe:", error);
    } finally {
      console.log("Recipe edited successfully");
    }
  };

  const deleteRecipe = async (id: number | undefined): Promise<boolean> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setRecipeData((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while deleting the recipe.");
      }
      console.error("Error deleting recipe:", error);
      return false;
    } finally {
      console.log("Recipe deleted successfully");
    }
  };

  const toggleFavorite = async (
    id: number | undefined
  ): Promise<RecipeType | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let updatedRecipe: RecipeType | null = null;
      setRecipeData((prevRecipes) =>
        prevRecipes.map((recipe) => {
          if (recipe.id === id) {
            updatedRecipe = { ...recipe, isFavorite: !recipe.isFavorite };
            return updatedRecipe;
          }
          return recipe;
        })
      );
      return updatedRecipe;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while toggling favorite status.");
      }
      console.error("Error toggling favorite status:", error);
      return null;
    } finally {
      console.log("Recipe favorite status toggled successfully");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    recipeData,
    isLoading,
    error,
    fetchRecipes,
    addRecipe,
    editRecipe,
    deleteRecipe,
    toggleFavorite,
  };
};

export default useRecipe;
