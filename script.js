const controls = document.querySelectorAll('input');

function handleInputChange(){
  const suffix = this.dataset.sizing;
  const name = this.name;
  document.documentElement.style.setProperty(`--${name}`,this.value + suffix);
}

controls.forEach(each => each.addEventListener('change', handleInputChange));
controls.forEach(each => each.addEventListener('mousemove', handleInputChange));