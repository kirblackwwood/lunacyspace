var buttons = document.getElementsByClassName('butt'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
  b.addEventListener('click', addElement);
});

function addElement(e) {
  var addDiv = document.createElement('div'),
      mValue = Math.max(this.clientWidth, this.clientHeight),
      rect = this.getBoundingClientRect(),
      sDiv = addDiv.style,
      px = 'px';

      sDiv.width = sDiv.height = mValue + px;
      sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
      sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

      addDiv.classList.add('pulse');
      this.appendChild(addDiv);
}

<style>
.dws {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.butt {
    border: 3px solid #218294;
    font-size: 30px;
    color: #4b0082;
    text-decoration: #0902ff;
    text-transform: uppercase;
    width: 250px;
    height: 60px;
    display: block;
    text-align: center;
    line-height: 60px;
    font-family: Arial, sans-serif;
    position: relative;
    transition: .7s;
    overflow: hidden;
}
.butt::before,
.butt::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: #218294;
    top: 0;
    left: -100%;
    opacity: .5;
    transition: .5s;
    z-index: -1;
}
.butt::after {
    opacity: 1;
    transition-delay: .2s;
}
.butt:hover {
    color: #fff;
}
.butt:hover::before,
.butt:hover::after {
    left:0;
}
.pulse {
    background-color: cyan;
    border-radius: 50%;
    animation: pulse 0.7s ease-out;
    transform: scale(0);
    position: absolute;
}
@keyframes pulse {
to {
transform: scale(2);
    background-color: #ffffff;
    opacity:0;
 }
}
</style>
