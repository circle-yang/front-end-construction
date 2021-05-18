import history from "@/history";

export default class Methods {
  /**
   * @description
   * @author yanghuan
   * @static
   * @param {string[]} values
   * @param {string} value
   * @param {string} defaults
   * @returns {T}
   * @memberof Methods
   */
  static matchLanguageValue(values: string[], value: string, defaults: string) {
    let str = "";
    for (const key of values) {
      if (value.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        str = key;
      }
    }
    // const [language] = value.split("-");
    if (!str) {
      for (const key of values) {
        if (key.toLocaleLowerCase().includes(language)) {
          str = key;
        }
      }
    }
    return str || defaults;
  }
}
