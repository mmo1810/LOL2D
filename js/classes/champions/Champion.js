// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { Global } from '../../stores/Global.js';
import { Types } from '../Types.js';

class Champion {
  constructor(config = {}) {
    const {} = config;

    this.type = Types.Champion;
  }

  getSkin(skinObj) {
    return Global.assets[skinObj.avatar];
  }

  getStats(statsObj) {
    const result_stats = {};
    for (let stat in statsObj) {
      result_stats[stat] = statsObj[stat];
    }

    return result_stats;
  }

  getAbilities(abilitiesObj) {
    const result_abilities = {};
    for (let ability in abilitiesObj) {
      let c = abilitiesObj[ability];

      if (typeof c === 'function') {
        result_abilities[ability] = new c({ owner: this });
      } else {
        result_abilities[ability] = c;
      }
    }

    return result_abilities;
  }
}

export { Champion };
