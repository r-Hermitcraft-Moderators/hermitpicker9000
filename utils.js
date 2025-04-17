$(document).ready(function() {
  $('.jswarning').hide();
  var str = "";
  var Hermits = [
    {
      "name":"BdoubleO100",
      "img":"bdubs",
      "youtube": "bdoubleo100",
      "twitch": "bdoubleo",
      "twitter": "BdoubleO100",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "bigchannel", "male", "US", "regularreleases", "mostlyminecraft", "S1", "S5", "S6", "S7", "S8", "NHO", "IDEA", "S9"]
    },
    {
      "name":"cubfan135",
      "img":"cubfan",
      "youtube":"cubfan135",
      "twitch":"cubfan135",
      "twitter":"cubfan135",
      "traits": ["builder", "redstone", "calm", "whizkid", "lore", "lightediting", "male", "US", "streamer", "regularreleases", "mostlyminecraft", "S4", "S5", "S6", "S7", "S8", "Modded", "Concorp", "S9"]
    },
    {
      "name":"Docm77",
      "img":"doc",
      "youtube":"docm77",
      "twitch":"docm77live",
      "twitter":"docm77",
      "traits": ["redstone", "calm", "whizkid", "lore", "heavyediting", "male", "Europe", "streamer", "regularreleases", "diversecontent", "S3", "S4", "S5", "S6", "S7", "S8", "NHO", "S9"]
    },
    {
      "name":"Etho",
      "img":"etho",
      "youtube":"ethoslab",
      "twitch":"ethotv",
      "twitter":"etholp",
      "traits": ["redstone", "calm", "whizkid", "heavyediting", "bigchannel", "male", "US", "S3", "S4", "S5", "S7", "S8", "Modded", "NHO", "S9"]
    },
    {
      "name":"Falsesymmetry",
      "img":"false",
      "youtube":"FalseSymmetry",
      "twitch":"FalseSymmetry",
      "twitter":"falsesymmetry",
      "traits": ["builder", "calm", "derpy", "lore", "lightediting", "smallchannel", "female", "Europe", "streamer", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"GeminiTay",
      "img":"gemini",
      "youtube":"c/GeminiTayMC",
      "twitch":"geminitay",
      "twitter":"geminitaymc",
      "traits": ["builder", "calm", "whizkid", "lightediting", "female", "US", "streamer", "bigchannel", "regularreleases", "S8", "Modded", "S9"]
    },
    {
      "name":"GoodTimesWithScar",
      "img":"scar",
      "youtube":"goodtimeswithscar",
      "twitch":"goodtimeswithscar",
      "twitter":"GTWScar",
      "traits": ["builder", "calm", "derpy", "lore", "heavyediting", "alteregos", "bigchannel", "male", "US", "streamer", "S4", "S5", "S6", "S7", "S8", "Concorp", "S9"]
    },
    {
      "name":"Grian",
      "img":"grian",
      "youtube":"Xelqua",
      "twitch":"grianmc",
      "twitter":"GrianMC",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "alteregos", "bigchannel", "male", "Europe", "regularreleases", "S6", "S7", "S8", "Architech", "S9"]
    },
    {
      "name":"Hypnotizd",
      "img":"hypno",
      "youtube":"hypnotizd",
      "twitch":"hypnotizd",
      "twitter":"hypnotizd_",
      "traits": ["builder", "redstone", "calm", "lightediting", "smallchannel", "male",  "US", "streamer", "regularreleases", "S1", "S2", "S3", "S7", "S8", "Modded", "S9"]
    },
    {
      "name":"iJevin",
      "img":"jevin",
      "youtube":"ijevin",
      "twitch":"ijevin",
      "twitter":"ijevin",
      "traits": ["builder", "redstone", "hyper", "lore", "lightediting", "male", "US", "streamer", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"impulseSV",
      "img":"impulse",
      "youtube":"impulseSV",
      "twitch":"impulsesv",
      "twitter":"impulseSV",
      "traits": ["redstone", "calm", "whizkid", "lore", "lightediting", "male", "US", "streamer", "bigchannel", "regularreleases", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"Joe Hills",
      "img":"joehills",
      "youtube":"joehillstsd",
      "twitch":"joehills",
      "twitter":"joehills",
      "traits": ["builder", "calm", "whizkid", "lore", "lightediting", "smallchannel", "male", "US", "streamer", "regularreleases", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"Keralis",
      "img":"keralis",
      "youtube":"keralis",
      "twitch":"keralis",
      "twitter":"worldofkeralis",
      "traits": ["builder", "calm", "derpy", "lore", "heavyediting", "bigchannel", "male", "Europe", "regularreleases", "diversecontent", "S1", "S2", "S3", "S6", "S7", "S8", "Modded","IDEA", "S9"]
    },
    {
      "name":"Mumbo Jumbo",
      "img":"mumbo",
      "youtube":"ThatMumboJumbo",
      "twitch":"thatmumbojumbo",
      "twitter":"ThatMumboJumbo",
      "traits": ["redstone", "calm", "derpy", "lore", "heavyediting", "bigchannel", "male", "Europe", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8",  "Architech", "S9"]
    },
    {
      "name":"PearlescentMoon",
      "img":"pearl",
      "youtube":"c/pearlescentmoon",
      "twitch":"pearlescentmoon",
      "twitter":"pearlescentmoon",
      "traits": ["builder", "lore", "lightediting", "female", "Oceania", "streamer", "regularreleases", "diversecontent", "S8", "Modded", "S9"]
    },
    {
      "name":"Rendog",
      "img":"rendog",
      "youtube":"rendog",
      "twitch":"rendogtv",
      "twitter":"renthedog",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "alteregos", "male", "Europe", "streamer", "regularreleases", "S4", "S5", "S6", "S7", "S8", "Modded", "S9"]
    },
    {
      "name":"Tango Tek",
      "img":"tango",
      "youtube":"TangoTekLP",
      "twitch":"tangotek",
      "twitter":"TangoTekLP",
      "traits": ["redstone", "hyper", "derpy", "whizkid", "heavyediting", "male", "US", "streamer", "bigchannel", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"VintageBeef",
      "img":"vintagebeef",
      "youtube":"vintagebeef",
      "twitch":"vintagebeef",
      "twitter":"vintagebeeflp",
      "traits": ["builder", "calm", "lore", "lightediting", "bigchannel", "male", "US", "regularreleases", "diversecontent", "S4", "S5", "S7", "S8", "Modded", "NHO", "S9"]
    },
    {
      "name":"Welsknight",
      "img":"wels",
      "youtube":"welsknightgaming",
      "twitch":"welsknight",
      "twitter":"welsknightplays",
      "traits": ["builder", "calm", "lightediting", "alteregos", "male", "US", "regularreleases", "diversecontent", "S2", "S3", "S5", "S7", "S8", "Modded", "S9"]
    },
    {
      "name":"xbCrafted",
      "img":"xbcrafted",
      "youtube":"xbxaxcx",
      "twitch":"xbcrafted",
      "twitter":"xBCrafted",
      "traits": ["builder", "calm", "derpy", "lightediting", "smallchannel", "male", "US", "streamer", "regularreleases", "diversecontent", "S2", "S3", "S5", "S7", "S8", "Modded", "S9"]
    },
    {
      "name":"Xisuma",
      "img":"xisuma",
      "youtube":"xisumavoid",
      "twitch":"xisuma",
      "twitter":"xisumavoid",
      "traits": ["builder", "redstone", "calm", "derpy", "lightediting", "alteregos", "bigchannel", "male", "Europe", "streamer", "regularreleases", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "Modded", "IDEA", "S9"]
    },
    {
      "name":"Zedaph",
      "img":"zedaph",
      "youtube":"zedaphplays",
      "twitch":"ZedaphPlays",
      "twitter":"ZedaphPlays",
      "traits": ["builder", "redstone", "hyper", "derpy", "whizkid", "heavyediting", "alteregos", "smallchannel", "male", "Europe", "streamer", "S5", "S6", "S7", "S8", "S9"]
    },
    {
      "name":"ZombieCleo",
      "img":"zombiecleo",
      "youtube":"zombiecleo",
      "twitch":"zombiecleo",
      "twitter":"zombiecleo",
      "traits": ["builder", "hyper", "whizkid", "lore", "heavyediting", "smallchannel", "female", "Europe", "regularreleases", "diversecontent", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    }
  ]

  for (i in Hermits) {
    //console.log(Hermits[i].name);
    str += "<div class=\"hermitblock ";
      for (j in Hermits[i].traits) {
        str += Hermits[i].traits[j] + " ";
      }
    str += "\"><div class=\"pfp\"><img class=\"hermitpic\" src=\"images/";
    str += Hermits[i].img;
    str += ".png\"></div><div class=\"playername\">";
    str += Hermits[i].name;
    str += "</div><div class=\"channels\"><a href=\"https://youtube.com/";
    str += Hermits[i].youtube;
    str += "\">Youtube</a> <a href=\"https://twitch.tv/";
    str += Hermits[i].twitch;
    str += "\">Twitch</a> <a href=\"https://twitter.com/";
    str += Hermits[i].twitter;
    str += "\">Twitter</a></div></div>";
  }
  $("#hermitlist").append(str);
  $('.hermitblock').hide();

   // form selects
  $('.hermitselector').change(function() {
    var selectedTraits = [];
    $('.hermitselector:checked').each(function() {
      if ($(this).val() != "np"){
        var newTrait = $(this).val();
        selectedTraits.push(newTrait);
      }
    })
    var traitString = selectedTraits.join('.');
    //console.log(traitString);
    $('.hermitblock').hide();
    if (traitString.length > 0) {
      $('#Placeholder').hide();
      $('.'+traitString).show();
    } else {
      $('#Placeholder').show();
    }
  })

});
