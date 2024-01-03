//collapse menu
const collapse = document.querySelector(".collapse");
const navLinks = document.querySelectorAll(".nav-link");
const menuBtn = document.querySelector(".navbar-toggler");

collapse.style.backgroundColor = "white";
collapse.style.padding = "10px";

const removeShow = () => {
  collapse.classList.remove("show");
};

navLinks.forEach((link) => {
  link.addEventListener("click", removeShow);
});

//logo flying animation
const g = document.querySelector("#g");
const v = document.querySelector("#v");
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
let angle = 0;
let lastTime = null;

const Fly = (time) => {
  if (lastTime != null) angle += (time - lastTime) * 0.002;
  lastTime = time;
  flying1.style.top = Math.sin(angle) * 40 + 40 + "px";
  flying1.style.left = Math.cos(angle) * 200 + 230 + "px";
  flying2.style.top = Math.sin(angle + Math.PI) * 40 + 40 + "px";
  flying2.style.left = Math.cos(angle + Math.PI) * 200 + 230 + "px";
  requestAnimationFrame(Fly, "animate");
};

Fly(lastTime);

//banner css explodes
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord");
const grinan = document.querySelector("#grinan");
const victor = document.querySelector("#victor");

let isV = false;
let isG = false;

const deattach = () => {
  grinan.classList.add("deattach");

  if (grinan.classList[0] === "deattach") {
    g.style.color = "#ce5d5d";
    isG = true;
  }
};

const turnlight = () => {
  victor.classList.add("lightsOn");

  if (victor.classList[0] === "lightsOn") {
    v.style.color = "#ce5d5d";
    isV = true;
  }
};

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);

const animatePorfolio = () => {
  victor.classList.forEach((classL) => {
    if (classL === "lightsOn") {
      portfolio.style.position = "absolute";
      portfolio.classList.add("spin");
    }
  });
};

const spinDeveloper = () => {
  grinan.classList[0] === "deattach" &&
    ((developer.style.position = "absolute"), developer.classList.add("spin"));
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

//scrolls functions

const tabsNames = ["about", "portfolio", "skills", "certificates", "contact"];
let activeTab = 0;

// const handleScroll = () => {
//   const { pageYOffset, innerHeight } = window;
//   const currentTab = Math.floor(pageYOffset / (innerHeight - 200));
//   if (currentTab !== activeTab) {
//   }
// };

/***
element.scrollTop - is the pixels hidden in top due to the scroll. With no scroll its value is 0.

element.scrollHeight - is the pixels of the whole div.

element.clientHeight - is the pixels that you see in your browser.

element.getBoundingClientRect()


$("#thediv").each( function() 
{
   // certain browsers have a bug such that scrollHeight is too small
   // when content does not fill the client area of the element
   var scrollHeight = Math.max(this.scrollHeight, this.clientHeight);
   this.scrollTop = scrollHeight - this.clientHeight;
});



TODO: try to find the top scroll value from the sections!!!!!

 */

let pageSize = document.documentElement.scrollHeight;

const setPageSize = () => {
  pageSize = document.documentElement.scrollHeight;
};

window.onresize = () => setPageSize();

const windowHeight = window.innerHeight;

const scroll_about = [
  pageSize - (pageSize - windowHeight),
  pageSize - (pageSize - windowHeight * 2),
];

const scroll_portfolio = [
  pageSize - (pageSize - windowHeight * 2),
  pageSize - (pageSize - windowHeight * 3),
];

const scroll_skills = [
  pageSize - (pageSize - windowHeight * 3),
  pageSize - windowHeight * 2.5 - 5,
];

const scroll_certificates = [
  pageSize - windowHeight * 2.5 - 5,
  pageSize - windowHeight - 5,
];
const scroll_conctactMe = [
  pageSize - windowHeight - 100,
  pageSize - windowHeight - 10,
];

const scrollSection_about = document.querySelector("#aboutArticle");
const scrollSection_portfolio = document.querySelector("#portfolio");
const scrollSection_skills = document.querySelector("#skillsBoxes");
const scrollSection_certificates = document.querySelector("#certificates");
const scrollSection_contact = document.querySelector("#footer");

const sections = [
  scrollSection_about,
  scrollSection_portfolio,
  scrollSection_skills,
  scrollSection_certificates,
  scrollSection_contact,
];
//TODO: sections top scroll value
// sections.forEach((sec) => {
//   try {
//     console.log(sec.getBoundingClientRect().y);
//   } catch (error) {}
// });

const aboutTab = document.querySelector("#aboutTab");
const portfolioTab = document.querySelector("#portfolioTab");
const skillsTab = document.querySelector("#skillsTab");
const certTab = document.querySelector("#certTab");
const contactTab = document.querySelector("#contactTab");

const menuBar = document.querySelector("#menuBar"); //bg change color not working.
const tabs = document.querySelectorAll("tab");
const scrollUp = document.querySelector(".scrollUp");

let scrollValue = 0;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  scrollValue = document.body.scrollTop || document.documentElement.scrollTop;

  // console.log("scrollValue", scrollValue);

  resetActiveTab();
  if (scrollValue >= scroll_about[0] && scrollValue <= scroll_about[1]) {
    aboutTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_portfolio[0] &&
    scrollValue <= scroll_portfolio[1]
  ) {
    portfolioTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_skills[0] &&
    scrollValue <= scroll_skills[1]
  ) {
    skillsTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_certificates[0] &&
    scrollValue <= scroll_certificates[1]
  ) {
    certTab.classList.add("activeTab");
  } else if (scrollValue >= scroll_conctactMe[0]) {
    contactTab.classList.add("activeTab");
  }

  if (scrollValue > 20) {
    scrollUp.classList.remove("invisible");
    menuBar.style.backgroundColor = "rgb(6, 30, 51)";
  } else {
    scrollUp.classList.add("invisible");
    menuBar.style.backgroundColor = "";
  }
}

