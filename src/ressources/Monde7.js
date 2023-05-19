import Alchimiste from "../JSON/alchimiste.json";
import Mineur from "../JSON/mineur.json";
import Pecheur from "../JSON/pecheur.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Tulipe.monde7,
      name: "Tulipe en papier",
      imgUrl: "./Ressources/Alchimiste/Tulipe.png",
    },
  ],
  Mineur: [
    {
      data: Mineur.CristalPliable.monde7,
      name: "Cristal pliable",
      imgUrl: "./Ressources/Mineur/CristalPliable.png",
    },
    {
      data: Mineur.CristalLiquide.monde7,
      name: "Cristal liquide",
      imgUrl: "./Ressources/Mineur/CristalLiquide.png",
    },
  ],
  Pecheur: [
    {
      data: Pecheur.Pichon.monde7,
      name: "Pichon d'encre",
      imgUrl: "./Ressources/pecheur/Pichon.png",
    },
  ],
};

export default jobs;
