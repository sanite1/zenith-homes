import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { PlatformRoutes } from "@/modules/platform/routes";
import { AppRoutes } from "@/modules/app/routes";
import { AdminRoutes } from "@/modules/admin/routes";
import { getModule } from "./lib/network/helpers/getModule";
import { queryClient } from "./lib/network/query/client";

function App() {
  const module = getModule();

  const renderModule = () => {
    switch (module) {
      case "platform":
        return <PlatformRoutes />;
      case "app":
        return <AppRoutes />;
      case "admin":
        return <AdminRoutes />;
      default:
        return <PlatformRoutes />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right" />
      {renderModule()}
    </QueryClientProvider>
  );
}

export default App;
