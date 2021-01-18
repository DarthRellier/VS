
let storeShow = "visible";
let stage = 2;
let cookiesEaten = 0;
let imgWidth = 100;
let imgHight = 100;
let clickes = 0;
function clicked() {
  let img = document.getElementById("img");
    img.src = `../assets/cookieclicks/cookie-${stage}-3.png`
  stage--;
  if (stage == -1) {
    stage = 3;
    let ce = document.getElementById("ce");
    cookiesEaten++;
    ce.innerText = `Cookies Eaten: ${cookiesEaten}`;
    img.style.height = imgHight;
    img.style.width = imgWidth;
    imgHight = imgHight + 5;
    imgWidth = imgWidth + 5;
    }
    $.ajax({
        url: "CookieClicks/EditJson/?id=1&cookieClicks=1",
        success: function () {}
    })
    $.ajax({
        url: "CookieClicks/DbIncJson?id=1", success: function (result) {
            let bites = document.getElementById("clicksWithModel")
            let cookies = document.getElementById("cookiesWithModel")
            bites.innerText = `Bites Ever Taken: ${result.clicks}`;
            cookies.innerText = `Cookies Ever Eaten: ${result.cookiesEaten}`;

        }
    })
  if (stage == 0) {
    clickes++;
  }
  let size = document.getElementById("hxw");
  size.innerText = `Your Cookie Is: ${imgHight} by ${imgWidth}`;
  if (clickes % 10 == 0 && stage == 0 && clickes != 0) {
    let tmc = document.getElementById("tooManyCookies");
    tmc.play();
  }
}
function bigger(howMuchBigger, cost) {
  if (cookiesEaten - cost >= 0) {
    let ce = document.getElementById("ce");
    cookiesEaten -= cost;
    ce.innerText = `Cookies Eaten: ${cookiesEaten}`;
    imgHight = imgHight + howMuchBigger;
    imgWidth = imgWidth + howMuchBigger;
    img.style.height = imgHight;
    img.style.width = imgWidth;
    let size = document.getElementById("hxw");
    size.innerText = `Your Cookie Is: ${imgHight} by ${imgWidth}`;
  }
}
function storeOC() {
  let store = document.getElementById("store");
  store.style.visibility = storeShow;
  let showHide = document.getElementById("storeSH");
  if (storeShow == "visible") {
    storeShow = "hidden";
    showHide.innerText = "Hide Store";
  } else {
    storeShow = "visible";
    showHide.innerText = "Show Store";
  }
}
