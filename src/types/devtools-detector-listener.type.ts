import { DevtoolsDetail } from "./devtools-detail.type.js";

export type DevtoolsDetectorListener = (
  isOpen: boolean,
  detail?: DevtoolsDetail
) => void;
