const userList = document.querySelector(".user-list");
const userArea = document.querySelector(".user-area");
const userAreaContent = document.querySelector(".user-area-content");

document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("user-list") &&
    !e.target.classList.contains("user-area") &&
    !e.target.classList.contains("user-area-content") &&
    !e.target.classList.contains("user-profile") &&
    !e.target.classList.contains("user-profile-name") &&
    !e.target.classList.contains("user-area-content-centred") &&
    !e.target.classList.contains("user-links") &&
    !e.target.classList.contains("user-profile-img") &&
    !e.target.classList.contains("next-slide")
  ) {
    userAreaContent.classList.remove("active");
    userList.classList.remove("active");
  }
});

userArea.addEventListener("click", () => {
  if (userAreaContent.classList.contains("active")) {
    userAreaContent.classList.remove("active");
    userList.classList.remove("active");
  } else {
    userAreaContent.classList.add("active");
    userList.classList.add("active");
  }
});

if (window.innerWidth <= 600) {
  swiperResponsive(1, "slider-navigation1");
} else if (window.innerWidth <= 992) {
  swiperResponsive(3, "slider-navigation1");
} else if (window.innerWidth <= 1200) {
  swiperResponsive(4, "slider-navigation1");
} else {
  swiperResponsive(5, "slider-navigation1");
}

if (window.innerWidth <= 600) {
  swiperResponsive(1, "slider-navigation2");
} else if (window.innerWidth <= 992) {
  swiperResponsive(2, "slider-navigation2");
} else if (window.innerWidth <= 1200) {
  swiperResponsive(3, "slider-navigation2");
} else {
  swiperResponsive(4, "slider-navigation2");
}

window.addEventListener("resize", () => {
  let winWidth = this.innerWidth;

  if (winWidth <= 600) {
    swiperResponsive(1, "slider-navigation1");
  } else if (winWidth <= 992) {
    swiperResponsive(3, "slider-navigation1");
  } else if (winWidth <= 1200) {
    swiperResponsive(4, "slider-navigation1");
  } else {
    swiperResponsive(5, "slider-navigation1");
  }

  if (winWidth <= 600) {
    swiperResponsive(1, "slider-navigation2");
  } else if (winWidth <= 992) {
    swiperResponsive(2, "slider-navigation2");
  } else if (winWidth <= 1200) {
    swiperResponsive(3, "slider-navigation2");
  } else {
    swiperResponsive(4, "slider-navigation2");
  }
});

swiperResponsive(1, "features-area-swiper");

function swiperResponsive(viewCount, selector) {
  var swiper = new Swiper(`.${selector}`, {
    slidesPerView: viewCount,
    spaceBetween: 10,
    slidesPerGroup: viewCount,
    // loop: true,
    // loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });
}

// ===================================================================

const hamburgerBtn = document.querySelector(".hamburger-btn");
const mainNav = document.querySelector(".header-nav ul");

const optionsMobileV = document.querySelector(".options-mobile-v");
const optionsMobileVBtn = document.querySelector(".options-mobile-v-btn");

// Header Bottom Mobile View

hamburgerBtn.addEventListener("click", () => {
  if (mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
  } else {
    mainNav.classList.add("open");
    optionsMobileV.classList.remove("open");
  }
});

// options-mobile-v-btn

optionsMobileVBtn.addEventListener("click", () => {
  if (optionsMobileV.classList.contains("open")) {
    optionsMobileV.classList.remove("open");
  } else {
    optionsMobileV.classList.add("open");
    mainNav.classList.remove("open");
  }
});

const headerBottom = document.querySelector(".header-bottom");
const linkIcons = headerBottom.querySelectorAll(".fa-chevron-down");

window.addEventListener("resize", () => {
  changeIcon(window.innerWidth, 951, "fa-plus");
});

changeIcon(window.innerWidth, 951, "fa-plus");

const dropdownButtons = document.querySelectorAll(".has-drop");

dropdownButtons.forEach((item) => {
  const dropdownBtn = item;
  const dropdownMenu = item.nextElementSibling;

  if (dropdownMenu.classList.contains("open")) {
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("open");
    });
  } else {
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("open");
    });
  }
});

// Search Button
const searchBtn = document.querySelector(".search-btn");
const closeSearch = document.querySelector(".close-search");
const searchForm = document.querySelector(".search-form");

searchBtn.addEventListener("click", () => {
  searchForm.classList.add("open");
});

closeSearch.addEventListener("click", () => {
  searchForm.classList.remove("open");
});

function changeIcon(selector, width, newIcon) {
  if (selector <= width) {
    linkIcons.forEach((icon) => {
      icon.classList.add(newIcon);
    });
  } else {
    linkIcons.forEach((icon) => {
      icon.classList.remove(newIcon);
    });
  }
}

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".slider-navigation .swiper-slide", { interval: 200 });

// Let me help you sidebar

const sideToggleBtn = document.querySelector(".let-me-help-you .toggle-btn");
const parent = sideToggleBtn.parentElement;
const sideClose = document.querySelector(".let-me-help-you .close-side");
let sideOpen = false;

document.onclick = function (e) {
  if (
    !e.target.classList.contains("let-me-help-you") &&
    !e.target.classList.contains("toggle-btn") &&
    !e.target.classList.contains("let-me-help-you-row") &&
    !e.target.classList.contains("next-slide")
  ) {
    if (sideOpen) {
      parent.style.left = `-${parent.clientWidth}px`;
      sideOpen = false;
    }
  }
};

