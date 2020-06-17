new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title  = section.querySelector('h1');

  
    const tl = new TimelineMax({delay: 0.5});
    tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

  
   
    if(destination.index === 0) {
        const logo = document.querySelectorAll('h2');
        const dva = document.querySelectorAll('h3');
          tl.fromTo(logo,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});
          tl.fromTo(dva,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

     
    }


    if(destination.index === 1) {
        const chairs = document.querySelectorAll('.chair');
        const dex = document.querySelector('.dex');

        tl.fromTo(chairs, 0.7, {x: "100%"}, {x: "-25%"})
          .fromTo(dex,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});
     
    }
    if(destination.index === 2) {
        const text = document.querySelectorAll('.text');
        const slike = document.querySelector('.slika');

        tl.fromTo(slike, 0.7, {x: "-180%"}, {x: "-50%"})
          .fromTo(text,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});
     
    }
 

   }

})







