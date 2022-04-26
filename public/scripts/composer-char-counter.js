// $(document).ready("blur", (event) => {
//   console.log(event);
// });

$(() => {
  $("#tweet-text").on("input", function () {
    const $inputNum = $(this).val().length;
    // console.log($inputNum);
    const $childrenVal = $(this)
      .next()
      .children(".counter")
      .val(140 - $inputNum);
    // const $newVal = $childrenVal - $inputNum;

    // console.log($childrenVal);
  });
});

// $("#idofsomething").on("keydown", () => {
//   console.log("you pressed a key");
//   const $input = $("#new-list-item");
//   const userInput = $input.val();
//   console.log(userInput);

//   const $li = $("<li>").text(userInput);
//   $mainlist.prepend($li);
// });
