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

  it("controllo tagli di gift card uguali", () => {
    addGiftCard(ordi, { taglio: 10, quantita: 1, tipologia: "digitale" });
    addGiftCard(ordi, { taglio: 20, quantita: 1, tipologia: "digitale" });
    
  
    // Verifica che l'array di gift cards sia definito e abbia almeno due elementi
    expect(ordi.giftcards).toBeDefined();
   expect(ordi.giftcards.length).toBeGreaterThanOrEqual(2);

  
    // Confronta i tagli e le tipologie delle gift cards adiacenti
    for (let i = 0; i < ordi.giftcards.length - 1; i++) {
      const currentGiftCard = ordi.giftcards[i];
      const nextGiftCard = ordi.giftcards[i + 1];
  
      // Assicurati che le tipologie siano diverse
      if (currentGiftCard.taglio !== nextGiftCard.taglio) {
        expect(currentGiftCard.tipologia).toBe(nextGiftCard.tipologia);
      }  
  
      // Assicurati che i tagli siano diversi
      expect(currentGiftCard.taglio).not.toBe(nextGiftCard.taglio);
    }
  });
  
});
