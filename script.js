const cards = [
  {
    id: 1,
    img: "/asset/development.png",
    tag: "development",
    title: "Best Frontend Frameworks",
    text: `  A comprehensive comparison of the most popular Frontend
                Frameworks and libraries that developers are using to build
                modern web applications.`,
    userImage: "asset/user-1.jpg",
    name: "Jessica Chen",
    role: "Developer",
  },
  {
    id: 2,
    img: "/asset/UIdesigner.jpg",
    Tag: "UI designer",
    title: "Modern UI Trend for 2025",
    text: ` Explore the latest user interface design trends that are shaping
                the digital landscape this year Lorem ipsum dolor sit amet`,
    userImage: "asset/user-2.jpg",
    name: "Alex Smith",
    role: "UI Designer",
  },
  {
    id: 3,
    img: "/asset/AIUser@2x.webp",
    Tag: "AI",
    title: "AI User Experience Design",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                sequi obcaecati inventore sunt aspernatur labore veniam ipsam
                tempora nam libero earum`,
    userImage: "asset/user-3.jpg",
    name: "Anna Green",
    role: "AI",
  },
  {
    id: 4,
    img: "/asset/workSpace.jpg",
    Tag: "Productivity",
    title: "Workspace Design Focus",
    text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                sequi obcaecati inventore sunt aspernatur labore veniam ipsam
                tempora nam libero earum`,
    userImage: "asset/user4.jpg",
    name: "Ali Aria",
    role: "Workspace Designer",
  },
  {
    id: 5,
    img: "/asset/workSpace.jpg",
    Tag: "Animation",
    title: "Micro Animation Design",
    text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                sequi obcaecati inventore sunt aspernatur labore veniam ipsam
                tempora nam libero earum`,
    userImage: "asset/user-5.jpg",
    name: "Hannah Gomez",
    role: "Animation Designer",
  },
];

const cardList = document.querySelector(".card-list");

window.addEventListener("DOMContentLoaded", displayCardList);

function displayCardList() {
  const cardsArray = cards.map((card) => {
    return ` <div class="card swiper-slide">
    <div class="card-img">
      <img src=${card.img} alt=${card.tag} />
      <p class="card-tag">${card.tag}</p>
    </div>
    <div class="card-content">
      <h3 class="card-title">${card.title}</h3>
      <p class="card-text">
        ${card.text}
      </p>
      <div class="card-footer">
        <div class="card-profile">
          <img src=${card.userImage} alt=${card.name} />
          <div class="card-profile-info">
            <span class="card-profile-name">${card.name}</span>
            <span class="card-profile-role">${card.role}</span>
          </div>
        </div>
        <a href="#" class="card-button">Read More</a>
      </div>
    </div>
  </div>`;
  });

  const cardsHTML = cardsArray.join("");
  cardList.innerHTML = cardsHTML;
}

const swiper = new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1035: {
      slidesPerView: 3,
    },
  },
});
