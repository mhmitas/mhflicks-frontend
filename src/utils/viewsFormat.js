
export const viewsFormat = (views = 0) => {

    let convertedView;
    if (views >= 999 && views <= 999999) {
        convertedView = Math.trunc((views / 1000)) + "K"
    } else if (views >= 1000000 && views <= 999999999) {
        convertedView = (views / 1000000).toFixed(1) + "M"
    } else if (views >= 1000000000) {
        convertedView = views / 1000000000 + "B"
    }
    else {
        convertedView = views;
    }

    return convertedView
}