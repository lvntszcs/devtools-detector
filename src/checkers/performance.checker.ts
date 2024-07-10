import { clear, log, table } from '../shared/console.js';
import { isChrome } from '../shared/context.js';
import { DevtoolsStatusChecker } from '../types/devtools-status-checker.type.js';
import { getLargeObjectArray } from '../utils/large-object.utils.js';
import { match } from '../utils/match.utils.js';
import { isBrave } from '../utils/platform.utils.js';
import { now } from '../utils/time.utils.js';

let maxPrintTime = 0;
export const performanceChecker: DevtoolsStatusChecker = {
  name: 'performance',
  async isOpen(): Promise<boolean> {
    const tablePrintTime = calcTablePrintTime();
    const logPrintTime = Math.max(calcLogPrintTime(), calcLogPrintTime());
    maxPrintTime = Math.max(maxPrintTime, logPrintTime);

    clear();

    if (tablePrintTime === 0) return false;
    if (maxPrintTime === 0) {
      if (await isBrave()) {
        return true;
      }
      return false;
    }

    return tablePrintTime > maxPrintTime * 10;
  },
  async isEnable(): Promise<boolean> {
    return match({
      /** 暂时仅用于 Chrome 浏览器 */
      includes: [isChrome],
      excludes: [],
    });
  },
};

function calcTablePrintTime(): number {
  const largeObjectArray = getLargeObjectArray();
  const start = now();

  table(largeObjectArray);

  return now() - start;
}

function calcLogPrintTime(): number {
  const largeObjectArray = getLargeObjectArray();
  const start = now();

  log(largeObjectArray);

  return now() - start;
}
