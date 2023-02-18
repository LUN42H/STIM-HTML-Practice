var media     = document.getElementById('vid');
var labelNew  = document.getElementById('labelSelected').value;
var labelList = [];
var index     = 0
var duration  = media.duration;

// button functions
function clickReplay() {
    alert(media.currentTime);
    media.currentTime = 0;
    //media.onload();
    //media.play();
}

function clickInstruction() {
    alert("Please select a label that best describes the animation. Proceed to the next section by clicking Next.");
}

function clickNext() {
    labelList.push(labelNew);
    index ++;
    if (index >= 27) {
       this.end();
    }
    this.showNew();
} 

// display new video
function showNew() {
    // hide video
    // show response box
    // show new buttons
}

// end of experiment
function end() {

}