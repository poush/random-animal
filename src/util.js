module.exports = {
    capitalizeFirstLetter: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    aRandom: function (length) {
        return Math.floor(Math.random() * length)
    }
}