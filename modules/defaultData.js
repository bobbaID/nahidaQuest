let saveValuesDefault = {
    versNumber:0,
    clickCount:0,
    clickFactor:1,
    dps:0,
    realScore:0,
    freeLevels:0,
    primogem:0,
    energy:100,
    rowCount:0,
    heroesPurchased:0,
    mailCore:0,
    wishUnlocked: false,
    wishCounterSaved:0,
    goldenNut: 0,
    goldenTutorial: false,
    currentTime: 0,
    achievementCount: 0,
}

let persistentValuesDefault = {
    goldenCore: 0,
    upgrade1:{Purchased: 0},
    upgrade2:{Purchased: 0},
    upgrade3:{Purchased: 0},
    upgrade4:{Purchased: 0},
    upgrade5:{Purchased: 0},
    upgrade6:{Purchased: 0},
    upgrade7:{Purchased: 0},
    upgrade8:{Purchased: 0},
    upgrade9:{Purchased: 0},
    upgrade10:{Purchased: 0},
    upgrade11:{Purchased: 0},
    upgrade12:{Purchased: 0},
}

let SettingsDefault = {
    bgmVolume:0.5,
    sfxVolume:0.5,
    combineFloatText:false,
}

let advDictDefault = {
    adventureRank: 1,
    advXP: 0,
    bounty:[],
    bountyTime: 0,
    rankDict: {
        1:{Locked:false},
        2:{Locked:true},
        3:{Locked:true},
        4:{Locked:true},
        5:{Locked:true},
        6:{Locked:true},
        7:{Locked:true},
        8:{Locked:true},
        9:{Locked:true},
        10:{Locked:true},
        11:{Locked:true},
        12:{Locked:true},
        13:{Locked:true},
        14:{Locked:true},
        15:{Locked:true},
        16:{Locked:true},
        17:{Locked:true},
        18:{Locked:true},
        19:{Locked:true},
        20:{Locked:true},
    }
}

let permUpgrades = {
    1:{Name:"Blessing of Vitality",        Effect:10,  Max:50,   Cap:false,   Description:"Increases Energy gained by clicking Big Nahida."},
    2:{Name:"Blessing of Technique",       Effect:35,  Max:50,   Cap:false,   Description:"Increase Nuts gained by clicking Big Nahida."},
    3:{Name:"Blessing of Wanderlust",      Effect:2,   Max:50,   Cap:true,   Description:"Increases base power of Wish characters."},
    4:{Name:"Blessing of Concession",      Effect:2,   Max:25,   Cap:true,   Description:"Decreases price of Dori's Shop items."},
    5:{Name:"Blessing of Might",           Effect:1,   Max:50,   Cap:true,   Description:"Increases critical hit amount and chance.",   zeroDescription:"Enables critical hits for clicking Big Nahida."},
    6:{Name:"Blessing of Tranquillity",    Effect:1,   Max:50,   Cap:false,   Description:"Increases offline Nut accumulation rate.",    zeroDescription:"Enables accumulation of Nuts while offline."},
    7:{Name:"Blessing of Fortuity",        Effect:0.5, Max:50,   Cap:true,   Description:"Increases chances of lucky outcomes.",          zeroDescription:"Enables additional lucky outcomes for certain events."},
    8:{Name:"Blessing of Enlightenment",   Effect:2,   Max:25,   Cap:true,   Description:"Decreases cooldown between Event spawns."},
    9:{Name:"Blessing of Riches",          Effect:10,  Max:25,   Cap:true,   Description:"Increases Primogems gained from Events/Achievements."},
    10:{Name:"Blessing of Strength",       Effect:10,  Max:25,   Cap:false,   Description:"Increases effectiveness of Weapons and Talents."},
    11:{Name:"Blessing of Fortification",  Effect:10,  Max:25,   Cap:false,   Description:"Increases effectiveness of Artifacts, Gems and Food."},
    12:{Name:"Blessing of Determination",  Effect:1,  Max:50,   Cap:false,   Description:"Increase XP gain from Expeditions attempts."},
}

let expeditionDictDefault = {
    1:"0",
    2:"0",
    3:"1",
    4:"1",
    5:"1",
    6:"1",
    7:"0",
    8:"0",
    9:"1",
    10:"0",
    12:"0",
}

