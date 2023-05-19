import Alchimiste from "../JSON/alchimiste.json";
import Paysan from "../JSON/paysan.json";

const jobs = {
  Alchimiste: [
    {
      data: Alchimiste.Salikrone.monde6,
      name: "Salikrone",
      imgUrl: "./Ressources/Alchimiste/Salikrone.png",
    },
  ],
  Paysan: [
    {
      data: Paysan.Quisnoa.monde6,
      name: "Quisnoa",
      imgUrl: "./Ressources/Paysan/Quisnoa.png",
    },
  ],
};

export default jobs;
