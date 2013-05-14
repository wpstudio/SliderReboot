$(function () {
  $("#slider_reboot-container").sliderreboot({
    slideMovement: 100,
    slideSpeed: 1000,
    easingType: "easeInOutQuart",
    itemSelector: ".item",
    itemBackgroundSelector: ".background",
    elementSpeed: 1100,
    itemForegroundElementSelector: ".foreground .element",
    controlsSelector: "#slider-pagination a"
  });
});
