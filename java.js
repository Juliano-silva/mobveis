const he = document.getElementById("fixed")
const ico = document.getElementById("ico")
const sub = document.getElementById("sub-header")
const body = document.getElementById("body")
const Tudo = document.getElementById("Tudo")
const All = document.getElementById("ALL")
function passar(){
    he.style.background="gray"
    he.style.position="fixed"
    he.style.width="100em"
    he.style.marginLeft="-10em"
    he.style.transition="1.5s"
    he.style.transitionDelay="0.5s"
    he.style.display="block"
    ico.style.marginLeft="200px"
    ico.style.width="3.7em"
    ico.style.marginTop="-6px"
    sub.style.marginLeft="60em"
}
function começo(){
    he.style.background="transparent"
    he.style.position="fixed"
    he.style.width="100em"
    he.style.marginLeft="-10em"
    ico.style.marginLeft="200px"
    ico.style.marginTop="-2px"
    ico.style.transition="0.5s"
    ico.style.transitionDelay="0.5s"
    sub.style.marginLeft="60em"
}