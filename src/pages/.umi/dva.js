import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'adminLogin', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/adminLogin.js').default) });
app.model({ namespace: 'dataSource', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/dataSource.js').default) });
app.model({ namespace: 'global', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/login.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/cahier/Downloads/大屏可视化前端代码/src/models/user.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
