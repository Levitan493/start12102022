let stringText = prompt('Type some text');
function cutString(stringText) {
    for (let i = 0; i < stringText.length;i++) {
        if (stringText.length < 10) {
            stringText.trim();
            console.log(stringText);
        }
        else {
            stringText.trimEnd();
            // stringText.push('...');
            console.log(stringText);
        }
    }

}
cutString(stringText);