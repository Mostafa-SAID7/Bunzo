// Egyptian Restaurant Blog Data
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import post4 from "../assets/images/post4.png";
import user_dp from "../assets/images/user_dp.png";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: number;
  isFeatured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ancient Spice Routes: How Egyptian Flavors Shaped Our Burgers",
    excerpt: "Discover the fascinating journey of Egyptian spices from ancient trade routes to modern Bunzo burgers.",
    content: `
      <p>Egypt has been the crossroads of spice trade for over 4,000 years. From the bustling markets of ancient Memphis to today's Khan el-Khalili, spices have been the soul of Egyptian cuisine.</p>
      
      <p>At Bunzo, we honor this rich heritage by incorporating traditional spice blends that have been passed down through generations. Our signature spice mix includes:</p>
      
      <ul>
        <li><strong>Dukkah</strong> - A blend of nuts, seeds, and spices that adds texture and flavor</li>
        <li><strong>Baharat</strong> - The seven-spice blend that brings warmth to our beef</li>
        <li><strong>Za'atar</strong> - Wild thyme blend that connects us to the Mediterranean</li>
        <li><strong>Harissa</strong> - North African chili paste for our spicy creations</li>
      </ul>
      
      <p>Each burger tells a story of these ancient trade routes, bringing flavors that once traveled by camel caravan directly to your table.</p>
    `,
    image: post1,
    author: {
      name: "Chef Ahmed Hassan",
      avatar: user_dp,
      role: "Head Chef & Spice Master"
    },
    category: "Heritage",
    tags: ["spices", "history", "egyptian-cuisine", "tradition"],
    publishedDate: "2024-03-15",
    readTime: 5,
    isFeatured: true
  },
  {
    id: 2,
    title: "Street Food Culture: From Cairo's Alleys to Bunzo's Kitchen",
    excerpt: "Experience the vibrant street food culture of Cairo and how it inspired our modern burger creations.",
    content: `
      <p>Walking through the narrow alleys of Old Cairo, you'll encounter a symphony of sizzling pans, aromatic spices, and the cheerful calls of street vendors. This is where Bunzo's heart truly lies.</p>
      
      <p>Our Cairo Street Classic burger is a direct homage to the <em>kofta</em> sandwiches sold by street vendors who have perfected their craft over decades. The secret lies in:</p>
      
      <ul>
        <li>Hand-mixed spice blends prepared fresh daily</li>
        <li>Cooking techniques passed down through families</li>
        <li>The perfect balance of heat, flavor, and texture</li>
        <li>Using only the freshest local ingredients</li>
      </ul>
      
      <p>When you bite into our Cairo Street Classic, you're not just eating a burger – you're experiencing centuries of culinary evolution that has made Egyptian street food legendary worldwide.</p>
    `,
    image: post2,
    author: {
      name: "Fatma El-Masry",
      avatar: user_dp,
      role: "Street Food Historian"
    },
    category: "Culture",
    tags: ["street-food", "cairo", "culture", "tradition"],
    publishedDate: "2024-03-10",
    readTime: 4,
    isFeatured: true
  },
  {
    id: 3,
    title: "The Art of Egyptian Hospitality: More Than Just a Meal",
    excerpt: "Learn about the deep-rooted tradition of Egyptian hospitality and how it shapes the Bunzo experience.",
    content: `
      <p>In Egypt, food is never just about sustenance – it's about connection, community, and the ancient art of hospitality known as <em>karam</em>.</p>
      
      <p>At Bunzo, we've woven this tradition into every aspect of our service. From the moment you enter our restaurant, you become part of our extended family. This philosophy influences:</p>
      
      <ul>
        <li><strong>Generous portions</strong> - Because no guest should leave hungry</li>
        <li><strong>Warm service</strong> - Every interaction reflects genuine care</li>
        <li><strong>Sharing culture</strong> - Our platters are designed for communal dining</li>
        <li><strong>Storytelling</strong> - Each dish comes with its cultural narrative</li>
      </ul>
      
      <p>When tourists visit Bunzo, they don't just taste Egyptian flavors – they experience the warmth and generosity that has made Egyptian hospitality legendary throughout history.</p>
    `,
    image: post3,
    author: {
      name: "Yasmin Farouk",
      avatar: user_dp,
      role: "Cultural Experience Manager"
    },
    category: "Hospitality",
    tags: ["hospitality", "culture", "experience", "tourism"],
    publishedDate: "2024-03-05",
    readTime: 3,
    isFeatured: false
  },
  {
    id: 4,
    title: "Youth Culture Meets Ancient Flavors: The Bunzo Revolution",
    excerpt: "How we're bridging the gap between Egypt's rich culinary heritage and modern youth culture.",
    content: `
      <p>Egypt's youth are proud of their heritage but hungry for innovation. At Bunzo, we've created a space where ancient flavors meet contemporary culture.</p>
      
      <p>Our approach to modernizing Egyptian cuisine includes:</p>
      
      <ul>
        <li><strong>Instagram-worthy presentation</strong> - Traditional flavors in modern, photogenic formats</li>
        <li><strong>Fusion techniques</strong> - Combining Egyptian spices with international cooking methods</li>
        <li><strong>Sustainable practices</strong> - Honoring the land that gives us these incredible ingredients</li>
        <li><strong>Community engagement</strong> - Creating spaces for young Egyptians to connect over food</li>
      </ul>
      
      <p>The result? A dining experience that makes young Egyptians proud of their culinary heritage while attracting food lovers from around the world who want to experience authentic Egyptian flavors in a contemporary setting.</p>
    `,
    image: post4,
    author: {
      name: "Omar Khalil",
      avatar: user_dp,
      role: "Youth Culture Specialist"
    },
    category: "Innovation",
    tags: ["youth-culture", "innovation", "modern-egyptian", "social-media"],
    publishedDate: "2024-02-28",
    readTime: 4,
    isFeatured: true
  }
];

export const blogCategories = [
  { id: 1, name: "Heritage", count: 1, description: "Stories of Egyptian culinary history" },
  { id: 2, name: "Culture", count: 1, description: "Egyptian food culture and traditions" },
  { id: 3, name: "Hospitality", count: 1, description: "The art of Egyptian welcome" },
  { id: 4, name: "Innovation", count: 1, description: "Modern takes on ancient flavors" }
];

export const featuredPosts = blogPosts.filter(post => post.isFeatured);
export const recentPosts = blogPosts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());