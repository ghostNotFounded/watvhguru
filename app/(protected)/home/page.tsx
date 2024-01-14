// Utility functions
import { fetchData } from "@/lib/FetchData";

// Importing components
import CarouselWrapper from "@/components/home/CarouselWrapper";
import Hero from "@/components/home/Hero";

const Home = async () => {
  const popular = await fetchData("popular");
  const topRated = await fetchData("top_rated");
  const nowPlaying = await fetchData("now_playing");
  const upcoming = await fetchData("upcoming");

  return (
    <main className="space-y-20">
      <Hero movies={popular?.results} />

      <CarouselWrapper movies={topRated?.results} title="Top Rated" />
      <CarouselWrapper movies={nowPlaying?.results} title="Now Playing" />
      <CarouselWrapper movies={upcoming?.results} title="Upcoming" />
    </main>
  );
};

export default Home;
