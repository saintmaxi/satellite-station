const displayErrorMessage = async(message, timed=true) => {
    let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
    $("body").append(fakeJSX);
    let height = $(document).height();
    $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
    if (timed) {
        await sleep(3100);
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
};

const displayStatusMessage = async(message, timed=true) => {
    let fakeJSX = `<div id="status-popup"><p>${message}</p></div>`;
    let height = $(document).height();
    $("body").append(`<div id='block-screen-status' style="height:${height}px"></div>`);
    $("body").append(fakeJSX);
    if (timed) {
        await sleep(3100);
        $("#status-popup").remove();
        $("#block-screen-status").remove();
    }
};

const closeDisplay = async() => {
    $("#error-popup").remove();
    $("#status-popup").remove();
    $("#mint-prompt").remove();
    $("#block-screen").remove();
    $(`#displayed-transponder`).remove();
    $(`#displayed-capsule`).remove(); 
    $(`#displayed-character`).remove();
    $(`#capsule-select`).remove();
    $(`#transponder-select`).remove();
    $(`#character-select`).remove();
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
