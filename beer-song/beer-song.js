

var Beer = function(){

}

Beer.prototype.verse = function (num) {
    return num + ' bottles of beer on the wall,' + num + 'bottles of beer. \n
    take one down and pass i around,' + num-1 + ' bottles of beer on the wall.\n'
}



module.exports = Beer
