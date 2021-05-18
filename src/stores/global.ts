/**
 * @Author: yanghuan
 * @Date: 2021-04-28 15:51:22
 * @Last Modified by: yanghuan
 * @Last Modified time: 2021-04-28 16:16:47
 *
 * @description 全局Store
 * @module GlobalStore
 */

import Methods from "@/utils/methods";
import { computed, observable } from "mobx";
import enUS from "@/locales/en-US";
import zhCn from "@/locales/zh-CN";
import { Language, languages } from "../config/config.default";

export default class GlobalStore {
  /** 当前语言 */
  @observable public language = Methods.matchLanguageValue(
    languages,
    navigator.language,
    "en-US",
  ) as Language;

  /**
   * @description 当前语言国际化配置
   * @author yanghuan
   * @readonly
   * @memberof GlobalStore
   */
  @computed public get getAppLocale() {
    return this.language === "zh-CN" ? zhCn : enUS;
  }
}
