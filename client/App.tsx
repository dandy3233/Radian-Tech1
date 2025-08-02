import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LoadingPage } from "./components/ui/LoadingPage";
import { LoadingProvider, useLoading } from "./hooks/useLoading";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import AboutUs from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import Products from './pages/Products';
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<PlaceholderPage title="Our Solutions" description="Discover our comprehensive technology solutions designed for modern enterprises." />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<PlaceholderPage title="Client Testimonials" description="See what our clients say about Radian-Tech's innovative solutions." />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team of technology innovators." />} />
              <Route path="/tech-blog" element={<PlaceholderPage title="Tech Blog" description="Latest insights and trends in technology." />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="Our commitment to protecting your privacy." />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Terms and conditions for using our services." />} />
              <Route path="/security" element={<PlaceholderPage title="Security" description="Our security practices and certifications." />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
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