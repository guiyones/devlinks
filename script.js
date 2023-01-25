function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Fist take the tag image
  const img = document.querySelector("#profile img")
  // Replace de image
  if (html.classList.contains("light")) {
    // If the light mode is on , add the light image
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // If the dark is on , keep the normal image
    img.setAttribute("src", "./assets/avatar.png")
  }
}
