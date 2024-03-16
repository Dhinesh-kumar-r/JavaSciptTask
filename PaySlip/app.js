
let calculate = () => {
    
    let bp = document.getElementById("bp").value;
    let hra = document.getElementById("hra").value = bp * (10 / 100);
    let da = document.getElementById("da").value = bp * (5 / 100);
    let travel = document.getElementById("travel").value = bp * (15 / 100);
    let pf = document.getElementById("pf").value = bp * (15 / 100);
    let gross = document.getElementById("gross").value = pf + hra + da + travel + pf;
    let netSal = document.getElementById("net").value = gross - pf;

    hra = parseInt(hra);
    da = parseInt(da);
    travel = parseInt(travel);
    pf = parseInt(pf);
    gross = parseInt(gross);
    netSal = parseInt(netSal);
}

let Input = document.getElementById("bp");
Input.addEventListener("input", calculate);

let print = () => {
    let bp = document.getElementById("bp").value;
    let hra = document.getElementById("hra").value = bp * (10 / 100);
    let da = document.getElementById("da").value = bp * (5 / 100);
    let travel = document.getElementById("travel").value = bp * (15 / 100);
    let pf = document.getElementById("pf").value = bp * (15 / 100);
    let gross = document.getElementById("gross").value = pf + hra + da + travel + pf;
    let netSal = document.getElementById("net").value = gross - pf;

    
    document.getElementById("data").innerHTML = bp;
    document.getElementById("data1").innerHTML = hra;
    document.getElementById("data2").innerHTML = da;
    document.getElementById("data3").innerHTML = travel;
    document.getElementById("data4").innerHTML = pf;
    document.getElementById("data5").innerHTML = gross;
    document.getElementById("data6").innerHTML = netSal;



    document.getElementById("head5").innerHTML = "Basic Pay";
    document.getElementById("head1").innerHTML = "HRA";
    document.getElementById("head2").innerHTML = "DA";
    document.getElementById("head3").innerHTML = "TRAVEL";
    document.getElementById("head4").innerHTML = "PF";
    document.getElementById("head6").innerHTML = "GROSS AMOUNT";
    document.getElementById("head7").innerHTML = "NET SALARY";

    document.getElementById("table").className = "table table-success table-striped-columns mt-3";
}   