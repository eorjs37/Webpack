const card = document.createElement("div");
export class Card {
  constructor($parent) {
    this.$parent = $parent;
    this.$self = card;
    card.classList.add("card");
  }

  render() {
    this.$parent.appendChild(card);
  }
}
