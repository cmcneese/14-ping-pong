class ResultItemView {
  constructor(model) {
        // setup data for our current table item
    this.model = model;

    this.el = document.createElement('div');
    this.el.classList.add('grid__game');

    this.el.innerHTML = `
    <div class="grid__game--date">Oct. 24 2:00 PM</div>
    <div class= "grid__game--content">
      <div class= "grid__game--content_1">
        <div class="grid__game--player_1"> Ryan </div>
        <div class="grid__game--score_1"> 5  </div>
      </div>
      <div class="grid__game--content_2">
        <div class="grid__game--player_2"> Dan </div>
        <div class="grid__game--score_2"> 9 </div>
      </div>
    </div>`;
  }

  render() {
    this.el.querySelector('.input__player-1-name').innerText = this.model.game.players.name;
    this.el.querySelector('.input__player-1-score').innerText = this.model.game.scores;
    this.el.querySelector('.input__player-2-name').innerText = this.model.game.players.name;
    this.el.querySelector('.input__player-2-score').innerText = this.model.game.scores;
    this.el.querySelector('.input__time').innerText = this.model.game.dateTime;
  }
}

export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';
        // array loop our model
    this.model.forEach((game) => {
      const row = new ResultItemView(game);
      row.render();
      this.el.appendChild(row.el);
    });
  }
}
