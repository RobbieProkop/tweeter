//creates an element with HTML for when a tweet is made
const createTweetElement = (data) => {
  $("time.timeago").timeago();
  const $tweets = `<article>
  <header class="tweet-header">
  <div class="user">
  <img src=
  ${data.user.avatars} alt="" />
  <h3>${data.user.name}</h3>
  </div>
  <h4>${data.user.handle}</h4>
  </header>
  <div class="tweet">${escape(data.content.text)}</div>
  
  <footer>
  <p>${$.timeago(data.created_at)}</p>
  <div>
  <i class="fas fa-solid fa-flag"></i>
  <i class="fa-solid fa-arrows-rotate"></i>
  <i class="fas fa-solid fa-heart"></i>
  </div>
  </footer>
  </article>`;
  return $tweets;
};

//grabs all the tweets in the database, sorts them, and adds them to the top of the main container
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
};
