window.onload = function () {
    // function greet(language) {
    //     switch (language) {
    //         case 'english':
    //             return 'Welcome';

    //         case 'czech':
    //             return 'Vitejte';

    //         case 'danish':
    //             return 'Velkomst';
    //         case 'dutch':
    //             return 'Welkom';
    //         case 'estonian':
    //             return 'Tere tulemast';
    //         case 'finnish':
    //             return 'Tervetuloa';
    //         case 'flemish':
    //             return 'Welgekomen';
    //         case 'french':
    //             return 'Bienvenue';
    //         case 'german':
    //             return 'Willkommen';
    //         case 'irish':
    //             return 'Failte';
    //         case 'italian':
    //             return 'Benvenuto';
    //         case 'latvian':
    //             return 'Gaidits';
    //         case 'lithuanian':
    //             return 'Laukiamas';
    //         case 'polish':
    //             return 'Witamy';
    //         case 'spanish':
    //             return 'Bienvenido';

    //         case 'swedish':
    //             return 'Valkommen';
    //         case 'swedish':
    //             return 'Croeso';
    //         default:
    //             return 'Hello';

    //     }
    // }
    // ===================================================================================
    //     function findShort(s) {
    //         let res = s.split(' ');
    //         let shortestWord = res.reduce((shortest, current)=>{
    // return current.length < shortest.length ? current : shortest;
    //         }, res[0]);
    //         console.log(parseInt(shortestWord.length) );
    //     }

    //     findShort("bitcoin take over the world maybe who knows perhaps");

    // ======================================================================================

    // function shortcut (string) {
    //     const vovels = ['a', 'e','i','o','u'];
    //       const shortString =[];
    //       for(let i=0; i<string.length; i++){
    //         const letter = string[i];
    //         if(vovels.includes(letter)){
    //           continue;
    //         }
    //         shortString.push(letter);
    //       }
    //       return console.log(shortString.join(''));
          
    //     }

    // function shortcut(string){
    //     return string.replace(/[aeiou]/gi, '');---------той самий варіант за допомогою регулярки
    //   }

    // shortcut('how are you today?')
// =============================================================================================

// function nameShuffler(str){
//     let res = str.split(' ');
//     // console.log(res);
//     let change = res.reverse();
//     console.log(change.join(' '));
  
// }

// nameShuffler('Mary jeggins');
// nameShuffler('john McClane')

// ========================================================================================
// function isValidWalk(walk) {
//     if(walk.length == 10){
//         console.log(true)
//     }
//     else{
//         console.log(false);
//     }
//   }

//   isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
//   isValidWalk(['n','s','n','s','n','s','n','s','n','s']);

// =====================================================================================
// Регулярний вираз виглядає так: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Ось що він означає:

// / - початок регулярного виразу
// ^ - початок рядка
// [^\s@]+ - будь-який символ, крім пробілу або символу "@", який повторюється один або більше разів
// @ - символ "@"
// [^\s@]+ - будь-який символ, крім пробілу або символу "@", який повторюється один або більше разів
// \. - крапка (так як крапка є спеціальним символом в регулярних виразах, потрібно екранувати її знаком \)
// [^\s@]+ - будь-який символ, крім пробілу або символу "@", який повторюється один або більше разів
// $ - кінець рядка
// / - кінець регулярного виразу
// ====================================================================================================  

// function areYouPlayingBanjo(name) {
//     if(/^r/i.test(name)){
//       console.log(name + " plays banjo");
//     }
//     else{
//         console.log(name + " does not play banjo");
//     }
    
//   }
//   areYouPlayingBanjo("Adam");

// ==========================================================================================================

function squareDigits(num){
  let numStr = num.toString();
  let numArr = numStr.split('');
  let squaredArr = numArr.map(num => num*num);
  let squaredNum = Number(squaredArr.join(''));
  console.log(squaredNum);
}

squareDigits(3212)



}
