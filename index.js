const textToImage = require('text-to-image');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const basePath = process.cwd();
const imagesDir = `${basePath}/images`;

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const randomFont = () => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    return `./font/font${rndInt}.ttf`
}

const listName = ['Homony', 'Thalmo', 'Tony', 'Tom']

listName.forEach(async item => {
    const dataUri = await textToImage.generate(item, {
        maxWidth: 280,
        customHeight: 200,
        fontSize: 45,
        textColor: `#${randomColor()}`,
        fontPath: randomFont(),
        textAlign: 'center',
        verticalAlign: 'center'
    });
    var base64Data = dataUri.replace(/^data:image\/png;base64,/, "");

    fs.writeFileSync(`${imagesDir}/${uuidv4()}.png`, base64Data, 'base64', function (err) {
    });
})
