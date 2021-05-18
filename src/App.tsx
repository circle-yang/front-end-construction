/**
 * @Author: yanghuan
 * @Date: 2021-04-26 16:38:22
 * @Last Modified by: yanghuan
 * @Last Modified time: 2021-04-28 16:48:03
 *
 * @package
 * @module App
 * @description 应用入口
 */

import React from "react";
import "@/app.module.scss";
import { Button, ConfigProvider } from "antd";
import { inject, observer } from "mobx-react";
import { IntlProvider, FormattedMessage } from "react-intl";
import cloud_login from "@/assets/icon/cloud_login.svg";
import GlobalStore from "./stores/global";

interface AppProps {
  globalStore?: GlobalStore;
}

const App = inject("globalStore")(
  observer(({ globalStore }: AppProps) => {
    const {
      getAppLocale: { messages, locale = "en-US", antdLocal },
    } = globalStore!;

    return (
      <ConfigProvider locale={antdLocal}>
        <IntlProvider locale={locale} messages={messages}>
          <div className="App">
            <Button type="primary">
              {/* <FormattedMessage id="global.form.button.submit" /> */}
              oooo
            </Button>
            <img src={cloud_login} alt="" style={{ width: 100, height: 100 }} />
          </div>
        </IntlProvider>
      </ConfigProvider>
    );
  }),
);

export default App;
