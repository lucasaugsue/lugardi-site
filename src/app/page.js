import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import NewsAndPoll from "@/components/NewsAndPoll";
import CarouselCharacters from "@/components/CarouselCharacters";
import FestivePortrait from "@/components/FestivePortrait";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <MainBanner></MainBanner>
      <NewsAndPoll></NewsAndPoll>
      <FestivePortrait/>
      <CarouselCharacters />
      <Footer></Footer>
    </div>
  );
}
