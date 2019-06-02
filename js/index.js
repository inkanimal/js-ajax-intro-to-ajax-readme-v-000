// your code here
function showRepositories() {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}


function showRepositories() {
  console.log(this.responseText);
  let repoList = '<ul>';
  for (var i = 0; i < this.responseText.length; i++) {
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}