import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Index from "./pages/Index";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<PlaceholderPage title="Our Solutions" description="Discover our comprehensive technology solutions designed for modern enterprises." />} />
          <Route path="/services" element={<PlaceholderPage title="Our Services" description="Explore our comprehensive range of IT solutions and services." />} />
          <Route path="/products" element={<PlaceholderPage title="Our Products" description="Discover our cutting-edge technology products and solutions." />} />
          <Route path="/testimonials" element={<PlaceholderPage title="Client Testimonials" description="See what our clients say about Radian-Tech's innovative solutions." />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" description="Learn more about our company, mission, and team." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team for consultations and support." />} />

          {/* Service-specific routes */}
          <Route path="/services/ai-intelligence" element={<PlaceholderPage title="AI Intelligence" description="Revolutionary AI systems that learn, adapt, and optimize your business operations." />} />
          <Route path="/services/cloud-mastery" element={<PlaceholderPage title="Cloud Mastery" description="Next-generation cloud platforms that scale infinitely with bulletproof security." />} />
          <Route path="/services/digital-innovation" element={<PlaceholderPage title="Digital Innovation" description="Custom software solutions that transform ideas into powerful applications." />} />
          <Route path="/services/cyber-defense" element={<PlaceholderPage title="Cyber Defense" description="Military-grade security systems that protect your digital assets." />} />

          {/* Product-specific routes */}
          <Route path="/products/product-a" element={<PlaceholderPage title="Product A" description="Our flagship technology solution designed for enterprise customers." />} />
          <Route path="/products/product-b" element={<PlaceholderPage title="Product B" description="Advanced automation platform for streamlined business processes." />} />
          <Route path="/products/product-c" element={<PlaceholderPage title="Product C" description="Comprehensive analytics suite for data-driven decision making." />} />

          {/* Company routes */}
          <Route path="/about-us" element={<PlaceholderPage title="About Radian-Tech" description="Learn about our company, mission, and values." />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team of technology innovators." />} />
          <Route path="/tech-blog" element={<PlaceholderPage title="Tech Blog" description="Latest insights and trends in technology." />} />

          {/* Legal routes */}
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="Our commitment to protecting your privacy." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Terms and conditions for using our services." />} />
          <Route path="/security" element={<PlaceholderPage title="Security" description="Our security practices and certifications." />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
