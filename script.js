"use strict";
var VelCal = "velocal";
var OhmCal = "voltcal";
var PEcal = "PEcal";
var KEcal = "KEcal";

function OneforAll(inn1, inn2, adre , operat) {
  var in1 = document.getElementById(inn1).value;
  var in2 = document.getElementById(inn2).value;
  //console.log(in1, in2);
  in1 = parseFloat(in1);
  in2 = parseFloat(in2);

  //console.log(in1, in2);

  switch(operat){
    case "velocal":
    document.getElementById(adre).innerHTML = in1 / in2 + " m/s";
    //console.log("iwemiksvm");
    break;

    case "discal":
    document.getElementById(adre).innerHTML = in1 * in2 + " metre";
    //console.log("anoujsgfna8455841584");
    break;

    case "timecal":
    document.getElementById(adre).innerHTML = in1 * in2 + " seconds";
    break;

    case "voltcal":
    document.getElementById(adre).innerHTML = in1 * in2 + " Volts";
    break;

    case "resistcal":
    document.getElementById(adre).innerHTML = in1 / in2 + " Ohms";
    break;

    case "Ampcal":
    document.getElementById(adre).innerHTML = in1 / in2 + " Amps";
    break;

    case "PEcal":
    document.getElementById(adre).innerHTML = in1 * 9.81 * in2 + " Joule";
    break;

    case "PEcalA":
    //console.log("HI");
    document.getElementById(adre).innerHTML = in2 / (9.81 * in1) + " Kilograms";
    break;

    case "PEcalB":
    document.getElementById(adre).innerHTML = in2 / (in1 * 9.81) + " Metres";
    break;

    case "KEcal":
    document.getElementById(adre).innerHTML = 1/2 * in1 *  in2**2 + " Joule";
    break;

    case "KEcalA":
    document.getElementById(adre).innerHTML = in1 * 2 / in2 + " Kilograms";
    break;

    case "KEcalB":
    document.getElementById(adre).innerHTML = (in1 * 2 / in2) ** 0.5 + " m/s";
    break;
  }
}

function ChangeFindVel(){
  var select = document.getElementById("sel1").value;
  var head = document.getElementById("VelCalHead");
  var label1 = document.getElementById("VelLabel1");
  var label2 = document.getElementById("VelLabel2");
  switch(select){
    case "velocal":
    head.innerHTML = "FInd Velocity";
    label1.innerHTML = "Enter Distance(Time)";
    label2.innerHTML = "Enter Time(second)";
    VelCal = "velocal";
    break;

    case "discal":
    head.innerHTML = "Find Distance";
    label1.innerHTML = "Enter Velocity(m/s)";
    label2.innerHTML = "Enter Time(second)";
    VelCal = "discal";
    break;

    case "timecal":
    head.innerHTML = "Find Time";
    label1.innerHTML = "Enter Velocity(m/s)";
    label2.innerHTML = "Enter Time(second)";
    VelCal = "timecal";
    break;

  }
  //console.log(VelCal)
}

function ChangeOhmLaw(){
  var select = document.getElementById("selOhm").value;
  var head = document.getElementById("OhmCalHead");
  var label1 = document.getElementById("OhmLabel1");
  var label2 = document.getElementById("OhmLabel2");
  //console.log("Function Called");
  switch(select){
    case "voltcal":
    head.innerHTML = "Find Voltage";
    label1.innerHTML = "Enter Electric Current(Amp)";
    label2.innerHTML  ="Enter Resistance(Ohm)";
    OhmCal = "voltcal";
    break;

    case "Ampcal":
    //console.log("case");
    head.innerHTML = "Find Electric Current";
    label1.innerHTML = "Enter Voltage(Volt)";
    label2.innerHTML  ="Enter Resistance(Ohm)";
    OhmCal = "Ampcal";
    break;

    case "resistcal":
    head.innerHTML = "Find Resistance";
    label1.innerHTML = "Enter Voltage(Volt)";
    label2.innerHTML  ="Enter Electric Current(Amp)";
    OhmCal = "resistcal";
    break;

  }
  //console.log(OhmCal)
}

function ChangePECal(){
  var select = document.getElementById("selPE").value;
  var head = document.getElementById("PEcalHead");
  var label1 = document.getElementById("PEcalLabel1");
  var label2 = document.getElementById("PEcalLabel2");

  switch(select){
    case "PEcal":
    head.innerHTML = "Find Energy";
    label1.innerHTML = "Enter Mass(Kilogram)";
    label2.innerHTML  ="Enter Height(Metre)";
    PEcal = "PEcal";
    break;

    case "PEcalA":
    head.innerHTML = "Find Mass";
    label1.innerHTML = "Enter Energy(Joule)";
    label2.innerHTML  ="Enter Height(Metre)";
    PEcal = "PEcalA";
    break;

    case "PEcalB":
    head.innerHTML = "Find Height";
    label1.innerHTML = "Enter Mass(Kilogram)";
    label2.innerHTML  ="Enter Energy(Joule)";
    PEcal = "PEcalB";
    break;
  }
  //console.log(PEcal);
}

function ChangeKECal(){
  var select = document.getElementById("selKE").value;
  var head = document.getElementById("KEcalHead");
  var label1 = document.getElementById("KEcalLabel1");
  var label2 = document.getElementById("KEcalLabel2");
  //console.log("function called");
  switch(select){
    case "KEcal":
    head.innerHTML = "Find Energy";
    label1.innerHTML = "Enter Mass(Kilogram)";
    label2.innerHTML  ="Enter Velocity(m/s)";
    KEcal = "KEcal";
    break;

    case "KEcalA":
    head.innerHTML = "Find Mass";
    label1.innerHTML = "Enter Energy(Joule)";
    label2.innerHTML  ="Enter Velocity(m/s)";
    KEcal = "KEcalA";
    break;

    case "KEcalB":
    head.innerHTML = "Find Velocity";
    label1.innerHTML = "Enter Energy(Joule)";
    label2.innerHTML  ="Enter Mass(Kilogram)";
    KEcal = "KEcalB";
    break;
  }
  //console.log(KEcal);
}
