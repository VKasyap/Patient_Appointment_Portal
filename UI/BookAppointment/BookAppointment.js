var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
const hospitalId = queries[0].split("=")[1];
const hosName = queries[1].split("=")[1];
const loc = queries[2].split("=")[1];

function getData(){
  document.getElementById("hospitalId").value = hospitalId
  document.getElementById("hospName").value = hosName
  document.getElementById("location").value = loc
}
function bookAppointment() {
  let entry = document.getElementById("appointment-form");
  let ele = document.getElementById("patient-form");
  var details = {
    hospitalId: entry.elements[0].value,
    patientName: ele.elements[0].value,
    specialist: ele.elements[1].value,
    doctorName: ele.elements[2].value,
    dateOfAppointment: ele.elements[3].value,
    contact: ele.elements[4].value,
  };

  const failedMessage = `<h3 class="text-danger">Failed to book an appointment. Please try again</h3>`;

  var BookAptmntReq = new XMLHttpRequest();
  BookAptmntReq.open("POST", "http://localhost:4000/bookAppointment", true);
  BookAptmntReq.setRequestHeader(
    "Content-type",
    "application/json; charset=utf-8"
  );
  BookAptmntReq.onload = function () {
    if (BookAptmntReq.status == 200) {
      window.location.href = "../AppointmentsList/AppointmentsList.html";
    }
    if (BookAptmntReq.status != 200) {
      document
        .getElementById("bannerMessage")
        .insertAdjacentHTML("afterbegin", failedMessage);
    }
  };
  BookAptmntReq.onerror = function () {
    document
      .getElementById("bannerMessage")
      .insertAdjacentHTML("afterbegin", failedMessage);
  };
  BookAptmntReq.send(JSON.stringify(details));
}
