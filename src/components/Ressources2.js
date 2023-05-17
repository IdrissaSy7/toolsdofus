import Ortie from "../JSON/alchimiste.json";
import Frene from "../JSON/bucheron.json";
import Fer from "../JSON/mineur.json";
import Goujon from "../JSON/pecheur.json";
import Ble from "../JSON/paysan.json";

// Data ressources
const jobs = {
  Alchimiste: [
    {
      data: Ortie.Ortie.monde2,
      name: "Ortie",
      imgUrl: "./Ressources/Alchimiste/Ortie.png",
    },
  ],
  Bucheron: [
    {
      name: "Bois de Frêne",
      data: Frene.Frene.monde2,
      imgUrl: "./Ressources/Bucheron/Frene.png",
    },
  ],
  Paysan: [
    {
      name: "Blé",
      data: Ble.Ble.monde2,
      imgUrl: "./Ressources/Paysan/Ble.png",
    },
  ],
  Mineur: [
    {
      name: "Fer",
      data: Fer.Fer.monde2,
      imgUrl: "./Ressources/Mineur/Fer.png",
    },
  ],
  Pecheur: [
    {
      name: "Goujon",
      data: Goujon.Goujon.monde2,
      imgUrl: "./Ressources/Pecheur/Goujon.png",
    },
  ],
};

export default jobs;
