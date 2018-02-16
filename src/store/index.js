import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './app'
import navigator from './navigator'
// import splitter from './splitter'
// import tabbar from './tabbar'
import map from './map'
import site from './site'

export default new Vuex.Store({
    modules: {
        app,
        navigator,
        // splitter,
        // tabbar,
        map,
        site,
    }
});