const resetActiveTab = () => {
  aboutTab.classList.remove("activeTab");
  portfolioTab.classList.remove("activeTab");
  skillsTab.classList.remove("activeTab");
  certTab.classList.remove("activeTab");
  contactTab.classList.remove("activeTab");
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// menuBtn.addEventListener('blur', removeShow);

scrollUp.addEventListener("click", topFunction);

/* Portfolio Projects */
const schoolProjects = document.querySelector("#schoolProjects");
const sillyGames = document.querySelector("#sillyGames");
const personalProjects = document.querySelector("#personalProjects");
const internet = document.querySelector("#internetProjects");
const freelancer = document.querySelector("#freelancer");

const section = {
  schoolProjects: schoolProjects,
  sillyGames: sillyGames,
  personalProjects: personalProjects,
  internet: internet,
  freelancer: freelancer,
};

//TODO: move projects data to database
const projectsData = [
  {
    id: "gradients",
    title: "Gradients",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/color_gradients/",
    imgUrl: "./images/02gradients.JPG",
    description: "Getting familiar with HTML & CSS",
    sectionId: "schoolProjects",
    repoLink: "color_gradients",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "css"],
    deployed: "github",
  },
  // {
  //   id: "speedGame",
  //   title: "Speed Game",
  //   type: "primary",
  //   link: "https://victor-grinan-dev.github.io/speed_game/",
  //   imgUrl: "./images/speedgame.JPG",
  //   description: "Using javascript to handle the DOM",
  //   sectionId: "schoolProjects",
  //   repoLink: "speed_game",
  //   repoSite: "https://github.com/Victor-Grinan-Dev/",
  //   framework: "html",
  //   technologies: ["javascript", "css"],
  // deployed:'github'
  // },
  {
    id: "pokemons",
    title: "Pokedex",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/react_pokemons/",
    imgUrl: "./images/pokemons.jpg",
    description: "Learning to fetch and display data",
    sectionId: "schoolProjects",
    repoLink: "react_pokemons ",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["axios"],
    deployed: "github",
  },
  {
    id: "keeperApp",
    title: "Keeper App",
    type: "primary",
    link: "https://jocular-tapioca-476ffa.netlify.app/",
    imgUrl: "./images/keeperApp.jpg",
    description: "Combining the use of local storage & MUI styling",
    sectionId: "schoolProjects",
    repoLink: "keeper_app",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["material_ui"],
    deployed: "netlify",
  },
  {
    id: "foodApp",
    title: "Food App",
    type: "primary",
    link: "https://food-app4.netlify.app/",
    //https://victor-grinan-dev.github.io/food-app3/
    imgUrl: "./images/feelit_cookit.png",
    description: "Handling a CRUD",
    sectionId: "schoolProjects",
    repoLink: "food-app4",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["axios", "firebase"],
    deployed: "netlify",
  },
  {
    id: "countriesApp",
    title: "Countries App",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/countries_app1/",
    imgUrl: "./images/countries.jpg",
    description: "Introduction to redux",
    sectionId: "schoolProjects",
    repoLink: "countries_app1",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["redux", "axios", "bootstrap"],
    deployed: "github",
  },
  {
    id: "diceRoller",
    title: "Dice Roller",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/diceRoller",
    imgUrl: "./images/diceRoller.JPG",
    description: "My first HTML, CSS & javascript",
    sectionId: "personalProjects",
    repoLink: "diceRoller",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "css"],
    deployed: "github",
  },
  {
    id: "simonsays",
    title: "Simon Says",
    type: "primary",
    link: "https://simon-game-opal-eta.vercel.app/ ",
    imgUrl: "./images/simonsays.png",
    description: "Exercise from udemy",
    sectionId: "sillyGames",
    repoLink: "11Simon-Game",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "css", "jquery"],
    deployed: "vercel",
  },

  {
    id: "turnTimer",
    title: "Turn Timer",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/blood_bowl_turn_timer/",
    imgUrl: "./images/turn_timer.JPG",
    description: "first site for my Hobby group",
    sectionId: "personalProjects",
    repoLink: "blood_bowl_turn_timer",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "css"],
    deployed: "github",
  },
  {
    id: "hexMap",
    title: "Hex Map",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/map-creator/",
    imgUrl: "./images/hexMap.JPG",
    description: "Getting use to mapping in javascript",
    sectionId: "personalProjects",
    repoLink: "map-creator",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "css"],
    deployed: "github",
  },
  {
    id: "mapCreator",
    title: "Campaign Tracker: Map Creator",
    type: "primary",
    // link: "https://enchanting-taiyaki-964ff9.netlify.app/",
    link: "https://hilarious-klepon-7fac2f.netlify.app/",
    imgUrl: "./images/campaign-tracker.png",
    description: "Demo day project from school",
    sectionId: "personalProjects",
    repoLink: "campaign-tracker-demo",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["redux"],
    deployed: "netlify",
  },
  // {
  //   id: "unit_creator",
  //   title: "Campaign Tracker: Unit Creator",
  //   type: "primary",
  //   // link: "https://enchanting-taiyaki-964ff9.netlify.app/",
  //   link: "https://hilarious-klepon-7fac2f.netlify.app/",
  //   imgUrl: "./images/campaign-tracker.png",
  //   description: "Demo day project from school",
  //   sectionId: "personalProjects",
  //   repoLink: "campaign-tracker-demo",
  //   repoSite: "https://github.com/Victor-Grinan-Dev/",
  //   framework: "react",
  //   technologies: ["redux"],
  //   deployed:'netlify'
  // },
  {
    id: "theGame",
    title: "Campaign Tracker: The Game",
    type: "primary",
    link: "https://classy-vacherin-e654f9.netlify.app/",
    video: "https://www.youtube.com/watch?v=YPBy4kEFNVQ",
    imgUrl: "./images/the_game.png",
    description: 'The demo of the game "Campaing Tracker"',
    sectionId: "personalProjects",
    repoLink: "the_game",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["redux"],
    deployed: "netlify",
  },
  {
    id: "40k-tool",
    title: "40k-Tool",
    type: "primary",
    link: "https://40k-tool.vercel.app/",
    video: "",
    imgUrl: "./images/40ktool.png",
    description: "Work in progress to help my gaming comunity",
    sectionId: "personalProjects",
    repoLink: "the_game",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["redux", "sass"],
    deployed: "vercel",
  },
  {
    id: "theCubanShow",
    title: "The Cuban Show",
    type: "primary",
    link: "https://thecubanshow.com/",
    imgUrl: "./images/thecubanshow.png",
    description: "First serious job for a friend",
    sectionId: "freelancer",
    repoLink: "the_cuban_show_ui",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["firebase", "axios", "redux"],
    deployed: "netlify",
  },
  {
    id: "Kerttu",
    title: "Kerttu",
    type: "primary",
    link: "https://kerttu.vercel.app/",
    video: "",
    imgUrl: "./images/kerttu.png",
    description: "A friend request for her daugther's bd",
    sectionId: "freelancer",
    repoLink: "the_game",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["javascript", "sass"],
    deployed: "vercel",
  },
  {
    id: "tailwindLoopstudios",
    title: "Tailwind Loopstudios",
    type: "primary",
    link: "https://loopstodios-react.vercel.app/",
    imgUrl: "./images/loopstudios.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "loopstudio-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindShortly",
    title: "Tailwind Shortly",
    type: "primary",
    link: "https://shortly-react-nine.vercel.app/",
    imgUrl: "./images/shortly.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "shortly-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindGallery",
    title: "Tailwind Gallery",
    type: "primary",
    link: "https://image-gallery-react-nu.vercel.app/",
    imgUrl: "./images/gallery.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "image-gallery-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindPrices",
    title: "Tailwind Price cards",
    type: "primary",
    link: "https://card-price.vercel.app/",
    imgUrl: "./images/priceCards.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "price-cards-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindLogin",
    title: "Tailwind Login Modal",
    type: "primary",
    link: "https://login-modal-rho.vercel.app/",
    imgUrl: "./images/login.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "login-modal-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindProduct",
    title: "Tailwind Product Modal",
    type: "primary",
    link: "https://product-modal-react.vercel.app/",
    imgUrl: "./images/product.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "product-modal-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "tailwindLandingPage",
    title: "Tailwind Landing Page",
    type: "primary",
    link: "https://landing-page-react-jet.vercel.app/",
    imgUrl: "./images/landing.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "landing-page-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "testimonialGrid",
    title: "Tailwind Testimonial Grid",
    type: "primary",
    link: "https://testimonial-grid-alpha.vercel.app/",
    imgUrl: "./images/testimonialGrid.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "testimonial-grid",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "fylo",
    title: "Tailwind Fylo",
    type: "primary",
    link: "https://vercel.com/victor-grinan-dev/fylo-react",
    imgUrl: "./images/fylo.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "fylo-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "bookmarkManager",
    title: "Tailwind Bookmark Manager",
    type: "primary",
    link: "https://bookmark-manager-react.vercel.app/",
    imgUrl: "./images/bookmark.png",
    description: "Tailwind learning exercise, no func.",
    sectionId: "internet",
    repoLink: "bookmark-manager-react",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "react",
    technologies: ["tailwind"],
    deployed: "vercel",
  },
  {
    id: "natour",
    title: "Sass Natour",
    type: "primary",
    link: "https://natour-eta.vercel.app/",
    imgUrl: "./images/natour.png",
    description: "Sass learning exercise, no func.",
    sectionId: "internet",
    repoLink: "natour",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["sass"],
    deployed: "vercel",
  },
  {
    id: "nexter",
    title: "Sass Nexter",
    type: "primary",
    link: "https://nexter-ui.vercel.app/",
    imgUrl: "./images/nexter.png",
    description: "Sass learning exercise, no func.",
    sectionId: "internet",
    repoLink: "nexter-ui",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["sass"],
    deployed: "vercel",
  },
  {
    id: "trillo",
    title: "Sass Trillo",
    type: "primary",
    link: "https://trillo-nu.vercel.app/",
    imgUrl: "./images/trillo.png",
    description: "Sass learning exercise, no func.",
    sectionId: "internet",
    repoLink: "trillo",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "html",
    technologies: ["sass"],
    deployed: "vercel",
  },
  {
    id: "first vue",
    title: "My First Vue",
    type: "primary",
    link: "https://victor-grinan-dev.github.io/my-first-vue-app/",
    imgUrl: "./images/my_first_vue.png",
    description: "First steps in vue framework using CDN.",
    sectionId: "internet",
    repoLink: "my-first-vue-app",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["html", "javascript", "css"],
    deployed: "github",
  },
  {
    id: "random-user-generator-vue",
    title: "Random User Generator",
    type: "primary",
    link: "https://random-user-generator-vue.vercel.app/",
    imgUrl: "./images/random-user-gen.png",
    description: "Fetching api in vue framework using CDN.",
    sectionId: "internet",
    repoLink: "random-user-generator-vue",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["html", "javascript", "css"],
    deployed: "vercel",
  },
  {
    id: "vue_monster_slayer",
    title: "Monster Slayer",
    type: "primary",
    link: "https://vue-monster-slayer-beta.vercel.app/",
    imgUrl: "./images/vue-monster-slayer.png",
    description: "Dominating the DOM with Vue.",
    sectionId: "internet",
    repoLink: "project-01-monster-slayer",
    repoSite: "https://github.com/Victor-Grinan-Dev/vue_guide/tree/main/",
    framework: "vue",
    technologies: ["html", "javascript", "css"],
    deployed: "vercel",
  },
  {
    id: "resource_manager",
    title: "Resource Manager",
    type: "primary",
    link: "https://resource-manager-xi.vercel.app/",
    imgUrl: "./images/vue-resorce-manager.png",
    description: "Learning components and app structure in Vue.",
    sectionId: "internet",
    repoLink: "resource-manager",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["html", "javascript", "css"],
    deployed: "vercel",
  },
  {
    id: "survey_app",
    title: "Survey App",
    type: "primary",
    link: "https://survey-app-lyart-ten.vercel.app/",
    imgUrl: "./images/survey-app.png",
    description: "POST & GET from Firebase DB",
    sectionId: "internet",
    repoLink: "survey-app",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["html", "javascript", "css", "axios", "firebase"],
    deployed: "vercel",
  },
  // {
  //   id: "teams-&-users",
  //   title: "Teams & Users",
  //   type: "primary",
  //   link: "https://teams-users.vercel.app/",
  //   imgUrl: "./images/teams-&-users.png",
  //   description: "Routing in Vue",
  //   sectionId: "internet",
  //   repoLink: "teams---users",
  //   repoSite: "https://github.com/Victor-Grinan-Dev/",
  //   framework: "vue",
  //   technologies: ["html", "javascript", "css", "axios", "firebase"],
  //   deployed:'vercel'
  // },
  {
    id: "vue_animations",
    title: "Vue Animations",
    type: "primary",
    link: "https://vue-animations-seven.vercel.app/",
    imgUrl: "./images/vue_animations.png",
    description: "POST & GET from Firebase DB",
    sectionId: "internet",
    repoLink: "vue-animations",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["html", "javascript", "css"],
    deployed: "vercel",
  },
  {
    id: "vuex_online_store",
    title: "Vue Online Store",
    type: "primary",
    link: "https://vuex-online-store.vercel.app/products",
    imgUrl: "./images/vuex-online-store.png",
    description: "Learning VUEX",
    sectionId: "internet",
    repoLink: "vuex-online-store",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["vuex", "html", "javascript", "css"],
    deployed: "vercel",
  },
  {
    id: "vuex_coach_finder",
    title: "Vue Coach Finder",
    type: "primary",
    link: "https://coaches-fdce3.web.app/coaches",
    // link: "https://vue-coach-finder.vercel.app/coaches",
    imgUrl: "./images/vue_coach_finder.png",
    description: "Learning VUEX",
    sectionId: "internet",
    repoLink: "project-06-coach-finder-vue",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["vuex", "html", "javascript", "css", "firebase"],
    deployed: "vercel",
  },
  // {
  //     "id":"",
  //     "title":"",
  //     "type":"",
  //     "link":"",
  //     "imgUrl":"",
  //     "description":"",
  //     "sectionId":""
  // }
  {
    id: "malditos_dice",
    title: "Malditos Dice",
    type: "primary",
    link: "https://malditos-dice.vercel.app/",
    video: "",
    imgUrl: "./images/malditos-dice.png",
    description: "For my hobby club (in progress)",
    sectionId: "freelancer",
    repoLink: "hobby-app",
    repoSite: "https://github.com/Victor-Grinan-Dev/",
    framework: "vue",
    technologies: ["vuex", "tailwind", "firebase"],
    deployed: "vercel",
  },
];

