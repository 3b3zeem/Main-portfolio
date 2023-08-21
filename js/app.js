/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");
const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skill svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".numbers span");

const prt_section = document.querySelector(".portfolio");
const zoom_icon = document.querySelectorAll(".zoom-icon");
const model_overlay = document.querySelector(".model-overlay");
const images = document.querySelectorAll(".images img");
const num_images = images.length - 1;
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const ham = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillPlayed) skillsCounter();
    if (!mlPlayed) mlCounter();
});

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */
let nav = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
nav.reveal(".nav-link", { origin: "right", delay: 100 });
nav.reveal(".logo", { origin: "left", delay: 200 });
nav.reveal(".hamburger", { origin: "left", delay: 200 });
nav.reveal(".toggle-btn", { origin: "top", delay: 400 });

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
sr.reveal(".showcase-info", { delay: 300 });
sr.reveal(".showcase-info .sub-heading", { origin: "bottom", delay: 400 });
sr.reveal(".showcase-info .heading", { origin: "bottom", delay: 500 });
sr.reveal(".showcase-info .text", { origin: "bottom", delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 500 });
sr.reveal(".showcase-image .dots", { origin: "right", delay: 600 });
sr.reveal(".showcase-image .circle", { origin: "left", delay: 600 });
sr.reveal(".showcase-area .square", { origin: "bottom", delay: 500 });

let por = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
por.reveal(".pot1", { origin: "left", delay: 100 });
por.reveal(".pot2", { origin: "top", delay: 200 });
por.reveal(".pot3", { origin: "right", delay: 300 });
por.reveal(".pot4", { origin: "left", delay: 400 });
por.reveal(".pot5", { origin: "bottom", delay: 500 });
por.reveal(".pot6", { origin: "right", delay: 600 });
por.reveal(".pot7", { origin: "right", delay: 700 });
por.reveal(".prt-desc h3", { origin: "left", delay: 300 });
por.reveal(".prt-desc .btn", { origin: "right", delay: 300 });
por.reveal(".filter-btn", { origin: "right", delay: 400 });
por.reveal(".portfolio-title .sub-heading", { origin: "left", delay: 100 });
por.reveal(".portfolio-title .heading", { origin: "right", delay: 200 });

let about = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
about.reveal(".about-info .sub-heading", { origin: "left", delay: 100 });
about.reveal(".about-info .heading", { origin: "right", delay: 200 });
about.reveal(".about-info .text", { origin: "top", delay: 300 });
about.reveal(".about-info .cta", { origin: "bottom", delay: 400 });
about.reveal(".about-card", { origin: "left", delay: 100 });
about.reveal(".about .triangle", { origin: "left", delay: 100 });

let skills = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
skills.reveal(".skills-box", { delay: 50 });
skills.reveal(".skills-box .sub-heading", { origin: "left", delay: 100 });
skills.reveal(".skills-box .heading", { origin: "right", delay: 200 });
skills.reveal(".skills-box .text", { origin: "top", delay: 300 });
skills.reveal(".skills-box .btn", { origin: "bottom", delay: 400 });
skills.reveal(".skills-wrap .sk1", { origin: "left", delay: 100 });
skills.reveal(".skills-wrap .sk2", { origin: "top", delay: 200 });
skills.reveal(".skills-wrap .sk3", { origin: "bottom", delay: 300 });
skills.reveal(".skills-wrap .sk4", { origin: "right", delay: 400 });
skills.reveal(".skills .dots ", { origin: "top", delay: 200 });
skills.reveal(".skills .square ", { origin: "bottom", delay: 200 });

let serv = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
serv.reveal(".services-info .sub-heading", { origin: "left", delay: 100 });
serv.reveal(".services-info .heading", { origin: "right", delay: 200 });
serv.reveal(".services-info .text", { origin: "top", delay: 300 });
serv.reveal(".ml h5", { origin: "bottom", delay: 400 });
serv.reveal(".cta ", { origin: "bottom", delay: 200 });
serv.reveal(".srv-card", { origin: "right", delay: 200 });
serv.reveal(".card-desc h3", { origin: "top", delay: 300 });
serv.reveal(".card-desc .text", { origin: "left", delay: 400 });
serv.reveal(".srv-card .btn", { origin: "bottom", delay: 500 });
serv.reveal(".services-grid .square", { origin: "left", delay: 500 });
serv.reveal(".services .triangle", { origin: "top", delay: 500 });

