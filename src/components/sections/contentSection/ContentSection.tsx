import './ContentSection.css'

export const ContentSection = () => {
  return (
    <div className='ContentSection__container'>
      <div className='ContentSection__container-box'>
        <div className='ContentSection__container-box-info'>
            <h2 className='ContentSection__container-box-info-h2'>Fire up your performance with powerful analytics.</h2>
            <p className='ContentSection__container-box-info-p'>Objective assessment and coaching to guide training and measure proficiency.</p>
            <button className='ContentSection__container-box-info-btn'>Learn more about assessment and analytics</button>
        </div>
        <div className='ContentSection__container-box-animation'>
            <div className='ContentSection__container-box-animation-video'></div>
            <div className='ContentSection__container-box-animation-video'></div>
        </div>
      </div>
    </div>
  )
}
