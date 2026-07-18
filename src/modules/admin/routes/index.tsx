import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stub module: no admin product yet. Platform is the live site.
const AdminPlaceholder = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-3 bg-forest-800 text-white">
    <div className="text-[12px] font-bold tracking-[0.3em] text-gold-300">
      ZENITH HOMES
    </div>
    <div className="text-2xl font-semibold">Admin console coming soon.</div>
  </main>
);

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<AdminPlaceholder />} />
    </Routes>
  </BrowserRouter>
);
