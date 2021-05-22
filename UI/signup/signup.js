function handleSignUp(){
    const details ={
        userName: document.getElementById('Name_id').value,
        email: document.getElementById('Email_id').value,
        password: document.getElementById('Pw_id').value
    }
    const failedMessage = `<h3 class="text-danger">Failed to sign up. Please try again</h3>`;

    var signUpReq = new XMLHttpRequest();
    signUpReq.open("POST", "http://localhost:4000/signUp", true);
    signUpReq.setRequestHeader(
      "Content-type",
      "application/json; charset=utf-8"
    );
    signUpReq.onload = function () {
      if (signUpReq.status == 200) {
        window.location.href = "../Main.html";
      }
      if (signUpReq.status != 200) {
        document
          .getElementById("bannerMessage")
          .insertAdjacentHTML("afterbegin", failedMessage);
      }
    };
    signUpReq.onerror = function () {
      document
        .getElementById("bannerMessage")
        .insertAdjacentHTML("afterbegin", failedMessage);
    };
    signUpReq.send(JSON.stringify(details));
}