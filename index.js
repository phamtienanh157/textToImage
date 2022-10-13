const textToImage = require('text-to-image');

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const randomFont = () => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    return `./font/font${rndInt}.ttf`
}


// using the asynchronous API with await
textToImage.generate('Lorem ipsum', {
    debug: true,
    maxWidth: 280,
    customHeight: 200,
    fontSize: 40,
    textColor: `#${randomColor()}`,
    fontPath: randomFont(),
    textAlign: 'center',
    verticalAlign: 'center'
}).then(function (dataUri) {
    var base64Data = dataUri.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("./output.png", base64Data, 'base64', function (err) {
        console.log(err);
    });

});
