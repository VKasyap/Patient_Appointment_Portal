function handleSignin(){
    const vals ={
        email: document.getElementById('Email_id').value,
        password: document.getElementById('Pw_id').value
    }
    const failedMessage = `<h3 class="text-danger">Failed to sign in. Please try again</h3>`;

    var signInReq = new XMLHttpRequest();
    signInReq.open("POST", "http://localhost:4000/signIn", true);
    signInReq.setRequestHeader(
      "Content-type",
      "application/json; charset=utf-8"
    );
    signInReq.onload = function () {
      if (signInReq.status == 200) {
        window.location.href = "../Main.html";
      }
      if (signInReq.status != 200) {
        document
          .getElementById("bannerMessage")
          .insertAdjacentHTML("afterbegin", failedMessage);
      }
    };
    signInReq.onerror = function () {
      document
        .getElementById("bannerMessage")
        .insertAdjacentHTML("afterbegin", failedMessage);
    };
    signInReq.send(JSON.stringify(vals));
  

}