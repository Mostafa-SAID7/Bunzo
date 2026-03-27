// Egyptian Burger Restaurant Data
import food3 from "../assets/images/food3.png";
import food5 from "../assets/images/food5.png";
import food7 from "../assets/images/food7.png";
import food10 from "../assets/images/food10.png";
import food12 from "../assets/images/food12.png";
import food20 from "../assets/images/food20.png";

export interface BurgerData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot' | 'Sahara Fire';
  cookingTime: number;
  ingredients: string[];
  story: string;
  chef: string;
  isFavorite: boolean;
  isSignature: boolean;
  nutritionInfo: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const egyptianBurgers: BurgerData[] = [
  {
    id: 1,
    name: "The Pharaoh's Burger",
    description: "Royal Egyptian experience with spiced beef, tahini sauce, and traditional herbs",
    price: 85,
    image: food3,
    category: "Signature",
    spiceLevel: "Medium",
    cookingTime: 15,
    ingredients: [
      "Premium Egyptian beef",
      "Tahini sauce",
      "Traditional Egyptian herbs",
      "Pickled turnips",
      "Fresh tomatoes",
      "Crispy onions",
      "Baladi bread bun"
    ],
    story: "Inspired by the royal kitchens of ancient Egypt, this burger combines the finest spices that once graced pharaohs' tables with modern culinary techniques.",
    chef: "Chef Ahmed",
    isFavorite: true,
    isSignature: true,
    nutritionInfo: {
      calories: 650,
      protein: "35g",
      carbs: "45g",
      fat: "28g"
    }
  },
  {
    id: 2,
    name: "Cairo Street Classic",
    description: "Authentic street food flavors with traditional spices and our secret sauce",
    price: 65,
    image: food7,
    category: "Classic",
    spiceLevel: "Mild",
    cookingTime: 12,
    ingredients: [
      "Fresh ground beef",
      "Egyptian street spice blend",
      "Secret garlic sauce",
      "Lettuce",
      "Tomatoes",
      "Red onions",
      "Sesame seed bun"
    ],
    story: "Born in the bustling streets of Cairo, this burger captures the authentic flavors that have made Egyptian street food legendary.",
    chef: "Chef Fatma",
    isFavorite: false,
    isSignature: true,
    nutritionInfo: {
      calories: 580,
      protein: "30g",
      carbs: "42g",
      fat: "24g"
    }
  },
  {
    id: 3,
    name: "Nile Valley Veggie",
    description: "Fresh falafel and herbs straight from the Nile Valley farms",
    price: 55,
    image: food10,
    category: "Vegetarian",
    spiceLevel: "Mild",
    cookingTime: 10,
    ingredients: [
      "House-made falafel",
      "Fresh herbs from Nile Valley",
      "Cucumber yogurt sauce",
      "Arugula",
      "Cherry tomatoes",
      "Red cabbage",
      "Whole wheat bun"
    ],
    story: "Celebrating the fertile lands of the Nile Valley, this vegetarian masterpiece showcases the fresh produce that has sustained Egypt for millennia.",
    chef: "Chef Yasmin",
    isFavorite: true,
    isSignature: false,
    nutritionInfo: {
      calories: 420,
      protein: "18g",
      carbs: "52g",
      fat: "16g"
    }
  },
  {
    id: 4,
    name: "Spicy Sahara",
    description: "Harissa-marinated chicken with jalapeños and fiery desert sauce",
    price: 75,
    image: food12,
    category: "Spicy",
    spiceLevel: "Sahara Fire",
    cookingTime: 18,
    ingredients: [
      "Harissa-marinated chicken",
      "Jalapeño peppers",
      "Fiery desert sauce",
      "Cooling cucumber",
      "Red onions",
      "Spicy mayo",
      "Brioche bun"
    ],
    story: "For the brave souls who seek the heat of the Sahara desert. This burger brings the fire that has tested travelers for centuries.",
    chef: "Chef Omar",
    isFavorite: false,
    isSignature: true,
    nutritionInfo: {
      calories: 620,
      protein: "32g",
      carbs: "38g",
      fat: "26g"
    }
  },
  {
    id: 5,
    name: "Alexandria Seafood Delight",
    description: "Fresh fish with Egyptian spices and coastal herbs from Alexandria",
    price: 95,
    image: food5,
    category: "Seafood",
    spiceLevel: "Medium",
    cookingTime: 20,
    ingredients: [
      "Fresh Mediterranean fish",
      "Coastal herb blend",
      "Lemon tahini sauce",
      "Pickled vegetables",
      "Fresh dill",
      "Capers",
      "Artisan bun"
    ],
    story: "From the Mediterranean coast of Alexandria, this burger brings the flavors of Egypt's historic port city to your table.",
    chef: "Chef Mariam",
    isFavorite: true,
    isSignature: true,
    nutritionInfo: {
      calories: 540,
      protein: "28g",
      carbs: "35g",
      fat: "22g"
    }
  },
  {
    id: 6,
    name: "Bedouin Lamb Special",
    description: "Traditional lamb with desert spices and mint yogurt sauce",
    price: 90,
    image: food20,
    category: "Traditional",
    spiceLevel: "Medium",
    cookingTime: 22,
    ingredients: [
      "Premium lamb meat",
      "Bedouin spice mix",
      "Mint yogurt sauce",
      "Grilled vegetables",
      "Fresh mint",
      "Pomegranate seeds",
      "Pita bread bun"
    ],
    story: "Honoring the nomadic Bedouin traditions, this burger features the time-honored flavors of Egypt's desert dwellers.",
    chef: "Chef Ahmed",
    isFavorite: false,
    isSignature: false,
    nutritionInfo: {
      calories: 680,
      protein: "38g",
      carbs: "40g",
      fat: "30g"
    }
  }
];

export const burgerCategories = [
  { id: 1, name: "Signature", count: 4, description: "Our most celebrated Egyptian creations" },
  { id: 2, name: "Classic", count: 2, description: "Traditional street food favorites" },
  { id: 3, name: "Vegetarian", count: 1, description: "Plant-based Egyptian delights" },
  { id: 4, name: "Spicy", count: 1, description: "For those who love the heat" },
  { id: 5, name: "Seafood", count: 1, description: "Fresh from the Mediterranean" },
  { id: 6, name: "Traditional", count: 1, description: "Ancient recipes, modern presentation" }
];

export const featuredBurgers = egyptianBurgers.filter(burger => burger.isSignature);
export const popularBurgers = egyptianBurgers.filter(burger => burger.isFavorite);