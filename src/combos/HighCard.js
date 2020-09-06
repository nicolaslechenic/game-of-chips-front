import Combo from '../Combo.js'

class HighCard extends Combo {
  static isAvailable(_cards) {
    return true
  }
}

export default HighCard;
