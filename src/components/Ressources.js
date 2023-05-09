import Ortie from "../JSON/alchimiste.json";
import Sauge from "../JSON/alchimiste.json";
import Trefle from "../JSON/alchimiste.json";
import Menthe from "../JSON/alchimiste.json";
import Orchidee from "../JSON/alchimiste.json";
import Edelweiss from "../JSON/alchimiste.json";
import Pandouille from "../JSON/alchimiste.json";
import Ginseng from "../JSON/alchimiste.json";
import Belladone from "../JSON/alchimiste.json";
import Mandragore from "../JSON/alchimiste.json";
import PerceNeige from "../JSON/alchimiste.json";

import Frene from "../JSON/bucheron.json";
import Chataigner from "../JSON/bucheron.json";
import Noyer from "../JSON/bucheron.json";
import Chene from "../JSON/bucheron.json";
import Bombu from "../JSON/bucheron.json";
import Erable from "../JSON/bucheron.json";
import Oliviolet from "../JSON/bucheron.json";
import Pin from "../JSON/bucheron.json";
import If from "../JSON/bucheron.json";
import Bambou from "../JSON/bucheron.json";
import Merisier from "../JSON/bucheron.json";
import Noisetier from "../JSON/bucheron.json";
import Ebene from "../JSON/bucheron.json";
import Kaliptus from "../JSON/bucheron.json";
import Charme from "../JSON/bucheron.json";
import BambouSombre from "../JSON/bucheron.json";
import Orme from "../JSON/bucheron.json";
import BambouSacre from "../JSON/bucheron.json";
import Tremble from "../JSON/bucheron.json";

import Ble from "../JSON/paysan.json";
import Orge from "../JSON/paysan.json";
import Avoine from "../JSON/paysan.json";
import Houblon from "../JSON/paysan.json";
import Lin from "../JSON/paysan.json";
import Seigle from "../JSON/paysan.json";
import Riz from "../JSON/paysan.json";
import Malt from "../JSON/paysan.json";
import Chanvre from "../JSON/paysan.json";
import Mais from "../JSON/paysan.json";
import Millet from "../JSON/paysan.json";
import Frostiz from "../JSON/paysan.json";

import Fer from "../JSON/mineur.json";
import Cuivre from "../JSON/mineur.json";
import Bronze from "../JSON/mineur.json";
import Kobalte from "../JSON/mineur.json";
import Manganese from "../JSON/mineur.json";
import Etain from "../JSON/mineur.json";
import Silicate from "../JSON/mineur.json";
import Argent from "../JSON/mineur.json";
import Bauxite from "../JSON/mineur.json";
import Or from "../JSON/mineur.json";
import Dolomite from "../JSON/mineur.json";
import Obsidienne from "../JSON/mineur.json";

import Goujon from "../JSON/pecheur.json";
import Greuvette from "../JSON/pecheur.json";
import Truite from "../JSON/pecheur.json";
import Crabe from "../JSON/pecheur.json";
import PoissonChaton from "../JSON/pecheur.json";
import PoissonPane from "../JSON/pecheur.json";
import Carpe from "../JSON/pecheur.json";
import Sardine from "../JSON/pecheur.json";
import Brochet from "../JSON/pecheur.json";
import Kralamoure from "../JSON/pecheur.json";
import Anguille from "../JSON/pecheur.json";
import Dorade from "../JSON/pecheur.json";
import Perche from "../JSON/pecheur.json";
import Raie from "../JSON/pecheur.json";
import Lotte from "../JSON/pecheur.json";
import Requin from "../JSON/pecheur.json";
import Bar from "../JSON/pecheur.json";
import Morue from "../JSON/pecheur.json";
import Tanche from "../JSON/pecheur.json";
import Espadon from "../JSON/pecheur.json";
import Poisskaille from "../JSON/pecheur.json";

