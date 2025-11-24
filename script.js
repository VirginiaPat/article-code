"use strict";

const shareBtnMobile = document.getElementById("share-btn-mobile");
const shareBtnMobilePopup = document.getElementById("share-btn-mobile-popup");
const popupMobile = document.getElementById("mobile-popup");
const avatarContainer = document.getElementById("avatar-container");

const shareBtnTabletDesktop = document.getElementById("share-btn-tbl-desktop");
const popupTabletDesktop = document.getElementById("tablet-desktop-popup");

// popup functionality mobile
const mobilePopupFunction = function () {
  if (popupMobile.classList.contains("hidden")) {
    avatarContainer.classList.remove("flex");
    avatarContainer.classList.add("hidden");
    popupMobile.classList.remove("hidden");
    popupMobile.classList.add("flex");
  } else {
    popupMobile.classList.remove("flex");
    popupMobile.classList.add("hidden");
    avatarContainer.classList.remove("hidden");
    avatarContainer.classList.add("flex");
  }
};

shareBtnMobile.addEventListener("click", mobilePopupFunction);
shareBtnMobilePopup.addEventListener("click", mobilePopupFunction);

// popup functionality tablet-desktop
shareBtnTabletDesktop.addEventListener("click", function () {
  if (popupTabletDesktop.classList.contains("md:hidden")) {
    popupTabletDesktop.classList.remove("md:hidden");
    popupTabletDesktop.classList.add("md:block");
  } else {
    popupTabletDesktop.classList.remove("md:block");
    popupTabletDesktop.classList.add("md:hidden");
  }
});

// close popup when clicking outside-Mobile
document.addEventListener("click", function (e) {
  if (!shareBtnMobile.contains(e.target) && !popupMobile.contains(e.target)) {
    popupMobile.classList.remove("flex");
    popupMobile.classList.add("hidden");
    avatarContainer.classList.remove("hidden");
    avatarContainer.classList.add("flex");
  }
});

// close popup when clicking outside-tablet and desktop
document.addEventListener("click", function (e) {
  if (
    !shareBtnTabletDesktop.contains(e.target) &&
    !popupTabletDesktop.contains(e.target)
  ) {
    popupTabletDesktop.classList.remove("md:block");
    popupTabletDesktop.classList.add("md:hidden");
  }
});
