const helper = {
  randItem(item) {
    return item[Math.floor(Math.random() * item.length)]
  }
}
export { helper as default }