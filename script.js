
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();



function loading(){
  var tl = gsap.timeline()

  tl.to(".overlay",{
      delay:1,
      y:"-100%",
      duration:1,
  })
  
  // tl.from(".overlay2",{
  //     opacity:0,
  // })
  
  tl.from(".overlay2 h2",{
      x:-50,
      opacity:0,
      duration:0.3,
    })
    
    tl.from(".overlay2 p",{
        x:50,
        opacity:0,
        duration:0.3,
      })
  
  tl.from("nav",{
      opacity:0,
  })
  
  
  
  tl.to(".overlay2",{
      y:"-100%",
      scrollTrigger:{
          trigger:"#page1",
          scroller:"#main",
          start: "top 0%",
          end: "top -60%",
          // markers: true,
          scrub: 1,
          pin:true,
      }
  })

  
  
}

loading();




function page3anime(){
  
  const tl3 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start: "top 0%",
        end: "top -300%",
        // markers: true,
        scrub:true,
        pin:true,
        
      }
    }
  )

  
  gsap.from("#center-2",{
    opacity:0,
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      start: "top 41%",
      end: "top 10%",
      // markers: true,
      scrub:true,
    }
  })

  gsap.from("#dvideo",{
    opacity:0,
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      start: "top 40%",
      end: "top 10%",
      // markers: true,
      scrub:true,
     
      
    }
  },2)


  tl3.to("#photo1",{
    rotate:110,
    ease: "expoScale(0.5,7,none)",
    top:"55vh",
    left:"45vw"
    
  },2)

  tl3.to("#photo2",{
    top:"100vh",
  },2)

  tl3.to("#photo3",{
    top:"100vh",
  },2)

  tl3.to("#photo4",{
    top:"0",
  },2)

  tl3.to("#photo6",{
    top:"100vh",
  },2)


}
page3anime();



function page4anime(){

   
  const tl4 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start: "top 0%",
        end: "top -300%",
        // markers: true,
        scrub:true,
        pin:true,
        
      }
    }
  )

  
  gsap.from("#center-3",{
    opacity:0,
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start: "top 42%",
      end: "top 10%",
      // markers: true,
      scrub:true,
    }
  })

  


  tl4.to("#photo2-1",{
    rotate:110,
    ease: "expoScale(0.5,7,none)",
    top:"55vh",
    left:"45vw"
    
  },1)

  tl4.to("#photo2-2",{
    top:"100vh",
  },1)

  .to("#photo2-3",{
    top:"100vh",
  },1)

  .to("#photo2-4",{
    top:"0",
  },1)

  .to("#photo2-6",{
    top:"100vh",
  },1)
}

page4anime();

function page5anime(){
  const tl5 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start: "top 0%",
        end: "top -300%",
        // markers: true,
        scrub:true,
        pin:true,
        
      }
    }
  )

  
  gsap.from("#center-5",{
    opacity:0,
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      start: "top 42%",
      end: "top 10%",
      // markers: true,
      scrub:true,
    }
  })

  


  tl5.to("#photo3-1",{
    rotate:110,
    ease: "expoScale(0.5,7,none)",
    top:"55vh",
    left:"45vw"
    
  },1)

  tl5.to("#photo3-2",{
    top:"100vh",
  },1)

  .to("#photo3-3",{
    top:"100vh",
  },1)

  .to("#photo3-4",{
    top:"0",
  },1)

  .to("#photo3-6",{
    top:"100vh",
  },1)
}
 
page5anime();





function roller(){
  gsap.to(".roller-1",{
    x:"-100%",
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 60%",
      end:"top -100%",
      // markers:true,
      scrub:true,
    }
    
  })
  
  gsap.from(".roller-2",{
    x:"-200%",
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 60%",
      end:"top -200%",
      // markers:true,
      scrub:true,
    }
    
  })
  
}
roller()

function canvas2(){
  const canvas = document.querySelector("#page8>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
  ./294-png
 ./295-png
 ./296-png
 ./297-png
 ./298-png
 ./299-png
 ./300-png
 ./301-png
 ./302-png
 ./303-png
 ./304-png
 ./305-png
 ./306-png
 ./307-png
 ./308-png
 ./309-png
 ./310-png
 ./311-png
 ./312-png
 ./313-png
 ./314-png
 ./315-png
 ./316-png
 ./317-png
 ./318-png
 ./319-png
 ./320-png
 ./321-png
 ./322-png
 ./323-png
 ./324-png
 ./325-png
 ./326-png
 ./327-png
 ./328-png
 ./329-png
 ./330-png
 ./331-png
 ./332-png
 ./333-png
 ./334-png
 ./335-png
 ./336-png
 ./337-png
 ./338-png
 ./339-png
 ./340-png
 ./341-png
 ./342-png
 ./343-png
 ./344-png
 ./345-png
 ./346-png
 ./347-png
 ./348-png
 ./349-png
 ./350-png
 ./351-png
 ./352-png
 ./353-png
 ./354-png
 ./355-png
 ./356-png
 ./357-png
 ./358-png
 ./359-png
 ./360-png
 ./361-png
 ./362-png
 ./363-png
 ./364-png
 ./365-png
 ./366-png
 ./367-png
 ./368-png
 ./369-png
 ./370-png
 ./371-png
 ./372-png
 ./373-png
 ./374-png
 ./375-png
 ./376-png
 ./377-png
 ./378-png
 ./379-png
 ./380-png
 ./381-png
 ./387-png
 ./388-png
 ./389-png
 ./390-png
 

`;
return data.split("\n")[index];
}

const frameCount = 89;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);

}



gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page8`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({
// markers:true,
trigger: "#page8",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});


}
canvas2()


gsap.from("#video9 ,#overlay9",{
  opacity:0,
  scrollTrigger:{
      trigger:"#page9",
      scroller:"#main",
      start: "top 0%",
      end: "top -1%",
      // markers: true,
      scrub:1,
      pin:true,
      
  }
})




var bubble= document.querySelector("#bubble")
var bubblephoto = document.querySelector("#bubble img")

bubble.addEventListener("mousemove", function(dets){
   gsap.to(bubblephoto,{
    left: dets.x-100+"px",
    top: dets.y-200 +"px",
   })

   bubble.addEventListener("mouseenter", function(){
       gsap.to(bubblephoto,{
        opacity:1,
        // ease:"power4"
       })
   })

   bubble.addEventListener("mouseleave", function(){
    gsap.to(bubblephoto,{
      opacity:0,
      // ease:"power4"
     })
   })


})


var menu = document.querySelector("#menu")
var Mpage = document.querySelector("#menupage")


menu.addEventListener("click", function(){
  Mpage.style.display ="initial"
  Mpage.style.transform ="scale(1)"
  

})

var cross = document.querySelector("#cross")

cross.addEventListener("click", function(){
  Mpage.style.display ="none"
  Mpage.style.transform ="scale(0)"

  // alert("hey")
})















