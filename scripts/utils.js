// Loading select field options

var capsuleSVGs = new Map();
var transponderSVGs = new Map();
var charSVGs = new Map();

const loadTransponderImage = async(id) => {
    const uri = await transponders.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    transponderSVGs.set(id, svg);
};

const loadCapsuleImage = async(id) => {
    const uri = await spaceCapsules.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    capsuleSVGs.set(id, svg);
};

const loadCharacterImage = async(id) => {
    const uri = await characters.tokenURI(id);
    const decodedUri = JSON.parse(atob(uri.replace("data:application/json;base64,", "")))
    const svg = atob(decodedUri.image.replace("data:image/svg+xml;base64,", ""));
    charSVGs.set(id, svg);
};

const loadCharacterSelect = async() => {
    const yourCharacters = await characters.walletOfOwner(await getAddress());
    const sortedCharacters = [...yourCharacters].sort((a, b) => a - b);
    $(".character-select").empty();
    $(".character-select").append(`<option value="" disabled selected>ID</option>`);
    for (let i = 0; i < sortedCharacters.length; i++) {
        id = sortedCharacters[i];
        $(".character-select").append(`<option value="${id}">${id}</option>`); 
    }
};

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

const displayTransponder = async(id, returnSVG=false) => {
    await closeDisplay();
    const svg = transponderSVGs.get(id);
    if (returnSVG) {
        return svg;
    }
    else {
        let height = $(document).height();
        $("body").append(`<div id='block-screen' style="height:${height}px" onclick='closeDisplay()'></div>`);
        $("body").append(`<div id="displayed-transponder"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
    }
};

const displayCapsule = async(id, returnSVG=false) => {
    await closeDisplay();
    const svg = capsuleSVGs.get(id);
    if (returnSVG) {
        return svg;
    }
    else {
        let height = $(document).height();
        $("body").append(`<div id='block-screen' style="height:${height}px" onclick='closeDisplay()'></div>`);
        $("body").append(`<div id="displayed-capsule"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
    }
};

const displayCharacter = async(id, returnSVG=false) => {
    await closeDisplay();
    const uri = await characters.tokenURI(id);
    const decodedUri = JSON.parse(atob(uri.replace("data:application/json;base64,", "")))
    const image = atob(decodedUri.image.replace("data:image/svg+xml;base64,", ""));
    if (returnSVG) {
        return image;
    }
    else {
        let height = $(document).height();
        $("body").append(`<div id='block-screen' style="height:${height}px" onclick='closeDisplay()'></div>`);
        $("body").append(`<div id="displayed-character"><span id="close" onclick='closeDisplay()'>x</span>${image}</div>`);
    }
};

const assetToSVGMaps = new Map([['transponder', transponderSVGs], ['capsule', capsuleSVGs], ['character', charSVGs]]);

var selectedForAction = new Map([['beamTransponders', new Set()], ['beamCapsules', new Set()], 
                                ['uploadTransponder', null], ['uploadCapsule', null], 
                                ['augmentTransponders', new Set()], ['augmentCapsules', new Set()],
                                ['augmentWMatsCharacter', null], ['augmentWCharCharacter', null],
                                ['augmentWCharBurnedChars', new Set()], ['equipCharacter', null], ['levelUpCharacter', null],
                                ['changeBio', null], ['changeName', null],
                                ['rerollRace', null], ['uploadRace', null]]);

const oneSelectionMax = new Set(['uploadCapsule', 'uploadTransponder', 'augmentWMatsCharacter', 'augmentWCharCharacter', 'equipCharacter', 
                                    'levelUpCharacter', 'changeBio', 'changeName', 'rerollRace', 'uploadRace'])

async function selectForAction(id, asset, action) {
    if (oneSelectionMax.has(action)) { //add all the character single ones as well to this and selectedforaction
        if (id == selectedForAction.get(action)) {
            selectedForAction.set(action, null);
            $(`#${asset}-${id}`).removeClass("active");
        }
        else {
            selectedForAction.set(action, id);
            $(`.${asset}-div`).removeClass("active");
            $(`#${asset}-${id}`).addClass("active");
        }
        if (selectedForAction.get(action) == null) {
            $(`.selected-${asset}s-${action}`).text("Selected: None");
        }
        else {
            $(`.selected-${asset}s-${action}`).text('Selected: ' + id);
        }
    }
    else {
        if (!selectedForAction.get(action).has(id)) {
            selectedForAction.get(action).add(id);
            $(`#${asset}-${id}`).addClass("active");
        }
        else {
            selectedForAction.get(action).delete(id);
            $(`#${asset}-${id}`).removeClass("active");
        }
        if (selectedForAction.get(action).size == 0) {
            $(`.selected-${asset}s-${action}`).text("Selected: None");
        }
        else {
            let selectedString = `${Array.from(selectedForAction.get(action)).sort((a, b) => a - b).join(' ')}`;
            $(`.selected-${asset}s-${action}`).text('Selected: ' + selectedString);
        }
    }
    const displayFunction = actionToDisplayUpdate.get(action);
    displayFunction();
}

const populateMyCharacters = async() => {
    const ownedChars = await getCharactersOfAddress((await getAddress()), true);
    for (let i = 0; i < ownedChars.length; i++) {
        id = ownedChars[i];
        elemID = `char-${id}`;
        svg = await isolateIMG(id, elemID);
        mesYield = formatEther(await charactersController.getCharacterYieldRate(id));
        $("#characters-block").append(`<div class="your-char" onclick='displayCharacter(${id})'>${svg}<h3>${mesYield} <img src="./images/mes.png" width="30px"> /Day</h3></div>`)
        let charIMG = document.getElementById(elemID);
        if ($( window ).width() <= 767) {
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
        }
        else if ($( window ).width() > 1700 && $( window ).width() < 2300) {
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 900);
        }
        else if ($( window ).width() >= 2300) {
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);
        }
        else {
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 700);
        }
    }
};

