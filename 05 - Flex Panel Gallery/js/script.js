function toggleOpen() {
    this.classList.toggle('open');
  }
  
  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
  
  function addClickEvent(panel) {
    panel.addEventListener('click', toggleOpen);
  }
  
  function addTransitionEndEvent(panel) {
    panel.addEventListener('transitionend', toggleActive);
  }
  
  function main() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(addClickEvent);
    panels.forEach(addTransitionEndEvent);
  }
  
  main();
  