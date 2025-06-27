// Votes storage
const votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0
};

// Called when user clicks a vote button
function vote(language) {
  if (votes[language] !== undefined) {
    votes[language]++;
    updateVotes();
  }
}

// Updates the DOM with latest votes
function updateVotes() {
  document.getElementById('js-count').textContent = votes.JavaScript;
  document.getElementById('py-count').textContent = votes.Python;
  document.getElementById('java-count').textContent = votes.Java;
}

// Simulate real-time random votes every 2 seconds
setInterval(() => {
  const languages = Object.keys(votes);
  const randomLang = languages[Math.floor(Math.random() * languages.length)];
  votes[randomLang]++;
  updateVotes();
}, 2000);
