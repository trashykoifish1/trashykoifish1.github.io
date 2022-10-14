
// Hi Lo Game
let count = 0;
document.getElementById("btn-1").onclick = function(){
    let num = Math.floor(Math.random() * 6) + 5;
    let guess;
    let correct = false;
    document.getElementById("hilonum").innerHTML = num;
    document.getElementById("btn-2").onclick = function(){
        do {
            guess = Math.floor(Math.random() * 20) + 1;
            } while(guess == num)
        if (guess > num) {
            correct = true;
            count++;
            switch(count) {
            case 5: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\clapping.gif\">" 
                        + "<br />" + "Our Keyword: Metavolcanic!" ;
                    break;
            
            case 6: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\almostthere1.gif\">" 
                        + "<br />";
                    break;

            case 7: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\almostthere2.gif\">" 
                        + "<br />";
                    break;
    
            case 8: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\almostthere3.gif\">" 
                        + "<br />";
                    break;

            case 9: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\almostthere4.gif\">" 
                        + "<br />";
                    break;
            
            case 10: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                        + "<br />" + "<img src=\"img\\post-malone-congratulations.gif\">" 
                        + "<br /> You got 100 pts worth of extra credits!";
                    break;

            default: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")";
            } 
        } else {
            count = 0;
            correct = false;
            document.getElementById("hiloresult").innerHTML = "Wrong!(Number was " + guess + ")";
        }
    }
    document.getElementById("btn-3").onclick = function(){
        do {
            guess = Math.floor(Math.random() * 20) + 1;
            } while(guess == num)
        if (guess < num) {
            correct = true;
            count++;
            switch(count) {
            case 5: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                            + "<br />" + "<img src=\"img\\clapping.gif\">" 
                            + "<br />" + "Our Keyword: Metavolcanic!" ;
                    break;
            
            case 6: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                    + "<br />" + "<img src=\"img\\almostthere1.gif\">" 
                    + "<br />";
                    break;

            case 7: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                            + "<br />" + "<img src=\"img\\almostthere2.gif\">" 
                            + "<br />";
                    break;
    
            case 8: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                    + "<br />" + "<img src=\"img\\almostthere3.gif\">" 
                    + "<br />";
                    break;

            case 9: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                            + "<br />" + "<img src=\"img\\almostthere4.gif\">" 
                            + "<br />";
                    break;
            
            case 10: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")"
                    + "<br />" + "<img src=\"img\\post-malone-congratulations.gif\">" 
                    + "<br /> You got 100 pts worth of extra credits!";
                    break;

            default: document.getElementById("hiloresult").innerHTML = "Correct! You are on a " + count + " win streak!(Number was " + guess + ")";
            } 
        } else {
                count = 0;
                correct = false;
            document.getElementById("hiloresult").innerHTML = "Wrong!(Number was " + guess + ")";
        }
    }
    document.getElementById("btn-1").onclick = function(){
        count = 0;
        correct = false;
        num = Math.floor(Math.random() * 6) + 5;
        document.getElementById("hilonum").innerHTML = num;
        document.getElementById("hiloresult").innerHTML = "Game reset!"
    }
}

