function openNav() {
  document.getElementById("contentShift").style.marginLeft = "300px";
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("menuBarIcon").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("contentShift").style.marginLeft = "0px";
  document.getElementById("menuBarIcon").style.display = "inline";
}

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

const failedCase = `<p>No hospitals found</p>`;

var hospitalReq = new XMLHttpRequest();
hospitalReq.open("GET", "http://localhost:4000/hospitals", true);
hospitalReq.onload = function () {
  if (hospitalReq.status != 200) {
    document
      .getElementById("details")
      .insertAdjacentHTML("beforeend", failedCase);
    document.getElementById("detailsLoader").remove();
  }
  if (hospitalReq.status == 200) {
    var data = JSON.parse(this.response);
    let html;
    if (data && data.length > 0) {
      const sortData = data.sort((a, b) => {
        return b.rating - a.rating;
      });

      html = sortData
        .slice(0, 3)
        .map((hospital) => {
          const hosId = hospital.hospitalId;
          setRating(hospital.rating);
          const loopedEle = `<div
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
              <a href="BookAppointment/BookAppointment.html?hospitalId=${hosId}&name=${hospital.name}&loc=${hospital.location}">
              <button class="appointmentButton" id="appointmentButton">Book an appointment</button></a>
            </div>
          </div>
        </div>`;
          ratingElement = "";
          return loopedEle;
        })
        .join("");
    } else {
      html = `<p>No hospitals found</p>`;
    }
    document.getElementById("details").insertAdjacentHTML("beforeend", html);
    document.getElementById("detailsLoader").remove();
  } else {
    document
      .getElementById("details")
      .insertAdjacentHTML("beforeend", failedCase);
    document.getElementById("detailsLoader").remove();
  }
};
hospitalReq.onerror = function () {
  document
    .getElementById("details")
    .insertAdjacentHTML("beforeend", failedCase);
  document.getElementById("detailsLoader").remove();
};
hospitalReq.send();

function NavigateToSearch() {
  const val = document.getElementById("searchVal").value;
  // const eleexists = document.getElementById("errMessage");
  // if (eleexists) eleexists.remove();
  // if (val) {
  var queryString = "?searchVal=" + val;
  window.location.href = "Search/Search.html" + queryString;
  // } else {
  // const errMessage = `<p class="text-danger" id="errMessage">Please enter value</p>`;
  // document
  //   .getElementById("search")
  //   .insertAdjacentHTML("beforeend", errMessage);
  // }
}
