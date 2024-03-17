var teamid = "yUc2VQa";
var toggleCheckbox = document.querySelector('.toggle-checkbox');
document.addEventListener('DOMContentLoaded', function () {
  toggleCheckbox = document.querySelector('.toggle-checkbox');
  const card2 = document.getElementById('card2');
  toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
      card2.style.backgroundColor = 'yellow';
    } else {
      card2.style.backgroundColor = 'rgba(217, 217, 217, 0.58)';
    }
  });
});
async function changeSpeed(speed) {
  var img = document.querySelector('.rotating-img');
  console.log(speed + "s");
  img.style.animationDuration = speed + "s";
  var device_url = "https://kodessphere-api.vercel.app/devices";
  await fetch(device_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamid: teamid,
      device: "fan",
      value: speed
    })
  });



  // console.log((await fetch("https://kodessphere-api.vercel.app/devices/" + teamid)).json());

}

setInterval(function () {
  console.log("set interval trigger");
  fetch("https://kodessphere-api.vercel.app/devices/" + teamid)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#bulb_status").checked = data.bulb;
      for (let i = 0; i <= 5; i++) {
        if (data.fan === i) {
          document.querySelector("#fan" + i).checked = true;
        }
        else {
          document.querySelector("#fan" + i).checked = false;

        }
      }
      


    });

}, 4000);
async function toggleLed() {
  var led_checked = document.querySelector("#bulb_status").checked;
  console.log(led_checked);
  var device_url = "https://kodessphere-api.vercel.app/devices";
  await fetch(device_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamid: teamid,
      device: "bulb",
      value: led_checked ? 1 : 0
    })
  });
  var promise = await fetch("https://kodessphere-api.vercel.app/devices/" + teamid);
  var data = await promise.json();
  console.log(data);

}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
async function changeLED(r, g, b) {
  var hex_val = rgbToHex(r, g, b);
  var device_url = "https://kodessphere-api.vercel.app/devices";
  await fetch(device_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamid: teamid,
      device: "led",
      value: hex_val
    })
  });
  var promise = await fetch("https://kodessphere-api.vercel.app/devices/" + teamid);
  var data = await promise.json();
  console.log(data);

}

async function changeAC() {
  var ac_temp = document.querySelector('#ac_temp').value;
  document.querySelector('#current_temp').innerHTML = ac_temp;
  
  var ac_status = document.querySelector("#ac_status").checked;

  var device_url = "https://kodessphere-api.vercel.app/devices";

  await fetch(device_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamid: teamid,
      device: "ac",
      value: { "temp": parseInt(ac_temp), "state": ac_status ? 1 : 0 }
    })
  });

  var promise = await fetch("https://kodessphere-api.vercel.app/devices/" + teamid);
  var data = await promise.json();
  console.log(data);

}

let b1 = document.querySelector(".container-1");
let c3 = document.querySelector("#card3");
b1.addEventListener('click', () => {
  if (c3.style.backgroundColor === "rgba(217, 217, 217, 0.58)" || c3.style.backgroundColor === "rgba(0, 128, 0, 0.732)") {
    c3.style.backgroundColor = "rgba(234, 24, 24, 0.817)";
  } else {
    c3.style.backgroundColor = "rgba(217, 217, 217, 0.58)";
  }
});
let b2 = document.querySelector(".container-2");

b2.addEventListener('click', () => {
  if (c3.style.backgroundColor === "rgba(217, 217, 217, 0.58)") {
    c3.style.backgroundColor = "rgba(0, 128, 0, 0.732)";
  } else {
    c3.style.backgroundColor = "rgba(217, 217, 217, 0.58)";
  }
});
let b3 = document.querySelector(".container-3");

b3.addEventListener('click', () => {
  if (c3.style.backgroundColor === "rgba(217, 217, 217, 0.58)") {
    c3.style.backgroundColor = "rgb(45, 45, 176)";
  } else {
    c3.style.backgroundColor = "rgba(217, 217, 217, 0.58)";
  }
});

var toggleCheckboxac = document.querySelector('.toggle-checkbox-ac');
document.addEventListener('DOMContentLoaded', function () {
  toggleCheckbox = document.querySelector('.toggle-checkbox-ac');
  const card4 = document.getElementById('card4');
  toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
      card4.style.backgroundColor = '#0A85ED';
      card4.style.boxShadow = "10px 10px 5px #58EFEC , -10px -10px 5px #58EFEC"
    } else {
      card4.style.backgroundColor = 'rgba(217, 217, 217, 0.58)';
      card4.style.boxShadow = "0px 0px 0px"
    }
  });
});