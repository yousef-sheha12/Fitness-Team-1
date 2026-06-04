import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/useAuthStore";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => {
  const { initialize, loading } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (loading) return null;

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
export default App;
