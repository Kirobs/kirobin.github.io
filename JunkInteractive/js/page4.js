$(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

//===========================================================
//VIÑETA 1-
//===========================================================

    //PINNED! the background-------------------------------------------------------------
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0.2,
        duration: 1800})
    .setClassToggle('#s01-bg', 'pinned')
//.addIndicators({
//       name: 'pinning1',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
// })
    .addTo(controller);




	// TheFadingScene1:Fondo-------------------------------------------------------------
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0.5,
        duration: 1800

	})
    .setClassToggle('#slide01', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'fade1',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
	.addTo(controller);

   // TheFadingScene1:Dialogo 1-----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s01-01',
    triggerHook: 0.07,
    duration: 400,

})
.setClassToggle('#s01-01', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue1',
//        colorTrigger: 'white',
//        colorStart: '#75C695',
//        colorEnd: 'red'
//    })
.addTo(controller);





//===========================================================
//VIÑETA 2
//===========================================================

 // TheFadingScene1:Fondo----------------------------------------------------------
 var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide02',
    triggerHook: 0.7,
    duration: 1150

})
.setClassToggle('#slide02', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'background fade',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);


    //PIN the background----------------------------------------------------------
    var pinAT = new ScrollMagic.Scene({
        triggerElement: '#slide02',
        triggerHook: 0.2,
        duration: 1750})
    .setClassToggle('#s02-bg', 'pinned')
//  .addIndicators({
//      name: 'background pinning',
//      colorTrigger: 'white',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  })
    .addTo(controller);

    // TheFadingScene1:Dialogo 1----------------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s02-01',
        triggerHook: 0,
        duration: 200,

	})
    .setClassToggle('#s02-01', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue1',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
    .addTo(controller);


    // TheFadingScene1:Dialogo 2----------------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#s02-02',
        triggerHook: 0.15,
        duration: 170,

	})
    .setClassToggle('#s02-02', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue2',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//  })
    .addTo(controller);


//===========================================================
//VIÑETA 3
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0.7,
    duration: 3000


})
.setClassToggle('#slide03', 'fade-in') // add class to project01
// .addIndicators({
//     name: 'Fading Background',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
//  })
.addTo(controller);

 //PIN the background----------------------------------------------------------
 var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0.2,
    duration: 3000})
.setClassToggle('#s03-bg', 'pinned')
// .addIndicators({
//     name: 'pinning background',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
// })
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide03',
    triggerHook: 0.3,
    duration: 100,

})
.setClassToggle('#s03-01', 'fade-in') // add class to project01
//  .addIndicators({
//     name: 'dialogue1',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
//  })
.addTo(controller);

   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-02',
    triggerHook: 0.3,
    duration: 125,

})
.setClassToggle('#s03-02', 'fade-in') // add class to project01
//   .addIndicators({
//      name: 'dialogue2',
//      colorTrigger: 'white',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//   })
.addTo(controller);

 // TheFadingScene1:Dialogo 3----------------------------------------------------------
 var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-03',
    triggerHook: 0.1,
    duration: 250,

})
.setClassToggle('#s03-03', 'fade-in') // add class to project01
//  .addIndicators({
//     name: 'dialogue3',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
//  })
.addTo(controller);

 // TheFadingScene1:Dialogo 4----------------------------------------------------------
 var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s03-04',
    triggerHook: 0.1,
    duration: 250,

})
.setClassToggle('#s03-04', 'fade-in') // add class to project01
//   .addIndicators({
//      name: 'dialogue3',
//      colorTrigger: 'white',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//   })
.addTo(controller);




//===========================================================
//VIÑETA 4
//===========================================================


// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide04',
    triggerHook: 0.85,
    duration: 1650


})
.setClassToggle('#slide04', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'Fade Background',
//      colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide04',
    triggerHook: 0.2,
    duration: 1940})
.setClassToggle('#s04-bg', 'pinned')
//   .addIndicators({
//       name: 'pinned background',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-01',
    triggerHook: 0.15,
    duration: 250,

})
.setClassToggle('#s04-01', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue1',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);



   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-02',
    triggerHook: 0.15,
    duration: 0,

})
.setClassToggle('#s04-02', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue2',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);

   // TheFadingScene1:Dialogo 3----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s04-03',
    triggerHook: 0,
    duration: 450,

})
.setClassToggle('#s04-03', 'fade-in') // add class to project01
//   .addIndicators({
//       name: 'dialogue3',
//       colorTrigger: 'white',
//       colorStart: '#75C695',
//       colorEnd: 'red'
//   })
.addTo(controller);



//===========================================================
//VIÑETA 5
//===========================================================

// TheFadingScene1:Fondo----------------------------------------------------------
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#slide05',
    triggerHook: 0.7,


})
.setClassToggle('#slide05', 'fade-in') // add class to project01
//  .addIndicators({
//      name: 'Fading BCKG',
//      colorTrigger: 'white',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  })
.addTo(controller);

//PIN the background----------------------------------------------------------
var pinAT = new ScrollMagic.Scene({
    triggerElement: '#slide05',
    triggerHook: 0.2,
    })
.setClassToggle('#s05-bg', 'pinned')
//  .addIndicators({
//      name: 'Pinned BCKG',
//      colorTrigger: 'white',
//      colorStart: '#75C695',
//      colorEnd: 'red'
//  })
.addTo(controller);

   // TheFadingScene1:Dialogo 1----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-01',
    triggerHook: 0.15,


})
.setClassToggle('#s05-01', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue1',
//        colorTrigger: 'white',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// })
.addTo(controller);

   // TheFadingScene1:Dialogo 2----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-02',
    triggerHook: 0.15,


})
.setClassToggle('#s05-02', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue2',
//        colorTrigger: 'white',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// })
.addTo(controller);

   // TheFadingScene1:Dialogo 3----------------------------------------------------------
   var ourScene = new ScrollMagic.Scene({
    triggerElement: '#s05-03',
    triggerHook: 0,


})
.setClassToggle('#s05-03', 'fade-in') // add class to project01
//    .addIndicators({
//        name: 'dialogue3',
//        colorTrigger: 'white',
//        colorStart: '#75C695',
//        colorEnd: 'red'
// })
.addTo(controller);









}); // The end of the function, don't delete!


// .addIndicators({
//     name: 'dialogue1',
//     colorTrigger: 'white',
//     colorStart: '#75C695',
//     colorEnd: 'red'
// })