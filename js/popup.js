showData();

async function getContestData() {
  const response = await fetch("../html/data.json");
  const data =await response.json();
  return data;
}

async function showData() {
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
  let cards = "";
  const a = await getContestData();
  let contestData = a.contests;
  contestData.forEach((e) => {
    cards += `<div data-key=${e.platform} class="event_card p-2 m-md-2 mx-3 my-3 rounded" style="background-color: ${e.hex_color} ; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;font-size:14px;">
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
