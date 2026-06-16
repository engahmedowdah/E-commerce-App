import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import UserModel from "../backend/modules/data/User/User.model.js";
import AdminModel from "../backend/modules/data/Admin/Admin.model.js";
import RoleModel from "../backend/modules/data/Role/Role.model.js";
import PermissionModel from "../backend/modules/data/Permission/Permission.model.js";
import CategoryModel from "../backend/modules/data/Category/Category.model.js";
import SubcategoryModel from "../backend/modules/data/Subcategory/Subcategory.model.js";
import CollectionModel from "../backend/modules/data/Collection/Collection.model.js";
import ProductModel from "../backend/modules/data/Product/Product.model.js";
import CountryModel from "../backend/modules/data/Country/Country.model.js";
import CityModel from "../backend/modules/data/City/City.model.js";
import AddressModel from "../backend/modules/data/Address/Address.model.js";
import OrderStatusModel from "../backend/modules/data/OrderStatus/OrderStatus.model.js";
import PaymentMethodModel from "../backend/modules/data/PaymentMethod/PaymentMethod.model.js";
import PaymentStatusModel from "../backend/modules/data/PaymentStatus/PaymentStatus.model.js";
import OrderModel from "../backend/modules/data/Order/Order.model.js";
import PaymentModel from "../backend/modules/data/Payment/Payment.model.js";
import ReviewModel from "../backend/modules/data/Review/Review.model.js";
import CartModel from "../backend/modules/data/Cart/Cart.model.js";
import ImageModel from "../backend/modules/data/Image/Image.model.js";
import OtpVerificationModel from "../backend/modules/data/OtpVerification/OtpVerification.model.js";
import RefreshTokenModel from "../backend/modules/data/RefreshToken/RefreshToken.model.js";
import TableTranslationModel from "../backend/modules/data/TableTranslation/TableTranslation.model.js";
import * as utils from "../backend/shared/utils.js";
import { AddTranslation } from "../backend/shared/translationUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../backend/.env") });

const firstNames = [
  "Mohammed",
  "Ahmed",
  "Sara",
  "Fatima",
  "Omar",
  "Khalid",
  "Layla",
  "Nour",
  "Ali",
  "Hana",
  "Youssef",
  "Rania",
  "Hassan",
  "Mona",
  "Tariq",
  "Amira",
  "Sami",
  "Dana",
  "Faisal",
  "Lina",
  "Ibrahim",
  "Maya",
  "Nasser",
  "Dina",
  "Walid",
  "Rana",
  "Karim",
  "Sana",
  "Ziad",
  "Heba",
  "Adel",
  "Nadine",
  "Bilal",
  "Yasmin",
  "Rami",
  "Samar",
  "Nabil",
  "Ghada",
  "Majid",
  "Reem",
  "James",
  "Emily",
  "Michael",
  "Jessica",
  "David",
  "Ashley",
  "Daniel",
  "Amanda",
  "Chris",
  "Megan",
  "Matthew",
  "Sarah",
  "Andrew",
  "Lauren",
  "Joshua",
  "Stephanie",
  "Ryan",
  "Rachel",
  "Nicholas",
  "Kayla",
  "Tyler",
  "Brittany",
  "Brandon",
  "Samantha",
  "Justin",
  "Rebecca",
  "Kevin",
  "Elizabeth",
  "Eric",
  "Christine",
  "Jonathan",
  "Heather",
  "Adam",
  "Amber",
  "Kyle",
  "Amy",
  "Nathan",
  "Melissa",
  "Derek",
  "Jennifer",
  "Patrick",
  "Crystal",
  "Sean",
  "Michelle",
  "Brian",
  "Nicole",
  "Scott",
  "Tiffany",
  "Timothy",
  "Angela",
  "Abdullah",
  "Aisha",
  "Hamad",
  "Nouf",
  "Saleh",
  "Wafa",
  "Turki",
  "Arwa",
  "Mansour",
  "Hind",
];

const lastNames = [
  "Al-Rashidi",
  "Al-Otaibi",
  "Al-Ghamdi",
  "Al-Qahtani",
  "Al-Shehri",
  "Al-Harbi",
  "Al-Zahrani",
  "Al-Dosari",
  "Al-Mutairi",
  "Al-Anazi",
  "Al-Hamdan",
  "Al-Shahrani",
  "Al-Subaie",
  "Al-Bishi",
  "Al-Asmari",
  "Al-Yami",
  "Al-Ruwaili",
  "Al-Saeedi",
  "Al-Juhani",
  "Al-Ahmadi",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Martinez",
  "Wilson",
  "Anderson",
  "Taylor",
  "Thomas",
  "Hernandez",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Gomez",
  "Phillips",
  "Evans",
  "Turner",
  "Diaz",
  "Parker",
  "Cruz",
  "Edwards",
  "Collins",
  "Reyes",
  "Stewart",
  "Morris",
  "Morales",
  "Murphy",
  "Cook",
  "Rogers",
  "Gutierrez",
  "Ortiz",
  "Morgan",
  "Cooper",
  "Peterson",
  "Bailey",
  "Reed",
  "Kelly",
  "Howard",
  "Ramos",
  "Kim",
  "Cox",
  "Ward",
];

const streetNames = [
  "King Fahd Road",
  "Olaya Street",
  "Tahlia Street",
  "Prince Sultan Road",
  "Al Urubah Road",
  "Al Madinah Road",
  "Al Imam Saud Road",
  "King Abdullah Road",
  "Sitteen Street",
  "Al Amir Road",
  "Corniche Road",
  "Sheikh Zayed Road",
  "Al Wasl Road",
  "Jumeirah Beach Road",
  "Al Khail Road",
  "Palestine Street",
  "Al Andalus Street",
  "Al Balad Street",
  "Al Zahraa Street",
  "Al Rawdah Street",
  "Al Nuzha Street",
  "Al Rehab Street",
  "Al Safa Street",
  "Al Manara Street",
  "Al Quoz Street",
  "Business Bay Boulevard",
  "Al Maryah Street",
  "Yas Island Road",
  "Al Reem Boulevard",
  "Al Hamra Street",
];

const productNames = [
  "Samsung Galaxy S24 Ultra",
  "Apple iPhone 15 Pro",
  "Sony WH-1000XM5 Headphones",
  "Dell XPS 15 Laptop",
  "iPad Pro 12.9 inch",
  "Apple Watch Series 9",
  "Sony PlayStation 5",
  "Microsoft Xbox Series X",
  'LG OLED 65" TV',
  "Bose QuietComfort Earbuds",
  "Canon EOS R6 Camera",
  "DJI Mini 4 Pro Drone",
  "GoPro Hero 12",
  "Kindle Paperwhite",
  "Anker PowerCore 26800",
  "TP-Link Wi-Fi 6 Router",
  "Logitech MX Master 3 Mouse",
  "Razer BlackWidow V3 Keyboard",
  "Samsung 980 Pro SSD 1TB",
  "WD Blue 4TB HDD",
  "Nike Air Max 270 Sneakers",
  "Adidas Ultraboost 23",
  "Levi's 501 Original Jeans",
  "Ralph Lauren Polo Shirt",
  "Tommy Hilfiger Hoodie",
  "Calvin Klein 3-Pack T-Shirts",
  "H&M Slim Fit Chinos",
  "Zara Leather Biker Jacket",
  "Under Armour Tech Shorts",
  "Champion Reverse Weave Sweatshirt",
  "New Balance 574 Classic Shoes",
  "Puma RS-X Sneakers",
  "Lacoste Essential Polo",
  "Hugo Boss Slim Dress Shirt",
  "Mango Floral Midi Dress",
  "Massimo Dutti Wool Blazer",
  "Banana Republic Trench Coat",
  "GAP Classic Denim Jacket",
  "Uniqlo Ultra Light Down Jacket",
  "North Face 100 Glacier Fleece",
  "Dyson V15 Detect Vacuum",
  "KitchenAid Artisan Stand Mixer",
  "Nespresso Vertuo Next Coffee Machine",
  "Instant Pot Duo 7-in-1 8Qt",
  "Philips Airfryer XXL 1.4kg",
  "Shark IQ Robot Vacuum",
  "Cuisinart 14-Cup Food Processor",
  "Breville Smart Oven Air",
  "Weber Spirit II E-310 Gas Grill",
  "Vitamix 5200 Blender",
  "IKEA KALLAX 4x4 Shelf",
  "Zinus 12-inch Memory Foam Mattress",
  "Casper Sleep Original Pillow",
  "Purple Harmony Pillow",
  "simplehuman Sensor Trash Can",
  "OXO Good Grips 15-Piece Set",
  "Lodge 12-inch Cast Iron Skillet",
  "Staub 4Qt Cocotte Dutch Oven",
  "Le Creuset 5.5Qt Round Dutch Oven",
  "L'Oreal Revitalift 1.5% Serum",
  "CeraVe Moisturizing Cream 16oz",
  "The Ordinary Niacinamide 10% Zinc",
  "Neutrogena Hydro Boost Water Gel",
  "Olay Regenerist Micro-Sculpting Cream",
  "MAC Studio Fix Powder Foundation",
  "Urban Decay Naked Original Palette",
  "Too Faced Better Than Sex Mascara",
  "Charlotte Tilbury Flawless Filter",
  "NARS Radiant Creamy Concealer",
  "Fenty Beauty Pro Filtr Foundation",
  "NYX Professional Makeup Setting Spray",
  "Maybelline Fit Me Matte Foundation",
  "Revlon ColorStay Moisture Stain",
  "essence Lash Princess Mascara",
  "Dove Deep Moisture Body Wash 22oz",
  "Pantene Pro-V Daily Moisture Shampoo",
  "TRESemme Keratin Smooth Shampoo",
  "Head and Shoulders Classic Clean 2-in-1",
  "Herbal Essences Bio Renew Argan Oil",
  "Garmin Forerunner 265 GPS Watch",
  "Fitbit Charge 6 Fitness Tracker",
  "Bowflex SelectTech 552 Dumbbells",
  "TRX All-in-One Suspension Training",
  "Manduka PRO 6mm Yoga Mat",
  "Hydro Flask 32oz Wide Mouth Bottle",
  "YETI Rambler 30oz Tumbler",
  "Osprey Talon 22 Daypack",
  "Coleman Sundome 4-Person Tent",
  "Black Diamond Momentum Harness",
  "Patagonia Nano Puff Jacket",
  "Arcteryx Beta AR Gore-Tex Jacket",
  "Salomon Speedcross 6 Trail Shoes",
  "Brooks Ghost 15 Running Shoes",
  "ASICS Gel-Nimbus 25",
  "Speedo Endurance Splice Swimsuit",
  "Arena Carbon Ultra Racing Goggles",
  "Wilson Pro Staff 97 Tennis Racket",
  "Callaway Rogue ST Max Driver",
  "Titleist Pro V1 Golf Balls 12-Pack",
];