/* Accordion handler */
const accordion = document.getElementsByClassName("accordion");
const allPanels = document.querySelectorAll(".panel");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    const panel = this.nextElementSibling;
    for (let onePanel of allPanels) {
      if (onePanel !== this.nextElementSibling) onePanel.style.maxHeight = null;
      // if (onePanel.classList.contains()) {
      // }
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

class ProjectCard extends HTMLElement {
  /**
   *
   * @param {* string} id
   * @param {* string} title
   * @param {* primary || secundary} type
   * @param {* project URL string} link
   * @param {* image url} imgUrl
   * @param {* string } description
   */
  constructor(
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed
  ) {
    super();

    this.internetContent = `
    <div class="internetProjectsContainer intChild ${framework} ${technologies.map(
      (tech) => ` ${tech}`
    )}" id=${id}>
      <div class="small-img-container">
          <a href=${link} target='blank'>
            <img src=${imgUrl} alt=${id} class="small-project-img">
          </a>
      </div>
      <div class="small-tech-container">
      <img src="./icons/${framework}.png" alt="githubRepo" class="tiny-framework">
      ${technologies.map(
        (tech, i) =>
          `<img key=${i} src="./icons/${tech}.png" alt=${tech} class="tiny-tech-img">`
      )}
      <img  src="./icons/${deployed}.png" alt=${deployed} class="tiny-tech-img">
      </div>
      
          <a href=${link}><p class="small-project-title">${title}</p></a>
      
      
      <a href="${repoSite}${repoLink}" target="blank">
          <img src="${
            repoSite.includes("github")
              ? "./icons/github.png"
              : "./icons/gitlab.png"
          }" alt="${repoSite}" class="small-tech-img">
      </a>
    </div>
    `;

    this.content = `<div class="project ${type} flip-in ${
      type === "secundary" ? "invisible" : ""
    }">
    
            <a href=${link} target='blank'>
                <div id=${id} class="projectImg">
                    <img src=${imgUrl} alt=${id} >
                </div>
            </a> 

            <div class="description">
                <h6 class="projectTitle"> "${title}" </h6>
                <p class="descriptionText">${description}</p>
            </div>

            <a href="${repoSite}${repoLink}" target="blank">
                <img src="${
                  repoSite.includes("github")
                    ? "./icons/github.png"
                    : "./icons/gitlab.png"
                }" alt="githubRepo" class="repoLink">
            </a>
            <span class="deployTech">
              <a href="https://${deployed}.com/" target="blank" class="deployedLink">  
                <p class="tiny-text">deploy</p>              
                <img  src="./icons/${deployed}.png" alt=${deployed} class="tiny-tech-img ">
              </a>
            </span>

           <div class="technologies-container">   
            <img src="./icons/${framework}.png" alt="githubRepo" class="framework">
            ${technologies.map(
              (tech, i) =>
                ` <img key=${i} src="./icons/${tech}.png" alt="githubRepo" class="technologies">`
            )}
           </div>
        </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("project-card", ProjectCard);
}

projectsData.forEach((project) => {
  const {
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    sectionId,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed,
  } = project;
  const newProject = new ProjectCard(
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed
  );
  if (sectionId === "internet") {
    section[sectionId].innerHTML += newProject.internetContent;
  } else {
    section[sectionId].innerHTML += newProject.content;
  }
});

const techFilters = document.querySelectorAll(".tech_filter");

const selectChilds = (filterParam) => {
  const internetChilds = document.querySelectorAll(".intChild");
  internetChilds.forEach((child) => {
    if (filterParam === "all") {
      child.classList.remove("invisible");
    } else if (child.classList.contains(filterParam)) {
      child.classList.remove("invisible");
    } else {
      child.classList.add("invisible");
    }
  });
};

const changeFilter = (value) => {
  selectChilds(value);
};

techFilters.forEach((techFilter) => {
  techFilter.addEventListener("change", () => changeFilter(techFilter.value));
});

//hide/show projects
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");

let is_showing = false;

//TODO: a show all projects at once feature with search and filter

/* Skill functions */
const basicFrontend = document.querySelector("#basicFrontend div");
const frameworks = document.querySelector("#frameworks div");
const advanceFrontend = document.querySelector("#advanceFrontend div");
const advanceFrontend2 = document.querySelector("#advanceFrontend2 div");
const backendNode = document.querySelector("#backendNode div");
const backendPython = document.querySelector("#backendPython div");
const backendPHP = document.querySelector("#backendPHP div");
const cloudService = document.querySelector("#cloudService div");
const backendJava = document.querySelector("#backendJava div");
const embedSystems = document.querySelector("#embedSystems div");
const templating = document.querySelector("#templating div");
const cms = document.querySelector("#cms div");
const cicd = document.querySelector("#cicd div");
const otherSkills = document.querySelector("#otherSkills div");

const skillGroups = {
  basicFrontend: basicFrontend,
  frameworks: frameworks,
  advanceFrontend: advanceFrontend,
  advanceFrontend2: advanceFrontend2,
  backendNode: backendNode,
  backendPython: backendPython,
  backendPHP: backendPHP,
  cloudService: cloudService,
  backendJava: backendJava,
  embedSystems: embedSystems,
  templating: templating,
  cms: cms,
  cicd: cicd,
  otherSkills: otherSkills,
};
//todo: move skills data to database
const skillsData = [
  {
    id: "html",
    skillName: "HTML",
    stars: 3,
    imgUrl: "./icons/html.png",
    skillgroup: "basicFrontend",
    isInvisible: false,
  },
  {
    id: "css",
    skillName: "CSS",
    stars: 3,
    imgUrl: "./icons/css.png",
    skillgroup: "basicFrontend",
    isInvisible: false,
  },
  {
    id: "javascript",
    skillName: "Javascript",
    stars: 3,
    imgUrl: "./icons/javascript.png",
    skillgroup: "basicFrontend",
    isInvisible: false,
  },

  {
    id: "react",
    skillName: "React",
    stars: 3,
    imgUrl: "./icons/react.png",
    skillgroup: "frameworks",
    isInvisible: false,
  },
  {
    id: "vue",
    skillName: "Vue",
    stars: 3,
    imgUrl: "./icons/vue.png",
    skillgroup: "frameworks",
    isInvisible: false,
  },

  // {
  //     id:"nextjavascript",
  //     skillName:"Nextjavascript",
  //     stars:1,
  //     imgUrl:"./icons/next_javascript.png",
  //     skillgroup:"frameworks",
  //     isInvisible:false
  // },

  {
    id: "angular",
    skillName: "Angular",
    stars: 1,
    imgUrl: "./icons/angular.png",
    skillgroup: "frameworks",
    isInvisible: true,
  },
  {
    id: "typescript",
    skillName: "Typescript",
    stars: 2,
    imgUrl: "./icons/typescript.png",
    skillgroup: "advanceFrontend",
    isInvisible: false,
  },

  {
    id: "jquery",
    skillName: "jquery",
    stars: 2,
    imgUrl: "./icons/jquery.png",
    skillgroup: "advanceFrontend",
    isInvisible: false,
  },

  {
    id: "sass",
    skillName: "Sass",
    stars: 3,
    imgUrl: "./icons/sass.png",
    skillgroup: "advanceFrontend2",
    isInvisible: false,
  },
  {
    id: "tailwind",
    skillName: "Tailwind",
    stars: 3,
    imgUrl: "./icons/tailwind.png",
    skillgroup: "advanceFrontend2",
    isInvisible: false,
  },
  {
    id: "bootstrap",
    skillName: "Bootstrap",
    stars: 3,
    imgUrl: "./icons/bootstrap.png",
    skillgroup: "advanceFrontend2",
    isInvisible: false,
  },
  {
    id: "material_ui",
    skillName: "MUI",
    stars: 2,
    imgUrl: "./icons/material_ui.png",
    skillgroup: "advanceFrontend2",
    isInvisible: false,
  },

  {
    id: "node",
    skillName: "Node",
    stars: 2,
    imgUrl: "./icons/node.png",
    skillgroup: "backendNode",
    isInvisible: false,
  },
  {
    id: "express",
    skillName: "Express",
    stars: 2,
    imgUrl: "./icons/express.png",
    skillgroup: "backendNode",
    isInvisible: false,
  },

  {
    id: "python",
    skillName: "Python",
    stars: 3,
    imgUrl: "./icons/python.png",
    skillgroup: "backendPython",
    isInvisible: false,
  },
  {
    id: "django",
    skillName: "Django",
    stars: 2,
    imgUrl: "./icons/django.png",
    skillgroup: "backendPython",
    isInvisible: false,
  },
  {
    id: "flask",
    skillName: "Flask",
    stars: 2,
    imgUrl: "./icons/flask.png",
    skillgroup: "backendPython",
    isInvisible: false,
  },
  {
    id: "php",
    skillName: "PHP",
    stars: 2,
    imgUrl: "./icons/php.png",
    skillgroup: "backendPHP",
    isInvisible: true,
  },
  {
    id: "synfony",
    skillName: "Synfony",
    stars: 2,
    imgUrl: "./icons/symfony.png",
    skillgroup: "backendPHP",
    isInvisible: true,
  },
  {
    id: "laravel",
    skillName: "Laravel",
    stars: 0,
    imgUrl: "./icons/laravel.png",
    skillgroup: "backendPHP",
    isInvisible: true,
  },

  {
    id: "aws",
    skillName: "AWS",
    stars: 2,
    imgUrl: "./icons/aws.png",
    skillgroup: "cloudService",
    isInvisible: false,
  },
  {
    id: "firebase",
    skillName: "Firebase",
    stars: 2,
    imgUrl: "./icons/firebase.png",
    skillgroup: "cloudService",
    isInvisible: false,
  },
  {
    id: "azure",
    skillName: "Azure",
    stars: 0,
    imgUrl: "./icons/azure.png",
    skillgroup: "cloudService",
    isInvisible: true,
  },

  {
    id: "drupal",
    skillName: "Drupal",
    stars: 1,
    imgUrl: "./icons/drupal.png",
    skillgroup: "cms",
    isInvisible: false,
  },
  {
    id: "wordpress",
    skillName: "Wordpress",
    stars: 0,
    imgUrl: "./icons/word_press.png",
    skillgroup: "cms",
    isInvisible: false,
  },
  {
    id: "figma",
    skillName: "Figma",
    stars: 3,
    imgUrl: "./icons/figma.png",
    skillgroup: "otherSkills",
    isInvisible: false,
  },
  {
    id: "mysql",
    skillName: "MySQL",
    stars: 2,
    imgUrl: "./icons/mysql.png",
    skillgroup: "otherSkills",
    isInvisible: false,
  },
  {
    id: "git",
    skillName: "Git",
    stars: 3,
    imgUrl: "./icons/git.png",
    skillgroup: "otherSkills",
    isInvisible: false,
  },
  {
    id: "canva",
    skillName: "Canva",
    stars: 2,
    imgUrl: "./icons/canva.png",
    skillgroup: "otherSkills",
    isInvisible: false,
  },

  {
    id: "dotnet",
    skillName: ".Net",
    stars: 1,
    imgUrl: "./icons/dot_net.png",
    skillgroup: "embedSystems",
    isInvisible: false,
  },
  {
    id: "c",
    skillName: "C",
    stars: 1,
    imgUrl: "./icons/c.png",
    skillgroup: "embedSystems",
    isInvisible: false,
  },
  {
    id: "cpp",
    skillName: "C++",
    stars: 1,
    imgUrl: "./icons/c++.png",
    skillgroup: "embedSystems",
    isInvisible: false,
  },
  {
    id: "cs",
    skillName: "C#",
    stars: 1,
    imgUrl: "./icons/csharp.png",
    skillgroup: "embedSystems",
    isInvisible: false,
  },
  {
    id: "java",
    skillName: "Java",
    stars: 1,
    imgUrl: "./icons/java.png",
    skillgroup: "backendJava",
    isInvisible: false,
  },
  {
    id: "spring",
    skillName: "Spring",
    stars: 1,
    imgUrl: "./icons/spring.png",
    skillgroup: "backendJava",
    isInvisible: false,
  },
  {
    id: "kubernetes",
    skillName: "Kubernetes",
    stars: 1,
    imgUrl: "./icons/kubernetes.png",
    skillgroup: "cicd",
    isInvisible: false,
  },
  {
    id: "jenkins",
    skillName: "Jenkins",
    stars: 1,
    imgUrl: "./icons/jenkins.png",
    skillgroup: "cicd",
    isInvisible: false,
  },
  {
    id: "sonarcube",
    skillName: "SonarQube",
    stars: 1,
    imgUrl: "./icons/sonarqube.png",
    skillgroup: "cicd",
    isInvisible: false,
  },
  {
    id: "twig",
    skillName: "Twig",
    stars: 3,
    imgUrl: "./icons/twig.png",
    skillgroup: "templating",
    isInvisible: false,
  },
  {
    id: "ejs",
    skillName: "EJS",
    stars: 3,
    imgUrl: "./icons/ejs.png",
    skillgroup: "templating",
    isInvisible: false,
  },
  {
    id: "pug",
    skillName: "Pug",
    stars: 2,
    imgUrl: "./icons/pug.png",
    skillgroup: "templating",
    isInvisible: false,
  },
  // {
  //     id:"",
  //     skillName:"",
  //     stars:,
  //     imgUrl:"",
  //     skillgroup:"",
  //     isInvisible:false
  // },
];
class SkillCard extends HTMLElement {
  /**
   *
   * @param {string} id
   * @param {string} skillName
   * @param {int} stars
   * @param {string} imgUrl
   */
  constructor(id, skillName, stars, imgUrl, isInvisible) {
    super();
    this.content = `<div id=${id} class="skill" ${
      isInvisible ? "invisible" : null
    } >
                <img class='techLogo' src="${imgUrl}" alt="icon">
                <div class='skillValues'>
                    <p class='skillTitle'>${skillName}</p>
                    <p class='skillRating'>${
                      stars > 0 ? "⭐".repeat(stars) : " - "
                    }</p> 
                    <div class="fill-bar"><div class="level" id="HTML-level"></div></div>
                </div> 
            </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("skill-card", SkillCard);
}

const renderData = () => {
  renderSkills();
  calculatePercent();
};

const renderSkills = () => {
  skillsData.forEach((skill) => {
    const { id, skillName, stars, imgUrl, skillgroup, isInvisible } = skill;
    const newSkill = new SkillCard(id, skillName, stars, imgUrl, isInvisible);
    skillGroups[skillgroup].innerHTML += newSkill?.content;
  });
};

const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

/* Calculate XP% per skill group */
const allGroups = document.querySelectorAll(".skillGroup");
const calculatePercent = () => {
  let starText;
  allGroups.forEach((group) => {
    let stars = 0; //total of satrs in a skill group
    const overall = group.querySelector(".overall");
    const skillRatings = group.querySelectorAll(".skillRating");
    const skills = group.querySelector(".subSkills");
    skillRatings.forEach((rating) => {
      starText = rating.innerText;

      for (const char of starText) {
        if (char === "⭐") {
          stars++;
        }
      }
    });

    // const total = skills.childElementCount * 5
    const skillCount = skills.childElementCount;

    if (overall) {
      // overall.innerText = `${stars}/${total}`;

      overall.innerText = `${round(stars / skillCount, 1)}x⭐`;
    }
  });
};

renderData();

const showMoreSkills = document.querySelector(".showMoreSkills");
const primarySkillGroup = document.querySelectorAll(".primarySkillGroup");
const secundarySkillGroup = document.querySelectorAll(".secundarySkillGroup");
const notStudiedSkill = document.querySelectorAll(".notStudiedSkill");
let visibleSkill = false;

const toogleMoreSkills = () => {
  visibleSkill = !visibleSkill;
  secundarySkillGroup.forEach((item) => {
    item.classList.toggle("invisible");
  });
  primarySkillGroup.forEach((item) => {
    item.classList.toggle("invisible");
  });

  notStudiedSkill.forEach((item) => {
    item.classList.toggle("invisible");
  });

  if (visibleSkill) {
    showMoreSkills.innerText = "Show Strongest";
  } else {
    showMoreSkills.innerText = "Show Weakest";
  }
};

showMoreSkills.addEventListener("click", toogleMoreSkills);

//skill legend

const showSkillsLegend = document.querySelector(".showSkillsLegend");
const skillLegend = document.querySelector(".skillsLegend");
let isShowLegend = false;
const showSkillsLegendHandler = () => {
  skillLegend.classList.toggle("invisible");
  isShowLegend = !isShowLegend;
  isShowLegend
    ? (showSkillsLegend.innerText = "Hide Legend")
    : (showSkillsLegend.innerText = "Show Legend");
};

showSkillsLegend.addEventListener("click", showSkillsLegendHandler);

/* show certificates */

class CertificateCard extends HTMLElement {
  /**
   *
   * @param {string} id
   * @param {string} title
   * @param {string} docLink
   */
  constructor(id, title, docLink, isInvisible) {
    super();
    this.content = `
      <div id=${id} class="certificate ${
      isInvisible ? "irrelevant invisible" : ""
    }">
        <div>    
          <a class="certView" href=${docLink} target="_blank" >
            <div> 
              ${title} 
            </div>
            <div> 
              <img src=${docLink} frameborder="0" class='document docLink'/>  
            </div>
          </a>
        </div>
      </div>
    `;
  }
}

if ("customElements" in window) {
  customElements.define("certificate-cards", CertificateCard);
}

const mainCertificates = document.querySelector(".main-certificates");
const onlineCertificates1 = document.querySelector(".online-certificates1");
const onlineCertificates2 = document.querySelector(".online-certificates2");
const onlineCertificates3 = document.querySelector(".online-certificates3");
const onlineCertificates4 = document.querySelector(".online-certificates4");
const othersCertificates = document.querySelector(".othersCertificates");

const CertificateSections = {
  mainCertificates: mainCertificates,
  onlineCertificates1: onlineCertificates1,
  onlineCertificates2: onlineCertificates2,
  onlineCertificates3: onlineCertificates3,
  onlineCertificates4: onlineCertificates4,
  othersCertificates: othersCertificates,
};

//todo: move certificates to database

const allCertificate = [
  {
    id: "hbc",
    title: "Qualification in Information Tech",
    docLink: "./documents/HBC_graduation_certificate_small.png",
    section: "mainCertificates",
  },
  {
    id: "pythonBasics",
    title: 'SDA - "Python From Scratch"',
    docLink: "./documents/sda_certificate.png",
    section: "mainCertificates",
  },
  {
    id: "codeCommit",
    title: 'AWS - "CodeCommit"',
    docLink: "./documents/AWS_CodeCommit_Course_Completion_Certificate.png",
    section: "onlineCertificates1",
  },
  {
    id: "DevOps",
    title: 'AWS - "DevOps"',
    docLink: "./documents/AWS_DevOps_Course_Completion_Certificate.png",
    section: "onlineCertificates1",
  },
  {
    id: "EC2",
    title: 'AWS - "Elastic Compute Cloud"',
    docLink: "./documents/AWS_EC2_Completion_Certificate.png",
    section: "onlineCertificates1",
  },
  {
    id: "Namespaces",
    title: 'SfCasts - "PHP Namespaces"',
    docLink: "./documents/sfcasts-VictorGrinan-certificate-php-namespaces.png",
    section: "onlineCertificates2",
  },
  {
    id: "Symfony6",
    title: 'SfCasts - "Symfony 6"',
    docLink:
      "./documents/sfcasts-VictorGrinan-certificate-harmonious-development-with-symfony-6.png",
    section: "onlineCertificates2",
  },
  {
    id: "Composer",
    title: 'SfCasts - "Composer"',
    docLink: "./documents/sfcasts-VictorGrinan-certificate-composer.png",
    section: "onlineCertificates2",
  },
  {
    id: "css",
    title: 'DCourses - "CSS"',
    docLink: "./documents/disc_courses_css.png",
    section: "onlineCertificates3",
  },
  {
    id: "vue",
    title: 'DCourses - "Vue"',
    docLink: "./documents/Vue_Fundamentals.png",
    section: "onlineCertificates3",
  },
  {
    id: "sass",
    title: 'Udemy - "Advanced CSS" - "SASS"',
    docLink: "./documents/udemy_advanced_sass.jpg",
    section: "onlineCertificates4",
  },
  {
    id: "tailwind",
    title: 'Udemy - "Tailwind',
    docLink: "./documents/udemy_tailwind.jpg",
    section: "onlineCertificates4",
  },
  {
    id: "vue-guide",
    title: 'Udemy - "Vue Guide',
    docLink: "./documents/Vue_guide.jpg",
    section: "onlineCertificates4",
  },
  {
    id: "Entrepreneurship",
    title: 'YH - "Entrepreneurship"',
    docLink: "./documents/2015_yrittaja_todistus.png",
    section: "othersCertificates",
  },
  {
    id: "Investing",
    title: 'Udemy - "Investing in stocks"',
    docLink: "./documents/UC-a13b9ecc-951b-4ff9-8856-ee83cca0f6cd.png",
    section: "othersCertificates",
  },
  {
    id: "bachellor",
    title: 'Cuba - "Bachellor In Humanities"',
    docLink: "./documents/Bachiller.jpg",
    section: "othersCertificates",
  },
];

const renderCerts = () => {
  allCertificate.forEach((cert) => {
    const { id, title, docLink, section } = cert;
    const newCertCard = new CertificateCard(id, title, docLink);
    CertificateSections[section].innerHTML += newCertCard.content;
  });
};
renderCerts();

const moreCertificatesBtn = document.querySelector(".moreCertificates"); //btn

let is_certificateShowing = false;

const showAllCertificates = () => {
  is_certificateShowing = !is_certificateShowing;
  othersCertificates.classList.toggle("invisible");
  is_certificateShowing
    ? (moreCertificatesBtn.textContent = "Hide Irrelevant certificates")
    : (moreCertificatesBtn.textContent = "Show Irrelevant certificates");
};
moreCertificatesBtn.addEventListener("click", showAllCertificates);

/*certificates carousel */
const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel__track");
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");

allCertificate;

allCertificate.forEach((cert, i) => {
  track.innerHTML += `
        <li id="slide${i}" name="slide${i}" class="carousel__slide slide${i} ${
    i === 0 ? "current_slide" : ""
  }">
            <a href="${cert.docLink}" target="blank">
              <img src="${cert.docLink}" alt="slide${
    cert.id
  }" class="carousel__image"/>
            </a>
        </li>
    `;
  dotsNav.innerHTML += `
        <button class="carousel__indicator ${
          i === 0 ? "current_dot" : ""
        } "></button
    `;
});

const slides = Array.from(track.children);
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, i) => {
  slide.style.left = `${i * slideWidth}px`;
};

slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current_dot");
  targetDot.classList.add("current_dot");
};

