import Alchimiste from "../JSON/alchimiste.json";
import Bucheron from "../JSON/bucheron.json";
import Paysan from "../JSON/paysan.json";
import Mineur from "../JSON/mineur.json";
import Pecheur from "../JSON/pecheur.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Ortie.monde2,
      name: "Ortie",
      imgUrl: "./Ressources/Alchimiste/Ortie.png",
    },
  ],
  Bucheron: [
    {
      name: "Bois de Frêne",
      data: Bucheron.Frene.monde2,
      imgUrl: "./Ressources/Bucheron/Frene.png",
    },
  ],
  Paysan: [
    {
      name: "Blé",
      data: Paysan.Ble.monde2,
      imgUrl: "./Ressources/Paysan/Ble.png",
    },
  ],
  Mineur: [
    {
      name: "Fer",
      data: Mineur.Fer.monde2,
      imgUrl: "./Ressources/Mineur/Fer.png",
    },
  ],
  Pecheur: [
    {
      name: "Goujon",
      data: Pecheur.Goujon.monde2,
      imgUrl: "./Ressources/Pecheur/Goujon.png",
    },
  ],
};

export default jobs;
