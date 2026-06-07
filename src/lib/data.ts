export type CategoryId =
  | "bowl"
  | "plate"
  | "bigger-plate"
  | "family-meal"
  | "a-la-carte"
  | "appetizers"
  | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  calories: number;
  spice: 0 | 1 | 2 | 3;
  allergens: string[];
  description: string;
  image: string;
  photo?: string;
  badge?: string;
  popular?: boolean;
  new?: boolean;
};

export type MealType = {
  id: CategoryId;
  name: string;
  price: number;
  structure: string;
  description: string;
};

export const mealTypes: MealType[] = [
  { id: "bowl", name: "Small Box", price: 14, structure: "Pack one regular takeout box", description: "Choose rice or noodles, then pack in as many hot dishes as the box can hold." },
  { id: "plate", name: "Big Box", price: 18, structure: "Pack one large takeout box", description: "A bigger box for big appetites. Fill it high with mains, sides, and crispy bites." },
  { id: "bigger-plate", name: "Feast Box", price: 24, structure: "Extra-large share box", description: "For two hungry people or one serious lunch mission." },
  { id: "family-meal", name: "Family Tray", price: 46, structure: "2 bases + 4 mains", description: "Shareable tray for groups, parties, and office lunches." },
  { id: "a-la-carte", name: "Hot Bar", price: 6.5, structure: "Add extra mains", description: "Top up your box with extra favorites." },
  { id: "appetizers", name: "Crispy Sides", price: 4.5, structure: "Spring rolls, wings, wontons", description: "Crunchy add-ons for the box." },
  { id: "drinks", name: "Drinks", price: 2.5, structure: "Tea and soft drinks", description: "Cold drinks for a hot box." }
];

export const menuItems: MenuItem[] = [
  {
    id: "orange-chili-chicken",
    name: "Orange Chicken",
    category: "a-la-carte",
    price: 6.8,
    calories: 480,
    spice: 2,
    allergens: ["soy", "wheat"],
    description: "Crispy chicken tossed in bright orange chili glaze.",
    image: "bg-gradient-to-br from-orange-100 via-white to-red-100",
    photo: "/images/orange-chicken.png",
    badge: "Best Seller",
    popular: true
  },
  {
    id: "broccoli-beef",
    name: "Broccoli Beef",
    category: "a-la-carte",
    price: 7.4,
    calories: 430,
    spice: 1,
    allergens: ["soy"],
    description: "Tender beef and broccoli in savory garlic soy sauce.",
    image: "bg-gradient-to-br from-red-100 via-white to-emerald-100",
    photo: "/images/broccoli-beef.png",
    popular: true
  },
  {
    id: "ginger-scallion-shrimp",
    name: "Honey Walnut Shrimp",
    category: "a-la-carte",
    price: 8.2,
    calories: 360,
    spice: 1,
    allergens: ["shellfish", "soy"],
    description: "Sweet glazed shrimp with toasted walnuts and crisp vegetables.",
    image: "bg-gradient-to-br from-sky-100 via-white to-yellow-100",
    photo: "/images/honey-walnut-shrimp.png",
    new: true
  },
  {
    id: "firecracker-tofu",
    name: "Spicy Mapo Tofu",
    category: "a-la-carte",
    price: 6.2,
    calories: 390,
    spice: 3,
    allergens: ["soy", "sesame"],
    description: "Soft tofu, chili bean sauce, scallions, and wok heat.",
    image: "bg-gradient-to-br from-red-100 via-white to-orange-100",
    photo: "/images/mapo-tofu.png",
    badge: "Veg"
  },
  {
    id: "sesame-green-beans",
    name: "Garlic Green Beans",
    category: "a-la-carte",
    price: 5.4,
    calories: 220,
    spice: 0,
    allergens: ["sesame"],
    description: "Fresh green beans wok-tossed with sesame and garlic.",
    image: "bg-gradient-to-br from-green-100 via-white to-blue-50",
    photo: "/images/garlic-green-beans.png"
  },
  {
    id: "fried-rice",
    name: "Egg Fried Rice",
    category: "a-la-carte",
    price: 4.8,
    calories: 520,
    spice: 0,
    allergens: ["egg", "soy"],
    description: "Rice, egg, peas, carrots, scallion, and light soy.",
    image: "bg-gradient-to-br from-yellow-100 via-white to-orange-50",
    photo: "/images/egg-fried-rice.png",
    popular: true
  },
  {
    id: "chow-mein",
    name: "Chow Mein",
    category: "a-la-carte",
    price: 4.8,
    calories: 510,
    spice: 0,
    allergens: ["wheat", "soy"],
    description: "Noodles with cabbage, celery, onion, and house sauce.",
    image: "bg-gradient-to-br from-amber-100 via-white to-blue-50",
    photo: "/images/chow-mein.png"
  },
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    category: "appetizers",
    price: 3.9,
    calories: 260,
    spice: 0,
    allergens: ["wheat"],
    description: "Crisp rolls with cabbage, carrot, mushroom, and sweet chili.",
    image: "bg-gradient-to-br from-orange-100 via-white to-yellow-50",
    photo: "/images/spring-rolls.png"
  },
  {
    id: "crabless-rangoons",
    name: "Crispy Wontons",
    category: "appetizers",
    price: 4.4,
    calories: 310,
    spice: 0,
    allergens: ["milk", "wheat"],
    description: "Golden wontons filled with scallion cream cheese.",
    image: "bg-gradient-to-br from-yellow-100 via-white to-blue-50",
    photo: "/images/crispy-wontons.png"
  },
  {
    id: "jasmine-iced-tea",
    name: "Iced Lemon Tea",
    category: "drinks",
    price: 2.9,
    calories: 80,
    spice: 0,
    allergens: [],
    description: "Lightly sweet jasmine tea served cold.",
    image: "bg-gradient-to-br from-blue-100 via-white to-cyan-100",
    photo: "/images/iced-lemon-tea.png"
  },
  {
    id: "mandarin-sparkler",
    name: "Orange Soda",
    category: "drinks",
    price: 3.2,
    calories: 110,
    spice: 0,
    allergens: [],
    description: "Citrus soda with mandarin and lime.",
    image: "bg-gradient-to-br from-orange-100 via-white to-blue-100",
    photo: "/images/orange-soda.png",
    new: true
  }
];

export const stores = [
  { id: "downtown", name: "ZettoGo Downtown", address: "118 Market Street", hours: "10:30 AM - 10:00 PM", range: "4 mi", fee: 3.99 },
  { id: "riverside", name: "ZettoGo Riverside", address: "42 River Park Ave", hours: "11:00 AM - 9:30 PM", range: "5 mi", fee: 4.99 },
  { id: "north", name: "ZettoGo North Plaza", address: "700 North Plaza", hours: "10:00 AM - 10:00 PM", range: "3 mi", fee: 2.99 }
];

export const seededOrders = [
  { id: "ZG-1042", status: "Preparing", total: 18, method: "Pickup", time: "12 min" },
  { id: "ZG-1038", status: "Ready", total: 32, method: "Delivery", time: "Arriving soon" },
  { id: "ZG-1027", status: "Completed", total: 14, method: "Pickup", time: "Yesterday" }
];
