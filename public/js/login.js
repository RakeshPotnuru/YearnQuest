const SAWO_API_KEY = keys.SAWO_API_KEY;

// Fetching payload from sessionStorage
const payload = sessionStorage.getItem("payload");
if (payload) {
  // If the payload is available, that means the user has logged in already.
  // So redirecting back to "/login"
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ payload: payload }),
    headers: { "Content-Type": "application/json" },
  });

  window.location.href = "/";
}
var config = {
  // should be same as the id of the container created on 3rd step
  containerID: "sawo-container",
  // can be one of 'email' or 'phone_number_sms'
  identifierType: "email",
  // Add the API key copied from 2nd step
  apiKey: "",
  // Add a callback here to handle the payload sent by sdk
  onSuccess: (payload) => {
    // Storing the payload in sessionStorage
    sessionStorage.setItem("payload", JSON.stringify(payload));
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ payload: payload }),
      headers: { "Content-Type": "application/json" },
    });
    // Redirecting to "/"
    window.location.href = "/";
  },
};
var sawo = new Sawo(config);
sawo.showForm();
