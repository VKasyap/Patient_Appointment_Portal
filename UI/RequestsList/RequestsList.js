const failedCase = `<p>No appointments</p>`;
// var id;
var hospitalReq = new XMLHttpRequest();
hospitalReq.open("GET", "http://localhost:4000/appointmentsList", true);
hospitalReq.onload = function () {
  if (hospitalReq.status != 200) {
    document
      .getElementById("appointmentsList")
      .insertAdjacentHTML("beforeend", failedCase);
    document.getElementById("appointmentsLoader").remove();
  }
  if (hospitalReq.status == 200) {
    var data = JSON.parse(this.response);

    let html;
    if (data && data.length > 0) {
      html = data
        .map((hospital) => {
         var id = hospital._id
          const loopedEle = `<div
          class="col-sm-12 col-md-6 col-lg-3 rounded p-3 m-1"
          style="background-color: #f5f5f58c"
        >
          <div class="row">
            <div class="col-12">
              <label>${hospital.patientName}</label>
            </div>
          </div>
          <hr class="bg-primary" />
          <div class="row">
            <div class="col-12">
              <p>Date of Appointment: <label>${hospital.dateOfAppointment}</label></p>
              <p>Doctor Name: <label> ${hospital.doctorName} </label></p>
              <p>Specialist: <label> ${hospital.specialist} </label></p>
              <p>Your Contact: <label> ${hospital.contact} </label></p>
            </div>
          </div>
          <div>
          <div class="col-12 text-center">
          <button onclick='handleApprove("${id}")'>Approve</button>
          <button onclick='handleCancel("${id}")'>Cancel</button>
        </div></div>
        </div>`;
          return loopedEle;
        })
        .join("");
    } else {
      html = `<p>No Appointment</p>`;
    }
    document
      .getElementById("appointmentsList")
      .insertAdjacentHTML("beforeend", html);
    document.getElementById("appointmentsLoader").remove();
  } else {
    document
      .getElementById("appointmentsList")
      .insertAdjacentHTML("beforeend", failedCase);
    document.getElementById("appointmentsLoader").remove();
  }
};
hospitalReq.onerror = function () {
  document
    .getElementById("appointmentsList")
    .insertAdjacentHTML("beforeend", failedCase);
  document.getElementById("appointmentsLoader").remove();
};
hospitalReq.send();

function handleApprove(id) {
  console.log(id);
}

function handleCancel(id){
  console.log(id);
}
