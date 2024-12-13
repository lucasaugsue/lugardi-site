import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import NavigationBar from "@/components/NavigationBar";
import NewsAndPoll from "@/components/NewsAndPoll";
import PromotionalMessage from "@/components/PromotionalMessage";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <PromotionalMessage></PromotionalMessage>
      <MainBanner></MainBanner>
      <NewsAndPoll></NewsAndPoll>
      <Footer></Footer>
    </div>
  );
}
