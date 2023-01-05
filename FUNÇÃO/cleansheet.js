function teste(param){
    console.log(this === param);
}

teste(global);
teste(module.exports);