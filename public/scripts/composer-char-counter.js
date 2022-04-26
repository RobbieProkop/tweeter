// $(document).ready("blur", (event) => {
//   console.log(event);
// });

$(() => {
  $("#tweet-text").on("input", function () {
    console.log(this);
    const $startNum = $(this).val();
    console.log($startNum);
    const $childrenVal = $(this).next().children(".counter").val();

    console.log($childrenVal);
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
