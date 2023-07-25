document.addEventListener('DOMContentLoaded', () => {
    var tl = gsap.timeline();

    tl
    // .from(".menu__1", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     delay: 0.5,
    //     ease: "power3.out",
    // })
    // .from(".menu__2", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     ease: "power3.out",                        
    // }, "-=0.8")
    // .from(".menu__3", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     ease: "power3.out",               
    // }, "-=0.8")
    // .from(".menu__4", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     ease: "power3.out",               
    // }, "-=0.8")
    // .from(".menu__5", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     ease: "power3.out",             
    // }, "-=0.8")
    // .from(".menu__6", {
    //     duration: 1,
    //     y: 50,
    //     opacity: 0,
    //     ease: "power3.out",             
    // }, "-=0.8")
    .from(".container__item div", {
        duration: 1,
        y: 100,
        opacity: 0,
        delay: 1.5,
        stagger: {each: 0.2},
        ease: "power3.out",             
    }, "-=0.8")
    .from(".bg__hero", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",             
    }, "-=0.8")
    .from(".container__item img", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",             
    }, "-=0.8")

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#portfolio div", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: {each: 0.2},  
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#portfolio",
        }
    });

    gsap.from("#contato div", {
        duration: 1.8,
        y: 100,
        opacity: 0,
        stagger: {each: 0.2},  
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contato",
        }
    });
})