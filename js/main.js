$(document).ready(function () {
  // nav
  const body = $("body"),
    menu = $(".menu-icon"),
    nav = $(".nav"),
    header = $("header");
  let isMenuOpen = false;
  menu.click(function () {
    isMenuOpen = !isMenuOpen;
    isMenuOpen ? openMenu() : closeMenu();
  });
  function openMenu() {
    menu.add(nav).add(header).addClass("open");
    body.addClass("noScrBar");
  }
  function closeMenu() {
    isMenuOpen = false;
    menu.add(nav).add(header).removeClass("open");
    body.removeClass("noScrBar");
  }
  $(window).on("resize", function () {
    let width = $(window).width();
    width > 748 && closeMenu();
  });

  // popup關閉
  $(".pop-close,.popClose").click(function () {
    $(this).closest(".popup").fadeOut();
  });

  $(".open-popup").click(function (e) {
    e.preventDefault();
    var target = $(this).data("pop");
    $("#" + target).fadeIn();
  });

  $("#activitySelect").on("change", function () {
    const url = $(this).val();
    if (url) {
      window.location.href = url; // 同一視窗開啟
    }
  });
});
