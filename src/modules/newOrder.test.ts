describe("[Testcase] newOrder", () => {
  it("controllo che la funzione newOrder esista", () => {
    const data = {};
    const order = newOrder(data);
    expect(order).toBeDefined();
  });
  it("codice fiscale è vuoto", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.codiceFiscale.toBeEmpty());
  });

  it(`controllo codice fiscale che sia una stringa`, () => {
    const data = {};
    const order = newOrder(data);
    expect(order.codiceFiscale.toBeString());
  });
  it(`controllo codice fiscale che sia lungo 16 caratteri`, () => {
    const data = {};
    const order = newOrder(data);
    expect(order.codiceFiscale.toHaveLength(16));
  });

  it("controllo regex per il codice fiscale", () => {
    const data = {};
    const order = newOrder(data);
    expect(
      order.codiceFiscale.toMatch(
        /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
      )
    );
  });
  it("controllo che nome non sia vuoto", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.nome.toBeEmpty());
  });
  it(`controllo nome che sia una stringa`, () => {
    const data = {};
    const order = newOrder(data);
    expect(order.nome.toBeString());
  });
  it("controlla che il nome non sia più lungo di 30 caratteri", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.nome.toHaveLength(30));
  });
  it("controllo che cognome non sia vuoto", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.cognome.toBeEmpty());
  });
  it(`controllo cognome che sia una stringa`, () => {
    const data = {};
    const order = newOrder(data);
    expect(order.cognome.toBeString());
  });
  it("controlla che il cognome non sia più lungo di 30 caratteri", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.cognome.toHaveLength(30));
  });
  it("controllo che email non sia vuoto", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.email.toBeEmpty());
  });
  it(`controllo email che sia una stringa`, () => {
    const data = {};
    const order = newOrder(data);
    expect(order.email.toBeString());
  });
  it("controlla che l'email non abbia più di 319 caratteri", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.email.toHaveLength(319));
  });
  it("controllo regex per l'email", () => {
    const data = {};
    const order = newOrder(data);
    expect(order.email.toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
  });
});
