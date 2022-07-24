export const recipeLibrary = [
  {
    title: "SPAGHETTI NAPOLI",
    description: "Leckere Spaghetti mit frischer Tomatensoße",
    pictureUrl:
      "https://www.eat-this.org/wp-content/uploads/2019/01/spaghetti-napoli-pasta-al-pomodoro-3-500x500.jpg",
    steps: [
      {
        id: 1,
        desc: "Gemüse vorbereiten",
        feature: ["Chop", "Chopping", "Chopping (food)", "Knock", "Whip", "Whack, thwack", "Slap, smack", "Clapping"],
        hint: "Zwiebel schälen und in kleine Stücke schneiden. 1 Paprika und 2 Tomaten klein schneiden.",
        message: "",
      },
      {
        id: 2,
        desc: "Tomaten pürieren",
        feature: ["Blender", "Vacuum cleaner", "Mechanical fan", "Toothbrush", "Tools", "Electric toothbrush", "Power tool", "Drill"],
        hint: "Tomaten in den Mixer geben und eine Minuten mixen",
        message: "Timer ist für 1 Minuten gestellt.",
        timer_seconds: 60,
      },
      {
        id: 3,
        desc: "Vorbereitung für die Nudeln",
        feature: ["Water", "Water tap, faucet", "Sink (filling or washing)"],
        hint: "Wasser in einen Topf füllen und erhitzen. Salz hinzugeben. Nudeln hinzugeben sobald das Wasser kocht.",
        message: "Herdplatte 1 wird erhitzt. Timer für 10 Minuten erstellt",
        timer_seconds: 600,
      },
      {
        id: 4,
        desc: "Gemüse anbrutzeln",
        feature: ["Sizzle", "Frying (food)", "Snake", "Breathing", "Spray", "Hiss"],
        hint: "Öl in der Pfanne erhitzen. Paprika und Zwiebeln hinzugeben",
        message: "Herdplatte 2 wird erhitzt.",
      },
      {
        id: 5,
        desc: "Fertig!",
        feature: ["Boiling"],
        hint: "Du bist fertig. Lass es dir schmecken",
        message: "Herdplatte 1 und 2 werden ausgestellt.",
      }
    ],
  },
  {
    title: "Lasagne",
    description: "Leckere Lasagne",
    pictureUrl:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTnVSWrzDPI_ScD4mk9S0Qrq5IhL35b3yW3oDVzqOIBPn2MJ4cl6CVGXONty33ObJ2nYEbMvEZttNp345sVZzw",
    steps: [
      {
        id: 1,
        desc: "Turn on oven",
        feature: ["none"],
        hint: "Watch out for your fingers!",
        message: "Back at the beginning",
      },
      {
        id: 2,
        desc: "Clean up veggies",
        feature: ["runningWater"],
        hint: "Add some salt too.",
        message: "Sound recognized",
      },
      {
        id: 3,
        desc: "Boil veggies",
        feature: ["chopping"],
        hint: "Tomatoes work especially well.",
        message: "Sound recognized",
      },
      {
        id: 4,
        desc: "Heat up last night's leftovers in microwave",
        feature: ["microwave"],
        hint: "One to two minutes.",
        message: "Alarm set for 2 Minutes",
      },
    ],
  },

  {
    title: "Cupcakes",
    description: "Perfekt für den Geburtstag deiner Tochter",
    pictureUrl:
      "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/768_576/public/2021-08/rosen_cupcakes_20322.jpg?h=4521fff0&itok=7A5efJ81",
    steps: [
      {
        id: 1,
        desc: "Backofen vorheizen",
        feature: ["nothing"],
        hint: "Backofen auf 180°C Umluft vorheizen, ein Muffinblech (12er) mit Papierförmchen auslegen.",
        message: "Backofen wird auf 180°C gestellt.",
      },
      {
        id: 2,
        desc: "Teig erstellen",
        feature: ["Blender"],
        hint: "120 g weiche Butter mit Zucker, Vanillezucker und Eiern mixen, bis sich der Zucker aufgelöst hat. Mehl, Backpulver und Salz mischen, esslöffelweise unter die Eier-Masse mixen, sodass ein glatter Teig entsteht. Zitronenschale abreiben, unter den Teig mixen, dann nach und nach 60 ml Milch dazu gießen.",
        message: "Nächster Schritt.",
      },
      {
        id: 3,
        desc: "Teig backen",
        feature: ["nothing"],
        hint: "Teig in die Förmchen füllen, ca. 20 Minuten backen (Stäbchenprobe!). Komplett auskühlen lassen.",
        message: "Wecker auf 20 Minuten gestellt.",
      },
      {
        id: 4,
        desc: "Frosting erstellen",
        feature: ["mixer"],
        hint: "Für das Frosting 120 g Butter schaumig schlagen, dann nach und nach 330 g Puderzucker untermixen und am Ende 20 ml Milch. Alles nochmal 2 Minuten auf höchster Stufe mixen, ein paar Tropfen von der Lebensmittelfarbe zufügen, bis das Frosting den gewünschten Rosaton erreicht hat. Bis zum Verwenden im Kühlschrank aufbewahren.",
        message: "Nächster Schritt.",
      },
      {
        id: 5,
        desc: "fertigstellen",
        feature: ["alarm"],
        hint: "Das Frosting in einen Spritzbeutel mit Sterntülle füllen und großzügig auf die Küchlein spritzen.",
        message: "Letzter Schritt.",
      },
    ],
  },
  {
    title: "The Student's Delight",
    description: "Basierend auf Realität",
    pictureUrl:
      "https://img.myloview.de/fototapeten/spicy-instant-ramen-noodle-bowl-700-195851747.jpg",
    steps: [
      {
        id: 1,
        desc: "Instantnudeln vorbereiten",
        feature: ["nothing"],
        hint: "0,5 Liter Wasser in den Wasserkocher geben und anmachen. Derweil Instant-Nudel Verpackung aufmachen und Nudeln zusammen mit allen anderen Zutaten in eine Schüssel geben.",
        message: "Start.",
        picture_url:
          "https://www.carlroth.com/medias/HHY9-01-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wxMzgxOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDYyL2hlNy84ODI4NDE2Njg4MTU4LmpwZ3w0YWRiNWMxNGIxYjljM2EwZmNiNTVhODYxODE4NDhiOWUwZTQ5OWU4ZjczYmU3NDRjODA2M2Q2MjFmZTBiZDM2",
      },
      {
        id: 2,
        desc: "Kochendes Wasser zugeben",
        feature: ["boiling"],
        hint: "Wasser in die Schüssel tun. Schüssel mit irgendetwas abdecken. Denk dran eine Unterlage für die Schüssel zu haben, damit man sie später transportieren kann. Ca.5 Minuten warten.",
        message: "Wecker auf 5 Minuten gestellt.",
        picture_url:
          "https://wirin.de/images/kids/texte/2014_35_Kochtopf-4c.jpg",
      },
      {
        id: 3,
        desc: "Noch was im Kühlschrank?",
        feature: ["microwave"],
        hint: "Kühlschrank nach etwaigen Resten suchen. Diese auf einen Teller geben und 1-2 Minuten in der Mikrowelle erhitzen.",
        message: "Letzter Schritt.",
        picture_url:
          "https://m.media-amazon.com/images/I/81xxOPvz+9L._AC_SX466_.jpg",
      },
    ],
  },
];