const categoryNames = [
  "Electronics",
  "Clothing",
  "Home & Living",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Books & Stationery",
  "Toys & Games",
  "Automotive",
  "Food & Grocery",
  "Health & Wellness",
];

const collectionSlugs = [
  ["New Arrivals", "new-arrivals", "Fresh products just landed this season"],
  ["Best Sellers", "best-sellers", "Our most popular items this month"],
  ["Hot Deals", "hot-deals", "Limited-time discounted products"],
  ["Staff Picks", "staff-picks", "Curated by our expert team"],
  ["Premium Range", "premium-range", "Top-tier luxury products"],
  ["Flash Sale", "flash-sale", "24-hour mega discounts"],
  ["Trending Now", "trending-now", "What everyone is buying"],
  ["Clearance", "clearance", "Up to 70% off selected items"],
  [
    "Seasonal Favorites",
    "seasonal-favorites",
    "Handpicked for the current season",
  ],
  ["Bundle Deals", "bundle-deals", "Save more when you buy together"],
];

const subcategoryData = [
  ["Smartphones", "Electronics"],
  ["Laptops & PCs", "Electronics"],
  ["Audio & Headphones", "Electronics"],
  ["Cameras & Drones", "Electronics"],
  ["Gaming", "Electronics"],
  ["Wearables", "Electronics"],
  ["Smart Home", "Electronics"],
  ["Networking", "Electronics"],
  ["Storage & Memory", "Electronics"],
  ["Accessories", "Electronics"],
  ["Men's Shirts", "Clothing"],
  ["Women's Dresses", "Clothing"],
  ["Footwear", "Clothing"],
  ["Outerwear", "Clothing"],
  ["Activewear", "Clothing"],
  ["Underwear & Socks", "Clothing"],
  ["Bags & Wallets", "Clothing"],
  ["Watches & Jewellery", "Clothing"],
  ["Swimwear", "Clothing"],
  ["Kids Clothing", "Clothing"],
  ["Kitchen Appliances", "Home & Living"],
  ["Cookware", "Home & Living"],
  ["Bedding", "Home & Living"],
  ["Furniture", "Home & Living"],
  ["Cleaning & Laundry", "Home & Living"],
  ["Lighting", "Home & Living"],
  ["Bathroom", "Home & Living"],
  ["Garden & Outdoor", "Home & Living"],
  ["Storage & Organisation", "Home & Living"],
  ["Home Decor", "Home & Living"],
  ["Skincare", "Beauty & Personal Care"],
  ["Makeup", "Beauty & Personal Care"],
  ["Hair Care", "Beauty & Personal Care"],
  ["Body Care", "Beauty & Personal Care"],
  ["Fragrance", "Beauty & Personal Care"],
  ["Men's Grooming", "Beauty & Personal Care"],
  ["Oral Care", "Beauty & Personal Care"],
  ["Nail Care", "Beauty & Personal Care"],
  ["Eye Care", "Beauty & Personal Care"],
  ["Natural & Organic Beauty", "Beauty & Personal Care"],
  ["Running", "Sports & Outdoors"],
  ["Yoga & Pilates", "Sports & Outdoors"],
  ["Cycling", "Sports & Outdoors"],
  ["Swimming", "Sports & Outdoors"],
  ["Team Sports", "Sports & Outdoors"],
  ["Racket Sports", "Sports & Outdoors"],
  ["Golf", "Sports & Outdoors"],
  ["Hiking & Camping", "Sports & Outdoors"],
  ["Gym & Fitness", "Sports & Outdoors"],
  ["Water Sports", "Sports & Outdoors"],
  ["Fiction", "Books & Stationery"],
  ["Non-Fiction", "Books & Stationery"],
  ["Children's Books", "Books & Stationery"],
  ["Notebooks & Journals", "Books & Stationery"],
  ["Art Supplies", "Books & Stationery"],
  ["Office Supplies", "Books & Stationery"],
  ["Educational", "Books & Stationery"],
  ["Manga & Comics", "Books & Stationery"],
  ["Calendars & Planners", "Books & Stationery"],
  ["Gift Cards", "Books & Stationery"],
  ["Action Figures", "Toys & Games"],
  ["Board Games", "Toys & Games"],
  ["Building Blocks", "Toys & Games"],
  ["Dolls & Plush", "Toys & Games"],
  ["Outdoor Play", "Toys & Games"],
  ["Puzzles", "Toys & Games"],
  ["Remote Control Toys", "Toys & Games"],
  ["Educational Toys", "Toys & Games"],
  ["Video Games", "Toys & Games"],
  ["Card Games", "Toys & Games"],
  ["Car Care", "Automotive"],
  ["Car Electronics", "Automotive"],
  ["Car Accessories", "Automotive"],
  ["Tyres & Wheels", "Automotive"],
  ["Engine & Performance", "Automotive"],
  ["Tools & Equipment", "Automotive"],
  ["Motorcycle Gear", "Automotive"],
  ["Car Safety", "Automotive"],
  ["Interior Accessories", "Automotive"],
  ["Exterior Accessories", "Automotive"],
  ["Snacks & Confectionery", "Food & Grocery"],
  ["Beverages", "Food & Grocery"],
  ["Dairy & Eggs", "Food & Grocery"],
  ["Grains & Pasta", "Food & Grocery"],
  ["Oils & Condiments", "Food & Grocery"],
  ["Organic Food", "Food & Grocery"],
  ["Frozen Foods", "Food & Grocery"],
  ["Bakery", "Food & Grocery"],
  ["Meat & Poultry", "Food & Grocery"],
  ["International Foods", "Food & Grocery"],
  ["Vitamins & Supplements", "Health & Wellness"],
  ["Medical Devices", "Health & Wellness"],
  ["First Aid", "Health & Wellness"],
  ["Weight Management", "Health & Wellness"],
  ["Protein & Fitness Nutrition", "Health & Wellness"],
  ["Eye Care", "Health & Wellness"],
  ["Feminine Care", "Health & Wellness"],
  ["Mobility & Daily Living", "Health & Wellness"],
  ["Mental Wellness", "Health & Wellness"],
  ["Sleep Aids", "Health & Wellness"],
];

const countryData = [
  ["Saudi Arabia", "ر.س", "saudi-arabia"],
  ["United Arab Emirates", "د.إ", "united-arab-emirates"],
  ["Kuwait", "د.ك", "kuwait"],
  ["Qatar", "ر.ق", "qatar"],
  ["Bahrain", "د.ب", "bahrain"],
  ["Oman", "ر.ع", "oman"],
  ["Egypt", "ج.م", "egypt"],
  ["Jordan", "د.أ", "jordan"],
  ["Iraq", "ع.د", "iraq"],
];

const cityData = [
  // Saudi Arabia
  ["الرياض", "Saudi Arabia"],
  ["جدة", "Saudi Arabia"],
  ["مكة المكرمة", "Saudi Arabia"],
  ["المدينة المنورة", "Saudi Arabia"],
  ["الدمام", "Saudi Arabia"],
  ["الخبر", "Saudi Arabia"],
  ["الطائف", "Saudi Arabia"],
  ["تبوك", "Saudi Arabia"],
  ["أبها", "Saudi Arabia"],
  ["خميس مشيط", "Saudi Arabia"],
  ["جازان", "Saudi Arabia"],
  ["نجران", "Saudi Arabia"],
  ["حائل", "Saudi Arabia"],
  ["بريدة", "Saudi Arabia"],
  ["الأحساء", "Saudi Arabia"],
  ["الجبيل", "Saudi Arabia"],
  ["ينبع", "Saudi Arabia"],
  ["الخرج", "Saudi Arabia"],
  // UAE
  ["أبوظبي", "United Arab Emirates"],
  ["دبي", "United Arab Emirates"],
  ["الشارقة", "United Arab Emirates"],
  ["عجمان", "United Arab Emirates"],
  ["رأس الخيمة", "United Arab Emirates"],
  ["الفجيرة", "United Arab Emirates"],
  ["أم القيوين", "United Arab Emirates"],
  ["العين", "United Arab Emirates"],
  ["خورفكان", "United Arab Emirates"],
  // Kuwait
  ["مدينة الكويت", "Kuwait"],
  ["حولي", "Kuwait"],
  ["الفروانية", "Kuwait"],
  ["الأحمدي", "Kuwait"],
  ["الجهراء", "Kuwait"],
  ["السالمية", "Kuwait"],
  ["الفحيحيل", "Kuwait"],
  ["صباح السالم", "Kuwait"],
  // Qatar
  ["الدوحة", "Qatar"],
  ["الريان", "Qatar"],
  ["الوكرة", "Qatar"],
  ["الخور", "Qatar"],
  ["أم صلال", "Qatar"],
  ["لوسيل", "Qatar"],
  // Bahrain
  ["المنامة", "Bahrain"],
  ["المحرق", "Bahrain"],
  ["الرفاع", "Bahrain"],
  ["مدينة عيسى", "Bahrain"],
  ["مدينة حمد", "Bahrain"],
  ["سترة", "Bahrain"],
  // Oman
  ["مسقط", "Oman"],
  ["صلالة", "Oman"],
  ["صحار", "Oman"],
  ["نزوى", "Oman"],
  ["صور", "Oman"],
  ["السيب", "Oman"],
  ["البريمي", "Oman"],
  // Egypt
  ["القاهرة", "Egypt"],
  ["الجيزة", "Egypt"],
  ["الإسكندرية", "Egypt"],
  ["المنصورة", "Egypt"],
  ["طنطا", "Egypt"],
  ["أسيوط", "Egypt"],
  ["الأقصر", "Egypt"],
  ["أسوان", "Egypt"],
  ["شرم الشيخ", "Egypt"],
  ["الغردقة", "Egypt"],
  // Jordan
  ["عمّان", "Jordan"],
  ["الزرقاء", "Jordan"],
  ["إربد", "Jordan"],
  ["العقبة", "Jordan"],
  ["السلط", "Jordan"],
  ["مادبا", "Jordan"],
  ["الكرك", "Jordan"],
  // Iraq
  ["بغداد", "Iraq"],
  ["البصرة", "Iraq"],
  ["الموصل", "Iraq"],
  ["أربيل", "Iraq"],
  ["السليمانية", "Iraq"],
  ["كركوك", "Iraq"],
  ["النجف", "Iraq"],
  ["كربلاء", "Iraq"],
  ["الحلة", "Iraq"],
  ["الناصرية", "Iraq"],
];

