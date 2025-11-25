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
  // Show popupElement if showPopup is true, else hide it
  popupElement.classList.toggle("flex", showPopup);
  popupElement.classList.toggle("hidden", !showPopup);

  // Show avatarElement if showPopup is false, else hide it
  avatarElement.classList.toggle("hidden", showPopup);
  avatarElement.classList.toggle("flex", !showPopup);
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
    popupMobile.classList.contains("flex") &&
    !shareBtnMobile.contains(e.target) &&
    !popupMobile.contains(e.target)
  ) {
    closeMobilePopup(); //close only when needed
  }

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
  if (e.key === "Escape") {
    if (!popupMobile.classList.contains("hidden")) {
      closeMobilePopup();
      e.preventDefault(); // Prevent default Escape key behavior
      e.stopPropagation(); // Stop event from reaching other listeners
    } else if (!popupTabletDesktop.hasAttribute("hidden")) {
      closeTabletDesktPopup();
      e.preventDefault();
      e.stopPropagation();
    }
  }
});
