const buyOptions = {
  durationOptions: [1, 2, 3, 4, 5, 6],
  ticketOptions: [
    {
      id: 0,
      title: "Standard",
      description: `Cose che puoi fare:
        <ul>
            <li>Giocare con tutti i gatti.</li>
            <li>Ordinare il cibo per se e per i gattini.</li>
        </ul>`,
      price: 15
    },
    {
      id: 1,
      title: "VIP",
      description: `I biglietti VIP danno tutte le possibilità dei biglietti standart e anche:
        <ul>
            <li>Tour guidato con una storia sugli abitanti del gatto-bar.</li>
            <li>Dolcetti gratuiti per i gatti.</li>
        </ul>`,
      price: 30
    }
  ]
};

export default buyOptions;
