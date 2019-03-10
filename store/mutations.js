export default {
  setMeta(state, data) {
    state.meta = data
  },
  menuOpen(state, data) {
    state.menuOpen = data
  },
  pageReady(state, data) {
    state.pageReady = data
  },
  loader(state, data) {
    state.loader = data
  },
}
