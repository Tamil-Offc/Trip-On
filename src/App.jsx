
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TripContextProvider } from "./context/TripContext";

// Layout & Common Components
import Layout from "./components/Layout";
import LoadingSpinner from "./components/common/LoadingSpinner";

// Pages (Lazy loaded)
const HomePage = lazy(() => import("./pages/HomePage"));
const TripsPage = lazy(() => import("./pages/TripsPage"));
const TripDetailsPage = lazy(() => import("./pages/TripDetailsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <TripContextProvider>
          <BrowserRouter>
            <Layout>
              <AnimatePresence mode="wait">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trips" element={<TripsPage />} />
                    <Route path="/trips/:id" element={<TripDetailsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </Layout>
          </BrowserRouter>
        </TripContextProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
