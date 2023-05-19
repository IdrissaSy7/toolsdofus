import Alchimiste from "../JSON/alchimiste.json";
import Bucheron from "../JSON/bucheron.json";
import Paysan from "../JSON/paysan.json";
import Mineur from "../JSON/mineur.json";
import Pecheur from "../JSON/pecheur.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Ortie.monde1,
      name: "Ortie",
      imgUrl: "./Ressources/Alchimiste/Ortie.png",
    },
    {
      name: "Sauge",
      data: Alchimiste.Sauge,
      imgUrl: "./Ressources/Alchimiste/Sauge.png",
    },
    {
      name: "Trèfle à 5 feuilles",
      data: Alchimiste.Trefle,
      imgUrl: "./Ressources/Alchimiste/Trefle.png",
    },
    {
      name: "Menthe Sauvage",
      data: Alchimiste.Menthe,
      imgUrl: "./Ressources/Alchimiste/Menthe.png",
    },
    {
      name: "Orchidée Freyesque",
      data: Alchimiste.Orchidee,
      imgUrl: "./Ressources/Alchimiste/Orchidee.png",
    },
    {
      name: "Edelweiss",
      data: Alchimiste.Edelweiss,
      imgUrl: "./Ressources/Alchimiste/Edelweiss.png",
    },
    {
      name: "Graine de Pandouille",
      data: Alchimiste.Pandouille,
      imgUrl: "./Ressources/Alchimiste/Pandouille.png",
    },
    {
      name: "Ginseng",
      data: Alchimiste.Ginseng,
      imgUrl: "./Ressources/Alchimiste/Ginseng.png",
    },
    {
      name: "Belladone",
      data: Alchimiste.Belladone,
      imgUrl: "./Ressources/Alchimiste/Belladone.png",
    },
    {
      name: "Mandragore",
      data: Alchimiste.Mandragore,
      imgUrl: "./Ressources/Alchimiste/Mandragore.png",
    },
    {
      data: Alchimiste.PerceNeige.monde1,
      name: "Perce-Neige",
      imgUrl: "./Ressources/Alchimiste/PerceNeige.png",
    },
  ],
  Bucheron: [
    {
      name: "Bois de Frêne",
      data: Bucheron.Frene.monde1,
      imgUrl: "./Ressources/Bucheron/Frene.png",
    },
    {
      name: "Bois de Châtaignier",
      data: Bucheron.Chataigner,
      imgUrl: "./Ressources/Bucheron/Chataigner.png",
    },
    {
      name: "Bois de Noyer",
      data: Bucheron.Noyer,
      imgUrl: "./Ressources/Bucheron/Noyer.png",
    },
    {
      name: "Bois de Chêne",
      data: Bucheron.Chene,
      imgUrl: "./Ressources/Bucheron/Chene.png",
    },
    {
      name: "Bois de Bombu",
      data: Bucheron.Bombu,
      imgUrl: "./Ressources/Bucheron/Bombu.png",
    },
    {
      name: "Bois d'Érable",
      data: Bucheron.Erable,
      imgUrl: "./Ressources/Bucheron/Erable.png",
    },
    {
      name: "Bois d'Oliviolet",
      data: Bucheron.Oliviolet,
      imgUrl: "./Ressources/Bucheron/Oliviolet.png",
    },
    {
      name: "Bois de Pin",
      data: Bucheron.Pin,
      imgUrl: "./Ressources/Bucheron/Pin.png",
    },
    {
      name: "Bois d'If",
      data: Bucheron.If,
      imgUrl: "./Ressources/Bucheron/If.png",
    },
    {
      name: "Bois de Bambou",
      data: Bucheron.Bambou,
      imgUrl: "./Ressources/Bucheron/Bambou.png",
    },
    {
      name: "Bois de Merisier",
      data: Bucheron.Merisier,
      imgUrl: "./Ressources/Bucheron/Merisier.png",
    },
    {
      name: "Bois de Noisetier",
      data: Bucheron.Noisetier,
      imgUrl: "./Ressources/Bucheron/Noisetier.png",
    },
    {
      name: "Bois d'Ébène",
      data: Bucheron.Ebene,
      imgUrl: "./Ressources/Bucheron/Ebene.png",
    },
    {
      name: "Bois de Kaliptus",
      data: Bucheron.Kaliptus,
      imgUrl: "./Ressources/Bucheron/Kaliptus.png",
    },
    {
      name: "Bois de Charme",
      data: Bucheron.Charme,
      imgUrl: "./Ressources/Bucheron/Charme.png",
    },
    {
      name: "Bois de Bambou Sombre",
      data: Bucheron.BambouSombre,
      imgUrl: "./Ressources/Bucheron/BambouSombre.png",
    },
    {
      name: "Bois d'Orme",
      data: Bucheron.Orme,
      imgUrl: "./Ressources/Bucheron/Orme.png",
    },
    {
      name: "Bois de Bambou Sacré",
      data: Bucheron.BambouSacre,
      imgUrl: "./Ressources/Bucheron/BambouSacre.png",
    },
    {
      name: "Bois de Tremble",
      data: Bucheron.Tremble.monde1,
      imgUrl: "./Ressources/Bucheron/Tremble.png",
    },
  ],
  Paysan: [
    {
      name: "Blé",
      data: Paysan.Ble.monde1,
      imgUrl: "./Ressources/Paysan/Ble.png",
    },
    {
      name: "Orge",
      data: Paysan.Orge,
      imgUrl: "./Ressources/Paysan/Orge.png",
    },
    {
      name: "Avoine",
      data: Paysan.Avoine,
      imgUrl: "./Ressources/Paysan/Avoine.png",
    },
    {
      name: "Houblon",
      data: Paysan.Houblon,
      imgUrl: "./Ressources/Paysan/Houblon.png",
    },
    {
      name: "Lin",
      data: Paysan.Lin,
      imgUrl: "./Ressources/Paysan/Lin.png",
    },
    {
      name: "Seigle",
      data: Paysan.Seigle,
      imgUrl: "./Ressources/Paysan/Seigle.png",
    },
    {
      name: "Riz",
      data: Paysan.Riz,
      imgUrl: "./Ressources/Paysan/Riz.png",
    },
    {
      name: "Malt",
      data: Paysan.Malt,
      imgUrl: "./Ressources/Paysan/Malt.png",
    },
    {
      name: "Chanvre",
      data: Paysan.Chanvre,
      imgUrl: "./Ressources/Paysan/Chanvre.png",
    },
    {
      name: "Maïs",
      data: Paysan.Mais,
      imgUrl: "./Ressources/Paysan/Mais.png",
    },
    {
      name: "Millet",
      data: Paysan.Millet,
      imgUrl: "./Ressources/Paysan/Millet.png",
    },
    {
      name: "Frostiz",
      data: Paysan.Frostiz,
      imgUrl: "./Ressources/Paysan/Frostiz.png",
    },
  ],
  Mineur: [
    {
      name: "Fer",
      data: Mineur.Fer.monde1,
      imgUrl: "./Ressources/Mineur/Fer.png",
    },
    {
      name: "Cuivre",
      data: Mineur.Cuivre,
      imgUrl: "./Ressources/Mineur/Cuivre.png",
    },
    {
      name: "Bronze",
      data: Mineur.Bronze,
      imgUrl: "./Ressources/Mineur/Bronze.png",
    },
    {
      name: "Kobalte",
      data: Mineur.Kobalte,
      imgUrl: "./Ressources/Mineur/Kobalte.png",
    },
    {
      name: "Manganèse",
      data: Mineur.Manganese,
      imgUrl: "./Ressources/Mineur/Manganese.png",
    },
    {
      name: "Étain",
      data: Mineur.Etain,
      imgUrl: "./Ressources/Mineur/Etain.png",
    },
    {
      name: "Silicate",
      data: Mineur.Silicate,
      imgUrl: "./Ressources/Mineur/Silicate.png",
    },
    {
      name: "Argent",
      data: Mineur.Argent,
      imgUrl: "./Ressources/Mineur/Argent.png",
    },
    {
      name: "Bauxite",
      data: Mineur.Bauxite,
      imgUrl: "./Ressources/Mineur/Bauxite.png",
    },
    {
      name: "Or",
      data: Mineur.Or,
      imgUrl: "./Ressources/Mineur/Or.png",
    },
    {
      name: "Dolomite",
      data: Mineur.Dolomite,
      imgUrl: "./Ressources/Mineur/Dolomite.png",
    },

    {
      name: "Obsidienne",
      data: Mineur.Obsidienne,
      imgUrl: "./Ressources/Mineur/Obsidienne.png",
    },
  ],
  Pecheur: [
    {
      name: "Goujon",
      data: Pecheur.Goujon.monde1,
      imgUrl: "./Ressources/Pecheur/Goujon.png",
    },
    {
      name: "Greuvette",
      data: Pecheur.Greuvette,
      imgUrl: "./Ressources/Pecheur/Greuvette.png",
    },
    {
      name: "Truite",
      data: Pecheur.Truite,
      imgUrl: "./Ressources/Pecheur/Truite.png",
    },
    {
      name: "Crabe Sourimi",
      data: Pecheur.Crabe,
      imgUrl: "./Ressources/Pecheur/Crabe.png",
    },
    {
      name: "Poisson-Chaton",
      data: Pecheur.PoissonChaton,
      imgUrl: "./Ressources/Pecheur/PoissonChaton.png",
    },
    {
      name: "Poisson Pané",
      data: Pecheur.PoissonPane,
      imgUrl: "./Ressources/Pecheur/PoissonPane.png",
    },
    {
      name: "Carpe d'Iem",
      data: Pecheur.Carpe,
      imgUrl: "./Ressources/Pecheur/Carpe.png",
    },
    {
      name: "Sardine Brillante",
      data: Pecheur.Sardine,
      imgUrl: "./Ressources/Pecheur/Sardine.png",
    },
    {
      name: "Brochet",
      data: Pecheur.Brochet,
      imgUrl: "./Ressources/Pecheur/Brochet.png",
    },
    {
      name: "Kralamoure",
      data: Pecheur.Kralamoure,
      imgUrl: "./Ressources/Pecheur/Kralamoure.png",
    },
    {
      name: "Anguille",
      data: Pecheur.Anguille,
      imgUrl: "./Ressources/Pecheur/Anguille.png",
    },
    {
      name: "Dorade Grise",
      data: Pecheur.Dorade,
      imgUrl: "./Ressources/Pecheur/Dorade.png",
    },
    {
      name: "Perche",
      data: Pecheur.Perche,
      imgUrl: "./Ressources/Pecheur/Perche.png",
    },
    {
      name: "Raie Bleue",
      data: Pecheur.Raie,
      imgUrl: "./Ressources/Pecheur/Raie.png",
    },
    {
      name: "Lotte",
      data: Pecheur.Lotte,
      imgUrl: "./Ressources/Pecheur/Lotte.png",
    },
    {
      name: "Requin Marteau-Faucille",
      data: Pecheur.Requin,
      imgUrl: "./Ressources/Pecheur/Requin.png",
    },
    {
      name: "Bar Rikain",
      data: Pecheur.Bar,
      imgUrl: "./Ressources/Pecheur/Bar.png",
    },
    {
      name: "Morue",
      data: Pecheur.Morue,
      imgUrl: "./Ressources/Pecheur/Morue.png",
    },
    {
      name: "Tanche",
      data: Pecheur.Tanche,
      imgUrl: "./Ressources/Pecheur/Tanche.png",
    },
    {
      name: "Espadon",
      data: Pecheur.Espadon,
      imgUrl: "./Ressources/Pecheur/Espadon.png",
    },
    {
      name: "Poisskaille",
      data: Pecheur.Poisskaille,
      imgUrl: "./Ressources/Pecheur/Poisskaille.png",
    },
  ],
};

export default jobs;
