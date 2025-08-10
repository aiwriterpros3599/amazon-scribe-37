
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import AmazonAffiliateGuide from "./pages/blog/AmazonAffiliateGuide";
import HowToStartAmazonAffiliateMarketing from "./pages/blog/HowToStartAmazonAffiliateMarketing";
import AmazonAffiliateCommissionRates2025 from "./pages/blog/AmazonAffiliateCommissionRates2025";
import BestAmazonAffiliateNiches2025 from "./pages/blog/BestAmazonAffiliateNiches2025";
import AIContentGenerationAffiliateMarketing2025 from "./pages/blog/AIContentGenerationAffiliateMarketing2025";
import AmazonAffiliateMarketing from "./pages/blog/category/AmazonAffiliateMarketing";
import AIContentCreation from "./pages/blog/category/AIContentCreation";
import NotFound from "./pages/NotFound";
import ExitIntentPopup from "./components/ExitIntentPopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/amazon-affiliate-marketing-beginners-guide-2025" element={<AmazonAffiliateGuide />} />
            <Route path="/blog/how-to-start-amazon-affiliate-marketing-2025" element={<HowToStartAmazonAffiliateMarketing />} />
            <Route path="/blog/amazon-affiliate-commission-rates-2025" element={<AmazonAffiliateCommissionRates2025 />} />
            <Route path="/blog/best-amazon-affiliate-niches-2025" element={<BestAmazonAffiliateNiches2025 />} />
            <Route path="/blog/ai-content-generation-affiliate-marketing-2025" element={<AIContentGenerationAffiliateMarketing2025 />} />
            <Route path="/blog/category/amazon-affiliate-marketing" element={<AmazonAffiliateMarketing />} />
            <Route path="/blog/category/ai-content-creation" element={<AIContentCreation />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ExitIntentPopup />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
