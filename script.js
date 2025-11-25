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

// Helper to toggle classes for popup and avatar container
const togglePopup = function (popupElement, avatarElement, showPopup) {
  if (showPopup) {
    popupElement.classList.remove("hidden");
    popupElement.classList.add("flex");
    avatarElement.classList.remove("flex");
    avatarElement.classList.add("hidden");
  } else {
    popupElement.classList.remove("flex");
    popupElement.classList.add("hidden");
    avatarElement.classList.remove("hidden");
    avatarElement.classList.add("flex");
  }
};

const openMobilePopup = function () {
  togglePopup(popupMobile, avatarContainer, true);
};
const closeMobilePopup = function () {
  togglePopup(popupMobile, avatarContainer, false);
};

const toggleMobilePopup = function () {
  if (popupMobile.classList.contains("hidden")) {
    openMobilePopup();
  } else {
    closeMobilePopup();
  }
};

shareBtnMobile.addEventListener("click", toggleMobilePopup);
shareBtnMobilePopup.addEventListener("click", toggleMobilePopup);

// close popup when clicking outside
document.addEventListener("click", (e) => {
  if (
    popupMobile.classList.contains("flex") &&
    !shareBtnMobile.contains(e.target) &&
    !popupMobile.contains(e.target)
  ) {
    closeMobilePopup(); //close only when needed
  }
});

///////////////////////////////////////////////////////////////////////////////////////

//TABLET-DESKTOP popup functionality
const togglePopupTabletDeskt = function (popupElement, shareBtn, showPopup) {
  if (showPopup) {
    popupElement.removeAttribute("hidden");
    popupElement.classList.remove("md:hidden");
    popupElement.classList.add("md:block");
    shareBtn.setAttribute("aria-expanded", "true");
  } else {
    popupElement.setAttribute("hidden", "");
    popupElement.classList.remove("md:block");
    popupElement.classList.add("md:hidden");
    shareBtn.setAttribute("aria-expanded", "false");
  }
};

const openTabletDesktPopup = function () {
  togglePopupTabletDeskt(popupTabletDesktop, shareBtnTabletDesktop, true);
};

const closeTabletDesktPopup = function () {
  togglePopupTabletDeskt(popupTabletDesktop, shareBtnTabletDesktop, false);
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
    popupTabletDesktop.classList.contains("md:block") &&
    !shareBtnTabletDesktop.contains(e.target) &&
    !popupTabletDesktop.contains(e.target) &&
    !closePopUpBtnTabletDesktop.contains(e.target)
  ) {
    closeTabletDesktPopup();
  }
});

// ALL BREAKPOINTS: close popup when clicking ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popupMobile.classList.contains("hidden")) {
    closeMobilePopup();
  }
  if (e.key === "Escape" && !popupTabletDesktop.hasAttribute("hidden")) {
    closeTabletDesktPopup();
  }
});
