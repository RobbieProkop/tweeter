$(() => {
  //toggle write tweet area
  $(".toggle-tweet").on("click", function () {
    $(this)
      .parents("nav")
      .next()
      .children("main")
      .children(":first-child")
      .slideToggle();

    console.log();
  });
});
