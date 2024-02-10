import { datiAnagrafici, ordine, giftcard } from "../type/type";

export function newOrder(datiAnagrafici: datiAnagrafici): ordine {
  // Logic to process the new order and return the datiAnagrafici
  return {
    datiAnagrafici: datiAnagrafici,
    giftcards: [],
  };
}

export function addGiftCard(ordine: ordine, giftcard: giftcard): ordine {
  for (let i = 0; i < ordine.giftcards.length; i++) {
    if (ordine.giftcards[i].taglio === giftcard.taglio && ordine.giftcards[i].tipologia === giftcard.tipologia) {
      // Aggiorna la quantità esistente invece di aggiungere una nuova gift card
      ordine.giftcards[i].quantita += giftcard.quantita;
      return ordine;
    }
  }

  // Se non esiste una gift card con lo stesso taglio e tipologia, aggiungi una nuova gift card
  ordine.giftcards.push(giftcard);
  return ordine;
}

