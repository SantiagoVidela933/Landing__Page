
export const scrollVideo = () => {

    // const intro = document.querySelector('.intro');
    // const video = document.querySelector('intro-video');

    // //ScrollMagic
    // const controller = new ScrollMagic.Controller();

    // //Escena que va a ser animada (video)
    // let scene = new ScrollMagic.Scene({
    //     duration: 4000,
    //     triggerElement: intro,
    //     triggerHook: 0
    // })
    // .addIndicators()
    // .setPin(intro)
    // .addTo(controller);

    // //Animacion del video
    // let accelomaunt = 0.1;
    // let scrollpos = 0;
    // let delay = 0;


    // scene.on('update', e => {
    //     scrollpos = e.scrollPos / 1000;
    // })

    // setInterval(()=>{ 
    //     delay += (scrollpos - delay) * accelomaunt;
    //     console.log(scrollpos, delay);


    //     video.currentTime = delay;
    // }, 33.3);

  return (
    <div className="ScrollVideo__container">
        <div className="seccionEjemplo">
            <h1 className="seccionEjemplo-h1">Animacion 3D</h1>
        </div>
        <div className="container__intro">
            <h1 className="intro-h1"> Scrollbar Animation</h1>
            <video className="intro-video" src="../../assets/videos/"></video>
        </div> 
    </div>
  )
}
