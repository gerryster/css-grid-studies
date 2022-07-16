MAX_TRIES = 100;

function toggleVisible(event) {
  const sectionEl = getNextSectionEl(event.target);
  const currentDisplay = window.getComputedStyle(sectionEl).display;
  const newDisplay = currentDisplay === 'block' ? 'none' : 'block';
  sectionEl.style.display = newDisplay;
}

function getNextSectionEl(element) {
  let nextEl = element.nextSibling;
  let tries = 1;
  while(nextEl.tagName !== 'SECTION') {
    tries++;
    nextEl = nextEl.nextSibling;
    if(tries > MAX_TRIES) {
      throw("No section tag found!");
    }
  }
  return nextEl
}

function init() {
  document.querySelectorAll('h3').forEach(function(h3) {
    h3.addEventListener('click', toggleVisible);
  });
}