let storeInventoryDefault = {
    active:false,
    storedTime:0,
    1:{Purchased:false, Item:0, Cost:0},
    2:{Purchased:false, Item:0, Cost:0},
    3:{Purchased:false, Item:0, Cost:0},
    4:{Purchased:false, Item:0, Cost:0},
    5:{Purchased:false, Item:0, Cost:0},
    6:{Purchased:false, Item:0, Cost:0},
    7:{Purchased:false, Item:0, Cost:0},
    8:{Purchased:false, Item:0, Cost:0},
    9:{Purchased:false, Item:0, Cost:0},
    10:{Purchased:false, Item:0, Cost:0},
}

let enemyInfo = {
    bountyKey: {
        0:["Fungi-Mob.4","Specter-Mob.5","Hilichurl-Mob.4","Hoarder-Mob.4"],
        1:["Eremite-Mob.2","Fatui-Mob.5","Fatui-Leader.4","Hilichurl-Leader.3","Automaton-Mob.3"],
        2:["Fatui-Leader.4","Hilichurl-Leader.3","MAbyss-Leader.4","Eremite-Mob.2","Fungi-Leader.2"],
        3:["Hilichurl-Boss.2","Fungi-Boss.1","Eremite-Leader.3","MAbyss-Leader.4"],
        4:["WAbyss-Mob.2","WAbyss-Leader.2","WAbyss-Boss.1","HAbyss-Mob.3","HAbyss-Leader.3"],
        5:["Automaton-Boss.1","Automaton-Superboss.2","Eremite-Boss.2"],
    },

    // LVL 1
    "1-Wave-1":{Wave:[101,101,101],         BG:[1,4]},
    "1-Wave-2":{Wave:[121,121,121],         BG:[1,4]},
    "1-Wave-3":{Wave:[111,111,111],         BG:[3,6]},
    "1-Wave-4":{Wave:[111,112],             BG:[3,6]},
    "1-Wave-5":{Wave:[121,121],             BG:[6,7]},
    "1-Wave-6":{Wave:[131,131,131],         BG:[4,7]},
    101:{Class:"Mob",       Variation:4,   Type:"Fungi",       HP:70,    ATK:0.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    111:{Class:"Mob",       Variation:4,   Type:"Hilichurl",   HP:100,   ATK:0.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    112:{Class:"Leader",    Variation:3,   Type:"Hilichurl",   HP:140,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    121:{Class:"Mob",       Variation:5,   Type:"Specter",     HP:200,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    131:{Class:"Mob",       Variation:4,   Type:"Hoarder",     HP:100,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    // LVL 2
    "2-Wave-1":{Wave:[201,202,201],         BG:[1,5]},
    "2-Wave-2":{Wave:[202,202],             BG:[1,5]},
    "2-Wave-3":{Wave:[212,211,212],         BG:[2,4]},
    "2-Wave-4":{Wave:[211,211,211,211],     BG:[4,6]},
    "2-Wave-5":{Wave:[222,222],             BG:[6,7]},
    "2-Wave-6":{Wave:[221,221,221,221],     BG:[6,7]},
    "2-Wave-7":{Wave:[231,202,231],         BG:[4,7]},
    201:{Class:"Mob",       Variation:2,   Type:"Eremite",     HP:150,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    202:{Class:"Leader",    Variation:3,   Type:"Eremite",     HP:250,   ATK:1.5,   AtkCooldownLower:15,   AtkCooldownUpper:20},
    211:{Class:"Mob",       Variation:5,   Type:"Fatui",       HP:150,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    212:{Class:"Leader",    Variation:4,   Type:"Fatui",       HP:300,   ATK:1.5,   AtkCooldownLower:30,   AtkCooldownUpper:30},
    221:{Class:"Mob",       Variation:3,   Type:"Automaton",   HP:150,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    222:{Class:"Leader",    Variation:2,   Type:"Automaton",   HP:300,   ATK:1.5,   AtkCooldownLower:20,   AtkCooldownUpper:25},
    231:{Class:"Mob",       Variation:4,   Type:"Hoarder",     HP:150,   ATK:1,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    // LVL 3
    "3-Wave-1":{Wave:[301,301,301,301],     BG:[1,4]},
    "3-Wave-2":{Wave:[302,301,302],         BG:[1,4]},
    "3-Wave-3":{Wave:[311,311,312,311],     BG:[2,5]},
    "3-Wave-4":{Wave:[312,311,312],         BG:[2,5]},
    "3-Wave-5":{Wave:[321,322,322,321],     BG:[4,6]},
    "3-Wave-6":{Wave:[322,322,322],         BG:[4,6]},
    "3-Wave-7":{Wave:[331,331,331],         BG:[4,6]},
    301:{Class:"Mob",       Variation:2,   Type:"Eremite",     HP:250,   ATK:1,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    302:{Class:"Leader",    Variation:3,   Type:"Eremite",     HP:400,   ATK:2,   AtkCooldownLower:30,   AtkCooldownUpper:30},
    311:{Class:"Mob",       Variation:5,   Type:"Fatui",       HP:200,   ATK:1.5, AtkCooldownLower:50,   AtkCooldownUpper:50},
    312:{Class:"Leader",    Variation:4,   Type:"Fatui",       HP:300,   ATK:2,   AtkCooldownLower:30,   AtkCooldownUpper:30},
    321:{Class:"Mob",       Variation:4,   Type:"Hilichurl",   HP:200,   ATK:1.5, AtkCooldownLower:50,   AtkCooldownUpper:50},
    322:{Class:"Leader",    Variation:3,   Type:"Hilichurl",   HP:350,   ATK:2,   AtkCooldownLower:40,   AtkCooldownUpper:40},
    331:{Class:"Leader",    Variation:4,   Type:"MAbyss",      HP:400,   ATK:1,   AtkCooldownLower:25,   AtkCooldownUpper:30},
    // LVL 4
    "4-Wave-1":{Wave:[401,402,401],         BG:[1,2]},
    "4-Wave-2":{Wave:[411,411,411],         BG:[3,4]},
    "4-Wave-3":{Wave:[412,412],             BG:[3,4]},
    "4-Wave-4":{Wave:[421],                 BG:[4,5]},
    "4-Wave-5":{Wave:[431],                 BG:[2,3]},
    401:{Class:"Leader",    Variation:2,   Type:"Fungi",       HP:400,    ATK:1.5,   AtkCooldownLower:40,   AtkCooldownUpper:50},
    402:{Class:"Boss",      Variation:1,   Type:"Fungi",       HP:1000,   ATK:3,     AtkCooldownLower:25,   AtkCooldownUpper:30},
    411:{Class:"Leader",    Variation:3,   Type:"Hilichurl",   HP:700,    ATK:2,     AtkCooldownLower:30,   AtkCooldownUpper:35},
    412:{Class:"Boss",      Variation:2,   Type:"Hilichurl",   HP:1000,   ATK:2.5,   AtkCooldownLower:25,   AtkCooldownUpper:30},
    421:{Class:"Superboss", Variation:1,   Type:"Fatui",       HP:2666,   ATK:3.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    431:{Class:"Superboss", Variation:2,   Type:"Automaton",   HP:2700,   ATK:3.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    // LVL 5
    "5-Wave-1":{Wave:[502,502,502],         BG:[3,6]},
    "5-Wave-2":{Wave:[501,503,501],         BG:[3,6]},
    "5-Wave-3":{Wave:[504],                 BG:[3,6]},
    "5-Wave-4":{Wave:[511,512,512,511],     BG:[3,6]},
    "5-Wave-5":{Wave:[522,522,522],         BG:[1,2]},
    "5-Wave-6":{Wave:[521,523,521],         BG:[1,2]},
    "5-Wave-7":{Wave:[532,532,532],         BG:[2,4]},
    "5-Wave-8":{Wave:[531,532,532,531],     BG:[2,4]},
    501:{Class:"Mob",       Variation:2,   Type:"WAbyss",      HP:1000,   ATK:1.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    502:{Class:"Leader",    Variation:2,   Type:"WAbyss",      HP:1500,   ATK:2,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    503:{Class:"Boss",      Variation:1,   Type:"WAbyss",      HP:2000,   ATK:4,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    504:{Class:"Superboss", Variation:1,   Type:"WAbyss",      HP:3000,   ATK:4,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    511:{Class:"Mob",       Variation:3,   Type:"HAbyss",      HP:1000,   ATK:1.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    512:{Class:"Leader",    Variation:3,   Type:"HAbyss",      HP:1750,   ATK:2,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    521:{Class:"Mob",       Variation:3,   Type:"Automaton",   HP:1000,   ATK:1.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    522:{Class:"Leader",    Variation:3,   Type:"Automaton",   HP:1500,   ATK:2,     AtkCooldownLower:50,   AtkCooldownUpper:50},
    523:{Class:"Boss",      Variation:1,   Type:"Automaton",   HP:2000,   ATK:2.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    531:{Class:"Leader",    Variation:3,   Type:"Eremite",     HP:1250,   ATK:1.5,   AtkCooldownLower:50,   AtkCooldownUpper:50},
    532:{Class:"Boss",      Variation:2,   Type:"Eremite",     HP:1500,   ATK:2,     AtkCooldownLower:50,   AtkCooldownUpper:50},
}

let upgradeDictDefault = {
    0:  {Row:-1,        Purchased: -1,   "Contribution": 0, "Level": 1, "BaseCost":20, Factor:1  },
    1:  {Row:-1,        Purchased: -1,    },
    2:  {Row:-1,        Purchased: -1,    },
    3:  {Row:-1,        Purchased: -1,    },
    4:  {Row:-1,        Purchased: -1,    },
    5:  {Row:-1,        Purchased: -1,    },
    6:  {Row:-1,        Purchased: -1,    },
    7:  {Row:-1,        Purchased: -1,    },
    8:  {Row:-1,        Purchased: -1,    },
    9:  {Row:-1,        Purchased: -1,    },
    10: {Row:-1,        Purchased: -1,    },
    50: {Row:-1,        Purchased: -1,    },
    51: {Row:-1,        Purchased: -1,    },
    52: {Row:-1,        Purchased: -1,    },
    53: {Row:-1,        Purchased: -1,    },
    54: {Row:-1,        Purchased: -1,    },
    55: {Row:-1,        Purchased: -1,    },
    56: {Row:-1,        Purchased: -1,    },
    57: {Row:-1,        Purchased: -1,    },
    58: {Row:-1,        Purchased: -1,    },
    59: {Row:-1,        Purchased: -1,    },
    60: {Row:-1,        Purchased: -1,    },
    61: {Row:-1,        Purchased: -1,    },
    62: {Row:-1,        Purchased: -1,    },
    63: {Row:-1,        Purchased: -1,    },
    64: {Row:-1,        Purchased: -1,    },
    101: {Row:-1,        Purchased: -1,    },
    102: {Row:-1,        Purchased: -1,    },
    103: {Row:-1,        Purchased: -1,    },
    104: {Row:-1,        Purchased: -1,    },
    105: {Row:-1,        Purchased: -1,    },
    106: {Row:-1,        Purchased: -1,    },
    107: {Row:-1,        Purchased: -1,    },
    108: {Row:-1,        Purchased: -1,    },
    109: {Row:-1,        Purchased: -1,    },
    110: {Row:-1,        Purchased: -1,    },    
    111: {Row:-1,        Purchased: -1,    },
    112: {Row:-1,        Purchased: -1,    },
    113: {Row:-1,        Purchased: -1,    },
    150: {Row:-1,        Purchased: -1,    },
    151: {Row:-1,        Purchased: -1,    },
    152: {Row:-1,        Purchased: -1,    },
    153: {Row:-1,        Purchased: -1,    },
    154: {Row:-1,        Purchased: -1,    },
    155: {Row:-1,        Purchased: -1,    },
    156: {Row:-1,        Purchased: -1,    },
    157: {Row:-1,        Purchased: -1,    },
    158: {Row:-1,        Purchased: -1,    },
    159: {Row:-1,        Purchased: -1,    },
    160: {Row:-1,        Purchased: -1,    },
// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS
    800: {Row:-1,    "Level": 0, Purchased: -10,   },
    801: {Row:-1,    "Level": 0, Purchased: -10,   },
    802: {Row:-1,    "Level": 0, Purchased: -10,   },
    803: {Row:-1,    "Level": 0, Purchased: -10,   },
    804: {Row:-1,    "Level": 0, Purchased: -10,   },
    805: {Row:-1,    "Level": 0, Purchased: -10,   },
    806: {Row:-1,    "Level": 0, Purchased: -10,   },
    807: {Row:-1,    "Level": 0, Purchased: -10,   },
    808: {Row:-1,    "Level": 0, Purchased: -10,   },
    809: {Row:-1,    "Level": 0, Purchased: -10,   },
    810: {Row:-1,    "Level": 0, Purchased: -10,   },
    811: {Row:-1,    "Level": 0, Purchased: -10,   },
    812: {Row:-1,    "Level": 0, Purchased: -10,   },
};

export { upgradeDictDefault,SettingsDefault,expeditionDictDefault,saveValuesDefault,enemyInfo,persistentValuesDefault,permUpgrades,advDictDefault,storeInventoryDefault };