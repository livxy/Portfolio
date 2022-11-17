var base = document.getElementById("title").innerHTML;
var arr = [base];
var sw = false;
var len = 1,
  cur = 0;
while (base.length > 2) {
  base = base.slice(1, base.length - 1);
  arr[len++] = base;
}
function upd() {
  if (cur == 0 || cur == len - 1) sw = !sw;
  if (sw) cur++;
  else cur--;
  document.getElementById("title").innerHTML = arr[cur];
  document.title = "- " + arr[cur] + " -";
  setTimeout(upd, 500);
}
setTimeout(upd, 1000);

document.addEventListener("DOMContentLoaded", function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
  script.onload = function () {
    particlesJS("snow", {
      particles: {
        number: {
          value: 123,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        opacity: {
          value: 0.7,
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 5,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 300,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: false,
        },
      },
      retina_detect: true,
    });
  };
  document.head.append(script);
});
