// jQuery
$(document).ready(function() {
    function navbarTogglerClick() {
        $('.navbar-list').hide();
        let $togglerState = true;
        let $togglerAnimation = gsap.timeline({ paused: true });
        $togglerAnimation
            .to('.stripe3', { opacity: 0 })
            .to('.stripe1', { position: "sticky", rotate: 135, y: "7", width: '100%' }, "<")
            .to('.stripe2', { position: "sticky", rotate: 45, y: "0" }, "<");

        if (window.matchMedia("(max-width:991px)").matches) {
            $('.navbar-toggler').on("click", () => {
                if ($togglerState) {
                    $togglerAnimation.restart();
                    $('.navbar-list').slideDown();
                    gsap.to('.navbar-hidden-layer', { display: 'block' });
                }
                $togglerState = false;
            });

            $('.navbar-hidden-layer').not('.navbar-list').on('click', () => {
                $togglerAnimation.reverse();
                gsap.to('.stripe1', { width: '50%' })
                $('.navbar-list').slideUp();
                $togglerState = true;
            });

        }
    }
    navbarTogglerClick();

    function categoryClicked() {
        $('.rec-category-desc-block').hide();

        $('#recBtn1').on('click', event => {
            $(event.currentTarget).next().slideToggle(250);
            $('#recDesc2').slideUp(250);
            $('#recDesc3').slideUp(250);
            $('#recDesc4').slideUp(250);
        });
        $('#recBtn2').on('click', event => {
            $(event.currentTarget).next().slideToggle(250);
            $('#recDesc1').slideUp(250);
            $('#recDesc3').slideUp(250);
            $('#recDesc4').slideUp(250);
        });
        $('#recBtn3').on('click', event => {
            $(event.currentTarget).next().slideToggle(250);
            $('#recDesc1').slideUp(250);
            $('#recDesc2').slideUp(250);
            $('#recDesc4').slideUp(250);
        });
        $('#recBtn4').on('click', event => {
            $(event.currentTarget).next().slideToggle(250);
            $('#recDesc1').slideUp(250);
            $('#recDesc2').slideUp(250);
            $('#recDesc3').slideUp(250);
        });
    }
    categoryClicked();
})

// gsap
let openingSlide = () => {
    let slidingUp = ['#bodyBlock', '.project-body-block']
    let slidingLeft = ['#profileBlock', '.project-block']
    let homeTl = gsap.timeline();
    let projectTl = gsap.timeline();
    if (window.matchMedia('(min-width: 992px)').matches) {
        gsap.from('nav', { duration: 1, ease: 'expo.out', delay: 0.5, y: '-100%' })
        homeTl
            .from(slidingUp[0], { duration: 1, ease: 'expo.out', y: '10%', opacity: 0, delay: 1, })
            .from(slidingLeft[0], { duration: 1.5, ease: 'expo.out', x: '100%', opacity: 0 }, "-=0.5");

    }

    cakraBtn.onclick = function() {
        homeTl.to(slidingLeft[0], { duration: 2, ease: 'expo.out', x: '120%' });
        homeTl.to(slidingLeft[0], { duration:0.1, opacity: 0 }, "-=1.5");
        homeTl.to(slidingUp[0], { duration: 1, ease: 'expo.out', y: '10%', opacity: 0 }, "-=1.3");
        homeTl.to('#mainContainer', { display: 'none' });

        homeTl
            .to('#projectContainer', { display: 'block', duration: 0.1 })
            .to('#projectContainer', { opacity: 1, duration: 0.1 })
            .from(slidingUp[1], { duration: 1, ease: 'expo.out', y: '10%', opacity: 0 })
            .from(slidingLeft[1], { duration: 1.5, ease: 'expo.out', x: '100%', opacity: 0 }, "-=0.5");
    }   
}
// openingSlide();

