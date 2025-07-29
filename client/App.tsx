import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import { LoadingPage } from "./components/ui/LoadingPage";
import { LoadingProvider, useLoading } from "./hooks/useLoading";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Main App Content Component
const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingPage
            key="loading"
            onLoadingComplete={() => {
              // Loading will be handled by the provider
            }}
          />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<PlaceholderPage title="Our Solutions" description="Discover our comprehensive technology solutions designed for modern enterprises." />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<PlaceholderPage title="Our Products" description="Discover our cutting-edge technology products and solutions." />} />
            <Route path="/testimonials" element={<PlaceholderPage title="Client Testimonials" description="See what our clients say about Radian-Tech's innovative solutions." />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" description="Learn more about our company, mission, and team." />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team for consultations and support." />} />

            {/* Dynamic service detail route */}
            <Route path="/services/:id" element={<ServiceDetail />} />

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
        </>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingProvider initialLoading={true} autoHideAfter={3000}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LoadingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
