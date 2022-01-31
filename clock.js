function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am-text");

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    var d = "PM";
    if (a >= 12) {
        am.innerText = d;
    }
    // if (a > 12) {
    //     a = a % 12;
    // }

    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
}
setInterval(clock, 1000);

var cnt = 0;

function MakeDiv() {
    var container = document.createElement("div");
    var container2 = document.createElement("br");
    // container.className = "grid-item";
    // container.id = "dynamic-block";
    container.className = "dynamic-class";
    container.id = "dynamic-id";
    if (cnt <= 1) {
        document.getElementById("bd").appendChild(container);
    }
    var invalue = document.getElementById("wakeUpTimeSelector1");
    var value = invalue.options[invalue.selectedIndex].text;
    var invalue2 = document.getElementById("wakeUpTimeSelector2");
    var value2 = invalue2.options[invalue2.selectedIndex].text;
    var invalue3 = document.getElementById("wakeUpTimeSelector3");
    var value3 = invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-id").innerHTML =
        "Wake Up Time: " +
        value +
        "<br />" +
        "Lunch Time: " +
        value2 +
        "<br />" +
        "Nap Time: " +
        value3;
}

function setTime() {
    var a = document.getElementById("wakeUpTimeSelector1").value;
    var b = document.getElementById("wakeUpTimeSelector2").value;
    var c = document.getElementById("wakeUpTimeSelector3").value;
    var ch = new Date().getHours();
    if (a == ch) {
        document.getElementById("img2").style.backgroundImage =
            "url(breakfast.jpg)";
        document.getElementById("img2-text").innerHTML = "Lets have some Breakfast";
    } else if (b == ch) {
        document.getElementById("img2").style.backgroundImage = "url(lunch.jpg)";
        document.getElementById("img2-text").innerHTML = "Lets have some Lunch";
    } else if (c == ch) {
        document.getElementById("img2").style.backgroundImage = "url(dinner.jpg)";
        document.getElementById("img2-text").innerHTML = "Lets have some Dinner";
    }
    cnt++;
    MakeDiv();
}