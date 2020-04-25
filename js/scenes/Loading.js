import Dom from '../utils/Dom.js';
import { Menu } from './Menu.js';
import { assetUrls } from '../stores/Config.js';
import { Global } from '../stores/Global.js';

const Loading = function () {
  const { p5: _ } = Global;
  const assetsCount = Object.keys(assetUrls).length;
  let loadedCount = 0;

  this.enter = function () {
    const checkFinish = () => {
      if (loadedCount === assetsCount) {
        setTimeout(() => {
          Dom.hide(Dom.loadingDiv);
          this.sceneManager.showScene(Menu);
        }, 2000);
      }
    };

    for (let key in assetUrls) {
      let url = assetUrls[key];

      const image = _.loadImage(
        url,
        // on success
        (e) => {
          loadedCount++;
          checkFinish();
        },
        // on error
        (error) => {
          loadedCount++;
          checkFinish();
        },
        // on loading
        (e) => {
          console.log(e);
        }
      );

      Global.assets[key] = image;
    }
  };
};

export { Loading };
