
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewsDetail from "./pages/NewsDetail";
import WhatIsCTF from "./pages/WhatIsCTF";
import CTFKongress from "./pages/CTFKongress";
import AllNews from "./pages/AllNews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/what-is-ctf" element={<WhatIsCTF />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ctf-kongress" element={<CTFKongress />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<AllNews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
