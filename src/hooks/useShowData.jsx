import { useQuery } from "@tanstack/react-query";

const useShowData = () => {
  const {
    isPending,
    error,
    data: shows,
  } = useQuery({
    queryKey: ["shows"],
    queryFn: () =>
      fetch("https://api.tvmaze.com/search/shows?q=all").then((res) =>
        res.json()
      ),
  });

  return [shows, isPending, error];
};

export default useShowData;
