import { Header } from './components/ui/header/Header'
import { HomeSection } from './components/sections/HomeSection/HomeSection'
import { ContentSection } from './components/sections/ContentSection/ContentSection'
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
