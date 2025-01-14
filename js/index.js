const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navList = document.querySelectorAll('a');
navList.forEach((element, i) => element.textContent = Object.values(siteContent['nav'])[i])

const ctaHead = document.querySelector('.cta h1');
ctaHead.textContent = siteContent['cta']['h1'];

const firstPart = "DOM";
const secondPart = "is";
const lastPart = "Awesome";

ctaHead.innerHTML = firstPart + "<br />" + secondPart + "<br />" + lastPart;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const contentH4 = document.querySelectorAll('.main-content h4');
console.log(contentH4);
contentH4[0].textContent = siteContent['main-content']['features-h4'];
contentH4[1].textContent = siteContent['main-content']['about-h4'];
contentH4[2].textContent = siteContent['main-content']['services-h4'];
contentH4[3].textContent = siteContent['main-content']['product-h4'];
contentH4[4].textContent = siteContent['main-content']['vision-h4'];

const contentP = document.querySelectorAll('.main-content p');
contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['product-content'];
contentP[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

navList.forEach((element) => element.style.color = 'green');

const newNavFirst = document.createElement("a");
newNavFirst.textContent = "Hello" ;
const newNavLast = document.createElement("a");
newNavLast.textContent = "Bye" ;

const parentElement = document.querySelector('nav');
parentElement.prepend(newNavFirst);
parentElement.append(newNavLast);
newNavFirst.style.color = 'green'
newNavLast.style.color = 'green'

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo.forEach((element, i) => element.textContent = Object.values(siteContent['contact'])[i+1])

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];
