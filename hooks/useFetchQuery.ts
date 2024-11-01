import { useInfiniteQuery, UseInfiniteQueryResult, useQuery } from "@tanstack/react-query";

function wait(duration:number){
    return new Promise(resolve=>setTimeout(resolve,duration*1000));
}

const endpoint="https://pokeapi.co/api/v2/";
export function useFetchQuery(path:string){
    return useQuery({
        queryKey:[path],
        queryFn: async()=>{
            await wait(1);
            return fetch(endpoint+path).then(r=>r.json());
        }
    })
}


export function useInfiniteFetchQuery(path:string) {
  return useInfiniteQuery({
    queryKey: [path],
    initialPageParam: endpoint+path,
    queryFn: async ({ pageParam }) => {
        

      const response = await fetch(pageParam, {
        headers: {
          Accept: "application/json"
        }
      });
      return response.json();
    },
    getNextPageParam: (lastPage) => {
      // If there's a next URL in the response, use it for the next page
      return lastPage.next || undefined;
    }
  });
}