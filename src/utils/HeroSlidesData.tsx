import { HeroSlideType } from "./Types";
import food3 from "../assets/images/food3.png";
import food5 from "../assets/images/food5.png";
import food7 from "../assets/images/food7.png";
import food10 from "../assets/images/food10.png";
import food12 from "../assets/images/food12.png";
import user_dp from "../assets/images/user_dp.png";


export const heroSlides: HeroSlideType[] = [
  {
    title: "The Pharaoh's Burger - A Royal Egyptian Experience",
    description:
      "Indulge in our signature burger featuring spiced beef, tahini sauce, and traditional Egyptian herbs. A taste that has ruled the streets of Cairo for generations!",
    badges: [
      { icon: "timer", text: "15 minutes" },
      { icon: "forkKnife", text: "Egyptian Beef" },
    ],
    user: {
      name: "Chef Ahmed",
      profilePicture: user_dp,
    },
    backgroundImage: food3,
    button: {
      text: "Order Now",
      icon: "play_icon",
    },
  },
  {
    title: "Cairo Street Classic - Authentic & Bold",
    description:
      "Experience the authentic flavors of Egyptian street food with our classic burger blend of traditional spices, fresh vegetables, and our secret sauce!",
    badges: [
      { icon: "timer", text: "12 minutes" },
      { icon: "forkKnife", text: "Street Style" },
    ],
    user: {
      name: "Chef Fatma",
      profilePicture: user_dp,
    },
    backgroundImage: food7,
    button: {
      text: "Taste Tradition",
      icon: "play_icon",
    },
  },
  {
    title: "Nile Valley Veggie - Fresh & Flavorful",
    description:
      "Discover our plant-based masterpiece featuring Egyptian falafel, fresh herbs, and vegetables straight from the Nile Valley farms!",
    badges: [
      { icon: "timer", text: "10 minutes" },
      { icon: "forkKnife", text: "Vegetarian" },
    ],
    user: {
      name: "Chef Yasmin",
      profilePicture: user_dp,
    },
    backgroundImage: food10,
    button: {
      text: "Go Green",
      icon: "play_icon",
    },
  },
  {
    title: "Spicy Sahara - Fire from the Desert",
    description:
      "For the brave souls! Our spiciest creation with harissa-marinated chicken, jalapeños, and our fiery desert sauce that brings the heat of the Sahara!",
    badges: [
      { icon: "timer", text: "18 minutes" },
      { icon: "forkKnife", text: "Spicy Chicken" },
    ],
    user: {
      name: "Chef Omar",
      profilePicture: user_dp,
    },
    backgroundImage: food12,
    button: {
      text: "Feel the Heat",
      icon: "play_icon",
    },
  },
  {
    title: "Alexandria Seafood Delight - Mediterranean Fusion",
    description:
      "Taste the Mediterranean coast of Egypt with our seafood burger featuring fresh fish, Egyptian spices, and coastal herbs from Alexandria!",
    badges: [
      { icon: "timer", text: "20 minutes" },
      { icon: "forkKnife", text: "Seafood" },
    ],
    user: {
      name: "Chef Mariam",
      profilePicture: user_dp,
    },
    backgroundImage: food5,
    button: {
      text: "Dive In",
      icon: "play_icon",
    },
  },
];
