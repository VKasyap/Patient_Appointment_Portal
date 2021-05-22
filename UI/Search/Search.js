var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
const searchParam = queries[0];
// const html = `Search Results for "${queries[0].split("=")[1]}"`;

let ratingElement = "";
function setRating(rating) {
  for (var i = 0; i < rating; i++) {
    ratingElement =
      ratingElement + `<i class="fa fa-star" aria-hidden="true"></i>`;
  }
  for (var i = 0; i < 5 - rating; i++) {
    ratingElement =
      ratingElement + `<i class="fa fa-star-o" aria-hidden="true"></i>`;
  }
}

var request = new XMLHttpRequest();
request.open("GET", `http://localhost:4000/hospitals?${searchParam}`, true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    let html;
    if (data && data.length > 0) {
      html = data
        .map((hospital) => {
          const hosId = hospital.hospitalId;
          setRating(hospital.rating);
          const ele = `
       <div
          class="col-sm-12 col-md-6 col-lg-3 rounded p-3 m-1"
          style="background-color: #f5f5f58c"
        >
          <div class="row">
            <div class="col-5">
              <img
                src="https://cyberhunter.solutions/wp-content/uploads/2019/04/pen-testfor-hospital.jpg"
                width="90px"
                height="70px"
                alt="pic"
              />
            </div>
            <div class="col-7 d-flex flex-column justify-content-center">
              <label>${hospital.name}</label>
            </div>
          </div>
          <hr class="bg-primary" />
          <div class="row">
            <div class="col-12">
              <p>Location: <label>${hospital.location}</label></p>
              <p>Contact: <label> ${hospital.contact} </label></p>
              <p>Best Physician: <label> ${hospital.bestDoctor} </label></p>
            </div>
          </div>
          <div class="row">
          <div class="col-5 text-center mt-3" id="rating">
          ${ratingElement}
          </div>
            <div class="col-7 text-right">
            <a href="../BookAppointment/BookAppointment.html?hospitalId=${hosId}&name=${hospital.name}&loc=${hospital.location}">
              <button class="appointmentButton">Book an appointment</button>
              </a>
            </div>
          </div>
        </div>
       `;
          ratingElement = "";
          return ele;
        })
        .join("");
    } else {
      html = `<p>No results found</p>`;
    }
    document
      .getElementById("searchResults")
      .insertAdjacentHTML("beforeend", html);
    document.getElementById("searchResultsLoader").remove();
  } else {
    const html = `<p>No results found</p>`;
    document
      .getElementById("searchResults")
      .insertAdjacentHTML("beforeend", html);
    document.getElementById("searchResultsLoader").remove();
  }
};
request.onerror = function () {
  const html = `<p>No results found</p>`;
  document
    .getElementById("searchResults")
    .insertAdjacentHTML("beforeend", html);
  document.getElementById("searchResultsLoader").remove();
};
request.send();
