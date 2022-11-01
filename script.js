let frameNumber = 0 // start video at frame 0
// lower numbers = faster playback
const playbackConst = 1500
// get page height from video duration
let setHeight = document.getElementById('set-height')
// select video element
const vid = document.getElementById('v0')
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', () => {
	setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px'
})

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
	let frameNumber = window.pageYOffset / playbackConst
	vid.currentTime = frameNumber
	window.requestAnimationFrame(scrollPlay)
}

window.requestAnimationFrame(scrollPlay)
