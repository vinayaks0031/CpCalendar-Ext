showData();



async function getContestData() { //fetching Data from backEnd
  const url_1 = "https://api-cpcalendar.herokuapp.com/getContestData";
  const url_2 = "https://api-cpcalender.herokuapp.com/getContestData";
  let date = new Date().getDate();
  let main_url = url_1;
  if (date >= 15)
    main_url = url_2;
  const response = await fetch(main_url);
  const data = await response.json();
  return data;
}

document.addEventListener('click', function (e) { //function for sorting LeetCode Data
  if (e.target.matches('.showLeetcode')) {
    document.querySelector("h2").innerText = "Leetcode Contest";
    let cards = document.getElementsByClassName("event_card");
    Array.from(cards).forEach((e) => {
      if (e.dataset.key == "Leetcode") e.style.display = "block";
      else e.style.display = "none";
    })
  }
});

document.addEventListener('click', function (e) { //function for sorting CodrChef Data
  if (e.target.matches('.showCodechef')) {
    document.querySelector("h2").innerText = "Codechef Contest";
    let cards = document.getElementsByClassName("event_card");
    Array.from(cards).forEach((e) => {
      if (e.dataset.key == "Codechef") e.style.display = "block";
      else e.style.display = "none";
    })
  }
});

document.addEventListener('click', function (e) {//function for sorting CodeForces Data
  if (e.target.matches('.showCodeforces')) {
    document.querySelector("h2").innerText = "Codeforces Contest";
    let cards = document.getElementsByClassName("event_card");
    Array.from(cards).forEach((e) => {
      if (e.dataset.key == "Codeforces") e.style.display = "block";
      else e.style.display = "none";
    })
  }
});

document.addEventListener('click', function (e) { //funtion of show all Data
  if (e.target.matches('.allContest')) {
    document.querySelector("h2").innerText = "All Contest";
    let cards = document.getElementsByClassName("event_card");
    Array.from(cards).forEach((e) => {
      e.style.display = "block";
    })
  }
});

async function showData() {
  //Displaying Loader in popup
  let loader = `  <div class="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
    <div>
      <div class="spinner-grow text-white mx-2" role="status"></div>
      <div class="spinner-grow text-primary" role="status"></div>
      <div class="spinner-grow text-danger mx-2" role="status"></div>
    </div>
    <div>
      <h6 class="py-3 spinner_text text-white text-center">
        Preparing Data for you..
      </h6>
    </div>
  </div>`
  document.getElementById("contest-data").innerHTML = loader;
  //Displaying all the contests 
  let cards = `<div class="hashtags">
  <p class="allContest">#All</p>
  <p class="showCodechef">#CodeCafe</p>
  <p class="showCodeforces">#CodeForces</p>
  <p class="showLeetcode">#LeetCode</p>
</div>
<h2 style="font-family: 'Cormorant', serif;">All Contest</h2>`;
  const a = await getContestData();
  let contestData = a.contests;
  contestData.forEach((e) => {
    cards += `<div data-key=${e.platform} class="event_card p-2 m-md-2 mx-3 my-3 rounded" style="background-color: ${e.hex_color} ;box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;font-size:14px;">
          <div class="d-flex align-items-center justify-content-center row">
          <div class="col-2">
          <img src=${e.platform === "Codechef" ? "../images/codechef.svg" : e.platform === "Leetcode" ? "../images/leetcode.svg" : "../images/codeforces.png"} class="style-icon" alt="event" />
          </div>
          <div class=${e.platform === "Leetcode" ? "col-10" : "col-10 text-light"} style=${e.platform === "Leetcode" ? "color: #8B0000" : "color:white;"}>
          <div class="d-flex flex-column">
          <div class="text-center style-titleBox" >
          <span class="style-title">${e.title}</span>
          </div>
          <div class="row">
          <div class="col-6 d-flex flex-column justify-content-center align-items-center">
              <span style= "margin: 4px;" ><u>Start</u></span>
              <span>${e.start}</span>
              <span class="style-time">${e.start_time}</span>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center align-items-center">
              <span style="margin: 4px;"><u>End</u></span>
              <span>${e.end}</span>
              <span class="style-time">${e.end_time}</span>
          </div>
          </div>
          </div>
          </div>
          <div class="col-10 d-flex flex-column align-items-center justify-content-center" style=${e.platform === "Leetcode" ? `color: #8B0000;` : `color: white;`}>

          <a href="${e.link}" style="text-decoration:none; color:white;" target="_blank">
          <button class="btn btn-danger m-2 style-Button" >
          Contest page &#x3e;
          </button>
          </a>
          </div>
          </div>
          </div>`;
  });
  document.getElementById("contest-data").innerHTML = cards;
}
