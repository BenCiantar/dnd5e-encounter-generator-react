export function addListener(type, id, callback, param){
    document.getElementById(id).addEventListener(type, function (){
      callback(param);
    });
  }

export function calculateMultiplier(count) {
  if (count == 1){
    let multiplier = 1;
    return multiplier;
  } else if (count == 2) {
    let multiplier = 1.5;
    return multiplier;
  } else if (count >= 3 && count <= 6) {
    let multiplier = 2;
    return multiplier;
  } else if (count >= 7 && count <= 10) {
    let multiplier = 2.5;
    return multiplier;
  } else if (count >= 11 && count <= 14) {
    let multiplier = 3;
    return multiplier;
  } else if (count >= 15) {
    let multiplier = 4;
    return multiplier;
  }
}

export function calculateXpValues(playerLevels){
  let xpThresholds = {
    easyXpThreshold: 0,
    mediumXpThreshold: 0,
    hardXpThreshold: 0,
    deadlyXpThreshold: 0
  }

  for (let i = 0; i < playerLevels.length; i++) {
    switch (playerLevels[i].value) {
      case "1":
        xpThresholds.easyXpThreshold += 25;
        xpThresholds.mediumXpThreshold += 50;
        xpThresholds.hardXpThreshold += 75;
        xpThresholds.deadlyXpThreshold += 100;
        break;
      case "2":
        xpThresholds.easyXpThreshold += 50;
        xpThresholds.mediumXpThreshold += 100;
        xpThresholds.hardXpThreshold += 150;
        xpThresholds.deadlyXpThreshold += 200;
        break;
      case "3":
        xpThresholds.easyXpThreshold += 75;
        xpThresholds.mediumXpThreshold += 150;
        xpThresholds.hardXpThreshold += 225;
        xpThresholds.deadlyXpThreshold += 400;
        break;
      case "4":
        xpThresholds.easyXpThreshold += 125;
        xpThresholds.mediumXpThreshold += 250;
        xpThresholds.hardXpThreshold += 375;
        xpThresholds.deadlyXpThreshold += 500;
        break;
      case "5":
        xpThresholds.easyXpThreshold += 250;
        xpThresholds.mediumXpThreshold += 500;
        xpThresholds.hardXpThreshold += 750;
        xpThresholds.deadlyXpThreshold += 1000;
        break;
      case "6":
        xpThresholds.easyXpThreshold += 300;
        xpThresholds.mediumXpThreshold += 600;
        xpThresholds.hardXpThreshold += 900;
        xpThresholds.deadlyXpThreshold += 1400;
        break;
      case "7":
        xpThresholds.easyXpThreshold += 350;
        xpThresholds.mediumXpThreshold += 750;
        xpThresholds.hardXpThreshold += 1100;
        xpThresholds.deadlyXpThreshold += 1700;
        break;
      case "8":
        xpThresholds.easyXpThreshold += 450;
        xpThresholds.mediumXpThreshold += 900;
        xpThresholds.hardXpThreshold += 1400;
        xpThresholds.deadlyXpThreshold += 2100;
        break;
      case "9":
        xpThresholds.easyXpThreshold += 550;
        xpThresholds.mediumXpThreshold += 1100;
        xpThresholds.hardXpThreshold += 1600;
        xpThresholds.deadlyXpThreshold += 2400;
        break;
      case "10":
        xpThresholds.easyXpThreshold += 600;
        xpThresholds.mediumXpThreshold += 1200;
        xpThresholds.hardXpThreshold += 1900;
        xpThresholds.deadlyXpThreshold += 2800;
        break;
      case "11":
        xpThresholds.easyXpThreshold += 800;
        xpThresholds.mediumXpThreshold += 1600;
        xpThresholds.hardXpThreshold += 2400;
        xpThresholds.deadlyXpThreshold += 3600;
        break;
      case "12":
        xpThresholds.easyXpThreshold += 1000;
        xpThresholds.mediumXpThreshold += 2000;
        xpThresholds.hardXpThreshold += 3000;
        xpThresholds.deadlyXpThreshold += 4000;
        break;
      case "13":
        xpThresholds.easyXpThreshold += 1100;
        xpThresholds.mediumXpThreshold += 2200;
        xpThresholds.hardXpThreshold += 3400;
        xpThresholds.deadlyXpThreshold += 5100;
        break;
      case "14":
        xpThresholds.easyXpThreshold += 1250;
        xpThresholds.mediumXpThreshold += 2500;
        xpThresholds.hardXpThreshold += 3800;
        xpThresholds.deadlyXpThreshold += 5700;
        break;
      case "15":
        xpThresholds.easyXpThreshold += 1400;
        xpThresholds.mediumXpThreshold += 2800;
        xpThresholds.hardXpThreshold += 4300;
        xpThresholds.deadlyXpThreshold += 6400;
        break;
      case "16":
        xpThresholds.easyXpThreshold += 1600;
        xpThresholds.mediumXpThreshold += 3200;
        xpThresholds.hardXpThreshold += 4800;
        xpThresholds.deadlyXpThreshold += 7200;
        break;
      case "17":
        xpThresholds.easyXpThreshold += 2000;
        xpThresholds.mediumXpThreshold += 3900;
        xpThresholds.hardXpThreshold += 5900;
        xpThresholds.deadlyXpThreshold += 8800;
        break;
      case "18":
        xpThresholds.easyXpThreshold += 2100;
        xpThresholds.mediumXpThreshold += 4200;
        xpThresholds.hardXpThreshold += 6300;
        xpThresholds.deadlyXpThreshold += 9500;
        break;
      case "19":
        xpThresholds.easyXpThreshold += 2400;
        xpThresholds.mediumXpThreshold += 4900;
        xpThresholds.hardXpThreshold += 7300;
        xpThresholds.deadlyXpThreshold += 10900;
        break;
      case "20":
        xpThresholds.easyXpThreshold += 2800;
        xpThresholds.mediumXpThreshold += 5700;
        xpThresholds.hardXpThreshold += 8500;
        xpThresholds.deadlyXpThreshold += 12700;
        break;
    }
  }
  return xpThresholds;
}

