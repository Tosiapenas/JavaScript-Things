const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {

  sonic.classList.add('jump');

  setTimeout(() => {

    sonic.classList.remove('jump');
  }, 550);

}

const jump_end = (character) => {

  sonic.classList.add('jump_end');

}

const loop = setInterval(() => {

  const pipePos = pipe.offsetLeft;
  const sonicPos = +window.getComputedStyle(sonic).bottom.replace('px', '');

  if (pipePos <= 98 && sonicPos <= 90 && pipePos > 0) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePos}px`;

    //sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPos}px`;
    
    sonic.src = './images/gameover.png';
    sonic.style.width = '130px';
    jump_end(sonic);

  }
}, 10);

document.addEventListener('keydown', jump);
