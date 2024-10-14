





import TextAndImage from "@/components/custom/Content/TextAndImage/TextAndImage";
import DestinationsCards from "@/components/custom/Content/DestinationsCards/DestinationsCards";
import Testimonials from '@/components/custom/Testimonials/Testimonials'
import HeroSlickSlider from '@/components/custom/Global/HeroHomeSlider/HeroHomeSlider'
import ItinerarySlider from '@/app/destinations/[slug]/ItinerarySlider'
import CleanTestmnlSlickSlider from "@/components/custom/Global/CleanTestmnlSlickSlider/CleanTestmnlSlickSlider";
import MainLoginSignupSection from "@/components/custom/MainLoginSignupSection/MainLoginSignupSection";

export default async function Home() {



  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/itineraries?acf_format=standard&_fields=id,slug,title,acf`, { cache: 'no-store' }); 
  const itineraries = await req.json(); 


  return (
    <main>

    
    <MainLoginSignupSection/>







   









    </main>
  );
}
