const UaBTN = document.querySelector(".language-btn__ua");
const RuBTN = document.querySelector(".language-btn__ru");
const EnBTN = document.querySelector(".language-btn__en");

UaBTN.addEventListener("click", selectLNG);
RuBTN.addEventListener("click", selectLNG);
EnBTN.addEventListener("click", selectLNG);

const allText = document.querySelectorAll(".ua, .ru, .en");
const allUaText = document.querySelectorAll(".ua");
const allRuText = document.querySelectorAll(".ru");
const allEnText = document.querySelectorAll(".en");

function selectLNG(event) {
  const activeBTN = event.target.textContent;

  UaBTN.classList.remove("language-btn__aktiv");
  RuBTN.classList.remove("language-btn__aktiv");
  EnBTN.classList.remove("language-btn__aktiv");

  for (const el of allText) {
    el.classList.remove("activ_lng");
    console.log(el.textContent);
  }

  if (activeBTN == UaBTN.textContent) {
    event.target.classList.add("language-btn__aktiv");
    for (const el of allUaText) {
      el.classList.add("activ_lng");
    }
  }

  if (activeBTN == RuBTN.textContent) {
    event.target.classList.add("language-btn__aktiv");
    for (const el of allRuText) {
      el.classList.add("activ_lng");
    }
  }

  if (activeBTN == EnBTN.textContent) {
    event.target.classList.add("language-btn__aktiv");
    for (const el of allEnText) {
      el.classList.add("activ_lng");
    }
  }
}
