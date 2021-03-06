"use strict";
Vue.config.devtools = true;
var eventBus = new Vue();
var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function (id) {
            this.cart.push(id);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUUzQixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBRXpCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2QsRUFBRSxFQUFFLE1BQU07SUFDVixJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxFQUFjO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFWLFVBQVcsRUFBVTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcclxuXHJcbnZhciBldmVudEJ1cyA9IG5ldyBWdWUoKTtcclxuXHJcbnZhciBhcHAgPSBuZXcgVnVlKHtcclxuICAgIGVsOiBcIiNhcHBcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwcmVtaXVtOiB0cnVlLFxyXG4gICAgICAgIGNhcnQ6IFtdIGFzIG51bWJlcltdXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUNhcnQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnQucHVzaChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=