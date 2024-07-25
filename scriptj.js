const iphone = document.getElementById("iphoneShape")
const island = document.getElementById("dynamic_island")
const date = document.getElementById("date")
const time = document.getElementById("time")
const bottomButton = document.getElementById("bottom_button")
const audio = document.getElementById("audio")
const playButton = document.getElementById("play_button")
const pauseButton = document.getElementById("pause_button")
const music = document.getElementById("music_container")
const body = document.getElementById("body")
const flashLight = document.getElementById("flashlight_box")
const camera = document.getElementById("camera_box")

playButton.addEventListener("click", () => {
    audio.play()
    pauseButton.style.opacity = "1"
    pauseButton.style.zIndex = "1"
    pauseButton.addEventListener("click", () => {
        audio.pause()
        pauseButton.style.opacity = "0"
        pauseButton.style.zIndex = "-1" 
    })

})

iphone.addEventListener("click", () => {
    iphone.style.backgroundImage = "url(./img/theme.jpg)"
    iphone.style.backgroundSize = "cover"
    iphone.style.border = "2px solid black"
    island.style.backgroundColor = "black"
    island.style.opacity = "100%"
    island.style.boxShadow = "none"
    island.style.scale = "0.9"
    time.style.scale = "1.1"
    time.style.opacity = "75%"
    music.style.opacity = "75%"
    flashLight.style.opacity = "65%"
    camera.style.opacity = "70%"
    bottomButton.style.opacity = "75%"
    island.style.transitionDuration = "0.5s"
    island.style.transitionTimingFunction = "linear"
    bottomButton.style.transitionDuration = "0.5s"
    bottomButton.style.transitionTimingFunction = "linear"
    date.style.transitionDuration = "0.5s"
    date.style.transitionTimingFunction = "linear"
    time.style.transitionDuration = "0.5s"
    time.style.transitionTimingFunction = "linear"
    iphone.style.transitionDuration = "0.5s"
    iphone.style.transitionTimingFunction = "linear"
    music.style.transitionDuration = "1.2s"
    music.style.transitionTimingFunction = "linear"
    flashLight.style.transitionDuration = "0.5s"
    flashLight.style.transitionTimingFunction = "linear"
    camera.style.transitionDuration = "0.5s"
    camera.style.transitionTimingFunction = "linear"
    
    setTimeout(() => {
        iphone.style.backgroundImage = "none"
        island.style.opacity = "50%"
        island.style.boxShadow = "0px 0px 3px rgb(97, 97, 97)"
        island.style.scale = "1"
        time.style.scale = "1"
        time.style.opacity = "50%"
        music.style.opacity = "50%"
        bottomButton.style.opacity = "75%"
        camera.style.opacity = "0"
        flashLight.style.opacity = "0"
        island.style.transitionDuration = "0.5s"
        island.style.transitionTimingFunction = "linear"
        bottomButton.style.transitionDuration = "0.5s"
        bottomButton.style.transitionTimingFunction = "linear"
        date.style.transitionDuration = "0.5s"
        date.style.transitionTimingFunction = "linear"
        time.style.transitionDuration = "0.5s"
        time.style.transitionTimingFunction = "linear"
        iphone.style.transitionDuration = "0.5s"
        iphone.style.transitionTimingFunction = "linear"
        music.style.opacity = "50%"
        music.style.transitionDuration = "1.2s"
        music.style.transitionTimingFunction = "linear"
    }, 8000);
})

setTimeout(() => {
    body.style.opacity = "1"
    body.style.transitionDuration = "1s"
    body.style.transitionTimingFunction = "linear"
}, 500);