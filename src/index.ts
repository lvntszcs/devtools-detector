import { DevtoolsDetector } from './classes/devtools-detector.js';
import { DevtoolsDetectorListener } from './types/devtools-detector-listener.type.js';
import * as checkers from './checkers/checkers.js';

const defaultDetector = new DevtoolsDetector({
  checkers: [
    checkers.erudaChecker,
    checkers.elementIdChecker,
    checkers.regToStringChecker,
    checkers.functionToStringChecker,
    checkers.depRegToStringChecker,
    checkers.dateToStringChecker,
    checkers.devtoolsFormatterChecker,
    checkers.performanceChecker,
  ],
});

export function addListener(listener: DevtoolsDetectorListener) {
  defaultDetector.addListener(listener);
}

export function removeListener(listener: DevtoolsDetectorListener) {
  defaultDetector.removeListener(listener);
}

export function isLaunch() {
  return defaultDetector.isLaunch();
}

export function launch() {
  defaultDetector.launch();
}

export function stop() {
  defaultDetector.stop();
}

export function detectOnce() {
  return defaultDetector.detectOnce();
}

export function setDetectDelay(time: number) {
  defaultDetector.setDetectDelay(time);
}

export default defaultDetector;

export { DevtoolsDetail } from './types/devtools-detail.type.js';
export { DevtoolsDetectorListener } from './types/devtools-detector-listener.type.js';
export { DevtoolsStatusChecker } from './types/devtools-status-checker.type.js';

export { DevtoolsDetector, checkers };

export * from './utils/match.utils.js';
export * from './utils/platform.utils.js';
export * from './shared/version-map.js';
export * from './shared/context.js';
export * from './shared/console.js';
export * from './shared/system-info.js';
