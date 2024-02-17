const $ = document;

let progressBarHtml = $.querySelector(".progressBarHtml");
let progressBarCss = $.querySelector(".progressBarCss");
let progressBarJs = $.querySelector(".progressBarJs");
let progressBarNode = $.querySelector(".progressBarNode");

window.addEventListener("load", () => {
    progressBarHtml.style.width = "90%";
    progressBarCss.style.width = "70%";
    progressBarJs.style.width = "50%";
    progressBarNode.style.width = "30%";
  
});
