import * as Tone from 'tone';
import checkAudioDataLength from '../utils/checkAudioDataLength';
import { changeIsPlay, startStop } from './handleAuiodLoad';

let isPlay = false;
export function check(e) {
  if (e.code === 'Space') {
    if (checkAudioDataLength()) {
      return alert('you must add audio or synth to play');
    }

    if (isPlay) {
      Tone.Transport.cancel();
      Tone.Transport.stop();
      changeIsPlay(false);
    } else {
      startStop();
      changeIsPlay(true);
    }
    isPlay = !isPlay;
  }
}