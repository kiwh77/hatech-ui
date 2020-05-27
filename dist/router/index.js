"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
vue_1.default.use(vue_router_1.default);
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1.default,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/About.vue'); }); },
    },
];
var router = new vue_router_1.default({
    routes: routes,
});
exports.default = router;
