/**
 * 参考文档：https://developers.google.com/web/tools/workbox/guides/configure-workbox
 */

this.importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

// debug：true=调试版本，false=生产版本
this.workbox.setConfig({ debug: false });

const precacheController = new this.workbox.precaching.PrecacheController();

precacheController.addToCacheList([
  './',
]);

self.addEventListener('install', event => {
  event.waitUntil(precacheController.install());
});
self.addEventListener('activate', event => {
  event.waitUntil(precacheController.activate());
});


const cacheName = 'fenglingLifes';

// 设置缓存信息
this.workbox.core.setCacheNameDetails({
  prefix: cacheName,
  suffix: 'v1',
  precache: `custom-precache-${cacheName}`, // 预缓存名称
  runtime: `custom-runtime-${cacheName}` // 运行缓存名称
});

/**
 * 缓存策略：
 * 1、networkFirst 网络有先
 * 2、staleWhileRevalidate 缓存优先，同时后台更新后下次打开页面才会被页面使用
 * 3、cacheFirst 缓存有先
 */

// html 文档: 缓存优先，同时后台更新后下次打开页面才会被页面使用
this.workbox.routing.registerRoute(
  /.*\.html/,
  this.workbox.strategies.networkFirst({
    cacheName: `${cacheName}:html`
  })
);

// JS 请求: 缓存优先，同时后台更新后下次打开页面才会被页面使用
this.workbox.routing.registerRoute(
  new RegExp('.*.js'),
  this.workbox.strategies.networkFirst({
    cacheName: `${cacheName}:js`
  })
);

// CSS 请求: 缓存优先，同时后台更新后下次打开页面才会被页面使用
this.workbox.routing.registerRoute(
  /.*\.css/,
  this.workbox.strategies.staleWhileRevalidate({
    cacheName: `${cacheName}:css`
  })
);

// img 请求: 缓存优先
this.workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|ico)/,
  this.workbox.strategies.cacheFirst({
    cacheName: `${cacheName}:image`,
    plugins: [
      // 返回状态0-200符合缓存策略
      new this.workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      // 设置缓存限制
      new this.workbox.expiration.Plugin({
        maxEntries: 500,
        maxAgeSeconds: 10 * 24 * 60 * 60
      })
    ]
  })
);

// font 请求: 缓存优先
this.workbox.routing.registerRoute(
  /.*\.(?:ttf|woff|eot|otf|fon|font|ttc|woff)/,
  this.workbox.strategies.cacheFirst({
    cacheName: `${cacheName}:font`,
    plugins: [
      // 返回状态0-200符合缓存策略
      new this.workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      // 设置缓存限制
      new this.workbox.expiration.Plugin({
        maxEntries: 500,
        maxAgeSeconds: 10 * 24 * 60 * 60
      })
    ]
  })
);