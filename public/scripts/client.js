/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//creates an element with HTML for when a tweet is made
const createTweetElement = (data) => {
  $("time.timeago").timeago();
  const $tweets = $(`<article>
  <header class="tweet-header">
  <div class="user">
  <img src=
  ${data.user.avatars} alt="" />
  <h3>${data.user.name}</h3>
  </div>
  <h4>${data.user.handle}</h4>
  </header>
  <div class="tweet">${data.content.text}</div>
  
  <footer>
  <p>${$.timeago(data.created_at)}</p>
  <div>
  <i class="fas fa-solid fa-flag"></i>
  <i class="fa-solid fa-arrows-rotate"></i>
  <i class="fas fa-solid fa-heart"></i>
  </div>
  </footer>
  </article>`);
  return $tweets;
};

//grabs all the tweets in the database, sorts them, and adds them to the top of the main container
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
};

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
    if (Number($(this).find(".counter").text()) < 0) {
      return alert("Max character limit reached");
    } else if (Number($(this).find(".counter").text()) >= 140) {
      return alert("Please enter a tweet!");
    }
    //create a string to use
    const str = $("form").serialize();
    //post that string
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: str,
    });
    //empty the tweets that we previously had,
    $("#tweet-container").empty();
    //add the tweets again, but this time with the new tweet at the top
    loadTweets();
  });
});
