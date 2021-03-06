export default {
  nuxtServerInit({ commit, state }, { app }) {
    const description =
      app.head.meta && app.head.meta.find(meta => meta.name === 'description')
    commit('setMeta', {
      name: app.head.title,
      description: description ? description.content : '',
    })
  },
  setPageData({ commit }, value) {
    commit('pageData', value)
  },
  toggleMenuOpen({ commit, state }) {
    let isOpen = state.menuOpen
    isOpen = !isOpen
    commit('menuOpen', isOpen)
  },
  /**
   * @param value {boolean}
   */
  setMenuOpen({ commit }, value) {
    commit('menuOpen', value)
  },
  setPageReady({ commit }, value) {
    commit('pageReady', value)
  },
  setLoader({ commit }, value) {
    commit('loader', value)
  },
}
