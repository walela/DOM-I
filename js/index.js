const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// update cta img src
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navLinks = Array.from(document.querySelectorAll("nav a"));
for (let i = 0; i < 6; i++) {
  item = `nav-item-${i + 1}`;
  navLinks[i].textContent = siteContent.nav[item];
}

let ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

let featuresHeading = document.querySelector(".text-content h4");
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

let featuresText = document.querySelector(".text-content p");
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutHeading = document.querySelectorAll(".text-content h4")[1];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
let aboutText = document.querySelectorAll(".text-content p")[1];
aboutText.textContent = siteContent["main-content"]["about-content"];

let servicesHeading = document.querySelectorAll(".text-content h4")[2];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
let servicesText = document.querySelectorAll(".text-content p")[2];
servicesText.textContent = siteContent["main-content"]["services-content"];

let productHeading = document.querySelectorAll(".text-content h4")[3];
productHeading.textContent = siteContent["main-content"]["product-h4"];
let productText = document.querySelectorAll(".text-content p")[3];
productText.textContent = siteContent["main-content"]["product-content"];

let visionHeading = document.querySelectorAll(".text-content h4")[4];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
let visionText = document.querySelectorAll(".text-content p")[4];
visionText.textContent = siteContent["main-content"]["vision-content"];

let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent.contact["contact-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent.contact.address;

document.querySelectorAll(".contact p")[1].textContent =
  siteContent.contact.phone;

document.querySelectorAll(".contact p")[2].textContent =
  siteContent.contact.email;

document.querySelector("footer p").textContent = siteContent.footer.copyright;

// set link color to green;
navLinks.forEach(link => link.setAttribute("style", "color:green"));

// append children to navigation.

let introLink = document.createElement("a");
introLink.setAttribute("href", "#");
introLink.setAttribute("style", "color: green");
introLink.textContent = "Why Us";
document.querySelector("nav").prepend(introLink);

let careersLink = document.createElement("a");
careersLink.setAttribute("href", "#");
careersLink.setAttribute("style", "color: green");
careersLink.textContent = "Careers";
document.querySelector("nav").appendChild(careersLink);
