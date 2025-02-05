import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const queryClient= new QueryClient();
  return (
  
    <QueryClientProvider client={queryClient}>
    <Stack screenOptions={{
      headerShown:false 
      }}>
         </Stack>
      </QueryClientProvider>
   
  );
}
