import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/Placeholder";
import FinanceUseCase from "./pages/FinanceUseCase";
import MarketingUseCase from "./pages/MarketingUseCase";
import DataScienceUseCase from "./pages/DataScienceUseCase";
import ScientificResearchUseCase from "./pages/ScientificResearchUseCase";
import EducationUseCase from "./pages/EducationUseCase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />

          {/* Use Case Routes */}
          <Route path="/use-cases/finance" element={<FinanceUseCase />} />
          <Route path="/use-cases/marketing" element={<MarketingUseCase />} />
          <Route path="/use-cases/data-science" element={<DataScienceUseCase />} />
          <Route path="/use-cases/scientific-research" element={<ScientificResearchUseCase />} />
          <Route path="/use-cases/education" element={<EducationUseCase />} />

          {/* Other Routes */}
          <Route path="/pricing" element={<PlaceholderPage title="Pricing" description="Flexible pricing plans for teams of all sizes. Coming soon!" />} />
          <Route path="/enterprise" element={<PlaceholderPage title="Enterprise" description="Enterprise-grade security, compliance, and support for your organization." />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" description="Stay up to date with the latest insights, tutorials, and announcements." />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team and help build the future of data analytics." />} />
          <Route path="/about" element={<PlaceholderPage title="About" description="Learn more about our mission and the team behind 10x." />} />
          <Route path="/integrations" element={<PlaceholderPage title="Integrations" description="Connect 10x with your favorite tools and data sources." />} />
          <Route path="/changelog" element={<PlaceholderPage title="Changelog" description="See what's new and what's coming next in 10x." />} />
          <Route path="/security" element={<PlaceholderPage title="Security" description="Learn about our enterprise-grade security and compliance standards." />} />
          <Route path="/github" element={<PlaceholderPage title="GitHub" description="Check out our open source projects and contribute to the community." />} />
          <Route path="/discord" element={<PlaceholderPage title="Discord" description="Join our community of data analysts and get help from experts." />} />
          <Route path="/twitter" element={<PlaceholderPage title="Twitter" description="Follow us for the latest updates and data analytics tips." />} />
          <Route path="/feedback" element={<PlaceholderPage title="Feedback" description="We'd love to hear your thoughts and suggestions for improving 10x." />} />
          <Route path="/documentation" element={<PlaceholderPage title="Documentation" description="Comprehensive guides and API documentation for 10x." />} />
          <Route path="/tutorials" element={<PlaceholderPage title="Tutorials" description="Step-by-step tutorials to help you master 10x." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