sideToggleBtn.addEventListener("click", () => {
  if (sideOpen) {
    parent.style.left = `-${parent.clientWidth}px`;
    sideOpen = false;
  } else {
    parent.style.left = "0";
    sideOpen = true;
  }

  sideClose.addEventListener("click", () => {
    parent.style.left = `-${parent.clientWidth}px`;
    sideOpen = false;
  });
});

const sideCollapses = document.querySelectorAll(".side-collapse button");

sideCollapses.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnIcon = btn.querySelector("i");

    if (btn.dataset.open == "false") {
      btn.dataset.open = "true";
      btnIcon.classList.add("fa-minus");
      btnIcon.classList.remove("fa-plus");

      if (btn.parentElement.classList.contains("sub-collapse")) {
        btn.style.background = "#00783f";
        btn.style.color = "#fff";
      } else {
        btn.style.background = "#9d7d24";
      }
    } else {
      btn.dataset.open = "false";

      btnIcon.classList.remove("fa-minus");
      btnIcon.classList.add("fa-plus");

      if (btn.parentElement.classList.contains("sub-collapse")) {
        btn.style.background = "#fff";
        btn.style.color = "#9d7d24";
      } else {
        btn.style.background = "#222";
      }
    }
  });
});

const didYouBenefitBtns = document.querySelectorAll(".did-you-benefit-btn li");
const didYouBenefitChooic = document.querySelectorAll(
  ".did-you-benefit-chooic"
);

didYouBenefitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    didYouBenefitChooic.forEach((item) => {
      item.style.display = "none";
    });

    document.querySelector(`.${btn.dataset.chooic}`).style.display = "block";
  });
});

maxChecks(".did-you-benefit-yes", 2);
maxChecks(".did-you-benefit-no", 2);

function maxChecks(selector, max) {
  var checks = document.querySelectorAll(`${selector} input`);
  var max = max;

  checks.forEach((check) => check.addEventListener("click", selectiveCheck));

  function selectiveCheck(event) {
    var checkedChecks = document.querySelectorAll(`${selector} input:checked`);

    if (checkedChecks.length > max) {
      event.preventDefault();
    }
  }
}

const formCancel = document.querySelectorAll(".form-btns .cancel");
formCancel.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = (btn.parentElement.parentElement.style.display = "none");
  });
});

// Tabs
const tabs = document.querySelectorAll(".devlogs-tabs #tabs a");
const tabsContent = document.querySelectorAll(".devlogs-tabs .tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((el) => {
      el.classList.remove("active");
    });

    tabsContent.forEach((el) => {
      el.classList.remove("active");
    });

    tab.classList.add("active");
    document.getElementById(`${tab.dataset.tab}`).classList.add("active");
  });
});

// Latest News
document.addEventListener("DOMContentLoaded", () => {
  const tabsButtons = document.querySelectorAll(".tabs-buttons li");

  tabsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeClasses(tabsButtons, "active");
      btn.classList.add("active");

      document
        .querySelectorAll(".tabs-content .heroslider-area")
        .forEach((item) => {
          item.style.display = "none";
        });

      document.querySelector(
        `.tabs-content .${btn.dataset.tab}`
      ).style.display = "block";

      document
        .querySelectorAll(`.tabs-content .${btn.dataset.tab} .slick-dots li`)[1]
        .querySelector("button")
        .click();

      setTimeout(() => {
        document
          .querySelectorAll(
            `.tabs-content .${btn.dataset.tab} .slick-dots li`
          )[0]
          .querySelector("button")
          .click();
      }, 510);
    });
  });

  function removeClasses(elements, cls) {
    elements.forEach((item) => {
      item.classList.remove(cls);
    });
  }

  $(".notification-btn").on("click", () => {
    $(".notification-content").fadeToggle();
    userAreaContent.classList.remove("active");
    userList.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("notification-btn") &&
      !e.target.classList.contains("notification-content") &&
      !e.target.classList.contains("noti-item") &&
      !e.target.classList.contains("next-slide")
    ) {
      $(".notification-content").fadeOut();
    }
  });
});

// POPUP BANNER
if (document.querySelector(".popup-banner") !== null) {
  const popupBanner = document.querySelector(".popup-banner");
  const closeBanner = document.querySelector(".popup-banner_close");
  const closeBanner2 = document.querySelector(".popup-banner_close2");

  window.addEventListener("DOMContentLoaded", () => {
    popupBanner.style.display = "block";
    closeBanner.addEventListener(
      "click",
      () => (popupBanner.style.display = "none")
    );
    closeBanner2.addEventListener(
      "click",
      () => (popupBanner.style.display = "none")
    );
  });
}

// animate__shakeX
// noti-serv

window.addEventListener("scroll", () => {
  const featuresAreaSection = document.querySelector(".features-area-section");
  const bells = featuresAreaSection.querySelectorAll(".noti-serv");

  if (window.scrollY >= featuresAreaSection.scrollHeight + 200) {
    bells.forEach((bell) =>
      bell.classList.add("animate__swing", "animate__repeat-3")
    );
  } else {
    bells.forEach((bell) =>
      bell.classList.remove("animate__swing", "animate__repeat-3")
    );
  }
});
