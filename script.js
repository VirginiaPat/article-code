"use strict";

const shareBtnMobile = document.getElementById("share-btn-mobile");
const shareBtnMobilePopup = document.getElementById("share-btn-mobile-popup");
const popupMobile = document.getElementById("mobile-popup");
const avatarContainer = document.getElementById("avatar-container");

const shareBtnTabletDesktop = document.getElementById("share-btn-tbl-desktop");
const popupTabletDesktop = document.getElementById("tablet-desktop-popup");
const closePopUpBtnTabletDesktop = document.getElementById(
  "close-popup-btn-tb-dskt"
);

//MOBILE popup functionality
const closeMobilePopup = function () {
  popupMobile.classList.remove("flex");
  popupMobile.classList.add("hidden");
  avatarContainer.classList.remove("hidden");
  avatarContainer.classList.add("flex");
};
const openMobilePopup = function () {
  avatarContainer.classList.remove("flex");
  avatarContainer.classList.add("hidden");
  popupMobile.classList.remove("hidden");
  popupMobile.classList.add("flex");
};

const togglemobilePopup = function () {
  if (popupMobile.classList.contains("hidden")) {
    openMobilePopup();
  } else {
    closeMobilePopup();
  }
};

shareBtnMobile.addEventListener("click", togglemobilePopup);
shareBtnMobilePopup.addEventListener("click", togglemobilePopup);

// close popup when clicking outside
document.addEventListener("click", (e) => {
  if (!shareBtnMobile.contains(e.target) && !popupMobile.contains(e.target)) {
    closeMobilePopup();
  }
});

// close popup when clicking ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popupMobile.classList.contains("hidden")) {
    closeMobilePopup();
  }
});
///////////////////////////////////////////////////////////////////////////////////////

//TABLET-DESKTOP popup functionality
const openTabletDesktPopup = function () {
  popupTabletDesktop.removeAttribute("hidden");
  popupTabletDesktop.classList.remove("md:hidden");
  popupTabletDesktop.classList.add("md:block");
  shareBtnTabletDesktop.setAttribute("aria-expanded", "true");
};

const closeTabletDesktPopup = function () {
  popupTabletDesktop.setAttribute("hidden", "");
  popupTabletDesktop.classList.remove("md:block");
  popupTabletDesktop.classList.add("hidden");
  shareBtnTabletDesktop.setAttribute("aria-expanded", "false");
};

shareBtnTabletDesktop.addEventListener("click", () => {
  const hidden = popupTabletDesktop.hasAttribute("hidden");

  if (hidden) {
    openTabletDesktPopup();
  } else {
    closeTabletDesktPopup();
  }
});

// close popup button
closePopUpBtnTabletDesktop.addEventListener("click", () =>
  closeTabletDesktPopup()
);

// close popup when clicking outside
document.addEventListener("click", (e) => {
  if (
    !shareBtnTabletDesktop.contains(e.target) &&
    !popupTabletDesktop.contains(e.target) &&
    !closePopUpBtnTabletDesktop.contains(e.target)
  ) {
    closeTabletDesktPopup();
  }
});

// close popup when clicking ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popupTabletDesktop.hasAttribute("hidden")) {
    closeTabletDesktPopup();
  }
});
