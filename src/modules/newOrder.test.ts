import { datiAnagrafici, ordine } from "../type/type";
import { newOrder } from "./businessLogic";
let data: datiAnagrafici = {
  nome: "Mario",
  cognome: "Rossi",
  email: "ziopino@gmail.com",
  codiceFiscale: "RSSMRA80A01H501A",
  
};

const order = newOrder(data);
describe("[Testcase] newOrder", () => {
  beforeEach(() => {
    data = {
      nome: "",
      cognome: "",
      email: "",
      codiceFiscale: "",
    };
  });
  it("controllo che la funzione newOrder esista", () => {
    expect(order).toBeDefined();
  });
  it(`controllo codice fiscale che sia una stringa`, () => {
    expect(typeof order.datiAnagrafici.codiceFiscale).toBe("string");
  });
  it(`controllo codice fiscale che sia lungo 16 caratteri`, () => {
    expect(order.datiAnagrafici.codiceFiscale).toHaveLength(16);
  });

  it("controllo regex per il codice fiscale", () => {
    expect(order.datiAnagrafici.codiceFiscale).toMatch(
      /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
    );
  });

  it("controllo che nome non sia vuoto", () => {
    expect(order.datiAnagrafici.nome).toBeDefined();
  });
  it(`controllo nome che sia una stringa`, () => {
    expect(typeof order.datiAnagrafici.nome).toBe("string");
  });
  it("controllo che il nome non abbia più di 50 caratteri", () => {
    expect(order.datiAnagrafici.nome.length).toBeLessThanOrEqual(50);
  });

  it(`controllo cognome che sia una stringa`, () => {
    expect(typeof order.datiAnagrafici.cognome).toBe("string");
  });
  it("controllo che il cognome non sia vuoto", () => {
    expect(order.datiAnagrafici.cognome).toBeDefined();
  });
  it("controllo che il cognome non abbia più di 50 caratteri", () => {
    expect(order.datiAnagrafici.cognome.length).toBeLessThanOrEqual(50);
  });
  it(`controllo email che sia una stringa`, () => {
    expect(typeof order.datiAnagrafici.email).toBe("string");
  });
  it("controlla che l'email non abbia più di 319 caratteri", () => {
    expect(order.datiAnagrafici.email.length).toBeLessThanOrEqual(319);
  });
  it("controllo regex per l'email", () => {
    expect(order.datiAnagrafici.email).toMatch(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    );
  });
});
