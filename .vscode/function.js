function saveDismissalState(dismissed) {
  localStorage.setItem('imageDismissed', JSON.stringify(dismissed));
}

function getDismissalState() {
  const state = localStorage.getItem('imageDismissed');
  return state === null ? false : JSON.parse(state); // Default to not dismissed
}