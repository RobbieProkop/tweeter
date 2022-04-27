/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };
  const data = [
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
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1650809393483,
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
        name: "Buddha",
        avatars: "https://imgur.com/a/yOeuWU4",
        handle: "@Buddha",
      },
      content: {
        text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
      },
      created_at: 1650982193483,
    },
  ];

  // const renderTweets = (tweets) => {
  //   tweets.forEach((tweet) => {
  //     createTweetElement(tweets);
  //   });
  // };

  const createTweetElement = (tweetData) => {
    return $(`<article>
    <header class="tweet-header">
      <div class="user">
      <img src=
        ${tweetData.user.avatars} alt="" />
        <h3>${tweetData.user.name}</h3>
      </div>
      <h4>${tweetData.user.handle}</h4>
    </header>
    <div class="tweet">${tweetData.content.text}</div>

    <footer>
      <p>${tweetData.created_at}</p>
      <div>
        <i class="fas fa-solid fa-flag"></i>
        <i class="fa-solid fa-arrows-rotate"></i>
        <i class="fas fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`);
  };
  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $("#tweet-container").append($tweet);
});