const closeDisplay = async() => {
    $("#error-popup").remove();
    $("#status-popup").remove();
    $("#block-screen").remove();
    $(`#displayed-transponder`).remove();
    $(`#displayed-capsule`).remove(); 
    $(`#displayed-character`).remove();
    $(`#capsule-select`).remove();
    $(`#transponder-select`).remove();
    $(`#character-select`).remove();
};


const equipClasses = ["WEAPONS", "CHEST", "HEAD", "LEGS", "VEHICLE", "ARMS", "ARTIFACTS", "RINGS"];

const getEquipmentLevels = async(id) => {
    const capsuleID = (await characterStorage.characters(id)).spaceCapsuleId_;

    let levels = new Map();
    for (let i = 0; i < equipClasses.length; i++) {
        let equipClass = equipClasses[i];
        let rarity = await charactersController.getItemRarity(capsuleID, equipClass);
        let _baseTier = await charactersController.queryBaseEquipmentTier(rarity);
        let _equipClassProxy = equipClass === "WEAPONS" ? "WEAPON" : equipClass === "ARTIFACTS" ? "ARTIFACT" : equipClass === "RINGS" ? "RING" : equipClass;
        let _upgrades = (await characterStorage.equipments(id))[`${_equipClassProxy.toLowerCase()}Upgrades_`];
        let currentLevel = _baseTier + _upgrades;
        levels.set(i, currentLevel);
        levels.set(`${equipClass.toLowerCase()}Lvl`, currentLevel);
    }

    return levels;
};


const equipmentMap = new Map([[0, "Weapon"], [1, "Chest"], [2, "Head"], [3, "Legs"], 
                            [4, "Vehicle"], [5, "Arms"], [6, "Artifact"], [7, "Ring"]]);


