const STIM_PATH = '27movies/';
const VID_LIST = [
    "1012_push.mp4", "1145_leave.mp4", '4397_hug.mp4', '4408_lead.mp4', '5407_kiss.mp4', 
    '5787_accompany.mp4', '5809_pull.mp4', '5814_talk to.mp4', '5816_ignore.mp4', '5843_huddle with.mp4', 
    '5847_approach.mp4', '5849_approach.mp4', '5866_follow.mp4', '5870_poke.mp4', '5871_pull.mp4', 
    '5875_escape.mp4', '5878_follow.mp4', '5902_hit.mp4', '5905_encircle.mp4', '5908_creep up on.mp4', 
    '5914_tickle.mp4', '5929_leave.mp4', '5930_accompany.mp4', '5943_scratch.mp4', '5948_flirt.mp4', 
    '5945_flight.mp4', '5986_fight.mp4', '5987_creep up on.mp4', '5989_huddle with.mp4', '5991_examine.mp4', 
    '5998_tickle.mp4', '6002_throw.mp4', '6004_herd.mp4', '6005_throw.mp4', '6012_kiss.mp4', 
    '6016_scratch.mp4', '6079_bother.mp4', '6035_capture.mp4', '6034_avoid.mp4', '6023_hit.mp4', 
    '6017_encircle.mp4'
];
// const TRIAL_LIST = shuffle_array(VID_LIST);
const labelList   = [];
var indexVid      = 0;
var indexResponse = 0;
var selectedItem;

// button click functions
function clickReplay() {
    if (!document.querySelector('#vid').ended) {
        return;
    }
    document.querySelector('#vid').currentTime = 0;
    document.querySelector('#vid').play();
} 

function clickInstruction() {
    alert("Please select a label that best describes the animation. Proceed to the next section by clicking Next.");
}

function clickNext() {
    if (!document.querySelector('#vid').ended) {
        return;
    }

    var selectedItem = document.querySelector('#labelSelected').value;
    if (selectedItem == "select") { // select a value before proceeding
        alert("Please select a label.");
        return;
    }

    labelList[indexVid] = selectedItem;
    indexVid ++;

    if (indexVid >= VID_LIST.length) {
        this.end();
    }

    /*
    else if (indexVid > indexResponse) {
        showResponse();
    } */

    else {
        this.showNew(); 
    }
} 

// display new video
function showNew() {
    // close free response box
    document.getElementById("labelSelected").value = "select";
    document.getElementById("vid").src = [STIM_PATH + VID_LIST[indexVid]];
}

// display free response box
function showResponse() {
    // replace div content
    // record response
}

// end of experiment
function end() {
    document.getElementById("end").innerHTML = "Thank you for your participation!";
    document.getElementById("divVideo").style.display = "none";
    document.getElementById("divButton").style.display = "none";
}
