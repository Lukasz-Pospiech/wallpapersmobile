
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    window.onload = function() {
        document.getElementById("loadingIcon").style.display = "none";
        document.getElementById("swipeIcon").style.display = "block";
        let middlePicNumber = 1; 
        let rightPicNumber = 2;
        let leftPicNumber = 201;
        let touchstartX = 0;
        let touchendX = 0;
        const swipeZone = document.getElementById("swipeArea");
        swipeZone.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, false);

        swipeZone.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false); 

        function handleSwipe() {
                if (touchendX < touchstartX) {
                    document.getElementById(`gallpic${leftPicNumber}`).className = "";
                    document.getElementById(`gallpic${leftPicNumber}`).className = "picInvisible";
                    document.getElementById(`gallpic${middlePicNumber}`).className = "";
                    document.getElementById(`gallpic${middlePicNumber}`).className = "picVisibleToLeft";
                    document.getElementById(`gallpic${rightPicNumber}`).className = "";
                    document.getElementById(`gallpic${rightPicNumber}`).className = "picHiddenToLeft";
                    middlePicNumber = calcPicNumberAdding(middlePicNumber);
                    rightPicNumber = calcPicNumberAdding(rightPicNumber);
                    leftPicNumber = calcPicNumberAdding(leftPicNumber);
                    function calcPicNumberAdding(currentPicNum) {
                        return currentPicNum !== 201 ? currentPicNum + 1 : 1;
                    }
                    touchstartX = 0;
                    touchendX = 0;
                }
                else if (touchendX > touchstartX) {
                    document.getElementById(`gallpic${rightPicNumber}`).className = "";
                    document.getElementById(`gallpic${rightPicNumber}`).className = "picInvisible";
                    document.getElementById(`gallpic${middlePicNumber}`).className = "";
                    document.getElementById(`gallpic${middlePicNumber}`).className = "picVisibleToRight";
                    document.getElementById(`gallpic${leftPicNumber}`).className = "";
                    document.getElementById(`gallpic${leftPicNumber}`).className = "picHiddenToRight";
                    middlePicNumber = calcPicNumberSubtracting(middlePicNumber);
                    rightPicNumber = calcPicNumberSubtracting(rightPicNumber);
                    leftPicNumber = calcPicNumberSubtracting(leftPicNumber);
                    function calcPicNumberSubtracting(currentPicNum) {
                        return currentPicNum !== 1 ? currentPicNum - 1 : 201;
                    }
                    touchstartX = 0;
                    touchendX = 0;
                }
        }

    }
