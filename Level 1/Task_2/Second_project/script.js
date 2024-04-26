
    function displayGreeting() {
        var curTime = new Date();
        var curHour = curTime.getHours();
        var greeting;

        if (curHour < 12) {
            greeting = "Good morning!From Cognifyz";
        } else if (curHour < 18) {
            greeting = "Good afternoon!From Cognifyz";
        } else {
            greeting = "Good evening!From Cognifyz";
        }

        alert(greeting);
    }
    