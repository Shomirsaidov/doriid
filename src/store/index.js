import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    location: 'Проверяется...',
    locInfo: {text: 'Проверяется...'},
    routes: {
      recent:  [{id: 1,number: 17, routes: 'Панчшанбе, Универмаг, ХГУ, ТГУ, 27-28мкр'},
        {id: 2,number: 9, routes: '8-12 мкр, 20-34 мкр'}],
      near: [
      {id: 3,number: 1, routes: 'Шел.комбинат, Панчшанбе, Универмаг, 8-12 мкр'},
      {id: 4,number: '3<sup>A</sup>', routes: 'Чкаловск, Атуш-сомон, Панчшанбе, Универмаг, 8-12 мкр'}]
    }


  }),
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
