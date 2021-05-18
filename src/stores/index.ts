/**
 * @Author: yanghuan
 * @Date: 2021-04-27 15:39:27
 * @Last Modified by: yanghuan
 * @Last Modified time: 2021-04-28 17:09:31
 */

import GlobalStore from "./global";

export class RootStore {
  public globalStore: GlobalStore;

  constructor() {
    this.globalStore = new GlobalStore();
  }
}
export default new RootStore();
