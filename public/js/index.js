const payload = sessionStorage.getItem("payload");
const logOut = document.getElementById('logout');

const handleDonation = async (event) => {
  event.preventDefault();
  if (payload) {
    const amount = event.target.amount.value;
    await fetch("/donate", {
      method: "POST",
      body: JSON.stringify({ amount: amount, payload: JSON.parse(payload) }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.assign("/");
  } else {
    window.location.assign("/login");
  }

  return false;
};

const handleLogin = () => {
  if (payload) {
    window.location.assign("/");
   
  }
  window.location.assign("/login");
};

const handleLogout = () => {
  sessionStorage.removeItem("payload");
  window.location.assign("/");
};



let keyElement = JSON.parse(sessionStorage.getItem('payload'));
const userName = keyElement.customFieldInputValues.Name;

if(userName!= "") {
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "block";
  document.getElementById("username").innerHTML = `<h4>${userName}</h4>`;
}