const updateAugment = async() => {
    const id = selectedForAction.get('augmentWCharCharacter');

    if (id !== null) {
        $("#augment-w-char-img").empty();
        $("#augment-w-char-img").append(await isolateIMG(id, 'augment-w-char-svg'));
        $("#augment-w-char-img"). attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("augment-w-char-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);

        const currentAugments = (await characterStorage.characters(id)).augments_;
        $("#augment-w-char-current-augments").empty();
        $("#augment-w-char-current-augments").append(`<h3>Current Augments: ${currentAugments}</h3>`);
    }
};

const updateAugmentWithMats = async() => {
    const id = selectedForAction.get('augmentWMatsCharacter');

    if (id !== null) {
        $("#augment-w-mats-img").empty();
        $("#augment-w-mats-img").append(await isolateIMG(id, 'augment-w-mats-svg'));
        $("#augment-w-mats-img"). attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("augment-w-mats-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);

        const currentAugments = (await characterStorage.characters(id)).augments_;
        $("#augment-w-mats-current-augments").empty();
        $("#augment-w-mats-current-augments").append(`<h3>Current Augments: ${currentAugments}</h3>`);
    }
};

const updateLevelUpPoints = async() => {
    const id = selectedForAction.get('levelUpCharacter');
    $("#level-up-amount").empty(); 
    $("#level-up-amount").append(`<option value="">-</option>`);

    if (id !== null) {
        $("#level-up-char-img").empty();
        $("#level-up-char-img").append(await isolateIMG(id, 'level-up-svg'));
        $("#level-up-char-img"). attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("level-up-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);

        const stats = await characterStorage.characters(id);
        const currentBasePoints = stats.basePoints_;
        $("#level-up-char-stats").empty();
        $("#level-up-char-stats").append(`<h3>Current Base Points: ${currentBasePoints}</h3>`);

        const pointsLeft = 50 - currentBasePoints;
        for (let i = 1; i <= pointsLeft; i++) {
            $("#level-up-amount").append(`<option value="${i}">${i}</option>`); 
        }
    }
};

const equipColors = new Map([[0, "white"], [1, "#00FF00"], [2, "#FFFF00"], [3, "#FF9E3D"], [4, "#FF00D6"], [5, "#B026FF"], [6, "#F72119"]]);

const updateEquipmentLevelDisplay = async(id) => {
    const levels = await getEquipmentLevels(id);
    if (id !== selectedForAction.get('equipCharacter')) return;

    for (let i = 0; i < 8; i++) {
        let equipmentType = equipmentMap.get(i);
        let level = levels.get(i);
        if (i < 4) {
            $("#equip-stats-1").append(`<div style="text-align:center">${equipmentType}:<span style="color:${equipColors.get(level)}"> Level ${level}<span></div>`);
        }
        else {
            $("#equip-stats-2").append(`<div style="text-align:center">${equipmentType}:<span style="color:${equipColors.get(level)}"> Level ${level}</span></div>`);
        }
    }
};

var lastId = -1;

const updateEquipmentUpgrade = async() => {
    const id = selectedForAction.get('equipCharacter');
    const equipmentType = $("#upgrade-eq-type").val();
    $("#upgrade-eq-amount").empty(); 
    $("#upgrade-eq-amount").append(`<option value="">-</option>`);

    let equipmentUpgrades;

    if (id !== null) {
        equipmentUpgrades = await characterStorage.equipments(id);
        if (id !== lastId) {
            $("#equip-stats-1").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
            $("#equip-stats-2").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
            lastId = id;
            $("#upgrade-equip-img").empty();
            $("#upgrade-equip-img").append(await isolateIMG(id, 'upgrade-equip-svg'));
            $("#upgrade-equip-img"). attr("onclick",`displayCharacter(${id})`);
            let charIMG = document.getElementById("upgrade-equip-svg");
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
        
            await updateEquipmentLevelDisplay(id);

            $(".stats-loading").remove();
        }
    }

    if (id !== null && equipmentType) {

        const currentUpgrades = equipmentUpgrades[equipmentType-1];
        const upgradesLeft = 4 - currentUpgrades;
        for (let i = 1; i <= upgradesLeft; i++) {
            $("#upgrade-eq-amount").append(`<option value="${i}">${i}</option>`); 
        }
    }
};

const updateCharBioImage = async() => {
    const id = selectedForAction.get('changeBio');
    if (id !== null) {
        $("#change-bio-img").empty();
        $("#change-bio-img").append(await isolateIMG(id, 'change-bio-svg'));
        $("#change-bio-img").attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("change-bio-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
    }
};

const updateCharNameImage = async() => {
    const id = selectedForAction.get('changeName');
    if (id !== null) {
        $("#change-name-img").empty();
        $("#change-name-img").append(await isolateIMG(id, 'change-name-svg'));
        $("#change-name-img").attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("change-name-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
    }
};

const updateRerollRaceImage = async() => {
    const id = selectedForAction.get('rerollRace');
    if (id !== null) {
        $("#reroll-race-img").empty();
        $("#reroll-race-img").append(await isolateIMG(id, 'reroll-race-svg'));
        $("#reroll-race-img").attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("reroll-race-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
    }
};

const updateUploadRaceImage = async() => {
    const id = selectedForAction.get('uploadRace');
    if (id !== null) {
        $("#upload-race-img").empty();
        $("#upload-race-img").append(await isolateIMG(id, 'upload-race-svg'));
        $("#upload-race-img").attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("upload-race-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 830);
    }
};

const augmentCosts = new Map([[0, 0], [1, 1], [2, 2], [3, 5], [4, 10], [5, 15], [6, 25], [7, 50], [8, 100], [9, 250]]);

const getAugmentCost = async(desiredAugments) => {
    const id = selectedForAction.get('augmentWCharCharacter');
    const stats = await characterStorage.characters(id);
    const currentAugments = stats.augments_;
    const target = currentAugments + Number(desiredAugments);
    let cost = 0;
    for (i = currentAugments; i < target; i++) {
        cost += augmentCosts.get(i);
    }
    if (Number.isNaN(cost)) {
       $("#augment-mes-cost").text("-");
    }
    else {
        $("#augment-mes-cost").text(cost);
    }
};

const getAugmentWithMatsCost = async(desiredAugments) => {
    const id = selectedForAction.get('augmentWMatsCharacter');
    const stats = await characterStorage.characters(id);
    const currentAugments = stats.augments_;
    const target = currentAugments + Number(desiredAugments);
    let cost = 0;
    for (i = currentAugments; i < target; i++) {
        cost += augmentCosts.get(i);
    }
    if (Number.isNaN(cost)) {
       $("#augment-mats-mes-cost").text("-");
    }
    else {
        $("#augment-mats-mes-cost").text(cost);
    }
};

const levelUpCosts = new Map([[0, 1], [1, 2], [2,5], [3, 10], [4, 20], [5, 30], [6, 50], [7, 70], [8, 100], [9, 150]]);
const getLevelUpCost = async() => {
    const id = selectedForAction.get('levelUpCharacter');
    const levelUpAmount = $("#level-up-amount").val();
    const stats = await characterStorage.characters(id);
    const currentBasePoints = stats.basePoints_;
    const target = currentBasePoints + Number(levelUpAmount);
    let cost = 0;
    for (i = currentBasePoints; i < target; i++) {
        cost += levelUpCosts.get(Math.floor(i/5));
    }

    $("#level-up-mes-req").text(cost);
};

const equipmentUpgradeCosts = new Map([[0, 50], [1, 250], [2, 750], [3, 1500]]);
const getEquipmentUpgradeCost = async() => {
    const id = selectedForAction.get('equipCharacter')
    const equipmentType = $("#upgrade-eq-type").val();
    const levelsToUpgrade = $("#upgrade-eq-amount").val();
    const equipmentUpgrades = await characterStorage.equipments(id);
    const currentUpgrades = equipmentUpgrades[equipmentType-1];
    const target = currentUpgrades + Number(levelsToUpgrade);
    let cost = 0;
    for (i = currentUpgrades; i < target; i++) {
        cost += equipmentUpgradeCosts.get(i);
    }

    $("#upgrade-mes-req").text(cost);
};

const isolateIMG = async(id, elemID) => {
    const svg = await displayCharacter(id, true);

    // Get opening svg tag
    const svgOpenStart = svg.indexOf('<svg');
    const svgOpenEnd = svg.indexOf('>') + 1;
    const svgOpen = svg.substring(svgOpenStart, svgOpenStart + 4) + ` id='${elemID}' class="zoom"` +  svg.substring(svgOpenStart + 4, svgOpenEnd);

    // Get style tag
    const styleStart = svg.indexOf('<style');
    const styleEnd = svg.indexOf('/style>') + 7;
    const style = svg.substring(styleStart, styleEnd);

    // Get character image
    const imgStart = svg.indexOf('<g transform');
    const nextG = svg.indexOf('</g>', imgStart);
    const imgEnd = svg.indexOf('</g>', nextG + 1) + 4;
    const img = svg.substring(imgStart, imgEnd);

    // Get header text
    const headerStart = svg.indexOf('<text');
    const headerEnd = svg.indexOf('/text') + 5;
    const header = svg.substring(headerStart, headerEnd);

    // Assemble
    const imgToDisplay = svgOpen + style + img + header + "</svg>";

    return imgToDisplay
}

const actionToDisplayUpdate = new Map([ ['augmentWMatsCharacter', updateAugmentWithMats], ['augmentWCharCharacter', updateAugment],
                                        ['levelUpCharacter', updateLevelUpPoints], ['equipCharacter', updateEquipmentUpgrade],
                                        ['changeBio', updateCharBioImage ], ['changeName', updateCharNameImage],
                                        ['rerollRace', updateRerollRaceImage], ['uploadRace', updateUploadRaceImage]]);

const displaySelect = async(asset, action) => {
    const currentlySelected = selectedForAction.get(action);
    let single = !(currentlySelected instanceof Set);
    let assetIDs = assetToOwnedAssets.get(asset);
    if (assetIDs.length == 0) {
        await displayErrorMessage(`You do not have any ${asset}s!`);
    }
    else {
        let svgMap = assetToSVGMaps.get(asset);
        let assetsJSX = "";
        for (let i = 0; i < assetIDs.length; i++) {
            id = Number(assetIDs[i]);
            svg = svgMap.get(id);
            if (!svg) {
                await displayStatusMessage(`Still loading ${asset}s! Please wait a moment and try again...`)
                return;
            }
            active = "";
            if (single) {
                if (id == currentlySelected) {
                    active = "active";
                }
            }
            else if (currentlySelected.has(id)) {
                active = "active";
            }
            assetsJSX += `<div class='${asset}-div ${active}' id="${asset}-${id}" onclick="selectForAction(${id}, '${asset}', '${action}')">${svg}<h2>${id}</h2></div>`
        }
    
        let fakeJSX = `<div id="${asset}-select"><div id="close-div"><span id="close" onclick='closeDisplay()'>x</span></div>${assetsJSX}<div id='bottom-div'><div class="selected-${asset}s-${action}" id="selected-${asset}s-big">Selected: None</div><br class="hide-on-mobile"><button id='confirm' onclick="closeDisplay()">CONFIRM</button></div></div>`;
        let height = $(document).height();
        $("body").append(`<div id='block-screen' style="height:${height}px" onclick='closeDisplay()'></div>`);
        $("body").append(fakeJSX);
        
        if (single) {
            if (currentlySelected == null) {
                $(`.selected-${asset}s-${action}`).text("Selected: None");
            }
            else {
                $( `.selected-${asset}s-${action}`).text('Selected: ' + currentlySelected);
            }
        }
        else {
            if (currentlySelected.size == 0) {
                $(`.selected-${asset}s-${action}`).text("Selected: None");
            }
            else {
                let selectedString = `${Array.from(currentlySelected).sort((a, b) => a - b).join(' ')}`;
                $( `.selected-${asset}s-${action}`).text('Selected: ' + selectedString);
            }
        }
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function hideInventory() {
    if ($("#inventory").hasClass("hidden")) {
        $("#inventory").removeClass("hidden");
        $("#hide-inventory").text("Hide Inventory ↑");
    }
    else {
        $("#inventory").addClass("hidden");
        $("#hide-inventory").text("Show Inventory ↓");
    }
}