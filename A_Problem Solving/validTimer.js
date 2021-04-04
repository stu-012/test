
function validTime(time) {
    var comp = time.split('/')
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var date = new Date(y,m-1,d);
    if (date.getMonth() + 1 == m && date.getDate() == d) {
      return true
    }
    return false
}