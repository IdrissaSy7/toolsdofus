import Alchimiste from "../JSON/alchimiste.json";
import Bucheron from "../JSON/bucheron.json";
import Paysan from "../JSON/paysan.json";
import Mineur from "../JSON/mineur.json";
import Pecheur from "../JSON/pecheur.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Salikrone.monde4,
      name: "Salikrone",
      imgUrl: "./Ressources/Alchimiste/Salikrone.png",
    },
  ],
  Bucheron: [
    {
      data: Bucheron.Aquajou.monde4,
      name: "Bois d'Aquajou",
      imgUrl: "./Ressources/Bucheron/Aquajou.png",
    },
  ],
  Paysan: [
    {
      data: Paysan.Quisnoa.monde4,
      name: "Quisnoa",
      imgUrl: "./Ressources/Paysan/Quisnoa.png",
    },
  ],
  Mineur: [
    {
      data: Mineur.Ecume.monde4,
      name: "Écume de mer",
      imgUrl: "./Ressources/Mineur/Ecume.png",
    },
  ],
  Pecheur: [
    {
      data: Pecheur.Patelle.monde4,
      name: "Patelle",
      imgUrl: "./Ressources/Pecheur/Patelle.png",
    },
  ],
};

export default jobs;
