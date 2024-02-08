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
// import PageNotFound from "./pages/PageNotFound";
import SkilledNursing from "./pages/SkilledNursing";

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
            <Route path="Contact" element={<ContactUs />} />
            <Route path="whyUs" element={<WhyUs />} />
            <Route path="faq" element={<Faqs />} />
            <Route path="about" element={<AboutUsView />} />
            <Route path="Careers" element={<Careers />} />
            <Route path="blog" element={<BlogView />} />
            <Route path="skilledNursing" element={<SkilledNursing />} />

            <Route element={<Resources />}></Route>
          </Route>
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
