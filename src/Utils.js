class Utils {

    static getBagdeColor() {
        const colors = [{
            background: "linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%)",
            color: "#c62828",
        }, {
            background: "linear-gradient(to bottom right, #F48FB1 0%, #d81b60 100%)",
            color: "#dc306f",
        }, {
            background: "linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%)",
            color: "#ffb300",
        }, {
            background: "linear-gradient(to bottom right, #4DB6AC 0%, #00796B 100%)",
            color: "#34a297",
        }, {
            background: "linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%)",
            color: "#7cb342",
        }];

        return colors[Math.floor(Math.random() * colors.length)];

    }
}

export default Utils;