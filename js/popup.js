showData();
async function getContestData() {
    const response = await fetch("../html/data.json");
    const data = response.json();
    return data;
}
function showData() {
    let loader = `<h1 style="text-shadow: 3px 5px 5px #4B4B4C;color:white;">LeetCode</h1>
    <div class="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
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
    document.getElementById("contest-data").innerHTML=loader;
}