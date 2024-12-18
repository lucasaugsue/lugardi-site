import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import NavigationBar from "@/components/NavigationBar";
import NewsAndPoll from "@/components/NewsAndPoll";
import CarouselCharacters from "@/components/CarouselCharacters";
import PromotionalMessage from "@/components/PromotionalMessage";
import FestivePortrait from "@/components/FestivePortrait";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <PromotionalMessage></PromotionalMessage>
      <MainBanner></MainBanner>
      <NewsAndPoll></NewsAndPoll>
      <FestivePortrait/>
      <CarouselCharacters />
      <Footer></Footer>
    </div>
  );
}
