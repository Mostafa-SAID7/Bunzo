import { Heading, SubHeading } from "../utils/Utils";
import lady_cooking from "../assets/images/lady_cooking.png";
import happy_chef from "../assets/images/happy_chef.png";

export default function About() {
  return (
    <div className="pb-20 relative inter">
      
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-20">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col items-center gap-6">
          <Heading text="Our Egyptian Story" customClass="text-center text-white" />
          <SubHeading
            text="من الشارع المصري إلى طاولتك - From Egyptian Streets to Your Table"
            customClass="text-center text-gray-200 max-w-3xl italic"
          />
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="The Bunzo Heritage" customClass="text-center text-gray-800" />
          <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            Born in the vibrant streets of Cairo, Bunzo represents the soul of Egyptian street food culture. 
            We are passionate about preserving the authentic flavors that have been passed down through 
            generations while presenting them in a modern, youth-friendly way. Our burgers tell the story 
            of Egypt - from ancient spice routes to contemporary culinary innovation, creating an experience 
            that resonates with both locals and tourists seeking authentic Egyptian flavors.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Our Egyptian Mission" customClass="text-center text-gray-800" />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={happy_chef}
              alt="Egyptian Chef"
              className="rounded-lg shadow-md max-w-full sm:max-w-md"
            />
            <div className="text-gray-600 leading-relaxed max-w-4xl">
              <p className="mb-4">
                Our mission is to celebrate Egyptian culinary heritage while making it accessible to the modern world. 
                We bridge the gap between traditional street food culture and contemporary dining expectations.
              </p>
              <ul className="space-y-2">
                <li>🏺 <strong>Preserve Heritage:</strong> Authentic Egyptian spices and cooking methods</li>
                <li>🌶️ <strong>Modern Innovation:</strong> Contemporary techniques with traditional flavors</li>
                <li>👥 <strong>Youth Culture:</strong> Vibrant atmosphere that speaks to Egypt's dynamic youth</li>
                <li>🎭 <strong>Tourist Experience:</strong> Cultural storytelling through food</li>
                <li>🥙 <strong>Street Authenticity:</strong> Capturing the essence of Cairo's food scene</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Our Vision for Egyptian Cuisine" customClass="text-center text-gray-800" />
          <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            We envision Bunzo as Egypt's ambassador of street food culture to the world. By creating burgers 
            that tell Egyptian stories, we hope to inspire pride in our culinary heritage while attracting 
            food lovers from around the globe. Every bite should transport you to the bustling streets of 
            Cairo, the Mediterranean coast of Alexandria, or the fertile Nile Valley - celebrating the 
            diversity and richness of Egyptian cuisine.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col gap-10">
          <Heading text="Meet Our Egyptian Chefs" customClass="text-center text-gray-800" />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={lady_cooking}
              alt="Egyptian Kitchen Team"
              className="rounded-lg shadow-md max-w-full sm:max-w-md"
            />
            <div className="text-gray-600 leading-relaxed max-w-4xl">
              <p className="mb-4">
                Our team consists of passionate Egyptian chefs, food historians, and culinary innovators 
                who are dedicated to bringing authentic Egyptian flavors to the modern burger experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-emerald-600">Chef Ahmed</h4>
                  <p className="text-sm">Master of The Pharaoh's Burger</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600">Chef Fatma</h4>
                  <p className="text-sm">Cairo Street Classic Creator</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600">Chef Yasmin</h4>
                  <p className="text-sm">Nile Valley Veggie Specialist</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-600">Chef Omar</h4>
                  <p className="text-sm">Spicy Sahara Innovator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="w-[95%] sm:w-[90%] mx-auto flex flex-col items-center gap-10">
          <Heading text="Join the Bunzo Family" customClass="text-center text-white" />
          <SubHeading
            text="Become part of Egypt's most beloved burger community. Experience authentic Egyptian street food culture, share your stories, and connect with fellow food lovers who appreciate the rich heritage of Egyptian cuisine."
            customClass="text-center text-gray-200 max-w-4xl"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 font-semibold">
              Visit Our Restaurant
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-emerald-600 transition-colors font-semibold">
              Follow @bunzo_egypt
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
