// one = () => {
//     addOne = document.querySelector(".one");
//     addOne.addEventListener("click", () => {
//         let display = document.querySelector(".display").textContent;
//         if (display === ""){
//             display = "1";
//         } else {
//             display = display.concat("1");
//         }
//         document.querySelector(".display").textContent = display;
//     });
// };
// one();


const addSymbol = (buttonClass, number) => {
    const addNumberBtn = document.querySelector(`.${buttonClass}`);
    addNumberBtn.addEventListener("click", () => {
        let display = document.querySelector(".display").textContent;
        if (display === "") {
            display = number;
        } else {
            display = display.concat(number);
        }
        document.querySelector(".display").textContent = display;
    });
};

addSymbol("zero", "0");
addSymbol("one", "1");
addSymbol("two", "2");
addSymbol("three", "3");
addSymbol("four", "4");
addSymbol("five", "5");
addSymbol("six", "6");
addSymbol("seven", "7");
addSymbol("eight", "8");
addSymbol("nine", "9");
addSymbol("divide", "/");
addSymbol("multiply", "*");
addSymbol("subtract", "-");
addSymbol("add", "+");
addSymbol("dot", ".");


del = () => {
    deleteDiv = document.querySelector(".del");
    deleteDiv.addEventListener("click", () => {
        let display = document.querySelector(".display").textContent;
        if (display) {
            display = display.substring(0,display.length - 1);
            document.querySelector(".display").textContent = display;
        }
    });
};
del();

    
solve = () => {
   equal = document.querySelector(".equals");
   equal.addEventListener("click", () => {

    let x = document.querySelector(".display").textContent;

    let y = eval(x);

    document.querySelector(".display").textContent = y;

    });
};
solve();


clear = () => {
    clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        document.querySelector(".display").textContent = "";
    });
};
clear();