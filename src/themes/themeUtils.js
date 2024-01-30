function isChristmas() {
  const now = new Date(Date.now());
  const today = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));;
  return today <= 6 || today >= 343;
}

const themeUtils  = { isChristmas };

export default themeUtils;
