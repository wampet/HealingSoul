import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import WhyUs from "./pages/WhyUs";
import Faqs from "./pages/Faqs";
import AboutUsView from "./pages/AboutUsView";
import Careers from "./pages/Careers";
import BlogView from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import SkilledNursing from "./pages/SkilledNursing";
import Rehabilitation from "./pages/Rehabilitation";
import CompanionCare from "./pages/CompanionCare";
import SocialServices from "./pages/SocialServices";
import SpecializedCare from "./pages/SpecializedCare";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 100,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about/why-healing-soul" element={<WhyUs />} />
            <Route path="resources/faq" element={<Faqs />} />
            <Route path="about/company-overview" element={<AboutUsView />} />
            <Route path="careers" element={<Careers />} />
            <Route path="resources/blog" element={<BlogView />} />
            <Route path="services/skilled-nursing" element={<SkilledNursing />} />
            <Route path="services/rehabilitation" element={<Rehabilitation />} />
            <Route path="services/companion-care" element={<CompanionCare />} />
            <Route path="services/social-services" element={<SocialServices />} />
            <Route path="services/specialized-care" element={<SpecializedCare />} />

            <Route element={<Resources />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
