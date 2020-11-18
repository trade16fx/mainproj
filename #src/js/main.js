@@include('../modules/burger/_burger.js')
// include('./_ancor.js')
@@include('../modules/main-slider/_slider.js')

/* <![CDATA[ */
function externalLinks() {
  links = document.getElementsByTagName("a");
  for (i=0; i<links.length; i++) {
    link = links[i];
    if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
  }
}
window.onload = externalLinks;
/* ]]> */ 

