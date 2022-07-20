import './ContentSection.css'

export const ContentSection = () => {
  return (
    <div className='ContentSection__container'>
      <div className='ContentSection__container-box'>
        <div className='ContentSection__box-info'>
            <h2 className='info-h2'>Fire up your performance with powerful analytics.</h2>
            <p className='info-p'>Objective assessment and coaching to guide training and measure proficiency.</p>
            <button className='info-btn'>Learn more about assessment and analytics</button>
        </div>
        <div className='container__box-div'>
            <div className='box-div'></div>
        </div>
      </div>
    </div>
  )
}
