function saveAnimationPreference(enabled) {
  localStorage.setItem('animationEnabled', enabled);
}

function getAnimationPreference() {
  const preference = localStorage.getItem('animationEnabled');
  // Default to true if no preference is found
  return preference === null ? true : JSON.parse(preference);
}