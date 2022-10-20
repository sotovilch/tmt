function generateLinkCss(href) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  link.media = "all";

  return link;
}

function generateScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";

  return script;
}

const head = document.getElementsByTagName("head")[0];

head.appendChild(generateLinkCss("https://sotovilch.github.io/tmt/tmt.css"));
head.appendChild(
  generateScript("https://sotovilch.github.io/tmt/js/getData.js")
);
head.appendChild(
  generateScript("https://sotovilch.github.io/tmt/js/changeDocument.js")
);
