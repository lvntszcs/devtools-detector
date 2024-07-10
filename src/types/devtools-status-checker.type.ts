export interface DevtoolsStatusChecker {
  readonly name: string;
  isOpen(): Promise<boolean>;
  isEnable(): Promise<boolean>;
}
