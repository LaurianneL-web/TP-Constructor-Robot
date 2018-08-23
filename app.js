/*global console*/
var Robot = function (n, r, ne) {
    this.nom = n,
    this.nbr_roue = r,
    this.nbr_eyes = ne
};

Robot.prototype.roule = function (element) {
    console.log("je roule");
//    var i;
//    while(i < 50) {
//        element.style.transform = "translate(" + i + "px)";
//        i++;
//    }
};

Robot.prototype.cligneDesYeux = function (color) {
    console.log("je cligne des yeux");
//    this.onclick = function () {
//        this.style.background = color;
//    }
};

//var robot_01 = new Robot("Nono", 2, 2);
//var robot_02 = new Robot("Eve", 4, 1);
//var robot_03 = new Robot("Wall-E", 2, 2);
//
//console.log(robot_01);
//console.log(robot_01.cligneDesYeux("red"));
//console.log(robot_02);
//console.log(robot_02.roule(document.getElementById("robot_02")));
//console.log(robot_03);

///////////////////////////////////////////////
var nameTableau = ["Nono", "Eve", "Wall-E"];
var robotTbl = [];
//var createAddRobot = function() {
//    var currRobot = new Robot( nameTableau[Math.floor(Math.random() * nameTableau.length)], Math.floor(Math.random()), Math.floor(Math.random()));
//    robotTbl.push(currRobot);
//    console.log(currRobot);
//    console.log(robotTbl);
//};
var createAddRobot = function() {
    var n = document.getElementById("nom").value;
    var r = document.getElementById("nbr_roue").value;
    var y = document.getElementById("nbr_eye").value;
    if(n == '' || isNaN(r) == true || isNaN(y) == true){
        alert("Please complete input with numbers to the 2 last input and name to the first");
    } else{
        var elt_ul = document.getElementById("tbl_robot");
        var new_li = document.createElement("li");
        elt_ul.appendChild(new_li);
        var currRobot = new Robot(n, Number(r), Number(y));
        robotTbl.push(currRobot);
        new_li.innerHTML = currRobot.nom +', ' + currRobot.nbr_roue +', '+ currRobot.nbr_eyes;
//        document.getElementById("tbl_robot").innerHTML += currRobot.nom +', ' + currRobot.nbr_roue +', '+ currRobot.nbr_eyes + "<br>";
        
        console.log(currRobot);
        console.log(robotTbl);
    }
};


var parseImbriqueeTD = (function () {
    var cssDarkBlue = 'font-weight: bold; color: darkblue; font-size: 14px';
	var cssResult = 'background-color:#262626; font-weight: bold; color: white; font-size: 14px';
	var cssObjKey = 'background-color:#7e9bb7; color: white; font-size: 12px; border-radius:0.8rem; padding:0px 2px';
    var i, j, k, tableau = [["a",{name:"b"},{nom:"c"}],["d", {age:5},{name:"e"},{name:"f"}],[{name:"g"},{name:"h"},{name:"i"}],[{name:"j"},{n:"k"},{surname:"l"}]];
    for(i = 0; i < tableau.length; i++){
        for(j = 0; j < tableau[i].length; j++){
            if(typeof tableau[i][j] == 'object' ){
                //console.log(Object.keys(tableau[i][j]));
                for(k = 0; k < Object.keys(tableau[i][j]).length; k++){
                    var properties = Object.keys(tableau[i][j])[k]
                    console.log(" L'objet %c" + j + "%c du tableau %c" + i + "%c a pour propriété %c'" + properties + "'%c qui est égal a %c'" + tableau[i][j][properties] + "'%c.", cssDarkBlue, 'color:black', cssDarkBlue, 'color:black', cssObjKey, 'color: black', cssResult, 'color: black');
                }
            } else{
                console.log("La valeur de l'élément %c" + j + "%c du tableau %c" + i + "%c est égal à %c'" + tableau[i][j] + "'%c.", cssDarkBlue, 'color:black', cssDarkBlue, 'color:black', cssResult,'color:black');
            }

        }
    }
}());























