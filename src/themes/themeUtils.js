function isChristmas() {
  const now = new Date(Date.now());
  return new Date(`12/08/${now.getFullYear()}`) <= now && now <= new Date(`01/06/${now.getFullYear() + 1}`);
}

const themeUtils  = { isChristmas };

export default themeUtils;
