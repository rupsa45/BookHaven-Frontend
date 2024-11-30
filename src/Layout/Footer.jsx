
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FEF3E2] text-black py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">BookHaven</h3>
          <p className="text-gray-700 mb-4">
            Your ultimate destination for literary exploration and discovery.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-200 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-200 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Browse Books</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">New Releases</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-200 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Shipping Information</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <span>support@bookhaven.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-3" />
              <span>123 Book Street, Literature City</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t bg-[#FEF3E2] mt-8 pt-6 text-center">
        <p className="text-gray-700">
          © {new Date().getFullYear()} BookHaven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;