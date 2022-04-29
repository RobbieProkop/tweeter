/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//makes an ajax request to GET the tweets in the database to display them on the screen
const loadTweets = () => {
  $.ajax({
    type: "GET",
    url: "/tweets/",
    success: (response) => {
      renderTweets(response);
    },
  });
};

//document.ready
$(() => {
  //load all the tweets we currently have
  loadTweets();

  //upon form submission, prevent submit
  $("form").submit(function (event) {
    event.preventDefault();
    let $error = $("#error");
    const $textarea = $("#tweet-text").val().trim();
    $error.empty();
    if (!$textarea) {
      const enterTweet = "Please enter a tweet!";
      $error.slideDown(250);
      $error.append(
        `<i class= 'fa-solid fa-circle-exclamation'></i> ${enterTweet}`
      );
      return $error;
    } else if ($textarea.length > 140) {
      const tooMany = "Character limit reached";
      $error.slideDown(250);
      $error.append(
        `<i class= 'fa-solid fa-circle-exclamation'></i> ${tooMany}`
      );
      return $error;
    }
    if ($error.is(":visible")) {
      $error.slideUp(200);
    }
    //create a string to use
    const str = $("form").serialize();
    //post that string
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: str,
      success: () => {
        $.ajax({
          type: "GET",
          url: "/tweets/",
          success: (response) => {
            $("#tweet-container").empty();
            renderTweets(response);
          },
        });
      },
    });
    // this clears the textarea
    $("#tweet-text").val("");
    $(this).find(".counter").val(140);
    console.log();
  });
});