const orderStatusNames = [
  "Pending",
  "Confirmed",
  "Processing",
  "Packed",
  "Ready for Pickup",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
  "Return Requested",
  "Returned",
  "Refund Processing",
  "Refunded",
  "On Hold",
  "Partially Shipped",
  "Partially Delivered",
  "Awaiting Payment",
  "Payment Failed",
  "Exchange Requested",
  "Exchanged",
  "Lost in Transit",
  "Delayed",
  "Attempted Delivery",
  "Customs Held",
  "Dispatched",
  "Picked Up",
  "Backordered",
  "Pre-order",
  "Reserved",
  "Awaiting Stock",
];

const paymentMethodNames = [
  "Cash on Delivery",
  "Visa",
  "Mastercard",
  "Apple Pay",
  "Google Pay",
  "STC Pay",
  "Mada",
  "American Express",
  "PayPal",
  "Bank Transfer",
  "Tabby",
  "Tamara",
  "Sadad",
  "Fawry",
  "Cryptocurrency",
  "Gift Card",
  "Store Credit",
  "Western Union",
  "Samsung Pay",
  "Huawei Pay",
];

const paymentStatusNames = [
  "Pending",
  "Completed",
  "Failed",
  "Refunded",
  "Partially Refunded",
  "Chargeback",
  "Disputed",
  "Authorized",
  "Voided",
  "Expired",
  "Processing",
  "On Hold",
  "Reversed",
  "Cancelled",
  "Awaiting Confirmation",
  "Settled",
  "Under Review",
  "Fraud Suspected",
  "Declined",
  "Retry Requested",
];

