import { Suspense } from "react";
import router from "./app/router";
import { RouterProvider } from "react-router";
import { QueryClientProvider , QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <Suspense fallback="Loading...">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
    </>
  )
}

export default App
