var saveValuesDefault = {
    clickCount:0,
    clickFactor:1,
    dps:10,
    realScore:1e16,
    freeLevels:0,
    primogem:1000,
    energy:1000,
    rowCount:0,
    heroesPurchased:0,
    wishUnlocked:false,
    wishCounterSaved:0,
}

var SettingsDefault = {
    bgmVolume:0.5,
    sfxVolume:0.5,
}

var upgradeDictDefault = {
    0: {Name: "Nahida",      Row:-1,          Purchased: -1,   Type: "Catalyst",   Ele: "Dendro",     Nation:"Sumeru",   "Contribution": 0, "Level": 1, "BaseCost":20, Factor:1  },
    1: {Name: "Traveller",   Row:-1,          Purchased: -1,   Type: "Sword",      Ele: "Any",          Nation: "Any"                                   },
    2: {Name: "Collei",      Row:-1,          Purchased: -1,   Type: "Bow",        Ele: "Dendro",           Nation:"Sumeru"                                             },
    3: {Name: "Tighnari",    Row:-1,          Purchased: -1,   Type: "Bow",      Ele: "Dendro",           Nation:"Sumeru"                                             },
    4: {Name: "Dori",        Row:-1,          Purchased: -1,  Type: "Claymore",   Ele: "Electro",           Nation:"Sumeru"                                             },
    5: {Name: "Candace",     Row:-1,          Purchased: -1,   Type: "Polearm",   Ele: "Hydro",           Nation:"Sumeru"                                             },
    6: {Name: "Cyno",        Row:-1,          Purchased: -1,   Type: "Polearm",   Ele: "Electro",           Nation:"Sumeru"                                             },
    7: {Name: "Nilou",       Row:-1,          Purchased: -1,   Type: "Sword",     Ele: "Hydro",           Nation:"Sumeru"                                             },
    8: {Name: "Layla",       Row:-1,          Purchased: -1,   Type: "Sword",     Ele: "Cryo",           Nation:"Sumeru"                                             },
    9: {Name: "Faruzan",     Row:-1,          Purchased: -1,   Type: "Bow",       Ele: "Anemo",           Nation:"Sumeru"                                             },
    10: {Name: "Alhaitham",  Row:-1,          Purchased: -1,   Type: "Sword",    Ele: "Dendro",           Nation:"Sumeru"                                             },
    11: {Name: "Amber",      Row:-1,          Purchased: -1,   Type: "Bow",      Ele: "Pyro",           Nation:"Sumeru"                                             },
    12: {Name: "Bennett",    Row:-1,          Purchased: -1,   Type: "Sword",      Ele: "Pyro",           Nation:"Sumeru"                                             },
    13: {Name: "Noelle",     Row:-1,          Purchased: -1,   Type: "Claymore",      Ele: "Geo",           Nation:"Sumeru"                                             },
    14: {Name: "Barbara",    Row:-1,          Purchased: -1,   Type: "Catalyst",      Ele: "Hydro",           Nation:"Mondstadt"                                             },
    15: {Name: "Lisa",       Row:-1,          Purchased: -1,   Type: "Catalyst",      Ele: "Electro",           Nation:"Mondstadt"                                             },
    16: {Name: "Kaeya",      Row:-1,          Purchased: -1,   Type: "Sword",      Ele: "Cryo",           Nation:"Mondstadt"                                             },
    17: {Name: "Diluc",      Row:-1,          Purchased: -1,   Type: "Claymore",      Ele: "Pyro",           Nation:"Mondstadt"                                             },
    18: {Name: "Diona",      Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Cryo",           Nation:"Mondstadt"                                             },
    19: {Name: "Fischl",     Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Electro",           Nation:"Mondstadt"                                             },
    20: {Name: "Mona",       Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Hydro",           Nation:"Mondstadt"                                             },
    21: {Name: "Rosaria",    Row:-1,            Purchased: -1,   Type: "Polearm",      Ele: "Cryo",           Nation:"Mondstadt"                                             },
    22: {Name: "Klee",       Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Pyro",           Nation:"Mondstadt"                                             },
    23: {Name: "Razor",      Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Electro",           Nation:"Mondstadt"                                             },
    24: {Name: "Sucrose",    Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Anemo",           Nation:"Mondstadt"                                             },
    25: {Name: "Xiangling",  Row:-1,            Purchased: -1,   Type: "Polearm",      Ele: "Pyro",           Nation:"Liyue"                                             },
    26: {Name: "Xingqiu",    Row:-1,            Purchased: -1,   Type: "Sword",      Ele: "Hydro",           Nation:"Liyue"                                             },
    27: {Name: "Chongyun",   Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Cryo",           Nation:"Liyue"                                             },
    28: {Name: "Hu Tao",     Row:-1,            Purchased: -1,   Type: "Polearm",   Ele: "Pyro",           Nation:"Liyue"                                             },
    29: {Name: "Xinyan",     Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Pyro",           Nation:"Liyue"                                             },
    30: {Name: "Yun Jin",    Row:-1,            Purchased: -1,   Type: "Polearm",      Ele: "Geo",           Nation:"Liyue"                                             },
    31: {Name: "Beidou",     Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Electro",           Nation:"Liyue"                                             },
    32: {Name: "Ningguang",  Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Geo",           Nation:"Liyue"                                             },
    33: {Name: "Ganyu",      Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Cryo",           Nation:"Liyue"                                             },
    34: {Name: "Keqing",     Row:-1,            Purchased: -1,   Type: "Sword",      Ele: "Electro",           Nation:"Liyue"                                             },
    35: {Name: "Yanfei",     Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Pyro",           Nation:"Liyue"                                             },    
    36: {Name: "Yaoyao",     Row:-1,            Purchased: -1,     Type: "Polearm",       Ele: "Dendro",           Nation:"Liyue"                                             },
    37: {Name: "Thoma",      Row:-1,            Purchased: -1,   Type: "Polearm",      Ele: "Pyro",           Nation:"Inazuma"                                             },
    38: {Name: "Yoimiya",    Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Pyro",           Nation:"Inazuma"                                             },
    39: {Name: "Ayaka",      Row:-1,            Purchased: -1,   Type: "Sword",      Ele: "Cryo",           Nation:"Inazuma"                                             },
    40: {Name: "Gorou",      Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Geo",           Nation:"Inazuma"                                             },
    41: {Name: "Kokomi",     Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Hydro",           Nation:"Inazuma"                                             },
    42: {Name: "Sayu",       Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Anemo",           Nation:"Inazuma"                                             },
    43: {Name: "Heizou",     Row:-1,            Purchased: -1,   Type: "Catalyst",      Ele: "Anemo",           Nation:"Inazuma"                                             },
    44: {Name: "Shinobu",    Row:-1,            Purchased: -1,   Type: "Sword",      Ele: "Electro",           Nation:"Inazuma"                                             },
    45: {Name: "Itto",       Row:-1,            Purchased: -1,   Type: "Claymore",      Ele: "Geo",           Nation:"Inazuma"                                             },
    46: {Name: "Sara",       Row:-1,            Purchased: -1,   Type: "Bow",      Ele: "Electro",           Nation:"Inazuma"                                             },
    47: {Name: "Venti",      Row:-1,            Purchased: -1,   Type: "Bow",   Ele: "Anemo",           Nation:"Mondstadt"                                             },
    48: {Name: "Zhongli",    Row:-1,            Purchased: -1,   Type: "Polearm",   Ele: "Geo",           Nation:"Liyue"                                             },
    49: {Name: "Ei",         Row:-1,            Purchased: -1,   Type: "Polearm",   Ele: "Electro",           Nation:"Inazuma"                                             },
// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS// RMB TO UPDATE MAX CONSTANTS
    100: {Name: "Scaramouche", Row:-1,        "Level": 0, Purchased: -10,   Type: "Catalyst",   Ele: "Anemo",           Nation:"Sumeru"                                             },
    101: {Name: "Albedo",      Row:-1,        "Level": 0, Purchased: -10,   Type: "Sword",   Ele: "Geo",           Nation:"Mondstadt"                                             },
    102: {Name: "Qiqi",        Row:-1,        "Level": 0, Purchased: -10,   Type: "Sword",   Ele: "Cryo",           Nation:"Liyue"                                             },
    103: {Name: "Yelan",       Row:-1,        "Level": 0, Purchased: -10,   Type: "Bow",   Ele: "Hydro",           Nation:"Liyue"                                             },
    104: {Name: "Shenhe",      Row:-1,        "Level": 0, Purchased: -10,   Type: "Polearm",   Ele: "Cryo",           Nation:"Liyue"                                             },
    105: {Name: "Ayato",       Row:-1,        "Level": 0, Purchased: -10,   Type: "Sword",   Ele: "Hydro",           Nation:"Inazuma"                                             },
    106: {Name: "Yae Miko",    Row:-1,        "Level": 0, Purchased: -10,   Type: "Catalyst",   Ele: "Electro",           Nation:"Inazuma"                                             },
    107: {Name: "Eula",        Row:-1,        "Level": 0, Purchased: -10,   Type: "Claymore",   Ele: "Cryo",           Nation:"Mondstadt"                                             },
    108: {Name: "Kazuha",      Row:-1,         "Level": 0, Purchased: -10,   Type: "Sword",      Ele: "Anemo",           Nation:"Inazuma"                                             },
    109: {Name: "Xiao",        Row:-1,        "Level": 0, Purchased: -10,   Type: "Polearm",   Ele: "Anemo",           Nation:"Liyue"                                             },
    110: {Name: "Tartaglia",   Row:-1,        "Level": 0, Purchased: -10,   Type: "Bow",   Ele: "Hydro",           Nation:"Liyue"                                             },
    111: {Name: "Jean",        Row:-1,        "Level": 0, Purchased: -10,   Type: "Sword",   Ele: "Anemo",           Nation:"Mondstadt"                                             },
    // 112: {Name: "Dehya",      Row:-1,         "Level": 0, Purchased: -10,  Type: "Claymore",   Ele: "Pyro",           Nation:"Mond"                                             },
};

// RMB TO UPDATE MAX CONSTANTS
var InventoryDefault = {
    1001: {Name:"skywardBlade",                  Star:5,  Type:"Sword"          ,itemCount:0                       },
    1002: {Name:"aquilaFavonia",                 Star:5,  Type:"Sword"          ,itemCount:0                       },
    1003: {Name:"mappa",                         Star:4,  Type:"Catalyst"       ,itemCount:0                       },
    1004: {Name:"rust",                          Star:4,  Type:"Bow"            ,itemCount:0                       },
    1005: {Name:"ferrous",                       Star:3,  Type:"Claymore"       ,itemCount:0                       },
    1006: {Name:"coolSteel",                     Star:3,  Type:"Sword"          ,itemCount:0                       },
    1007: {Name:"harbingerDawn",                 Star:3,  Type:"Sword"          ,itemCount:0                       },
    1008: {Name:"travelerHandySword",            Star:3,  Type:"Sword"          ,itemCount:0                       },
    1009: {Name:"sacSword",                      Star:3,  Type:"Sword"          ,itemCount:0                       },
    1010: {Name:"lionsRoar",                     Star:3,  Type:"Sword"          ,itemCount:0                       },
    1011: {Name:"silverSword",                   Star:2,  Type:"Sword"          ,itemCount:0                       },
    1012: {Name:"dullSword",                     Star:1,  Type:"Sword"          ,itemCount:0                       },
// RMB TO UPDATE MAX CONSTANTS
    2001: {Name:"deepwoodGoblet",                Star:5                         ,itemCount:0                         },
    2002: {Name:"crimFeather",                   Star:5                         ,itemCount:0                         },
    2003: {Name:"gladiatorFlower",               Star:4                         ,itemCount:0                         },
// RMB TO UPDATE MAX CONSTANTS
    3001: {Name:"masalaCheese",                  Star:2                         ,itemCount:0            ,BuffTemp:10},
    3002: {Name:"jueyunChili",                   Star:2                         ,itemCount:0            ,BuffTemp:10},
// RMB TO UPDATE MAX CONSTANTS
    4003: {Name:"wandererEXP",                   Star:2                         ,itemCount:0            ,BuffLvlLow:1,BuffLvlHigh:3},
    4002: {Name:"adventureEXP",                  Star:3                         ,itemCount:0            ,BuffLvlLow:6,BuffLvlHigh:10},
    4001: {Name:"heroEXP",                       Star:4                         ,itemCount:0            ,BuffLvlLow:15,BuffLvlHigh:20},
// SHOP ITEMS vvv
    5000: {Name:"any5",              Star:6,            itemCount:0,     element:"Any"          },
    5001: {Name:"pyro5",             Star:5,           itemCount:0,    element:"Pyro"         },
    5002: {Name:"hydro5",             Star:5,           itemCount:0,    element:"Hydro"         },
    5003: {Name:"dendro5",             Star:5,           itemCount:0,    element:"Dendro"         },
    5004: {Name:"electro5",             Star:5,           itemCount:0,    element:"Electo"         },
    5005: {Name:"anemo5",             Star:5,           itemCount:0,    element:"Anemo"         },
    5006: {Name:"cryo5",             Star:5,           itemCount:0,    element:"Cryo"         },
    5007: {Name:"geo5",             Star:5,           itemCount:0,    element:"Geo"         },
    5008: {Name:"pyro4",             Star:4,          itemCount:0,       element:"Pyro"      },
    5009: {Name:"hydro4",             Star:4,          itemCount:0,       element:"Hydro"      },
    5010: {Name:"dendro4",             Star:4,          itemCount:0,       element:"Dendro"      },
    5011: {Name:"electro4",             Star:4,          itemCount:0,       element:"Electro"      },
    5012: {Name:"anemo4",             Star:4,          itemCount:0,       element:"Anemo"      },
    5013: {Name:"cryo4",             Star:4,          itemCount:0,       element:"Cryo"      },
    5014: {Name:"geo4",             Star:4,          itemCount:0,       element:"Geo"      },
// TALENT TEMS vvv
    6001: {Name:"liyueTal4",      Star:4,        itemCount:0,       nation:"Liyue"  }, 
    6002: {Name:"mondTal4",      Star:4,        itemCount:0,       nation:"Mondstadt" },
    6003: {Name:"sumeruTal4",      Star:4,        itemCount:0,       nation:"Sumeru" },
    6004: {Name:"inazumaTal4",      Star:4,        itemCount:0,       nation:"Inazuma" },
    6005: {Name:"liyueTal3",      Star:3,        itemCount:0,         nation:"Liyue"    },
    6006: {Name:"mondTal3",      Star:3,        itemCount:0,         nation:"Mondstadt"    },
    6007: {Name:"sumeruTal3",      Star:3,        itemCount:0,         nation:"Sumeru"    },
    6008: {Name:"inazumaTal3",      Star:3,        itemCount:0,         nation:"Inazuma"    },
// SPECIAL WEAPON
    7001:{Name:"",   Star:6, itemCount:0},
    7002:{Name:"",   Star:6, itemCount:0},
    7003:{Name:"",   Star:6, itemCount:0},
    7004:{Name:"",   Star:6, itemCount:0},
    7005:{Name:"",   Star:6, itemCount:0},
    7006:{Name:"",   Star:6, itemCount:0},
    7007:{Name:"",   Star:6, itemCount:0},
    7008:{Name:"",   Star:6, itemCount:0},
    7009:{Name:"",   Star:6, itemCount:0},
    7010:{Name:"",   Star:6, itemCount:0},
    7011:{Name:"",   Star:6, itemCount:0},
    7012:{Name:"",   Star:6, itemCount:0},
    7013:{Name:"",   Star:6, itemCount:0},
    7014:{Name:"",   Star:6, itemCount:0},
    7015:{Name:"",   Star:6, itemCount:0},
    7016:{Name:"",   Star:6, itemCount:0},
};

var eventText = {
    0: "Oh no! A strong wind current has swept through the desert and caused things to fall from the sky!",
    1: "TEXT TWO - Trigger reaction time minigame (free items + primogem)",
    2: "TEXT THREE - Trigger waldo minigame (increase click power)",
    3: "TEXT FOUR - Trigger x2 demo clicking (increase energy)",
    4: "TEXT FIVE - Pick from 7 boxes (increases NPS for x element)",
    5: "TEXT SIX - Trigger whack-a-mole (3 x 3 grid get a golden nut)",
}

var tooltip = {
    Nahida:{name:"Nahida", lore:"A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams."},
    Traveller:{name:"The Traveller", lore:"The keeper is fading away; the creator has not yet come.But the world shall burn no more, for you shall ascend."},
    Collei:{name:"             Collei               ", lore:""               },
    Cyno:{name:"               Cyno               ", lore:""                 },
    Candace:{name:"            Candace               ", lore:""            },
    Dori:{name:"               Dori               ", lore:""                 },
    Tighnari:{name:"           Tighnari               ", lore:""           },
    Nilou:{name:"              Nilou               ", lore:""              },
    Layla:{name:"              Layla               ", lore:""             },
    Faruzan:{name:"            Faruzan               ", lore:""            },
    Dehya:{name:"              Dehya               ", lore:""             },
    Alhaitham:{name:"           Alhaitham               ", lore:""         },
    Amber:{name:"              Amber               ", lore:""           },
    Bennett:{name:"            Bennett               ", lore:""           },
    Noelle:{name:"             Noelle               ", lore:""              },
    Barbara:{name:"            Barbara               ", lore:""               },
    Lisa:{name:"               Lisa               ", lore:""                    },
    Kaeya:{name:"              Kaeya               ", lore:""             },
    Diluc:{name:"              Diluc               ", lore:""                },
    Diona:{name:"              Diona               ", lore:""             },
    Fischl:{name:"             Fischl              ", lore:""               },
    Mona:{name:"               Mona               ", lore:""                    },
    Rosaria:{name:"            Rosaria               ", lore:""               },
    Klee:{name:"               Klee               ", lore:""                   },
    Razor:{name:"              Razor               ", lore:""                     },
    Sucrose:{name:"            Sucrose               ", lore:""                 },
    Xiangling:{name:"           Xiangling               ", lore:""             },
    Xingqiu:{name:"            Xingqiu               ", lore:""              },
    Chongyun:{name:"           Chongyun               ", lore:""               },
    Yaoyao:{name:"             Yaoyao               ", lore:""                    },
    Xinyan:{name:"             Xinyan               ", lore:""                 },
    "Yun Jin":{name:"           Yun Jin               ", lore:""              },
    Beidou:{name:"             Beidou               ", lore:""                    },
    Ningguang:{name:"           Ningguang               ", lore:""             },
    Ganyu:{name:"              Ganyu               ", lore:""             },
    Keqing:{name:"             Keqing               ", lore:""                 },
    Yanfei:{name:"             Yanfei               ", lore:""                 },
    Kazuha:{name:"             Kaedehara Kazuha               ", lore:""               },
    Thoma:{name:"              Thoma               ", lore:""                 },
    Yoimiya:{name:"            Yoimiya               ", lore:""           },
    Ayaka:{name:"              Kamisato Ayaka               ", lore:""               },
    Gorou:{name:"              Gorou               ", lore:""            },
    Kokomi:{name:"             Sangonomiya Kokomi               ", lore:""                  },
    Sayu:{name:"               Sayu               ", lore:""                    },
    Heizou:{name:"             Shikanoin Heizou               ", lore:""                  },
    Shinobu:{name:"            Kuki Shinobu               ", lore:""                },
    Itto:{name:"               Arataki Itto               ", lore:""                  },
    Sara:{name:"               Kujou Sara               ", lore:""                 },
    Venti:{name:"              Venti               ", lore:""          },
    Zhongli:{name:"            Zhongli               ", lore:""          },
    Ei:{name:"             Raiden Shogun              ", lore:""                },
    Jean:{name:"               Jean               ", lore:""},
    Albedo:{name:"             Albedo               ", lore:""}        ,
    Qiqi:{name:"               Qiqi               ", lore:""}           ,
    Yelan:{name:"              Yelan               ", lore:""}         ,
    Shenhe:{name:"             Shenhe               ", lore:""}           ,
    Ayato:{name:"              Kamisato Ayato               ", lore:""}           ,
    "Yae Miko":{name:"           Yae Miko               ", lore:""}             ,
    Eula:{name:"               Eula               ", lore:""}              ,
    "Hu Tao":{name:"           Hu Tao               ", lore:""}           ,
    Xiao:{name:"               Xiao               ", lore:""}              ,
    Tartaglia:{name:"           Tartaglia               ", lore:""}        ,
    Scaramouche:{name:"           Scaramouche               ", lore:""}        ,
    // ^^^ ^^^ | vvv ITEMS vvv 
    coolSteel:{name:"                            ", lore:"          "               },                  
    ferrous:{name:"                            ", lore:"          "               },                    
    mappa:{name:"                            ", lore:"          "               },                      
    rust:{name:"                            ", lore:"          "               },                       
    silverSword:{name:"                            ", lore:"          "               },                
    dullSword:{name:"                            ", lore:"          "               },                  
    skywardBlade:{name:"                            ", lore:"          "               },               
    harbingerDawn:{name:"                            ", lore:"          "               },              
    travelerHandySword:{name:"                            ", lore:"          "               },         
    sacSword:{name:"                            ", lore:"          "               },                   
    lionsRoar:{name:"                            ", lore:"          "               },                  
    aquilaFavonia:{name:"                            ", lore:"          "               },              
// RMB TO UPDATE MAX CONSTANTS
    gladiatorFlower:{name:"                            ", lore:"          "               },           
    deepwoodGoblet:{name:"                            ", lore:"          "               },             
    crimFeather:{name:"                            ", lore:"          "               },                
// RMB TO UPDATE MAX CONSTANTS
    masalaCheese:{name:"                            ", lore:"          "               },               
    jueyunChili:{name:"                            ", lore:"          "               },                
// RMB TO UPDATE MAX CONSTANTS
    wandererEXP:{name:"                            ", lore:"          "               },                
    adventureEXP:{name:"                            ", lore:"          "               },               
    heroEXP:{name:"                            ", lore:"          "               },                   

};

var expeditionDictDefault = {
    1:{Text:"Explore Teyvat | 100 "                 ,Locked:"0" ,Lore:"The legend of the Golden Nut is from a bygone era. Some on-the-ground research is certainly needed if you wanted even a slither of a chance to find the mythical fruit."},
    2:{Text:"Ask the Adventurers' Guild | 250 "   ,Locked:"0" ,Lore:"Tapping into the resources of the Adventurer's Guild's network is one way to widen the scope of the search as the more eyes, the better."},
    3:{Text:"Challenge Domains | 500 "              ,Locked:"1" ,Lore:"Clues about the origin of the Golden Nut are said to have been hidden deep inside some mysterious domain. Exploring it will likely be the next step in unravelling the fruit's location."},
    4:{Text:"Hunt Boss Enemies | 750 "              ,Locked:"1" ,Lore:"The last confirmed sighting of the Golden Nut was in the heart of the woods, which is currently being guarded by a ferocious beast. It may well be the only stone left unturned."},
    5:{Text:"Abyss Diving | 1000 "                   ,Locked:"1" ,Lore:"All trails seem to end here. With nowhere else to go, the Abyss is the sole place left where the fruit is likely to be. Search through the floors with the help of an unlikely ally."},
    6:{Text:"Locked"                         ,Locked:"0" ,Lore:"Perhaps this path will open after some time..."            },
    7:{Text:""                               ,Locked:"0" ,Lore:""            },
}

var achievementListDefault = {
    1: {Name:"Nut Collector",          Description:"Collect 10 nuts"                   ,"Done": false            },
    2: {Name:"Fan of Nuts",            Description:"Collect 1000 nuts"                  ,"Done": false            },
    3: {Name:"Nut Gatherer",           Description:"Collect 10,000 nuts"               ,"Done": false            },
    4: {Name:"Nut Accumulator",        Description:"Collect 1 million nuts"            ,"Done": false            },
    5: {Name:"Nut Hobbyist",           Description:"Collect 100 million nuts"          ,"Done": false            },
    6: {Name:"Nut Addict",             Description:"Collect 1 billion nuts"            ,"Done": false            },
    7: {Name:"Nut Fancier",            Description:"Collect 100 billion nuts"          ,"Done": false            },
    8: {Name:"Lord of the Nuts",       Description:"Collect 1 trillion nuts"           ,"Done": false            },
    9: {Name:"Nut Authority",          Description:"Collect 100 trillion nuts"         ,"Done": false            },
    10: {Name:"Nut Connoisseur",       Description:"Collect 1 quadrillion nuts"        ,"Done": false            },
    11: {Name:"Devotee of Nuts",       Description:"Collect 100 quadrillion nuts"      ,"Done": false            },
    12: {Name:"Aficionado of Nuts",    Description:"Collect 1 quintillion nuts"        ,"Done": false            },
    13: {Name:"Nut Pundit",            Description:"Collect 100 quintillion nuts"      ,"Done": false            },
    14: {Name:"Nut Antiquarian",       Description:"Collect 1 sextillion nuts"         ,"Done": false            },
    15: {Name:"Nut Savant",            Description:"Collect 100 sextillion nuts"       ,"Done": false            },
    16: {Name:"Nut Archon",            Description:"Collect 1 septillion nuts"         ,"Done": false            },
    101: {Name:"dasdasd",                     Description:"Reach 1 NpS"                       ,"Done": false            },
    102: {Name:"sdasasd",                     Description:"Reach 10 NpS"                      ,"Done": false            },
    103: {Name:"sdsdsds",                     Description:"Reach 100 NpS"                     ,"Done": false            },
    104: {Name:"sds",                     Description:"Reach 10,000 NpS"                  ,"Done": false            },
    105: {Name:"",                     Description:"Reach 100,000 NpS"                 ,"Done": false            },
    106: {Name:"",                     Description:"Reach 1 million NpS"               ,"Done": false            },
    107: {Name:"",                     Description:"Reach 100 million NpS"             ,"Done": false            },
    108: {Name:"",                     Description:"Reach 1 billion NpS"               ,"Done": false            },
    109: {Name:"",                     Description:"Reach 100 billion NpS"             ,"Done": false            },
    110: {Name:"",                     Description:"Reach 1 trillion NpS"              ,"Done": false            },
    111: {Name:"",                     Description:"Reach 100 trillion NpS"            ,"Done": false            },
    112: {Name:"",                     Description:"Reach 1 quadrillion NpS"           ,"Done": false            },
    113: {Name:"",                     Description:"Reach 100 quadrillion NpS"         ,"Done": false            },
    114: {Name:"",                     Description:"Reach 1 quintillion NpS"           ,"Done": false            },
    115: {Name:"",                     Description:"Reach 100 quintillion NpS"         ,"Done": false            },
    116: {Name:"Champion of Tevyat",   Description:"Reach 1 sextillion NpS"            ,"Done": false            },
    201: {Name:"",                     Description:"Click 10 times"                   ,"Done": false            },
    202: {Name:"",                     Description:"Click 100 times"                  ,"Done": false            },
    203: {Name:"",                     Description:"Click 1000 times"                ,"Done": false            },
    204: {Name:"",                     Description:"Click 10,000 times"               ,"Done": false            },
    205: {Name:"Master of Cultivation",Description:"Click 100,000 times"             ,"Done": false            },
    301: {Name:"The Longest Achievement Name Ever",                     Description:"Upgrade 1 time"         ,"Done": false            },
    302: {Name:"",                     Description:"Upgrade 10 times"        ,"Done": false            },
    303: {Name:"",                     Description:"Upgrade 100 times"       ,"Done": false            },
    304: {Name:"",                     Description:"Upgrade 250 times"      ,"Done": false            },
    305: {Name:"",                     Description:"Upgrade 500 times"    ,"Done": false            },
    306: {Name:"",                     Description:"Upgrade 750 time"         ,"Done": false            }, 
    307: {Name:"",                     Description:"Upgrade 1000 times"        ,"Done": false            },
    308: {Name:"",                     Description:"Upgrade 1500 times"       ,"Done": false            },
    309: {Name:"",                     Description:"Upgrade 2000 times"      ,"Done": false            },
    310: {Name:"Heart of Dendro",      Description:"Upgrade 2500 times"    ,"Done": false            },
    401: {Name:"",                     Description:""                                  ,"Done": false            },
    402: {Name:"",                     Description:""                                  ,"Done": false            },
    403: {Name:"",                     Description:""                                  ,"Done": false            },
    404: {Name:"",                     Description:""                                  ,"Done": false            },
    405: {Name:"",                     Description:""                                  ,"Done": false            },
    406: {Name:"Golden Harvest",       Description:"Obtain 1 Golden Nut"                                  ,"Done": false            },
    407: {Name:"",                     Description:"Obtain 10 Golden Nuts"                                  ,"Done": false            },
    408: {Name:"Golden Experience",    Description:"Obtain 100 Golden Nuts"                                  ,"Done": false            },
}

export { upgradeDictDefault,SettingsDefault,tooltip,InventoryDefault,expeditionDictDefault,achievementListDefault,saveValuesDefault,eventText };