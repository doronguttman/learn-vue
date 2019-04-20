
var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        onSale: false,
        inStock: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender nutral"
        ],
        variants: [
            {
                id: 2234,
                color: "green"
            },
            {
                id: 2235,
                color: "blue"
            }
        ]
    }
});