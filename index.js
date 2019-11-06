document.getElementById("btnTriangle").addEventListener("click", () => {    
        for (let star = "*"; star.length <= 5; star += "*") {
                document.getElementById("imageResult").innerHTML += star + "<br>";
        }
});

// Actually it is a triangle too
// document.getElementById("btnPyramid").addEventListener("click", () => {
//         let rows = 5;
//         let cols = 5;
//         for (let i = 1; i <= rows; i++) {
//                 for (let j=1; j <= i; j++) {
//                         document.getElementById("imageResult").innerHTML += "*";
//                 }
//                 document.getElementById("imageResult").innerHTML += "<br>";
//         }
// });

document.getElementById("btnPyramid").addEventListener("click", () => {
        let rows = 5;
        for (let i = 1; i <= rows; i++) {
                for (let k = 1; k <= (rows-i); k++) {
                        document.getElementById("imageResult").innerHTML += "&nbsp;";
                }
                for (let j=1; j <= i; j++) {
                        document.getElementById("imageResult").innerHTML += "* ";
                }
                document.getElementById("imageResult").innerHTML += "<br>";
        }
});

document.getElementById("btnRevPyramid").addEventListener("click", () => {
        let rows = 5;
        for (let i = rows; i >= 1; i--) {
                for (let k = 1; k <= (rows-i); k++) {
                        document.getElementById("imageResult").innerHTML += "&nbsp;";
                }
                for (let j = i; j >= 1; j--) {
                        document.getElementById("imageResult").innerHTML += "* ";
                }
                document.getElementById("imageResult").innerHTML += "<br>";
        }
});

document.getElementById("reset").addEventListener("click", () => {
        document.getElementById("imageResult").innerHTML = ""
        });