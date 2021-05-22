const failedMessage = `<h3 class="text-danger">Failed to add hospital. Please try again</h3>`;

function formData() {
  let entry = document.getElementById("admin-form");

  var vals = {
    hospitalId: entry.elements[0].value,
    name: entry.elements[1].value,
    location: entry.elements[2].value,
    contact: entry.elements[3].value,
    bestDoctor: entry.elements[4].value,
    rating: entry.elements[5].value,
  };

  var addHospitalReq = new XMLHttpRequest();
  addHospitalReq.open("POST", "http://localhost:4000/addHospital", true);
  addHospitalReq.setRequestHeader(
    "Content-type",
    "application/json; charset=utf-8"
  );
  addHospitalReq.onload = function () {
    if (addHospitalReq.status == 200) {
      window.location.href = "../Search/Search.html";
    }
    if (addHospitalReq.status != 200) {
      document
        .getElementById("bannerMessage")
        .insertAdjacentHTML("afterbegin", failedMessage);
    }
  };
  addHospitalReq.onerror = function () {
    document
      .getElementById("bannerMessage")
      .insertAdjacentHTML("afterbegin", failedMessage);
  };
  addHospitalReq.send(JSON.stringify(vals));
}
