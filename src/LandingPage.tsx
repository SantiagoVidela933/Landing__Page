import { Header } from './components/ui/header/Header';
import { HomeSection } from './components/sections/HomeSection/HomeSection';
import { PhoneSection } from './components/sections/PhoneSection/PhoneSection';
import { HeadsetSection } from './components/sections/HeadsetSection/HeadsetSection';

import './styles/LandingPage.css'

export const LandingPage = () => {
  return (
    <div className='LandingPage__container'>
      <Header/>
      <HomeSection/>
      <PhoneSection/>
      <HeadsetSection/>
    </div>
  )
}
