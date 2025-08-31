import { useRef } from 'react';
import Navbar from '../Components/components/Navbar';
import Cardio from '../Components/components/Cardio';
import LandingMain from '../Components/section/LandingMain';
import OnlineShopMain from '../Components/section/OnlineShopMain';
import CorporateMain from '../Components/section/CorporateMain';
import MultipageSiteMain from '../Components/section/MultipageSiteMain';
import RestaurantSiteMain from '../Components/section/RestaurantSiteMain';
import NewsBlogMain from '../Components/section/NewsBlogMain';
import DesignerSiteMain from '../Components/section/DesignerSiteMain';
import CryptoProjectMain from '../Components/section/CryptoProjectMain';
import ResponsiveDemo from '../Components/components/ResponsiveDemo';

export default function WebDevelopment() {
  const componentsRef = useRef({
    ResponsiveDemo: useRef(null),
    DesignerSiteMain: useRef(null),
    LandingMain: useRef(null),
    OnlineShopMain: useRef(null),
    CorporateMain: useRef(null),
    MultipageSiteMain: useRef(null),
    RestaurantSiteMain: useRef(null),
    NewsBlogMain: useRef(null),
    CryptoProjectMain: useRef(null)
  });

  const idToRefKey = {
    landing: 'LandingMain',
    shop: 'OnlineShopMain',
    corporate: 'CorporateMain',
    multi: 'MultipageSiteMain',
    restaurant: 'RestaurantSiteMain',
    blog: 'NewsBlogMain',
    designer: 'DesignerSiteMain',
    media: 'ResponsiveDemo',
    courses: 'CryptoProjectMain',
  };

  const scrollToComponent = (componentName) => {
    const refKey = idToRefKey[componentName] || componentName;
    const ref = componentsRef.current[refKey];
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 dark:text-white overflow-x-hidden">
      <Navbar />
      <Cardio scrollToComponent={scrollToComponent} />

      {/* Секция 1 - ResponsiveDemo */}
      <div ref={componentsRef.current.ResponsiveDemo}>
        <ResponsiveDemo />
      </div>

      {/* Секция 2 - DesignerSiteMain */}
      <div ref={componentsRef.current.DesignerSiteMain}>
        <DesignerSiteMain />
      </div>

      {/* Секция 3 - LandingMain */}
      <div ref={componentsRef.current.LandingMain}>
        <LandingMain />
      </div>

      {/* Секция 4 - OnlineShopMain */}
      <div ref={componentsRef.current.OnlineShopMain}>
        <OnlineShopMain />
      </div>

      {/* Секция 5 - CorporateMain */}
      <div ref={componentsRef.current.CorporateMain}>
        <CorporateMain />
      </div>

      {/* Секция 6 - MultipageSiteMain */}
      <div ref={componentsRef.current.MultipageSiteMain}>
        <MultipageSiteMain />
      </div>

      {/* Секция 7 - RestaurantSiteMain */}
      <div ref={componentsRef.current.RestaurantSiteMain}>
        <RestaurantSiteMain />
      </div>

      {/* Секция 8 - NewsBlogMain */}
      <div ref={componentsRef.current.NewsBlogMain}>
        <NewsBlogMain />
      </div>

      {/* Секция 9 - CryptoProjectMain */}
      <div ref={componentsRef.current.CryptoProjectMain}>
        <CryptoProjectMain />
      </div>
    </div>
  );
}