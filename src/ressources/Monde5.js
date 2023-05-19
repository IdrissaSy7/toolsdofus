import Alchimiste from "../JSON/alchimiste.json";
import Bucheron from "../JSON/bucheron.json";
import Paysan from "../JSON/paysan.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Salikrone.monde5,
      name: "Salikrone",
      imgUrl: "./Ressources/Alchimiste/Salikrone.png",
    },
  ],
  Bucheron: [
    {
      data: Bucheron.Aquajou.monde5,
      name: "Bois d'Aquajou",
      imgUrl: "./Ressources/Bucheron/Aquajou.png",
    },
  ],
  Paysan: [
    {
      data: Paysan.Quisnoa.monde5,
      name: "Quisnoa",
      imgUrl: "./Ressources/Paysan/Quisnoa.png",
    },
  ],
};

export default jobs;
