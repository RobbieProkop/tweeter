$(() => {
  $("#tweet-text").on("input", function () {
    const $inputNum = $(this).val().length;
    const $counterVal = $(this).next().children(".counter");
    const $remainingChars = $counterVal.val(140 - $inputNum);
    if ($remainingChars.val() < 0) {
      $counterVal.addClass("negative-num");
      console.log("we are negative!");
    } else {
      $counterVal.removeClass("negative-num");
    }
  });
});
