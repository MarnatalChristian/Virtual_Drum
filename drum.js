window.addEventListener('keydown' , playDrum);
function playDrum(play) {
    const audio = document.querySelector(`audio[data-key="${play.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${play.keyCode}"]`);
    key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend' , removePlayingClass ) );
function removePlayingClass()
{
    this.classList.remove('playing');
}


keys.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse()
{
    const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}