let test = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
test.reveal(".section-background", { origin: "right", delay: 300 });
test.reveal(".section-background .circle", { origin: "bottom", delay: 400 });
test.reveal(".testimonials-title .sub-heading", { origin: "left", delay: 500 });
test.reveal(".testimonials-title .heading", { origin: "right", delay: 600 });
test.reveal(".swiper", { origin: "right", delay: 600 });

let cont = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
cont.reveal(".contact .triangle", { origin: "right", delay: 300 });
cont.reveal(".contact .square", { origin: "left", delay: 300 });
cont.reveal(".contact-info .sub-heading", { origin: "left", delay: 400 });
cont.reveal(".contact-info .heading", { origin: "left", delay: 500 });
cont.reveal(".contact-info .text", { origin: "right", delay: 600 });
cont.reveal(".contact-form", { origin: "right", delay: 500 });
cont.reveal(".contact-form .form-input", { origin: "top", delay: 600 });
cont.reveal(".contact-form textarea", { origin: "bottom", delay: 600 });
cont.reveal(".contact-form .btn", { origin: "left", delay: 800 });

let supe = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
supe.reveal(".subscription", { origin: "right", delay: 300 });
supe.reveal(".subscription .sub-box .square", { origin: "right", delay: 300 });
supe.reveal(".sub-info .sub-heading", { origin: "left", delay: 400 });
supe.reveal(".sub-info .heading", { origin: "right", delay: 500 });
supe.reveal(".sub-info .text", { origin: "bottom", delay: 600 });
supe.reveal(".subscription form input", { origin: "left", delay: 700 });
supe.reveal(".subscription form .btn", { origin: "right", delay: 700 });

let foot = ScrollReveal({
    duration: 2500,
    distance: "60px",
    scale: 0.85,
});
foot.reveal("footer .logo", { origin: "left", delay: 100 });
foot.reveal("footer .social-media", { origin: "right", delay: 200 });
foot.reveal("footer .text", { origin: "bottom", delay: 300 });

/* --------------- Skills Progress Bar Animation --------------- */
function hasReached(el) {
    let topPositions = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPositions + el.offsetHeight) return true;
    return false;
}

let skillPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillPlayed = true;

    sk_counter.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });
    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}

/* --------------- Services Counter Animation --------------- */
let mlPlayed = false;

function mlCounter() {
    if (!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach((ctr) => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target);
        }, 400);
    });
}

/* --------------- Portfolio Filter Animation --------------- */
let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },
});

/* --------------- Modal Pop Up Animation --------------- */
let currentIndex = 0;

zoom_icon.forEach((icn, i) =>
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        ChangeImage(currentIndex);
    })
);

model_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");
});
function ChangeImage(index) {
    images.forEach((img) => img.classList.remove("showIamge"));
    images[index].classList.add("showIamge");
}

prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = num_images;
    } else {
        currentIndex--;
    }
    ChangeImage(currentIndex);
});
next_btn.addEventListener("click", () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    ChangeImage(currentIndex);
});

const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 500,
    autoplay: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* --------------- Change Active Link On Scroll --------------- */
function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            };
        })
        .filter((sct) => sct.y <= 0);

    let currentSectionID = passedSections.at(-1).id;

    links.forEach((l) => l.classList.remove("active"));
    links[currentSectionID].classList.add("active");
}
activeLink();

/* --------------- Change Page Theme --------------- */
let first_theme = localStorage.getItem("dark");

changeTheme(+first_theme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}
toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* --------------- Open & Close Navbar Menu --------------- */
ham.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((links) =>
    links.addEventListener("click", () => {
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
    })
);

/* --------------- Scroll top --------------- */

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(hsl(var(--hue-1), 100%, 60%) ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

$(document).ready(function () {
    $(".cont").each(function () {
        var $topElement = $(this).find(".top");
        var $botElement = $(this).find(".bot");

        $topElement.click(function () {
            $botElement.slideToggle("slow");
        });
    });
});
