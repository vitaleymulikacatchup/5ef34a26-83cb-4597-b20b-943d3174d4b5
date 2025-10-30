"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, Clock, Flame, Heart, Leaf, MapPin, Pizza } from "lucide-react";

const assetMap = [
  // Add any asset mappings here if needed
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Tony's Pizzeria"
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Hey there guys"
          description="YO "
          tag="Est. 1985"
          tagIcon={Pizza}
          buttons={[
            { text: "Order Now", href: "product" },
            { text: "View Menu", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/5953495/pexels-photo-5953495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Delicious wood-fired pizza with fresh ingredients"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Since 1985, Tony's Pizzeria has been serving authentic Italian pizzas using traditional recipes passed down through generations.",
            "We use only the finest imported ingredients and our signature wood-fired oven to create pizzas that transport you straight to Italy with every bite."
          ]}
          buttons={[
            { text: "See Our Kitchen", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Pizzas"
          description="Our most popular wood-fired pizzas, crafted with premium ingredients"
          tag="Chef's Special"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Margherita Classic",
              price: "$18",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Margherita pizza with basil and mozzarella"
            },
            {
              id: "2",
              name: "Pepperoni Supreme",
              price: "$22",
              imageSrc: "https://images.pexels.com/photos/27583261/pexels-photo-27583261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic pepperoni pizza with melted cheese"
            },
            {
              id: "3",
              name: "Quattro Stagioni",
              price: "$26",
              imageSrc: "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Four seasons pizza with varied toppings"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose Tony's"
          description="What makes our pizzeria special and keeps customers coming back"
          features={[
            {
              title: "Wood-Fired Oven",
              description: "Traditional Italian wood-fired oven for authentic taste and perfect crust",
              icon: Flame
            },
            {
              title: "Fresh Ingredients",
              description: "Daily fresh dough, imported Italian tomatoes, and premium mozzarella",
              icon: Leaf
            },
            {
              title: "Family Recipe",
              description: "Authentic recipes passed down through three generations of Italian chefs",
              icon: Heart
            },
            {
              title: "Fast Service",
              description: "Quick preparation and delivery while maintaining exceptional quality",
              icon: Clock
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from pizza lovers who keep coming back"
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Blogger",
              company: "Taste Explorer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12935085/pexels-photo-12935085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Local Resident",
              company: "Downtown",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "3",
              name: "The Johnson Family",
              role: "Regular Customers",
              company: "Since 1995",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5638675/pexels-photo-5638675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "The Johnson family enjoying pizza"
            },
            {
              id: "4",
              name: "Sarah & Mike",
              role: "Date Night",
              company: "Couple",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6437328/pexels-photo-6437328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young couple on pizza date"
            },
            {
              id: "5",
              name: "David Chen",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6914457/pexels-photo-6914457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business person enjoying lunch"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Come Taste the Difference"
          description="Join our family for an authentic Italian dining experience. Subscribe to our newsletter for special offers and new menu updates."
          imageSrc="https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Traditional wood-fired pizza oven"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you'll receive exclusive offers and pizza updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Pizza Menu", href: "product" },
                { label: "Appetizers", href: "product" },
                { label: "Beverages", href: "product" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "123 Pizza Street", href: "#" },
                { label: "(555) 123-PIZZA", href: "tel:5551234" },
                { label: "Order Online", href: "product" }
              ]
            }
          ]}
          copyrightText="© 2025 | Tony's Pizzeria"
        />
      </div>
    </ThemeProvider>
  );
}