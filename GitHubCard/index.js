/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
const getCardForUser = (userName1) => {
  axios
  .get(`https://api.github.com/users/${userName1}`)
  .then((res) => {
  const makeCards = cardMaker(res.data);
  const cards = document.querySelector('.cards');
  cards.appendChild(makeCards);
  console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}

getCardForUser('lizapincsak');
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

  followersArray.forEach((follower) => {
    getCardForUser(follower);
  })


function cardMaker (cardObj){
//instantiating the elements
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = "https://avatars3.githubusercontent.com/u/68169418?s=400&u=d7419653963b8542e0eef7470b1f295a66fee32b&v=4";

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const cardName = document.createElement('h3');

  cardName.classList.add('name');
  cardName.textContent = `${cardObj.name}`;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = `${cardObj.login}`;

  const cardLocation = document.createElement('p');
  cardLocation.textContent = `Location: ${cardObj.location}`;

  const profile = document.createElement('p');
  
  const address = document.createElement('a');
  address.textContent = `${cardObj.html_url}`;
  address.href = "https://github.com/lizapincsak";

  const cardFollowers = document.createElement('p');
  cardFollowers.textContent = `Followers: ${cardObj.followers}`;

  const cardFollowing = document.createElement('p');
  cardFollowing.textContent = `Following: ${cardObj.following}`;

  const cardBio = document.createElement('p');
  cardBio.textContent = `Bio: ${cardObj.bio}`;

  //create hierachy
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

return card;

}



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
