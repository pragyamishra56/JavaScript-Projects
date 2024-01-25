const tweetFrom = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetFrom.addEventListener('submit', function (e) {
  e.preventDefault();

  const usernameInput = tweetFrom.elements.username;
  const tweetInput = tweetFrom.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
}