import './ContentSection.css'

export const ContentSection = () => {
  return (
    <div className='ContentSection__container'>
        <div className='ContentSection__container-info'>
            <h2 className='container__info-h2'>Fire up your performance with powerful analytics.</h2>
            <p className='container__info-p'>Objective assessment and coaching to guide training and measure proficiency.</p>
            {/* <a href="#" className='container__info-a'>Learn more about assessment and analytics</a> */}
            <button className='container__info-btn'>Learn more about assessment and analytics</button>
        </div>
        <div className='ContentSection__container-carrousel'></div>
    </div>
  )
}
