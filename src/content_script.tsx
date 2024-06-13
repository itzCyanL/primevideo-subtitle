// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   if (msg.color) {
//     console.log("Receive color = " + msg.color);
//     document.body.style.backgroundColor = msg.color;
//     sendResponse("Change color to " + msg.color);
//   } else {
//     sendResponse("Color message is none.");
//   }
// });
//
import { FileHandler } from "./aps/lib/Handler/FileHandler";
import { SrtParserHandler } from "./aps/lib/Handler/SrtParserHandler";
import { PlaybackHandler } from "./aps/lib/Handler/PlaybackHandler";
import { CloseHandler } from "./aps/lib/Handler/CloseHandler";
import { View } from "./aps/lib/View";
import { Utils } from "./aps/lib/Utils";
import { RegisterHandlers } from "./aps/lib/RegisterHandlers";
import { AmazonPrimeSubtitles } from "./aps/AmazonPrimeSubtitles";

(function () {
  const originalAddEventListener = EventTarget.prototype.addEventListener;

  EventTarget.prototype.addEventListener = function (type, listener, options) {
    console.log(`Event Listener added: ${type}`, this);
    return originalAddEventListener.call(this, type, listener, options);
  };
})();

const amazonPrimeSubtitles = new AmazonPrimeSubtitles();
const webPlayerQuery = "." + View.WEB_PLAYER_ELEMENT_CLASS;
Utils.waitForElementExists(webPlayerQuery, amazonPrimeSubtitles.onLoad, [
  document,
]);
