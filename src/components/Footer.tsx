import SocialMediaBox from "./SocialMediaBox";
import bunzo_logo from "../assets/bunzo_logo.svg";
import { NavLink } from "react-router-dom";
import useAOS from "../hooks/useAOS";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  useAOS();

  return (
    <footer className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="w-[90%] max-w-[1440px] flex flex-col justify-between items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-4 md:col-span-2">
            <div className="flex items-center gap-3" data-aos="fade-right">
              <figure>
                <img
                  src={bunzo_logo}
                  alt="Bunzo Egyptian Burgers"
                  className="w-12 h-12"
                />
              </figure>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold lobster-regular text-white">
                  Bunzo
                </h3>
                <p className="text-sm text-emerald-400 font-medium">
                  Egyptian Street Burgers
                </p>
              </div>
            </div>
            <p
              className="text-sm text-gray-300 max-w-md leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Experience the authentic taste of Egypt with our modern twist on street-style burgers. 
              From the bustling streets of Cairo to your table - we bring you the flavors that tell 
              the story of Egyptian culinary heritage.
            </p>
            <div className="flex flex-col gap-2" data-aos="fade-right" data-aos-delay="400">
              <p className="text-emerald-400 font-semibold">📍 Find Us:</p>
              <p className="text-sm text-gray-300">Downtown Cairo • Zamalek • New Capital</p>
              <p className="text-sm text-gray-300">📞 +20 100 123 4567</p>
              <p className="text-sm text-gray-300">🕒 Daily: 11:00 AM - 2:00 AM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4" data-aos="fade-up">
            <h4 className="text-lg font-semibold text-emerald-400 mb-2">Quick Bites</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Signature Burgers", path: "/recipes" },
                { name: "Egyptian Specials", path: "/menu" },
                { name: "Street Stories", path: "/blog" },
                { name: "Visit Us", path: "/contact" }
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Egyptian Heritage */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-emerald-400 mb-2">Our Heritage</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <p>🏺 Ancient Spices</p>
              <p>🌶️ Traditional Flavors</p>
              <p>🥙 Modern Techniques</p>
              <p>👥 Youth Culture</p>
              <p>🎭 Tourist Favorites</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6">
          <div className="text-center sm:text-left text-sm text-gray-400">
            <p>
              &copy; {currentYear} Bunzo Egyptian Burgers. Crafted with ❤️ in Cairo.
            </p>
            <p className="mt-1">
              Bringing Egyptian street food culture to the world, one burger at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialMediaBox />
          </div>
        </div>

        {/* Egyptian Touch */}
        <div className="mt-6 text-center" data-aos="fade-up">
          <p className="text-xs text-gray-500 italic">
            "من الشارع المصري إلى طاولتك" - From Egyptian Streets to Your Table
          </p>
        </div>
      </div>
    </footer>
  );
}
