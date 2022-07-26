import { Header } from './components/ui/header/Header';
import { HeaderSection } from './components/sections/HeaderSection/HeaderSection';
import { HomeSection } from './components/sections/HomeSection/HomeSection';
import { PhoneSection } from './components/sections/PhoneSection/PhoneSection';
import { HeadsetSection } from './components/sections/HeadsetSection/HeadsetSection';
import { ComputerSection } from './components/sections/ComputerSection/ComputerSection';
import { Footer } from './components/ui/footer/Footer';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './styles/LandingPage.css'

export const LandingPage = () => {
  return (
    <div className='LandingPage__container'>
      <Header/>
      <HeaderSection/>
      <HomeSection/>
      <PhoneSection/>
      <HeadsetSection/>
      <ComputerSection/>
      <Footer/>
    </div>
  )
}
