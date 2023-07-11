function saturdayFun(activity) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`;
    } else {
        return "This Saturday, I want to roller-skate!";
    }
}

function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`;
    } else {
        return "This Monday, I will go to the office.";
    }
}

function wrapAdjective(style='*') {
    return function (adj = 'special') {
        return `You are ${style}${adj}${style}!`;
    }
}