export function setDifficultyMessage(finalTotal) {
  const easyXp = getXpValueFromPlayerSummary("easy-xp");
  const mediumXp = getXpValueFromPlayerSummary("medium-xp");
  const hardXp = getXpValueFromPlayerSummary("hard-xp");
  const deadlyXp = getXpValueFromPlayerSummary("deadly-xp");

  const diffMeter = document.getElementById("difficulty-meter");

  const difficultyThresholds = [
    easyXp,
    mediumXp,
    hardXp,
    deadlyXp
  ];

  difficultyThresholds.sort((a, b) => {
    return Math.abs(finalTotal - a) - Math.abs(finalTotal - b);
})

console.log(difficultyThresholds[0]);

  if (difficultyThresholds[0] == easyXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: green">EASY</span> for your players!</h2>
    `
  } else if (difficultyThresholds[0] == mediumXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be of <span style="color: yellow">MEDIUM</span> difficulty for your players!</h2>
    `
  } else if (difficultyThresholds[0] == hardXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: orange">HARD</span> for your players!</h2>
    `
  } else if (difficultyThresholds[0] == deadlyXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: red">DEADLY</span> for your players!</h2>
    `
  }
}

export function getXpValueFromPlayerSummary(id) {
  let xpValue = document.getElementById(id).innerHTML;
  xpValue = xpValue.replace(/\D/g,'');
  xpValue = parseInt(xpValue);
  return xpValue;
}




export function convertCrToXp(cr){
    switch (cr){
      case "0":
        return 10;
      case "1/8":
        return 25;
      case "1/4":
        return 50;
      case "1/2":
        return 100;
      case "1":
        return 200;
      case "2":
        return 450;
      case "3":
        return 700;
      case "4":
        return 1100;
      case "5":
        return 1800;
      case "6":
        return 2300;
      case "7":
        return 2900;
      case "8":
        return 3900;
      case "9":
        return 5000;
      case "10":
        return 5900;
      case "11":
        return 7200;
      case "12":
        return 8400;
      case "13":
        return 10000;
      case "14":
        return 11500;
      case "15":
        return 13000;
      case "16":
        return 15000;
      case "17":
        return 18000;
      case "18":
        return 20000;
      case "19":
        return 22000;
      case "20":
        return 25000;
      case "21":
        return 33000;
      case "22":
        return 41000;
      case "23":
        return 50000;
      case "24":
        return 62000;
      case "25":
        return 75000;
      case "26":
        return 90000;
      case "27":
        return 105000;
      case "28":
        return 120000;
      case "29":
        return 135000;
      case "30":
        return 155000;
    }
  }
  
export function convertNumPlayersToString(numPlayersInt) {
  switch (numPlayersInt) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
  }
}

export function formatCrAsIdString(rating) {
  switch (rating) {
    case "1/8":
      return "eighth";
    case "1/4":
      return "quarter";
    case "1/2":
      return "half";
    default:
      return rating;
  }
}