/* === selectors ================ */ 
const htmlTag = $("html");
const selectLightModeIcon = $(".bi.bi-brightness-high");
const selectDarkModeIcon = $(".bi.bi-brightness-high-fill");
const colormodeToggleArea = $(".colormode-toggle");
const dropdownMenu = $("ul.dropdown-menu");
const toc = $("ul.toc")

/* === global vars =============== */
let globalState = {
  colormode: "dark"
}


function init(){
  const foundSettings = getSettings()
  buildNavMenu()
  buildToggleImages()
  tableOfContents()
}

function tableOfContents(){
  if( toc ){
    units.filter( unit => unit.ready === true ).map( unitObj => {
      const liTag = $(`<li><a href="./units/unit${unitObj.href}">${unitObj.name}</a></li>`);
      toc.append(liTag)
    })
  }
}


function buildToggleImages(){
  colormodeToggleArea.append(setDarkModeSvg);
  colormodeToggleArea.append(setLightModeSvg);
  updateColorMode()
}

function getSettings(){
  const lsSettings = localStorage.getItem("settings")
  if( lsSettings && Object.keys(lsSettings).length ){
    globalState = JSON.parse(lsSettings)
  }
}


function saveSettings(){
  localStorage.setItem("settings", JSON.stringify(globalState))
}


function updateColorMode(newMode){
  if( !newMode ){
    newMode = globalState.colormode
  }
  globalState = { ...globalState, colormode: newMode || "dark" }
  htmlTag.attr("data-bs-theme", newMode)
  if( newMode === "dark" ){
    setLightModeSvg.removeClass("d-none")
    setDarkModeSvg.addClass("d-none")
  } else {
    setDarkModeSvg.removeClass("d-none")
    setLightModeSvg.addClass("d-none")
  }
  saveSettings()
}

function buildNavMenu(){
  units.forEach( unit => {
    let liTag = $(`<li><a class="dropdown-item" href="./unit${unit.href}">${unit.name}</a><li>`);
    if( !unit.ready ) liTag.children("a").addClass("disabled");
    dropdownMenu.append(liTag)
  })
}


/* === event listeners ==================== */ 
colormodeToggleArea.on("click", "svg", () => {
  if( globalState.colormode === "light" ){
    updateColorMode("dark")
  } else {
    updateColorMode("light")
  }
})


init()