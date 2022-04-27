/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Buddha",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@Buddha",
    },
    content: {
      text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    },
    created_at: 1650982193483,
  },
  {
    user: {
      name: "LaoTzu",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@Ltzu",
    },
    content: {
      text: "Nature does not hurry, yet everything is accomplished",
    },
    created_at: 1650895793483,
  },
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1650722993483,
  },
];

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

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
};

$(() => {
  renderTweets(data);

  $("form").submit(function (event) {
    event.preventDefault();
    const str = $("form").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: str,
      success: () => {
        $("#tweet-container").empty();
        $.ajax({
          type: "GET",
          url: "/tweets/",
          success: (response) => {
            renderTweets(response);
          },
        });
      },
    });
  });
});
