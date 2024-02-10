import { datiAnagrafici, giftcard, ordine } from "../type/type";
import { addGiftCard } from "./businessLogic";

describe("[Testcase] addgiftcard", () => {
  let ordi: ordine = {
    datiAnagrafici: {
      nome: "zio pino",
      cognome: "pro",
      email: "ziocanaglia@gmail.com",
      codiceFiscale: "RSSMRA80A01H501A",
    },
    giftcards: [],
  };
   const results = addGiftCard(ordi, {
    taglio: 10,
    quantita: 1,
    tipologia: "digitale",
  });
  beforeEach(() => {
    ordi = {
      datiAnagrafici: {
        nome: "",
        cognome: "",
        email: "",
        codiceFiscale: "",
      },
      giftcards: [],
    };
  });
  it("controlla che la gifcard non sia vuota", () => {
    addGiftCard(ordi, { taglio: 10, quantita: 1, tipologia: "digitale" });
    expect(ordi.giftcards.length).toBeGreaterThan(0);
  });
  it("controllla che che il taglio di giftcard sia 10, 20, 50 o 100", () => {
    ordi.giftcards.map((giftcard) => {
      expect(giftcard.taglio).toBe(10 || 20 || 50 || 100);
    });
  });
  it("controlla che la tipologia di giftcard sia digitale o cartacea", () => {
    ordi.giftcards.map((giftcard) => {
      expect(giftcard.tipologia).toBe("digitale" || "cartacea");
    });
  });
  it("controlla che la quantità di giftcard sia un numero", () => {
    ordi.giftcards.map((giftcard) => {
      expect(typeof giftcard.quantita).toBe("number");
    });
  });

  it("controllo tagli di gifcard uguali", () => {
   
    for (let i = 0; i < ordi.giftcards.length -1; i++) {
      expect(ordi.giftcards[i].tipologia !== ordi.giftcards[i+1].tipologia || ordi.giftcards[i].taglio !== ordi.giftcards[i+1].taglio).toBeTruthy();
    }
  });
});
