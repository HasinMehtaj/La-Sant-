module.exports = {
  getIndex: function getIndex(mass, height) {
    if (typeof mass === "number" && typeof height === "number") {
      return (mass * 703) / (height * height);
    }
  },
};
