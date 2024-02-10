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
  if(ordine.giftcards[i].taglio === giftcard.taglio && ordine.giftcards[i].taglio === giftcard.taglio){
    ordine.giftcards[i].quantita === ordine.giftcards[i].quantita + giftcard.quantita;
    return ordine;
  }
}

  // Logic to add a gift card to an order
  ordine.giftcards.push(giftcard);
  return ordine; // Add return statement here
}
