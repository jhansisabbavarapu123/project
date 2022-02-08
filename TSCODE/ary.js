var apps = ['Whatsapp', 'instagram', 'Facebook'];
var playStore = [];
apps.forEach(function (item) {
    playStore.push(item);
    console.log(item);
    for (var _i = 0, playStore_1 = playStore; _i < playStore_1.length; _i++) {
        var x = playStore_1[_i];
        console.log(x);
    }
    console.log(playStore.length);
});
console.log(playStore);
