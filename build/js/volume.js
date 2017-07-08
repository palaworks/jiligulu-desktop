function setVolume(){
	document.getElementById("mp3").volume = 0.2;
}
setVolume();
setInterval("setVolume()",250);