const reviewCommentsByRating = {
  5: [
    "Absolutely love this product! Exceeded all my expectations. Will buy again.",
    "Perfect in every way. Fast delivery, great packaging, and superb quality.",
    "Best purchase I've made this year. Highly recommend to everyone.",
    "Outstanding quality. You can feel the premium craftsmanship immediately.",
    "Five stars without hesitation. This product changed my daily routine.",
    "Incredible value for money. Already ordered a second one as a gift.",
    "Exactly as described and even better in person. Very impressed.",
    "Top-tier product. I've tried many similar items — this one wins.",
  ],
  4: [
    "Really good product overall. Minor packaging issue but the item itself is great.",
    "Great quality for the price. Arrived on time and works perfectly.",
    "Very happy with my purchase. Would definitely recommend to friends.",
    "Solid product, does exactly what it promises. Four stars from me.",
    "Good build quality and comfortable to use daily. Happy with it.",
    "Works as advertised. Setup was straightforward and performance is solid.",
    "High quality product. Matches the photos exactly. Very pleased overall.",
    "Good product, just took a little longer to arrive than expected.",
  ],
  3: [
    "Decent product but nothing special. Does the job for the price.",
    "Average quality. It works but I expected a bit more for the price.",
    "OK product. Some minor issues but nothing that affects functionality.",
    "It's fine. Not amazing, not terrible. Three stars is fair.",
    "Product is okay. Delivery was slow and packaging was a bit damaged.",
  ],
  2: [
    "Disappointing quality. Felt cheap and not worth the price paid.",
    "Not as described. The color was different and the size runs small.",
    "Had some issues after a week of use. Not very durable unfortunately.",
  ],
  1: [
    "Very poor quality. Stopped working after two days. Not recommended.",
    "Complete waste of money. Nothing like the photos. Requesting a refund.",
    "Terrible experience. Product arrived broken and customer service was unhelpful.",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. MASTER PERMISSIONS LIST  (exact names as defined in the spec)
// ─────────────────────────────────────────────────────────────────────────────
const ALL_PERMISSIONS = [
  // ── Addresses ──────────────────────────────────────────────────────────────
  { Name: "addresses.create.own",   Description: "Create own addresses" },
  { Name: "addresses.read.own",     Description: "Read own address by ID" },
  { Name: "addresses.read.all.own", Description: "Read all own addresses" },
  { Name: "addresses.update.own",   Description: "Update own address" },
  { Name: "addresses.delete.own",   Description: "Delete own address" },

  // ── Carts ──────────────────────────────────────────────────────────────────
  { Name: "carts.create.own", Description: "Create own cart" },
  { Name: "carts.read.own",   Description: "Read own cart" },
  { Name: "carts.read",       Description: "Read a cart by ID (admin)" },
  { Name: "carts.read.all",   Description: "Read all carts" },
  { Name: "carts.update.own", Description: "Update own cart" },
  { Name: "carts.delete.own", Description: "Delete own cart" },

  // ── Profile ─────────────────────────────────────────────────────────────────
  { Name: "profile.create.own", Description: "Create own profile" },
  { Name: "profile.read.own",   Description: "Read own profile" },
  { Name: "profile.read",       Description: "Read any user's profile" },
  { Name: "profile.update.own", Description: "Update own profile" },
  { Name: "profile.delete.own", Description: "Delete own profile" },

  // ── Users (admin-facing) ────────────────────────────────────────────────────
  { Name: "users.read",     Description: "Read a user by ID" },
  { Name: "users.read.all", Description: "Read all users" },
  { Name: "users.delete",   Description: "Delete a user" },

  // ── Messages ────────────────────────────────────────────────────────────────
  { Name: "messages.create",     Description: "Create a message" },
  { Name: "messages.read.own",   Description: "Read own messages" },
  { Name: "messages.read",       Description: "Read a specific message" },
  { Name: "messages.read.all",   Description: "Read all messages" },
  { Name: "messages.update.own", Description: "Update own messages" },
  { Name: "messages.delete.own", Description: "Delete own messages" },
  { Name: "messages.delete",     Description: "Delete any message" },

  // ── Orders ──────────────────────────────────────────────────────────────────
  { Name: "orders.read.own",     Description: "Read own order by ID" },
  { Name: "orders.read.all.own", Description: "Read all own orders" },
  { Name: "orders.read",         Description: "Read any order by ID" },
  { Name: "orders.read.all",     Description: "Read all orders" },
  { Name: "orders.update",       Description: "Update any order" },

  // ── Order Statuses ──────────────────────────────────────────────────────────
  { Name: "order_statuses.read",   Description: "Read order statuses" },
  { Name: "order_statuses.update", Description: "Update an order status" },

  // ── Products ────────────────────────────────────────────────────────────────
  { Name: "products.create",   Description: "Create a product" },
  { Name: "products.read",     Description: "Read a product by ID" },
  { Name: "products.read.all", Description: "Read all products" },
  { Name: "products.update",   Description: "Update a product" },
  { Name: "products.delete",   Description: "Delete a product" },

  // ── Categories ──────────────────────────────────────────────────────────────
  { Name: "categories.create",   Description: "Create a category" },
  { Name: "categories.read",     Description: "Read a category by ID" },
  { Name: "categories.read.all", Description: "Read all categories" },
  { Name: "categories.update",   Description: "Update a category" },
  { Name: "categories.delete",   Description: "Delete a category" },

  // ── Subcategories ───────────────────────────────────────────────────────────
  { Name: "subcategories.create",   Description: "Create a subcategory" },
  { Name: "subcategories.read",     Description: "Read a subcategory by ID" },
  { Name: "subcategories.read.all", Description: "Read all subcategories" },
  { Name: "subcategories.update",   Description: "Update a subcategory" },
  { Name: "subcategories.delete",   Description: "Delete a subcategory" },

  // ── Collections ─────────────────────────────────────────────────────────────
  { Name: "collections.create",   Description: "Create a collection" },
  { Name: "collections.read",     Description: "Read a collection by ID" },
  { Name: "collections.read.all", Description: "Read all collections" },
  { Name: "collections.update",   Description: "Update a collection" },
  { Name: "collections.delete",   Description: "Delete a collection" },

  // ── Countries ───────────────────────────────────────────────────────────────
  { Name: "countries.create",   Description: "Create a country" },
  { Name: "countries.read",     Description: "Read a country by ID" },
  { Name: "countries.read.all", Description: "Read all countries" },
  { Name: "countries.update",   Description: "Update a country" },
  { Name: "countries.delete",   Description: "Delete a country" },

  // ── Cities ──────────────────────────────────────────────────────────────────
  { Name: "cities.read",     Description: "Read a city by ID" },
  { Name: "cities.read.all", Description: "Read all cities" },

  // ── Payments ────────────────────────────────────────────────────────────────
  { Name: "payments.create",   Description: "Create a payment" },
  { Name: "payments.read",     Description: "Read a payment by ID" },
  { Name: "payments.read.all", Description: "Read all payments" },
  { Name: "payments.update",   Description: "Update a payment" },

  // ── Payment Methods ─────────────────────────────────────────────────────────
  { Name: "payment_methods.read", Description: "Read payment methods" },

  // ── Admins (Super Admin only) ───────────────────────────────────────────────
  { Name: "admins.create",   Description: "Create an admin account" },
  { Name: "admins.read",     Description: "Read an admin by ID" },
  { Name: "admins.read.all", Description: "Read all admins" },
  { Name: "admins.update",   Description: "Update an admin account" },
  { Name: "admins.delete",   Description: "Delete an admin account" },

  // ── Roles (Super Admin only) ────────────────────────────────────────────────
  { Name: "roles.create",   Description: "Create a role" },
  { Name: "roles.read",     Description: "Read a role by ID" },
  { Name: "roles.read.all", Description: "Read all roles" },
  { Name: "roles.update",   Description: "Update a role" },
  { Name: "roles.delete",   Description: "Delete a role" },

  // ── Permissions (Super Admin only) ──────────────────────────────────────────
  { Name: "permissions.create",   Description: "Create a permission" },
  { Name: "permissions.read",     Description: "Read a permission by ID" },
  { Name: "permissions.read.all", Description: "Read all permissions" },
  { Name: "permissions.update",   Description: "Update a permission" },
  { Name: "permissions.delete",   Description: "Delete a permission" },

  // ── Wildcard (Super Admin only) ─────────────────────────────────────────────
  { Name: "*", Description: "Full unrestricted access — all operations" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. ROLE DEFINITIONS  (permission name arrays — exact matches to above)
// ─────────────────────────────────────────────────────────────────────────────
const ROLES = [

  // ── 1. User ──────────────────────────────────────────────────────────────────
  {
    Name: "User",
    Description: "Regular authenticated customer",
    permissions: [
      // Addresses
      "addresses.create.own",
      "addresses.read.own",
      "addresses.read.all.own",
      "addresses.update.own",
      "addresses.delete.own",
      // Carts
      "carts.create.own",
      "carts.read.own",
      "carts.update.own",
      "carts.delete.own",
      // Profile
      "profile.read.own",
      "profile.read",
      "profile.update.own",
      "profile.delete.own",
      "profile.create.own",
      // Messages
      "messages.create",
      "messages.read.own",
      "messages.read",
      "messages.read.all",
      "messages.update.own",
      "messages.delete.own",
      // Orders
      "orders.read.own",
      "orders.read.all.own",
      // Order Statuses
      "order_statuses.read",
      // Products
      "products.read",
      "products.read.all",
      // Categories
      "categories.read",
      "categories.read.all",
      // Subcategories
      "subcategories.read",
      "subcategories.read.all",
      // Collections
      "collections.read",
      "collections.read.all",
      // Countries
      "countries.read",
      "countries.read.all",
      // Cities
      "cities.read",
      "cities.read.all",
      // Payments
      "payments.create",
      "payments.read",
      // Payment Methods
      "payment_methods.read",
    ],
  },

  // ── 2. Super Admin ────────────────────────────────────────────────────────────
  {
    Name: "Super Admin",
    Description: "Unrestricted system-wide access including role & permission management",
    permissions: [
      // Admins
      "admins.create",
      "admins.read",
      "admins.read.all",
      "admins.update",
      "admins.delete",
      // Roles
      "roles.create",
      "roles.read",
      "roles.read.all",
      "roles.update",
      "roles.delete",
      // Permissions
      "permissions.create",
      "permissions.read",
      "permissions.read.all",
      "permissions.update",
      "permissions.delete",
      // Wildcard
      "*",
    ],
  },

  // ── 3. Admin ──────────────────────────────────────────────────────────────────
  {
    Name: "Admin",
    Description: "Full administrative access across store operations",
    permissions: [
      // Orders
      "orders.read.all",
      "orders.read",
      "orders.update",
      // Carts
      "carts.read.all",
      "carts.read",
      // Products
      "products.create",
      "products.read",
      "products.read.all",
      "products.update",
      "products.delete",
      // Categories
      "categories.create",
      "categories.read",
      "categories.read.all",
      "categories.update",
      "categories.delete",
      // Subcategories
      "subcategories.create",
      "subcategories.read",
      "subcategories.read.all",
      "subcategories.update",
      "subcategories.delete",
      // Collections
      "collections.create",
      "collections.read",
      "collections.read.all",
      "collections.update",
      "collections.delete",
      // Users
      "users.read",
      "users.read.all",
      "users.delete",
      // Payments
      "payments.read",
      "payments.read.all",
      "payments.update",
      // Countries
      "countries.create",
      "countries.read",
      "countries.read.all",
      "countries.update",
      "countries.delete",
      // Messages
      "messages.read.all",
      "messages.read",
      "messages.delete",
    ],
  },

  // ── 4. Product Manager ────────────────────────────────────────────────────────
  {
    Name: "Product Manager",
    Description: "Manages store products and reads catalog details",
    permissions: [
      // Products
      "products.create",
      "products.read",
      "products.read.all",
      "products.update",
      "products.delete",
      // Categories
      "categories.read",
      "categories.read.all",
      // Subcategories
      "subcategories.read",
      "subcategories.read.all",
      // Collections
      "collections.read",
      "collections.read.all",
    ],
  },

  // ── 5. Category Manager ───────────────────────────────────────────────────────
  {
    Name: "Category Manager",
    Description: "Manages store categories",
    permissions: [
      "categories.create",
      "categories.read",
      "categories.read.all",
      "categories.update",
      "categories.delete",
    ],
  },

  // ── 6. Subcategory Manager ────────────────────────────────────────────────────
  {
    Name: "Subcategory Manager",
    Description: "Manages store subcategories",
    permissions: [
      "subcategories.create",
      "subcategories.read",
      "subcategories.read.all",
      "subcategories.update",
      "subcategories.delete",
      "categories.read",
      "categories.read.all",
    ],
  },

  // ── 7. Collection Manager ─────────────────────────────────────────────────────
  {
    Name: "Collection Manager",
    Description: "Manages store collections",
    permissions: [
      "collections.create",
      "collections.read",
      "collections.read.all",
      "collections.update",
      "collections.delete",
    ],
  },

  // ── 8. Customer Support ───────────────────────────────────────────────────────
  {
    Name: "Customer Support",
    Description: "Handles customer support requests, messages, orders and accounts",
    permissions: [
      "messages.read",
      "messages.read.all",
      "messages.delete",
      "users.read",
      "users.read.all",
      "orders.read",
      "orders.read.all",
      "order_statuses.read",
      "profile.read",
      "carts.read",
      "carts.read.all",
    ],
  },

  // ── 9. Order Manager ──────────────────────────────────────────────────────────
  {
    Name: "Order Manager",
    Description: "Manages orders and order statuses",
    permissions: [
      "orders.read",
      "orders.read.all",
      "orders.update",
      "order_statuses.read",
      "order_statuses.update",
    ],
  },

  // ── 10. Finance Manager ───────────────────────────────────────────────────────
  {
    Name: "Finance Manager",
    Description: "Manages payments, payment methods and views orders",
    permissions: [
      "payments.read",
      "payments.read.all",
      "payments.update",
      "payment_methods.read",
      "orders.read",
      "orders.read.all",
    ],
  },

  // ── 11. Data Analyst ──────────────────────────────────────────────────────────
  {
    Name: "Data Analyst",
    Description: "Reads and analyzes store catalog, order, user and payment statistics",
    permissions: [
      "products.read",
      "products.read.all",
      "categories.read",
      "categories.read.all",
      "subcategories.read",
      "subcategories.read.all",
      "collections.read",
      "collections.read.all",
      "orders.read",
      "orders.read.all",
      "users.read",
      "users.read.all",
      "payments.read",
      "payments.read.all",
    ],
  },

  // ── 12. HR Manager ────────────────────────────────────────────────────────────
  {
    Name: "HR Manager",
    Description: "Manages administrative users and views roles",
    permissions: [
      "admins.create",
      "admins.read",
      "admins.read.all",
      "admins.update",
      "admins.delete",
      "roles.read",
      "roles.read.all",
    ],
  },

  // ── 13. Marketing Manager ─────────────────────────────────────────────────────
  {
    Name: "Marketing Manager",
    Description: "Manages store collections and views products and categories",
    permissions: [
      "collections.create",
      "collections.read",
      "collections.read.all",
      "collections.update",
      "collections.delete",
      "products.read",
      "products.read.all",
      "products.update",
      "categories.read",
      "categories.read.all",
      "categories.update",
      "subcategories.read",
      "subcategories.read.all",
      "subcategories.update",
    ],
  },
];

const rolePermissions = {};
ROLES.forEach(r => {
  rolePermissions[r.Name] = r.permissions;
});
const roleNames = ROLES.map(r => r.Name);

const PostalCodes = [
  11234, 11235, 11236, 11237, 11238, 11239, 11240, 11241, 11242, 11243, 11244,
  11245, 11246, 11247, 11248, 11249, 11250, 11251, 11252, 11253, 11254, 11255,
  11256, 11257, 11258, 11259, 11260, 11261, 11262, 11263, 11264, 11265, 11266,
  11267, 11268, 11269, 11270, 11271, 11272, 11273, 11274, 11275, 11276, 11277,
  11278, 11279, 11280, 11281, 11282, 11283, 11284, 11285, 11286, 11287, 11288,
  11289, 11290, 11291, 11292, 11293, 11294, 11295, 11296, 11297, 11298, 11299,
  11300, 11301, 11302, 11303, 11304, 11305, 11306, 11307, 11308, 11309, 11310,
  11311, 11312, 11313, 11314, 11315, 11316, 11317, 11318, 11319, 11320, 11321,
  11322, 11323, 11324, 11325, 11326, 11327, 11328, 11329, 11330, 11331, 11332,
  11333, 11334, 11335, 11336, 11337, 11338, 11339, 11340, 11341, 11342, 11343,
  11344, 11345, 11346, 11347, 11348, 11349, 11350, 11351, 11352, 11353, 11354,
  11355, 11356, 11357, 11358, 11359, 11360, 11361, 11362, 11363, 11364, 11365,
  11366, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11374, 11375, 11376,
  11377, 11378, 11379, 11380, 11381, 11382, 11383, 11384, 11385, 11386, 11387,
  11388, 11389, 11390, 11391, 11392, 11393, 11394, 11395, 11396, 11397, 11398,
  11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409,
  11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420,
  11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431,
  11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442,
  11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453,
  11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464,
  11465, 11466, 11467, 11468,
];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const seed = async () => {
  try {
    console.log("Connecting to MongoDB via URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB successfully.\n");

    const models = [
      UserModel,
      AdminModel,
      RoleModel,
      PermissionModel,
      CategoryModel,
      SubcategoryModel,
      CollectionModel,
      ProductModel,
      CountryModel,
      CityModel,
      AddressModel,
      OrderStatusModel,
      PaymentMethodModel,
      PaymentStatusModel,
      OrderModel,
      PaymentModel,
      ReviewModel,
      CartModel,
      ImageModel,
      OtpVerificationModel,
      RefreshTokenModel,
      TableTranslationModel,
    ];

    console.log("Clearing all collections...");
    await Promise.all(models.map((m) => m.deleteMany({})));
    try {
      await TableTranslationModel.collection.dropIndexes();
    } catch (e) {
      // collection or index might not exist yet, safe to ignore
    }
    console.log("All collections cleared.\n");

    const bootstrapId = new mongoose.Types.ObjectId();

    // ── 1. IMAGES (200) ───────────────────────────────────────────────────
    console.log("Seeding Images...");
    const imagesDocs = [];
    for (let i = 0; i < 200; i++) {
      imagesDocs.push({
        Path: `https://picsum.photos/seed/img${i}/800/800`,
        FileName: `img${i}.jpg`,
        Alt: `Alt text for image ${i}`,
        CreatedBy: bootstrapId,
      });
    }
    const images = await ImageModel.insertMany(imagesDocs);
    console.log(`Images: ${images.length}`);

    // ── 2. PERMISSIONS ────────────────────────────────────────────────────
    console.log("Seeding Permissions...");
    const allPermissions = new Set();
    Object.values(rolePermissions).forEach((perms) => {
      perms.forEach((p) => allPermissions.add(p));
    });
    // Add default permissions
    roleNames.forEach((role) => {
      allPermissions.add(`manage_${toSlug(role)}`);
    });
    allPermissions.add("view_reports");

    const permissionsDocs = Array.from(allPermissions).map((name) => ({
      Name: name,
      Description: `Permission to ${name.replace(/_/g, " ")}`,
      IsActivated: true,
      CreatedBy: bootstrapId,
    }));
    const permissions = await PermissionModel.insertMany(permissionsDocs);
    const permissionMap = {};
    permissions.forEach((p) => {
      permissionMap[p.Name] = p._id;
    });
    console.log(`Permissions: ${permissions.length}`);

    // ── 3. ROLES ────────────────────────────────────────────────────
    console.log(`Seeding Roles (${ROLES.length})...`);
    const rolesDocs = ROLES.map((roleDef) => {
      const permIds = roleDef.permissions
        .map((name) => permissionMap[name])
        .filter(Boolean);
      return {
        Name: roleDef.Name,
        Permissions: permIds,
        Description: roleDef.Description,
        IsActivated: true,
        CreatedBy: bootstrapId,
      };
    });
    const roles = await RoleModel.insertMany(rolesDocs);
    console.log(`Roles: ${roles.length}`);

    // ── 4. USERS (100) ────────────────────────────────────────────────────
    console.log("Seeding Users (100)...");
    const usersDocs = [];
    const usedEmails = new Set();
    for (let i = 0; i < 100; i++) {
      const fn = firstNames[i % firstNames.length];
      const ln = lastNames[i % lastNames.length];
      let email;
      let attempt = 0;
      do {
        email = `${fn.toLowerCase().replace(/[' ]/g, "")}.${ln.toLowerCase().replace(/[-' ]/g, "")}${attempt > 0 ? i + attempt : ""}@example.com`;
        attempt++;
      } while (usedEmails.has(email));
      usedEmails.add(email);
      usersDocs.push({
        FirstName: fn,
        LastName: ln,
        Email: email,
        HashedPassword: await utils.hashPassword(`UserPassword${i + 1}!`),
        Phone: `+9665${randInt(10000000, 99999999)}`,
        IsActivated: Math.random() > 0.08,
        CreatedBy: bootstrapId,
      });
    }
    // Ahmed Alghamdi customer user
    usersDocs.pop();
    usersDocs.push({
      FirstName: "Ahmed",
      LastName: "Alghamdi",
      Email: "ahmed@gmail.com",
      HashedPassword: await utils.hashPassword("Aahmed*1313461379"),
      Phone: "+966501234567",
      IsActivated: true,
      CreatedBy: bootstrapId,
    });
    const users = await UserModel.insertMany(usersDocs);
    console.log(`Users: ${users.length}`);

    const adminUserId = users[0]._id;

    // ── 5. ADMINS (10) ────────────────────────────────────────────────────
    console.log("Seeding Admins (10)...");
    const adminsDocs = [];
    const superAdminRole = roles.find(r => r.Name === "Super Admin");
    const nonUserRoles = roles.filter(r => r.Name !== "User");

    // Super admin Ahmed Alghamdi
    adminsDocs.push({
      FirstName: "Ahmed",
      LastName: "Alghamdi",
      Email: "[EMAIL_ADDRESS]",
      Phone: "+966501234567",
      UserName: "SuperAdmin",
      HashedPassword: await utils.hashPassword("Aahmed*1313461379"),
      RoleID: superAdminRole ? superAdminRole._id : roles[0]._id,
      IsActivated: true,
      CreatedBy: adminUserId,
    });
    for (let i = 1; i < 10; i++) {
      const fn = firstNames[(i + 50) % firstNames.length];
      const ln = lastNames[(i + 50) % lastNames.length];
      adminsDocs.push({
        FirstName: fn,
        LastName: ln,
        Email: `admin_${i}.${fn.toLowerCase()}@example.com`,
        Phone: `+9665${randInt(10000000, 99999999)}`,
        UserName: `admin_${i}`,
        HashedPassword: await utils.hashPassword(`AdminPassword${i}!`),
        RoleID: nonUserRoles[i % nonUserRoles.length]._id,
        IsActivated: true,
        CreatedBy: adminUserId,
      });
    }
    const admins = await AdminModel.insertMany(adminsDocs);
    const adminRecord = admins[0];
    console.log(`Admins: ${admins.length}`);

    // ── 6. COUNTRIES ────────────────────────────────────────────────
    console.log(`Seeding Countries (${countryData.length})...`);
    const countriesDocs = countryData.map(([name, currency, baseSlug]) => ({
      Name: name,
      CurrencySymbol: currency,
      Slug: baseSlug,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const countries = await CountryModel.insertMany(countriesDocs);
    console.log(`Countries: ${countries.length}`);

    const countryMap = {};
    countries.forEach((c) => {
      countryMap[c.Name] = c._id;
    });

    // ── 8. CITIES ───────────────────────────────────────────────────
    console.log(`Seeding Cities (${cityData.length})...`);
    const citiesDocs = cityData.map(([cityName, countryName]) => {
      const countryId = countryMap[countryName];
      return {
        Name: cityName,
        CountryID: countryId || countries[0]._id,
        IsActivated: true,
        CreatedBy: adminRecord._id,
      };
    });
    const cities = await CityModel.insertMany(citiesDocs);
    console.log(`Cities: ${cities.length}`);

    // ── 9. CATEGORIES ───────────────────────────────────────────────
    console.log(`Seeding Categories (${categoryNames.length})...`);
    const categoriesDocs = categoryNames.map((name) => ({
      Name: name,
      Slug: toSlug(name),
      Description: `Browse our ${name} selection`,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const categories = await CategoryModel.insertMany(categoriesDocs);
    console.log(`Categories: ${categories.length}`);

    // ── 10. SUBCATEGORIES ────────────────────────────────────────────
    console.log(`Seeding Subcategories (${subcategoryData.length})...`);
    const subcategoriesDocs = subcategoryData.map(([subName, catName]) => {
      const cat = categories.find((c) => c.Name === catName);
      return {
        Name: subName,
        CategoryID: cat ? cat._id : categories[0]._id,
        Description: `Explore ${subName} products`,
        Slug: toSlug(subName),
        IsActivated: true,
        CreatedBy: adminRecord._id,
      };
    });
    const subcategories = await SubcategoryModel.insertMany(subcategoriesDocs);
    console.log(`Subcategories: ${subcategories.length}`);

    // ── 11. COLLECTIONS ──────────────────────────────────────────────
    console.log(`Seeding Collections (${collectionSlugs.length})...`);
    const collectionsDocs = collectionSlugs.map(([name, baseSlug, desc]) => ({
      Name: name,
      Slug: baseSlug,
      Description: desc,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const collections = await CollectionModel.insertMany(collectionsDocs);
    console.log(`Collections: ${collections.length}`);

    // ── 12. ORDER STATUSES ──────────────────────────────────────────
    console.log(`Seeding OrderStatuses (${orderStatusNames.length})...`);
    const orderStatusesDocs = orderStatusNames.map((name) => ({
      Name: name,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const orderStatuses = await OrderStatusModel.insertMany(orderStatusesDocs);
    console.log(`OrderStatuses: ${orderStatuses.length}`);

    // ── 13. PAYMENT METHODS ─────────────────────────────────────────
    console.log(`Seeding PaymentMethods (${paymentMethodNames.length})...`);
    const paymentMethodsDocs = paymentMethodNames.map((name) => ({
      Name: name,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const paymentMethods =
      await PaymentMethodModel.insertMany(paymentMethodsDocs);
    console.log(`PaymentMethods: ${paymentMethods.length}`);

    // ── 14. PAYMENT STATUSES ────────────────────────────────────────
    console.log(`Seeding PaymentStatuses (${paymentStatusNames.length})...`);
    const paymentStatusesDocs = paymentStatusNames.map((name) => ({
      Name: name,
      IsActivated: true,
      CreatedBy: adminRecord._id,
    }));
    const paymentStatuses =
      await PaymentStatusModel.insertMany(paymentStatusesDocs);
    console.log(`PaymentStatuses: ${paymentStatuses.length}`);

    // ── 15. PRODUCTS ────────────────────────────────────────────────
    console.log(`Seeding Products (${productNames.length})...`);
    const productsDocs = productNames.map((name, i) => {
      const subCat = subcategories[i % subcategories.length];
      const catId = subCat.CategoryID;
      const subCatIds = [subCat._id];
      return {
        _id: new mongoose.Types.ObjectId(),
        Name: name,
        Description: `Premium quality ${name}. Built for performance and durability.`,
        Price: randInt(15, 9999),
        Stock: randInt(5, 150),
        CategoryIDs: [catId],
        SubCategoryIDs: subCatIds,
        CollectionIDs: [collections[i % collections.length]._id],
        IsActivated: true,
        CreatedBy: adminRecord._id,
        ImageIDs: [
          images[i % images.length]._id,
          images[(i + 100) % images.length]._id,
        ],
      };
    });
    const products = await ProductModel.insertMany(productsDocs);
    console.log(`Products: ${products.length}`);

    // ── 16. ADDRESSES (100) ───────────────────────────────────────────────
    console.log("Seeding Addresses (100)...");
    // Build a country → cities lookup so each address has a city that belongs to its country
    const citiesByCountry = {};
    cities.forEach((city) => {
      const cId = city.CountryID.toString();
      if (!citiesByCountry[cId]) citiesByCountry[cId] = [];
      citiesByCountry[cId].push(city);
    });

    const addressesDocs = [];
    for (let i = 0; i < 100; i++) {
      const user = users[i % users.length];
      const country = countries[i % countries.length];
      const countryCities = citiesByCountry[country._id.toString()] || cities;
      const city = pick(countryCities);
      addressesDocs.push({
        UserID: user._id,
        CityID: city._id,
        CountryID: country._id,
        AddressLine1: `${randInt(10, 999)} ${pick(streetNames)}, Apt ${randInt(1, 99)}`,
        AddressLine2: `${randInt(10, 999)} ${pick(streetNames)}, Apt ${randInt(1, 99)}`,
        PostalCode: PostalCodes[i % PostalCodes.length].toString(),
        IsDefault: i % 2 === 0,
        CreatedBy: user._id,
      });
    }
    const addresses = await AddressModel.insertMany(addressesDocs);
    console.log(`Addresses: ${addresses.length}`);

    // ── 17. PAYMENTS (100) ────────────────────────────────────────────────
    console.log("Seeding Payments (100)...");
    const paymentsDocs = [];
    for (let i = 0; i < 100; i++) {
      const user = users[i % users.length];
      const country = countries[i % countries.length];
      paymentsDocs.push({
        UserID: user._id,
        Amount: products[i % products.length].Price * randInt(1, 4),
        PaymentMethodID: paymentMethods[i % paymentMethods.length]._id,
        PaymentStatusID: paymentStatuses[i % paymentStatuses.length]._id,
        CurrencySymbolID: country._id,
        CreatedBy: user._id,
      });
    }
    const payments = await PaymentModel.insertMany(paymentsDocs);
    console.log(`Payments: ${payments.length}`);

    // ── 18. ORDERS (100) ──────────────────────────────────────────────────
    console.log("Seeding Orders (100)...");
    const ordersDocs = [];
    for (let i = 0; i < 100; i++) {
      const user = users[i % users.length];
      const numItems = i < 10 ? 6 : 7; // 10 * 6 + 90 * 7 = 690 items. 690/100 = 6.90 avg
      const items = [];
      const selectedProductIndices = new Set();
      while (items.length < numItems) {
        const productIdx = randInt(0, products.length - 1);
        if (!selectedProductIndices.has(productIdx)) {
          selectedProductIndices.add(productIdx);
          items.push({
            ProductID: products[productIdx]._id,
            Quantity: randInt(1, 4),
          });
        }
      }
      
      ordersDocs.push({
        UserID: user._id,
        Items: items,
        AddressID: addresses[i % addresses.length]._id,
        PaymentID: payments[i]._id,
        OrderStatusID: orderStatuses[i % orderStatuses.length]._id,
        CreatedBy: user._id,
      });
    }
    const orders = await OrderModel.insertMany(ordersDocs);
    console.log(`Orders: ${orders.length}`);

    // ── 19. REVIEWS (100) ─────────────────────────────────────────────────
    console.log("Seeding Reviews (100)...");
    const reviewsDocs = [];
    for (let i = 0; i < 100; i++) {
      const rating = randInt(1, 5);
      const comments = reviewCommentsByRating[rating];
      reviewsDocs.push({
        UserID: users[i % users.length]._id,
        ProductID: products[i % products.length]._id,
        Rating: rating,
        Comment: pick(comments),
        CreatedBy: users[i % users.length]._id,
      });
    }
    const reviews = await ReviewModel.insertMany(reviewsDocs);
    console.log(`Reviews: ${reviews.length}`);

    // ── 20. CARTS (100) ───────────────────────────────────────────────────
    console.log("Seeding Carts (100)...");
    const cartsDocs = [];
    for (let i = 0; i < 100; i++) {
      const numItems = i < 50 ? 2 : 3; // 50 * 2 + 50 * 3 = 250 items. 250/100 = 2.50 avg
      const cartItems = [];
      const selectedProductIndices = new Set();

      while (
        cartItems.length < numItems &&
        selectedProductIndices.size < products.length
      ) {
        const productIdx = randInt(0, products.length - 1);
        if (!selectedProductIndices.has(productIdx)) {
          selectedProductIndices.add(productIdx);
          cartItems.push({
            ProductID: products[productIdx]._id,
            Quantity: randInt(1, 3),
          });
        }
      }

      let totalPrice = 0;
      for (const item of cartItems) {
        const prod = products.find(
          (p) => p._id.toString() === item.ProductID.toString()
        );
        if (prod) {
          totalPrice += prod.Price * item.Quantity;
        }
      }

      cartsDocs.push({
        UserID: users[i % users.length]._id,
        Products: cartItems,
        TotalPrice: totalPrice,
        CreatedBy: users[i % users.length]._id,
      });
    }
    const carts = await CartModel.insertMany(cartsDocs);
    console.log(`Carts: ${carts.length}`);

    // --- Translation Seeding Logic ---
    const countryArabicMap = {
      "Saudi Arabia": { Name: "السعودية", Currency: "ريال سعودي", CurrencySymbol: "ر.س" },
      "United Arab Emirates": { Name: "الإمارات العربية المتحدة", Currency: "درهم إماراتي", CurrencySymbol: "د.إ" },
      "Kuwait": { Name: "الكويت", Currency: "دينار كويتي", CurrencySymbol: "د.ك" },
      "Qatar": { Name: "قطر", Currency: "ريال قطري", CurrencySymbol: "ر.ق" },
      "Bahrain": { Name: "البحرين", Currency: "دينار بحريني", CurrencySymbol: "د.ب" },
      "Oman": { Name: "عمان", Currency: "ريال عماني", CurrencySymbol: "ر.ع" },
      "Egypt": { Name: "مصر", Currency: "جنيه مصري", CurrencySymbol: "ج.م" },
      "Jordan": { Name: "الأردن", Currency: "دينار أردني", CurrencySymbol: "د.أ" },
      "Iraq": { Name: "العراق", Currency: "دينار عراقي", CurrencySymbol: "ع.د" },
    };

    const categoryArabicMap = {
      "Electronics": { Name: "الإلكترونيات", Description: "تصفح مجموعتنا من الإلكترونيات" },
      "Clothing": { Name: "الملابس", Description: "تصفح مجموعتنا من الملابس" },
      "Home & Living": { Name: "المنزل والمعيشة", Description: "تصفح مجموعتنا من المنزل والمعيشة" },
      "Beauty & Personal Care": { Name: "الجمال والعناية الشخصية", Description: "تصفح مجموعتنا من الجمال والعناية الشخصية" },
      "Sports & Outdoors": { Name: "الرياضة والأنشطة الخارجية", Description: "تصفح مجموعتنا من الرياضة والأنشطة الخارجية" },
      "Books & Stationery": { Name: "الكتب والقرطاسية", Description: "تصفح مجموعتنا من الكتب والقرطاسية" },
      "Toys & Games": { Name: "الألعاب والترفيه", Description: "تصفح مجموعتنا من الألعاب والترفيه" },
      "Automotive": { Name: "السيارات", Description: "تصفح مجموعتنا من السيارات" },
      "Food & Grocery": { Name: "الأغذية والبقالة", Description: "تصفح مجموعتنا من الأغذية والبقالة" },
      "Health & Wellness": { Name: "الصحة والعافية", Description: "تصفح مجموعتنا من الصحة والعافية" },
    };

    const collectionArabicMap = {
      "New Arrivals": { Name: "وصلنا حديثًا", Description: "منتجات جديدة وصلت هذا الموسم" },
      "Best Sellers": { Name: "الأكثر مبيعًا", Description: "المنتجات الأكثر شعبية هذا الشهر" },
      "Hot Deals": { Name: "عروض ساخنة", Description: "منتجات مخفضة لفترة محدودة" },
      "Staff Picks": { Name: "اختيارات الموظفين", Description: "منسقة من قبل فريق الخبراء لدينا" },
      "Premium Range": { Name: "تشكيلة متميزة", Description: "منتجات فاخرة من الطراز الأول" },
      "Flash Sale": { Name: "تخفيضات فلاش", Description: "خصومات هائلة لمدة 24 ساعة" },
      "Trending Now": { Name: "رائج الآن", Description: "ما يشتريه الجميع" },
      "Clearance": { Name: "تصفية", Description: "خصم يصل إلى 70% على منتجات مختارة" },
      "Seasonal Favorites": { Name: "المفضلة الموسمية", Description: "مختارة خصيصًا للموسم الحالي" },
      "Bundle Deals": { Name: "عروض الحزم", Description: "وفر أكثر عند الشراء معًا" },
    };

    const roleArabicMap = {
      "User": { Name: "مستخدم", Description: "عميل مسجل عادي" },
      "Super Admin": { Name: "مدير عام", Description: "وصول غير مقيد للنظام بما في ذلك إدارة الأدوار والصلاحيات" },
      "Admin": { Name: "مدير", Description: "وصول إداري كامل لعمليات المتجر" },
      "Product Manager": { Name: "مدير المنتجات", Description: "يدير منتجات المتجر ويطلع على تفاصيل الكتالوج" },
      "Category Manager": { Name: "مدير التصنيفات", Description: "يدير تصنيفات المتجر" },
      "Subcategory Manager": { Name: "مدير التصنيفات الفرعية", Description: "يدير التصنيفات الفرعية للمتجر" },
      "Collection Manager": { Name: "مدير المجموعات", Description: "يدير مجموعات المتجر" },
      "Customer Support": { Name: "الدعم الفني", Description: "يتعامل مع طلبات دعم العملاء والرسائل والطلبات والحسابات" },
      "Order Manager": { Name: "مدير الطلبات", Description: "يدير الطلبات وحالات الطلبات" },
      "Finance Manager": { Name: "المدير المالي", Description: "يدير المدفوعات ووسائل الدفع ويستعرض الطلبات" },
      "Data Analyst": { Name: "محلل البيانات", Description: "يقرأ ويحلل إحصائيات كتالوج المتجر والطلبات والمستخدمين والمدفوعات" },
      "HR Manager": { Name: "مدير الموارد البشرية", Description: "يدير المستخدمين الإداريين ويستعرض الأدوار" },
      "Marketing Manager": { Name: "مدير التسويق", Description: "يدير مجموعات المتجر ويستعرض المنتجات والتصنيفات" },
    };

    const orderStatusArabicMap = {
      "Pending": "قيد الانتظار",
      "Confirmed": "مؤكد",
      "Processing": "قيد المعالجة",
      "Packed": "تم التعبئة",
      "Ready for Pickup": "جاهز للاستلام",
      "Shipped": "تم الشحن",
      "Out for Delivery": "خارج للتوصيل",
      "Delivered": "تم التوصيل",
      "Cancelled": "ملغى",
      "Return Requested": "تم طلب الإرجاع",
      "Returned": "مرتجع",
      "Refund Processing": "جاري معالجة الاسترداد",
      "Refunded": "تم الاسترداد",
      "On Hold": "موقوف مؤقتًا",
      "Partially Shipped": "مشحون جزئيًا",
      "Partially Delivered": "مستلم جزئيًا",
      "Awaiting Payment": "في انتظار الدفع",
      "Payment Failed": "فشل الدفع",
      "Exchange Requested": "تم طلب الاستبدال",
      "Exchanged": "تم الاستبدال",
      "Lost in Transit": "مفقود في الشحن",
      "Delayed": "متأخر",
      "Attempted Delivery": "محاولة توصيل",
      "Customs Held": "محتجز في الجمارك",
      "Dispatched": "تم الإرسال",
      "Picked Up": "تم الاستلام من العميل",
      "Backordered": "طلب مؤجل",
      "Pre-order": "طلب مسبق",
      "Reserved": "محجوز",
      "Awaiting Stock": "في انتظار توفر المخزون",
    };

    const paymentMethodArabicMap = {
      "Cash on Delivery": "الدفع عند الاستلام",
      "Visa": "فيزا",
      "Mastercard": "ماستركارد",
      "Apple Pay": "أبل باي",
      "Google Pay": "جوجل باي",
      "STC Pay": "إس تي سي باي",
      "Mada": "مدى",
      "American Express": "أمريكان إكسبريس",
      "PayPal": "بايبال",
      "Bank Transfer": "تحويل بنكي",
      "Tabby": "تابي",
      "Tamara": "تمارا",
      "Sadad": "سداد",
      "Fawry": "فوري",
      "Cryptocurrency": "عملة رقمية",
      "Gift Card": "بطاقة هدية",
      "Store Credit": "رصيد المتجر",
      "Western Union": "ويسترن يونيون",
      "Samsung Pay": "سامسونج باي",
      "Huawei Pay": "هواوي باي",
    };

    const paymentStatusArabicMap = {
      "Pending": "قيد الانتظار",
      "Completed": "مكتمل",
      "Failed": "فاشل",
      "Refunded": "مسترد",
      "Partially Refunded": "مسترد جزئيًا",
      "Chargeback": "طلب استرداد القيمة",
      "Disputed": "متنازع عليه",
      "Authorized": "مفوض",
      "Voided": "ملغى",
      "Expired": "منتهي الصلاحية",
      "Processing": "قيد المعالجة",
      "On Hold": "موقوف مؤقتًا",
      "Reversed": "معكوس",
      "Cancelled": "ملغى",
      "Awaiting Confirmation": "في انتظار التأكيد",
      "Settled": "تمت التسوية",
      "Under Review": "تحت المراجعة",
      "Fraud Suspected": "اشتباه في احتيال",
      "Declined": "مرفوض",
      "Retry Requested": "طلب إعادة المحاولة",
    };

    const subcategoryArabicMap = {
      "Smartphones": { Name: "الهواتف الذكية", Description: "استكشف الهواتف الذكية" },
      "Laptops & PCs": { Name: "أجهزة الكمبيوتر المحمولة والمكتبية", Description: "استكشف أجهزة الكمبيوتر المحمولة والمكتبية" },
      "Audio & Headphones": { Name: "الصوتيات وسماعات الرأس", Description: "استكشف الصوتيات وسماعات الرأس" },
      "Cameras & Drones": { Name: "الكاميرات والطائرات بدون طيار", Description: "استكشف الكاميرات والطائرات بدون طيار" },
      "Gaming": { Name: "الألعاب", Description: "استكشف الألعاب" },
      "Wearables": { Name: "الأجهزة القابلة للارتداء", Description: "استكشف الأجهزة القابلة للارتداء" },
      "Smart Home": { Name: "المنزل الذكي", Description: "استكشف المنزل الذكي" },
      "Networking": { Name: "الشبكات", Description: "استكشف الشبكات" },
      "Storage & Memory": { Name: "التخزين والذاكرة", Description: "استكشف التخزين والذاكرة" },
      "Accessories": { Name: "الملحقات", Description: "استكشف الملحقات" },
      "Men's Shirts": { Name: "قمصان رجالية", Description: "استكشف قمصان رجالية" },
      "Women's Dresses": { Name: "فساتين نسائية", Description: "استكشف فساتين نسائية" },
      "Footwear": { Name: "الأحذية", Description: "استكشف الأحذية" },
      "Outerwear": { Name: "الملابس الخارجية", Description: "استكشف الملابس الخارجية" },
      "Activewear": { Name: "الملابس الرياضية", Description: "استكشف الملابس الرياضية" },
      "Underwear & Socks": { Name: "الملابس الداخلية والجوارب", Description: "استكشف الملابس الداخلية والجوارب" },
      "Bags & Wallets": { Name: "الحقائب والمحافظ", Description: "استكشف الحقائب والمحافظ" },
      "Watches & Jewellery": { Name: "الساعات والمجوهرات", Description: "استكشف الساعات والمجوهرات" },
      "Swimwear": { Name: "ملابس السباحة", Description: "استكشف ملابس السباحة" },
      "Kids Clothing": { Name: "ملابس الأطفال", Description: "استكشف ملابس الأطفال" },
      "Kitchen Appliances": { Name: "أجهزة المطبخ", Description: "استكشف أجهزة المطبخ" },
      "Cookware": { Name: "أدوات الطبخ", Description: "استكشف أدوات الطبخ" },
      "Bedding": { Name: "المفارش والأسرة", Description: "استكشف المفارش والأسرة" },
      "Furniture": { Name: "الأثاث", Description: "استكشف الأثاث" },
      "Cleaning & Laundry": { Name: "التنظيف والغسيل", Description: "استكشف التنظيف والغسيل" },
      "Lighting": { Name: "الإضاءة", Description: "استكشف الإضاءة" },
      "Bathroom": { Name: "مستلزمات الحمام", Description: "استكشف مستلزمات الحمام" },
      "Garden & Outdoor": { Name: "الحدائق والأنشطة الخارجية", Description: "استكشف الحدائق والأنشطة الخارجية" },
      "Storage & Organisation": { Name: "التخزين والتنظيم", Description: "استكشف التخزين والتنظيم" },
      "Home Decor": { Name: "ديكور المنزل", Description: "استكشف ديكور المنزل" },
      "Skincare": { Name: "العناية بالبشرة", Description: "استكشف العناية بالبشرة" },
      "Makeup": { Name: "المكياج", Description: "استكشف المكياج" },
      "Hair Care": { Name: "العناية بالشعر", Description: "استكشف العناية بالشعر" },
      "Body Care": { Name: "العناية بالجسم", Description: "استكشف العناية بالجسم" },
      "Fragrance": { Name: "العطور", Description: "استكشف العطور" },
      "Men's Grooming": { Name: "العناية بالرجل", Description: "استكشف العناية بالرجل" },
      "Oral Care": { Name: "العناية بالفم", Description: "استكشف العناية بالفم" },
      "Nail Care": { Name: "العناية بالأظافر", Description: "استكشف العناية بالأظافر" },
      "Eye Care": { Name: "العناية بالعين", Description: "استكشف العناية بالعين" },
      "Natural & Organic Beauty": { Name: "الجمال الطبيعي والعضوي", Description: "استكشف الجمال الطبيعي والعضوي" },
      "Running": { Name: "الجري", Description: "استكشف الجري" },
      "Yoga & Pilates": { Name: "اليوغا والبيstatus", Description: "استكشف اليوغا والبيلاتس" },
      "Cycling": { Name: "ركوب الدراجات", Description: "استكشف ركوب الدراجات" },
      "Swimming": { Name: "السباحة", Description: "استكشف السباحة" },
      "Team Sports": { Name: "الرياضات الجماعية", Description: "استكشف الرياضات الجماعية" },
      "Racket Sports": { Name: "رياضات المضرب", Description: "استكشف رياضات المضرب" },
      "Golf": { Name: "الغولف", Description: "استكشف الغولف" },
      "Hiking & Camping": { Name: "المشي لمسافات طويلة والتخييم", Description: "استكشف المشي لمسافات طويلة والتخييم" },
      "Gym & Fitness": { Name: "الصالة الرياضية واللياقة البدنية", Description: "استكشف الصالة الرياضية واللياقة البدنية" },
      "Water Sports": { Name: "الرياضات المائية", Description: "استكشف الرياضات المائية" },
      "Fiction": { Name: "الروايات والقصص", Description: "استكشف الروايات والقصص" },
      "Non-Fiction": { Name: "الكتب الواقعية", Description: "استكشف الكتب الواقعية" },
      "Children's Books": { Name: "كتب الأطفال", Description: "استكشف كتب الأطفال" },
      "Notebooks & Journals": { Name: "الدفاتر والمذكرات", Description: "استكشف الدفاتر والمذكرات" },
      "Art Supplies": { Name: "أدوات الفنون", Description: "استكشف أدوات الفنون" },
      "Office Supplies": { Name: "المستلزمات المكتبية", Description: "استكشف المستلزمات المكتبية" },
      "Educational": { Name: "التعليمية", Description: "استكشف الكتب التعليمية" },
      "Manga & Comics": { Name: "المانجا والكوميكس", Description: "استكشف المانجا والكوميكس" },
      "Calendars & Planners": { Name: "التقويم والمنظمات", Description: "استكشف التقويم والمنظمات" },
      "Gift Cards": { Name: "بطاقات الهدايا", Description: "استكشف بطاقات الهدايا" },
      "Action Figures": { Name: "مجسمات الشخصيات", Description: "استكشف مجسمات الشخصيات" },
      "Board Games": { Name: "الألعاب اللوحية", Description: "استكشف الألعاب اللوحية" },
      "Building Blocks": { Name: "مكعبات البناء", Description: "استكشف مكعبات البناء" },
      "Dolls & Plush": { Name: "الدمى والألعاب المحشوة", Description: "استكشف الدمى والألعاب المحشوة" },
      "Outdoor Play": { Name: "الألعاب الخارجية", Description: "استكشف الألعاب الخارجية" },
      "Puzzles": { Name: "الألغاز", Description: "استكشف الألغاز" },
      "Remote Control Toys": { Name: "ألعاب التحكم عن بعد", Description: "استكشف ألعاب التحكم عن بعد" },
      "Educational Toys": { Name: "الألعاب التعليمية", Description: "استكشف الألعاب التعليمية" },
      "Video Games": { Name: "ألعاب الفيديو", Description: "استكشف ألعاب الفيديو" },
      "Card Games": { Name: "ألعاب الورق", Description: "استكشف ألعاب الورق" },
      "Car Care": { Name: "العناية بالسيارة", Description: "استكشف مواد العناية بالسيارة" },
      "Car Electronics": { Name: "إلكترونيات السيارة", Description: "استكشف إلكترونيات السيارة" },
      "Car Accessories": { Name: "إكسسوارات السيارة", Description: "استكشف إكسسوارات السيارة" },
      "Tyres & Wheels": { Name: "الإطارات والعجلات", Description: "استكشف الإطارات والعجلات" },
      "Engine & Performance": { Name: "المحرك والأداء", Description: "استكشف المحرك والأداء" },
      "Tools & Equipment": { Name: "الأدوات والمعدات", Description: "استكشف الأدوات والمعدات" },
      "Motorcycle Gear": { Name: "معدات الدراجات النارية", Description: "استكشف معدات الدراجات النارية" },
      "Car Safety": { Name: "سلامة السيارة", Description: "استكشف وسائل سلامة السيارة" },
      "Interior Accessories": { Name: "الإكسسوارات الداخلية", Description: "استكشف الإكسسوارات الداخلية" },
      "Exterior Accessories": { Name: "الإكسسوارات الخارجية", Description: "استكشف الإكسسوارات الخارجية" },
      "Snacks & Confectionery": { Name: "المنتجات الخفيفة والحلويات", Description: "استكشف المنتجات الخفيفة والحلويات" },
      "Beverages": { Name: "المشروبات", Description: "استكشف المشروبات" },
      "Dairy & Eggs": { Name: "الألبان والبيض", Description: "استكشف الألبان والبيض" },
      "Grains & Pasta": { Name: "الحبوب والمعكرونة", Description: "استكشف الحبوب والمعكرونة" },
      "Oils & Condiments": { Name: "الزيوت والبهارات", Description: "استكشف الزيوت والبهارات" },
      "Organic Food": { Name: "الأغذية العضوية", Description: "استكشف الأغذية العضوية" },
      "Frozen Foods": { Name: "الأغذية المجمدة", Description: "استكشف الأغذية المجمدة" },
      "Bakery": { Name: "المخبوزات", Description: "استكشف المخبوزات" },
      "Meat & Poultry": { Name: "اللحوم والدواجن", Description: "استكشف اللحوم والدواجن" },
      "International Foods": { Name: "الأغذية العالمية", Description: "استكشف الأغذية العالمية" },
      "Vitamins & Supplements": { Name: "الفيتامينات والمكملات الغذائية", Description: "استكشف الفيتامينات والمكملات الغذائية" },
      "Medical Devices": { Name: "الأجهزة الطبية", Description: "استكشف الأجهزة الطبية" },
      "First Aid": { Name: "الإسعافات الأولية", Description: "استكشف الإسعافات الأولية" },
      "Weight Management": { Name: "التحكم بالوزن", Description: "استكشف منتجات التحكم بالوزن" },
      "Protein & Fitness Nutrition": { Name: "البروتين والتغذية الرياضية", Description: "استكشف البروتين والتغذية الرياضية" },
      "Feminine Care": { Name: "العناية النسائية", Description: "استكشف منتجات العناية النسائية" },
      "Mobility & Daily Living": { Name: "الحركة والحياة اليومية", Description: "استكشف مستلزمات الحركة والحياة اليومية" },
      "Mental Wellness": { Name: "الصحة النفسية", Description: "استكشف الصحة النفسية" },
      "Sleep Aids": { Name: "مساعدات النوم", Description: "استكشف مساعدات النوم" },
    };

    const translatePermissionDescription = (desc) => {
      if (desc === "Full unrestricted access — all operations") return "وصول كامل غير مقيد للنظام — جميع العمليات";
      if (desc.startsWith("Permission to manage ")) {
        const roleName = desc.replace("Permission to manage ", "");
        return `صلاحية إدارة ${roleName}`;
      }
      if (desc.startsWith("Permission to ")) {
        const action = desc.replace("Permission to ", "");
        return `صلاحية لـ ${action}`;
      }
      
      const dict = {
        "Create own addresses": "إنشاء العناوين الخاصة",
        "Read own address by ID": "قراءة عنوان خاص بالمعرف",
        "Read all own addresses": "قراءة جميع العناوين الخاصة",
        "Update own address": "تحديث عنوان خاص",
        "Delete own address": "حذف عنوان خاص",
        
        "Create own cart": "إنشاء سلة تسوق خاصة",
        "Read own cart": "قراءة سلة تسوق خاصة",
        "Read a cart by ID (admin)": "قراءة سلة تسوق بالمعرف (مشرف)",
        "Read all carts": "قراءة جميع سلال التسوق",
        "Update own cart": "تحديث سلة تسوق خاصة",
        "Delete own cart": "حذف سلة تسوق خاصة",
        
        "Create own profile": "إنشاء ملف شخصي خاص",
        "Read own profile": "قراءة ملف شخصي خاص",
        "Read any user's profile": "قراءة أي ملف شخصي لمستخدم",
        "Update own profile": "تحديث ملف شخصي خاص",
        "Delete own profile": "حذف ملف شخصي خاص",
        
        "Read a user by ID": "قراءة مستخدم بالمعرف",
        "Read all users": "قراءة جميع المستخدمين",
        "Delete a user": "حذف مستخدم",
        
        "Create a message": "إنشاء رسالة",
        "Read own messages": "قراءة الرسائل الخاصة",
        "Read a specific message": "قراءة رسالة محددة",
        "Read all messages": "قراءة جميع الرسائل",
        "Update own messages": "تحديث الرسائل الخاصة",
        "Delete own messages": "حذف الرسائل الخاصة",
        "Delete any message": "حذف أي رسالة",
        
        "Read own order by ID": "قراءة طلب خاص بالمعرف",
        "Read all own orders": "قراءة جميع الطلبات الخاصة",
        "Read any order by ID": "قراءة أي طلب بالمعرف",
        "Read all orders": "قراءة جميع الطلبات",
        "Update any order": "تحديث أي طلب",
        
        "Read order statuses": "قراءة حالات الطلبات",
        "Update an order status": "تحديث حالة الطلب",
        
        "Create a product": "إنشاء منتج",
        "Read a product by ID": "قراءة منتج بالمعرف",
        "Read all products": "قراءة جميع المنتجات",
        "Update a product": "تحديث منتج",
        "Delete a product": "حذف منتج",
        
        "Create a category": "إنشاء تصنيف",
        "Read a category by ID": "قراءة تصنيف بالمعرف",
        "Read all categories": "قراءة جميع التصنيفات",
        "Update a category": "تحديث تصنيف",
        "Delete a category": "حذف تصنيف",
        
        "Create a subcategory": "إنشاء تصنيف فرعي",
        "Read a subcategory by ID": "قراءة تصنيف فرعي بالمعرف",
        "Read all subcategories": "قراءة جميع التصنيفات الفرعية",
        "Update a subcategory": "تحديث تصنيف فرعي",
        "Delete a subcategory": "حذف تصنيف فرعي",
        
        "Create a collection": "إنشاء مجموعة",
        "Read a collection by ID": "قراءة مجموعة بالمعرف",
        "Read all collections": "قراءة جميع المجموعات",
        "Update a collection": "تحديث مجموعة",
        "Delete a collection": "حذف مجموعة",
        
        "Create a country": "إنشاء دولة",
        "Read a country by ID": "قراءة دولة بالمعرف",
        "Read all countries": "قراءة جميع الدول",
        "Update a country": "تحديث دولة",
        "Delete a country": "حذف دولة",
        
        "Read a city by ID": "قراءة مدينة بالمعرف",
        "Read all cities": "قراءة جميع المدن",
        
        "Create a payment": "إنشاء دفعة",
        "Read a payment by ID": "قراءة دفعة بالمعرف",
        "Read all payments": "قراءة جميع المدفوعات",
        "Update a payment": "تحديث دفعة",
        
        "Read payment methods": "قراءة وسائل الدفع",
        
        "Create an admin account": "إنشاء حساب مشرف",
        "Read an admin by ID": "قراءة مشرف بالمعرف",
        "Read all admins": "قراءة جميع المشرفين",
        "Update an admin account": "تحديث حساب مشرف",
        "Delete an admin account": "حذف حساب مشرف",
        
        "Create a role": "إنشاء دور",
        "Read a role by ID": "قراءة دور بالمعرف",
        "Read all roles": "قراءة جميع الأدوار",
        "Update a role": "تحديث دور",
        "Delete a role": "حذف دور",
        
        "Create a permission": "إنشاء صلاحية",
        "Read a permission by ID": "قراءة صلاحية بالمعرف",
        "Read all permissions": "قراءة جميع الصلاحيات",
        "Update a permission": "تحديث صلاحية",
        "Delete a permission": "حذف صلاحية",
      };

      return dict[desc] || desc;
    };

    const translations = [];

    // 1. Countries
    countries.forEach(country => {
      const arMap = countryArabicMap[country.Name];
      if (arMap) {
        translations.push(
          AddTranslation({
            entityType: "Country",
            entityId: country._id,
            fieldName: "Name",
            languageCode: "ar",
            value: arMap.Name
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Country",
            entityId: country._id,
            fieldName: "Currency",
            languageCode: "ar",
            value: arMap.Currency
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Country",
            entityId: country._id,
            fieldName: "CurrencySymbol",
            languageCode: "ar",
            value: arMap.CurrencySymbol
          })
        );
      }
    });

    // 2. Cities
    cities.forEach(city => {
      translations.push(
        AddTranslation({
          entityType: "City",
          entityId: city._id,
          fieldName: "Name",
          languageCode: "ar",
          value: city.Name
        })
      );
    });

    // 3. Categories
    categories.forEach(category => {
      const arMap = categoryArabicMap[category.Name];
      if (arMap) {
        translations.push(
          AddTranslation({
            entityType: "Category",
            entityId: category._id,
            fieldName: "Name",
            languageCode: "ar",
            value: arMap.Name
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Category",
            entityId: category._id,
            fieldName: "Description",
            languageCode: "ar",
            value: arMap.Description
          })
        );
      }
    });

    // 4. Subcategories
    subcategories.forEach(sub => {
      const arMap = subcategoryArabicMap[sub.Name];
      if (arMap) {
        translations.push(
          AddTranslation({
            entityType: "Subcategory",
            entityId: sub._id,
            fieldName: "Name",
            languageCode: "ar",
            value: arMap.Name
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Subcategory",
            entityId: sub._id,
            fieldName: "Description",
            languageCode: "ar",
            value: arMap.Description
          })
        );
      }
    });

    // 5. Collections
    collections.forEach(col => {
      const arMap = collectionArabicMap[col.Name];
      if (arMap) {
        translations.push(
          AddTranslation({
            entityType: "Collection",
            entityId: col._id,
            fieldName: "Name",
            languageCode: "ar",
            value: arMap.Name
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Collection",
            entityId: col._id,
            fieldName: "Description",
            languageCode: "ar",
            value: arMap.Description
          })
        );
      }
    });

    // 6. Roles
    roles.forEach(role => {
      const arMap = roleArabicMap[role.Name];
      if (arMap) {
        translations.push(
          AddTranslation({
            entityType: "Role",
            entityId: role._id,
            fieldName: "Name",
            languageCode: "ar",
            value: arMap.Name
          })
        );
        translations.push(
          AddTranslation({
            entityType: "Role",
            entityId: role._id,
            fieldName: "Description",
            languageCode: "ar",
            value: arMap.Description
          })
        );
      }
    });

    // 7. Permissions
    permissions.forEach(perm => {
      const translatedDesc = translatePermissionDescription(perm.Description || `Permission to manage ${perm.Name}`);
      translations.push(
        AddTranslation({
          entityType: "Permission",
          entityId: perm._id,
          fieldName: "Description",
          languageCode: "ar",
          value: translatedDesc
        })
      );
    });

    // 8. OrderStatuses
    orderStatuses.forEach(status => {
      const arValue = orderStatusArabicMap[status.Name] || status.Name;
      translations.push(
        AddTranslation({
          entityType: "OrderStatus",
          entityId: status._id,
          fieldName: "Name",
          languageCode: "ar",
          value: arValue
        })
      );
    });

    // 9. PaymentMethods
    paymentMethods.forEach(method => {
      const arValue = paymentMethodArabicMap[method.Name] || method.Name;
      translations.push(
        AddTranslation({
          entityType: "PaymentMethod",
          entityId: method._id,
          fieldName: "Name",
          languageCode: "ar",
          value: arValue
        })
      );
    });

    // 10. PaymentStatuses
    paymentStatuses.forEach(status => {
      const arValue = paymentStatusArabicMap[status.Name] || status.Name;
      translations.push(
        AddTranslation({
          entityType: "PaymentStatus",
          entityId: status._id,
          fieldName: "Name",
          languageCode: "ar",
          value: arValue
        })
      );
    });

    console.log("Seeding TableTranslations...");
    await TableTranslationModel.insertMany(translations);
    console.log(`TableTranslations: ${translations.length}`);

    console.log("\n=== SEEDING COMPLETE ===");
    console.table({
      Users: users.length,
      Admins: admins.length,
      Products: products.length,
      Orders: orders.length,
      Carts: carts.length,
      Reviews: reviews.length,
      Payments: payments.length,
      Translations: translations.length,
    });
    console.log("========================\n");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seed();