// Data ressources
const jobs = {
  Alchimiste: [
    {
      data: Ortie.Ortie,
      name: "Ortie",
      imgUrl: "./Ressources/Alchimiste/Ortie.png",
    },
    {
      name: "Sauge",
      data: Sauge.Sauge,
      imgUrl: "./Ressources/Alchimiste/Sauge.png",
    },
    {
      name: "Trefle à 5 feuilles",
      data: Trefle.Trefle,
      imgUrl: "./Ressources/Alchimiste/Trefle.png",
    },
    {
      name: "Menthe Sauvage",
      data: Menthe.Menthe,
      imgUrl: "./Ressources/Alchimiste/Menthe.png",
    },
    {
      name: "Orchidee Freyesque",
      data: Orchidee.Orchidee,
      imgUrl: "./Ressources/Alchimiste/Orchidee.png",
    },
    {
      name: "Edelweiss",
      data: Edelweiss.Edelweiss,
      imgUrl: "./Ressources/Alchimiste/Edelweiss.png",
    },
    {
      name: "Graine de Pandouille",
      data: Pandouille.Pandouille,
      imgUrl: "./Ressources/Alchimiste/Pandouille.png",
    },
    {
      name: "Ginseng",
      data: Ginseng.Ginseng,
      imgUrl: "./Ressources/Alchimiste/Ginseng.png",
    },
    {
      name: "Belladone",
      data: Belladone.Belladone,
      imgUrl: "./Ressources/Alchimiste/Belladone.png",
    },
    {
      name: "Mandragore",
      data: Mandragore.Mandragore,
      imgUrl: "./Ressources/Alchimiste/Mandragore.png",
    },
    {
      data: PerceNeige.PerceNeige,
      name: "Perce Neige",
      imgUrl: "./Ressources/Alchimiste/PerceNeige.png",
    },
  ],
  Bucheron: [
    {
      name: "Bois de Frene",
      data: Frene.Frene,
      imgUrl: "./Ressources/Bucheron/Frene.png",
    },
    {
      name: "Bois de Chataigner",
      data: Chataigner.Chataigner,
      imgUrl: "./Ressources/Bucheron/Chataigner.png",
    },
    {
      name: "Bois de Noyer",
      data: Noyer.Noyer,
      imgUrl: "./Ressources/Bucheron/Noyer.png",
    },
    {
      name: "Bois de Chene",
      data: Chene.Chene,
      imgUrl: "./Ressources/Bucheron/Chene.png",
    },
    {
      name: "Bois de Bombu",
      data: Bombu.Bombu,
      imgUrl: "./Ressources/Bucheron/Bombu.png",
    },
    {
      name: "Bois d'Erable",
      data: Erable.Erable,
      imgUrl: "./Ressources/Bucheron/Erable.png",
    },
    {
      name: "Bois d'Oliviolet",
      data: Oliviolet.Oliviolet,
      imgUrl: "./Ressources/Bucheron/Oliviolet.png",
    },
    {
      name: "Bois de Pin",
      data: Pin.Pin,
      imgUrl: "./Ressources/Bucheron/Pin.png",
    },
    {
      name: "Bois d'If",
      data: If.If,
      imgUrl: "./Ressources/Bucheron/If.png",
    },
    {
      name: "Bois de Bambou",
      data: Bambou.Bambou,
      imgUrl: "./Ressources/Bucheron/Bambou.png",
    },
    {
      name: "Bois de Merisier",
      data: Merisier.Merisier,
      imgUrl: "./Ressources/Bucheron/Merisier.png",
    },
    {
      name: "Bois de Noisetier",
      data: Noisetier.Noisetier,
      imgUrl: "./Ressources/Bucheron/Noisetier.png",
    },
    {
      name: "Bois d'Ebene",
      data: Ebene.Ebene,
      imgUrl: "./Ressources/Bucheron/Ebene.png",
    },
    {
      name: "Bois de Kaliptus",
      data: Kaliptus.Kaliptus,
      imgUrl: "./Ressources/Bucheron/Kaliptus.png",
    },
    {
      name: "Bois de Charme",
      data: Charme.Charme,
      imgUrl: "./Ressources/Bucheron/Charme.png",
    },
    {
      name: "Bois de Bambou Sombre",
      data: BambouSombre.BambouSombre,
      imgUrl: "./Ressources/Bucheron/BambouSombre.png",
    },
    {
      name: "Bois d'Orme",
      data: Orme.Orme,
      imgUrl: "./Ressources/Bucheron/Orme.png",
    },
    {
      name: "Bois de Bambou Sacre",
      data: BambouSacre.BambouSacre,
      imgUrl: "./Ressources/Bucheron/BambouSacre.png",
    },
    {
      name: "Bois de Tremble",
      data: Tremble.Tremble,
      imgUrl: "./Ressources/Bucheron/Tremble.png",
    },
  ],
  Paysan: [
    {
      name: "Ble",
      data: Ble.Ble,
      imgUrl: "./Ressources/Paysan/Ble.png",
    },
    {
      name: "Orge",
      data: Orge.Orge,
      imgUrl: "./Ressources/Paysan/Orge.png",
    },
    {
      name: "Avoine",
      data: Avoine.Avoine,
      imgUrl: "./Ressources/Paysan/Avoine.png",
    },
    {
      name: "Houblon",
      data: Houblon.Houblon,
      imgUrl: "./Ressources/Paysan/Houblon.png",
    },
    {
      name: "Lin",
      data: Lin.Lin,
      imgUrl: "./Ressources/Paysan/Lin.png",
    },
    {
      name: "Seigle",
      data: Seigle.Seigle,
      imgUrl: "./Ressources/Paysan/Seigle.png",
    },
    {
      name: "Riz",
      data: Riz.Riz,
      imgUrl: "./Ressources/Paysan/Riz.png",
    },
    {
      name: "Malt",
      data: Malt.Malt,
      imgUrl: "./Ressources/Paysan/Malt.png",
    },
    {
      name: "Chanvre",
      data: Chanvre.Chanvre,
      imgUrl: "./Ressources/Paysan/Chanvre.png",
    },
    {
      name: "Mais",
      data: Mais.Mais,
      imgUrl: "./Ressources/Paysan/Mais.png",
    },
    {
      name: "Millet",
      data: Millet.Millet,
      imgUrl: "./Ressources/Paysan/Millet.png",
    },
    {
      name: "Frostiz",
      data: Frostiz.Frostiz,
      imgUrl: "./Ressources/Paysan/Frostiz.png",
    },
  ],
  Mineur: [
    {
      name: "Fer",
      data: Fer.Fer,
      imgUrl: "./Ressources/Mineur/Fer.png",
    },
    {
      name: "Cuivre",
      data: Cuivre.Cuivre,
      imgUrl: "./Ressources/Mineur/Cuivre.png",
    },
    {
      name: "Bronze",
      data: Bronze.Bronze,
      imgUrl: "./Ressources/Mineur/Bronze.png",
    },
    {
      name: "Kobalte",
      data: Kobalte.Kobalte,
      imgUrl: "./Ressources/Mineur/Kobalte.png",
    },
    {
      name: "Manganese",
      data: Manganese.Manganese,
      imgUrl: "./Ressources/Mineur/Manganese.png",
    },
    {
      name: "Etain",
      data: Etain.Etain,
      imgUrl: "./Ressources/Mineur/Etain.png",
    },
    {
      name: "Silicate",
      data: Silicate.Silicate,
      imgUrl: "./Ressources/Mineur/Silicate.png",
    },
    {
      name: "Argent",
      data: Argent.Argent,
      imgUrl: "./Ressources/Mineur/Argent.png",
    },
    {
      name: "Bauxite",
      data: Bauxite.Bauxite,
      imgUrl: "./Ressources/Mineur/Bauxite.png",
    },
    {
      name: "Or",
      data: Or.Or,
      imgUrl: "./Ressources/Mineur/Or.png",
    },
    {
      name: "Dolomite",
      data: Dolomite.Dolomite,
      imgUrl: "./Ressources/Mineur/Dolomite.png",
    },

    {
      name: "Obsidienne",
      data: Obsidienne.Obsidienne,
      imgUrl: "./Ressources/Mineur/Obsidienne.png",
    },
  ],
  Pecheur: [
    {
      name: "Goujon",
      data: Goujon.Goujon,
      imgUrl: "./Ressources/Pecheur/Goujon.png",
    },
    {
      name: "Greuvette",
      data: Greuvette.Greuvette,
      imgUrl: "./Ressources/Pecheur/Greuvette.png",
    },
    {
      name: "Truite",
      data: Truite.Truite,
      imgUrl: "./Ressources/Pecheur/Truite.png",
    },
    {
      name: "Crabe",
      data: Crabe.Crabe,
      imgUrl: "./Ressources/Pecheur/Crabe.png",
    },
    {
      name: "Poisson Chaton",
      data: PoissonChaton.PoissonChaton,
      imgUrl: "./Ressources/Pecheur/PoissonChaton.png",
    },
    {
      name: "Poisson Pane",
      data: PoissonPane.PoissonPane,
      imgUrl: "./Ressources/Pecheur/PoissonPane.png",
    },
    {
      name: "Carpe",
      data: Carpe.Carpe,
      imgUrl: "./Ressources/Pecheur/Carpe.png",
    },
    {
      name: "Sardine",
      data: Sardine.Sardine,
      imgUrl: "./Ressources/Pecheur/Sardine.png",
    },
    {
      name: "Brochet",
      data: Brochet.Brochet,
      imgUrl: "./Ressources/Pecheur/Brochet.png",
    },
    {
      name: "Kralamoure",
      data: Kralamoure.Kralamoure,
      imgUrl: "./Ressources/Pecheur/Kralamoure.png",
    },
    {
      name: "Anguille",
      data: Anguille.Anguille,
      imgUrl: "./Ressources/Pecheur/Anguille.png",
    },
    {
      name: "Dorade",
      data: Dorade.Dorade,
      imgUrl: "./Ressources/Pecheur/Dorade.png",
    },
    {
      name: "Perche",
      data: Perche.Perche,
      imgUrl: "./Ressources/Pecheur/Perche.png",
    },
    {
      name: "Raie",
      data: Raie.Raie,
      imgUrl: "./Ressources/Pecheur/Raie.png",
    },
    {
      name: "Lotte",
      data: Lotte.Lotte,
      imgUrl: "./Ressources/Pecheur/Lotte.png",
    },
    {
      name: "Requin",
      data: Requin.Requin,
      imgUrl: "./Ressources/Pecheur/Requin.png",
    },
    {
      name: "Bar",
      data: Bar.Bar,
      imgUrl: "./Ressources/Pecheur/Bar.png",
    },
    {
      name: "Morue",
      data: Morue.Morue,
      imgUrl: "./Ressources/Pecheur/Morue.png",
    },
    {
      name: "Tanche",
      data: Tanche.Tanche,
      imgUrl: "./Ressources/Pecheur/Tanche.png",
    },
    {
      name: "Espadon",
      data: Espadon.Espadon,
      imgUrl: "./Ressources/Pecheur/Espadon.png",
    },
    {
      name: "Poisskaille",
      data: Poisskaille.Poisskaille,
      imgUrl: "./Ressources/Pecheur/Poisskaille.png",
    },
  ],
};

export default jobs;