const hideShowArrows = (targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    nextButton.classList.remove("is-hidden");
    prevButton.classList.remove("is-hidden");
  }
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetDot = currentDot.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(targetIndex);
  updateDots(currentDot, targetDot);
});

prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetDot = currentDot.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(targetIndex);
  updateDots(currentDot, targetDot);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current_slide");
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(targetIndex);
});

/* SHOW certificates Mode */
const gallery = document.querySelector(".gallery");
const galleryBtn = document.querySelector(".certDisplayMode");

let showAsGallery = false;

const toggleModeCert = () => {
  carousel.classList.toggle("invisible");
  gallery.classList.toggle("invisible");

  showAsGallery = !showAsGallery;

  if (showAsGallery) {
    galleryBtn.innerText = "Show as carousel";
  } else {
    galleryBtn.innerText = "Show as gallery";
  }
};

galleryBtn.addEventListener("click", toggleModeCert);

/* copyrights */
const year = new Date();
const yearSpan = document.querySelector(".year");
yearSpan.innerText = `${year.getFullYear()}`;

/* reset animations */

const resetAll = () => {
  hexMap.innerHTML = "";
  grinan.classList.remove("deattach");
  g.style.color = "#white";
  victor.classList.remove("lightsOn");
  v.style.color = "#white";
  // developer.classList.remove("spin");
  portfolio.classList.remove("spin");
};

/* hex Map */
// const hexMap = document.querySelector(".hexMap");
// const hexSize = 50;

// let width = document.body.clientWidth;
// let height = document.body.clientHeight;
// let rows = height / 4 / hexSize;
// let columns = width / hexSize - 1;

// window.addEventListener("resize", () => {
//   resetAll();
// });

// const createHexMatrix = () => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       const blank = document.createElement("img");
//       blank.id = `${i}${j}`;
//       blank.src = i % 2 === 0 ? "./hexes/selected.png" : "./hexes/hostile.png";
//       blank.classList = "hex";
//       blank.style.left =
//         i % 2 === 0 ? `${j * hexSize}px` : `${j * hexSize + hexSize / 2}px`;
//       blank.style.top = `${i * (hexSize * 0.75)}px`;
//       hexMap.appendChild(blank);
//     }
//   }
// };
