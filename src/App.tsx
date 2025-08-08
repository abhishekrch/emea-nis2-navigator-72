import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Countries from "./pages/Countries";
import Workflow from "./pages/Workflow";
import Roles from "./pages/Roles";
import Incidents from "./pages/Incidents";
import Training from "./pages/Training";
import Guidelines from "./pages/Guidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/training" element={<Training />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
