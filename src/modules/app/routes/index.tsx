import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stub module: the client portal has no content yet. Platform is the live site.
const AppPlaceholder = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-3 bg-forest-800 text-white">
    <div className="text-[12px] font-bold tracking-[0.3em] text-gold-300">
      ZENITH HOMES
    </div>
    <div className="text-2xl font-semibold">Client portal coming soon.</div>
  </main>
);

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<AppPlaceholder />} />
    </Routes>
  </BrowserRouter>
);
