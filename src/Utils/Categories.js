import {
  Book,
  BookOpen,
  Coffee,
  Gamepad2,
  Heart,
  Lightbulb,
  Rocket,
  Utensils,
} from "lucide-react";
export const categories = [
  { name: "Fiction", icon: BookOpen, color: "bg-blue-500" },
  { name: "Non-Fiction", icon: Lightbulb, color: "bg-green-500" },
  { name: "Science Fiction", icon: Rocket, color: "bg-purple-500" },
  { name: "Romance", icon: Heart, color: "bg-pink-500" },
  { name: "Cookbooks", icon: Utensils, color: "bg-yellow-500" },
  { name: "Self-Help", icon: Coffee, color: "bg-orange-500" },
  { name: "Psychological-Thriller", icon: Gamepad2, color: "bg-red-500" },
  { name: "Biography", icon: Book, color: "bg-indigo-500" },
];
