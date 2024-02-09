export type datiAnagrafici = {
  codiceFiscale: string;
  nome: string;
  cognome: string;
  email: string;
};

export type giftcard = {
  taglio: 10 | 20 | 50 | 100;
  quantita: number;
  tipologia: "digitale" | "cartacea";
};
export type ordine = {
  datiAnagrafici: datiAnagrafici;
  giftcards: giftcard[];
};
