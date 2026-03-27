import { useState } from "react";

import rice from "./assets/images/rice.png";
import veggies from "./assets/images/veggies.png";
import beef from "./assets/images/beef.png";
import cake from "./assets/images/cake.png";
import chocolate from "./assets/images/chocolate.png";
import bread from "./assets/images/bread.png";
import happy_chef from "./assets/images/happy_chef.png";
import tomato from "./assets/images/tomato.png";
import onion from "./assets/images/onion.png";
import instagram_white from "./assets/icons/instagram_white.svg";
import post1 from "./assets/images/post1.png";
import post2 from "./assets/images/post2.png";
import post3 from "./assets/images/post3.png";
import post4 from "./assets/images/post4.png";

import {
  Button,
  CategoryItem,
  Heading,
  LoadingSpinner,
  StickyObject,
  SubHeading,
} from "./utils/Utils";
import { RecipeType } from "./utils/Types";

import Recipe from "./components/RecipeCard";
import Newsletter from "./components/Newsletter";
import EditRecipeForm from "./components/EditRecipe";
import HeroSection from "./components/HomeHeroSection";

import useRecipe from "./hooks/useRecipe";
import useAOS from "./hooks/useAOS";
function App() {
  useAOS({
    duration: 500,
    easing: "ease-in-out",
  });

  const {
    recipeData,
    isLoading,
    error,
    editRecipe,
    deleteRecipe,
    toggleFavorite,
  } = useRecipe();

  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);

  const categories = [
    { image: rice, name: "Classic", bgColor: "#F7F8F4" },
    { image: veggies, name: "Veggie", bgColor: "#FAFDF8" },
    { image: beef, name: "Beef", bgColor: "#FBECEB" },
    { image: cake, name: "Chicken", bgColor: "#FEF7E9" },
    { image: bread, name: "Egyptian", bgColor: "#F4F4F4" },
    { image: chocolate, name: "Spicy", bgColor: "#F5F5F5" },
  ];
  const posts = [
    { image: post1, name: "Cairo Street Burger" },
    { image: post2, name: "Pharaoh's Special" },
    { image: post3, name: "Nile Valley Veggie" },
    { image: post4, name: "Spicy Sahara" },
  ];


  function handleOpenEditForm(recipe: RecipeType) {
    setSelectedRecipe(recipe);
    setShowEditForm(true);
  }

  function handleCloseEditForm() {
    setSelectedRecipe(null);
    setShowEditForm(false);
  }

  return (
    <div className="pt-10 pb-40 overflow-x-hidden relative inter">
      <HeroSection />

      <section className="flex justify-center items-center mt-40">
        <div className="w-[95%] sm:w-[90%] flex flex-col gap-18">
          <div className="flex justify-between items-center mb-10">
            <Heading text="Burger Categories" animation="fade-right" />

            <Button
              text="Explore All Flavors"
              customClass="bg-emerald-100 text-emerald-800 shadow-md hover:bg-emerald-200"
              animation="fade-left"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-6">
            {categories &&
              categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  image={category.image}
                  name={category.name}
                  bgColor={category.bgColor}
                  animation={index % 2 === 0 ? "fade-up" : "fade-down"}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="relative flex justify-center items-center mt-40 gap-20">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-18">
          <div className="flex flex-col justify-between items-center">
            <Heading
              text="Authentic Egyptian Street Burgers"
              customClass="mb-6"
              animation="fade-left"
            />
            <SubHeading
              text="Experience the rich flavors of Egypt with our signature burgers. Each bite tells a story of ancient spices, modern techniques, and the vibrant street food culture that makes Cairo legendary."
              customClass="text-center text-gray-500"
              animation="fade-right"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
            {isLoading && <LoadingSpinner />}
            {error && <p className="text-red-500">{error}</p>}
            {recipeData &&
              recipeData
                .slice(0, 9)
                .map((recipe: RecipeType) => (
                  <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    name={recipe.name}
                    time={recipe.time}
                    category={recipe.category}
                    isFavorite={recipe.isFavorite}
                    handleDeleteItem={() => deleteRecipe(recipe.id)}
                    handleOpenEditForm={() => handleOpenEditForm(recipe)}
                    handleToggleFavorite={() => toggleFavorite(recipe.id)}
                    customClass="p-2.5"
                    animation={
                      recipe.id && recipe.id % 2 === 0 ? "fade-up" : "fade-down"
                    }
                  />
                ))}
          </div>
        </div>

        {showEditForm && (
          <EditRecipeForm
            editRecipe={async (id, recipe) => {
              await editRecipe(id, recipe);
              handleCloseEditForm();
            }}
            handleForm={handleCloseEditForm}
            initialRecipe={selectedRecipe}
          />
        )}
      </section>

      <section className="w-full flex justify-center items-center mt-36 mb-40">
        <div className="w-[95%] sm:w-[90%] flex flex-col sm:flex-row justify-between items-center gap-20">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-8 sm:gap-12 md:gap-14 lg:gap-18">
            <div className="flex flex-col justify-center items-start gap-6">
              <Heading
                text="Every Egyptian deserves the perfect burger experience"
                customClass="tracking-tight max-w-[90%]"
                animation="fade-left"
              />
              <SubHeading
                text="From the bustling streets of Cairo to modern kitchens, we've perfected the art of Egyptian street food. Our burgers blend traditional spices with contemporary techniques, creating flavors that celebrate our heritage while appealing to the modern palate."
                customClass="max-w-[90%] text-gray-500"
                animation="fade-right"
              />
            </div>

            <Button
              text="Discover Our Story"
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700"
              animation="fade-up"
            />
          </div>

          <div
            className="w-11/12 sm:w-1/2 relative rounded-3xl shadow-md flex justify-center items-center bg-gradient-bunzo-light"
            data-aos="fade-left"
          >
            <img
              src={happy_chef}
              alt="Happy chef with fruits"
              className="-ml-12 lg:-ml-28"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <StickyObject image={tomato} customClass=" bottom-1/5 -left-5" />
            <StickyObject image={beef} customClass="top-1 left-1/10" />
            <StickyObject image={onion} customClass="top-1/6 left-4/6" />
            <StickyObject image={veggies} customClass="top-4/12 left-10/12" />
          </div>
        </div>
      </section>

      <section className="mb-28 flex justify-center items-center">
        <div
          className="relative w-[95%] sm:w-[90%] bg-black flex flex-col justify-center items-center gap-10 rounded-2xl py-14 bg-cover bg-center bg-no-repeat overflow-hidden bg-community"
        >
          <div className="absolute w-full h-full bg-black backdrop-3xl opacity-80"></div>
          <div className="flex flex-col justify-center items-center gap-6 z-10">
            <Heading
              text="Join the Bunzo Family"
              customClass="mb-6 text-white text-center max-w-5/6"
              animation="fade-up"
            />
            <SubHeading
              text="Become part of Egypt's most beloved burger community. Share your street food stories, discover new flavors, and connect with fellow food lovers who appreciate authentic Egyptian cuisine."
              customClass="text-center text-white max-w-5/6"
              animation="fade-up"
              data-aos-delay="300"
            />
          </div>

          <div className="flex justify-center items-center mt-10 z-10">
            <Button
              text="Join Our Community"
              textColor="text-emerald-800"
              customClass="bg-white hover:bg-gray-100"
              animation="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
      </section>

      <section
        className="mb-32 flex justify-center items-center py-18 bg-gradient-bunzo-instagram"
      >
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-10 rounded-2xl">
          <div className="flex flex-col justify-center items-center gap-6">
            <Heading
              text="Follow @bunzo_egypt on Instagram"
              customClass="text-center"
              animation="fade-right"
            />
            <SubHeading
              text="Get inspired by our daily burger creations, behind-the-scenes stories from Egyptian kitchens, and the vibrant street food culture that defines our brand. See how tradition meets innovation!"
              customClass="text-center text-gray-500"
              animation="fade-left"
              data-aos-delay="300"
            />
          </div>
          <div className="  flex flex-col justify-center items-center gap-16">
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              {posts &&
                posts.map((post, index) => (
                  <div key={index}>
                    <img
                      src={post.image}
                      alt={post.name}
                      className="rounded-xl shadow-md max-w-64"
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                      data-aos-delay={index * 100}
                    />
                  </div>
                ))}
            </div>

            <Button
              text="Visit Our Instagram"
              icon={instagram_white}
              textColor="text-white"
              customClass="bg-emerald-600 hover:bg-emerald-700"
              animation="fade-up"
            />
          </div>
        </div>
      </section>

      <section className="relative mb-32 flex justify-center items-center">
        <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5 sm:gap-20">
            <Heading
              text="Taste the authentic flavors that make Egypt legendary"
              customClass="w-full"
              animation="fade-right"
            />
            <SubHeading
              text="Every burger is a journey through Egyptian culinary heritage. From ancient spice blends passed down through generations to modern cooking techniques that enhance traditional flavors - experience the taste that connects past and present."
              customClass="w-full text-gray-500"
              animation="fade-left"
              data-aos-delay="300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-0 mt-10">
            {isLoading && <LoadingSpinner />}
            {recipeData &&
              recipeData
                ?.slice(-8)
                .map((recipe: RecipeType) => (
                  <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    name={recipe.name}
                    time={recipe.time}
                    category={recipe.category}
                    isFavorite={recipe.isFavorite}
                    handleDeleteItem={() => deleteRecipe(recipe.id)}
                    handleOpenEditForm={() => handleOpenEditForm(recipe)}
                    handleToggleFavorite={() => toggleFavorite(recipe.id)}
                    customClass="p-2.5"
                    animation={
                      recipe.id && recipe.id % 2 === 0 ? "fade-up" : "fade-down"
                    }
                    data-aos-delay={100}
                  />
                ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-left">
        <Newsletter />
      </section>
    </div>
  );
}

export default App;
