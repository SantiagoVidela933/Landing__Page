import { Header } from './components/ui/header/Header'
import { HomeSection } from './components/sections/mainSection/HomeSection'
import { ContentSection } from './components/sections/contentSection/ContentSection'
import './styles/LandingPage.css'


export const LandingPage = () => {
  return (
    <div className='LandingPage__container'>
      <Header/>
      <HomeSection/>
      <ContentSection/>
    </div>
  )
}
