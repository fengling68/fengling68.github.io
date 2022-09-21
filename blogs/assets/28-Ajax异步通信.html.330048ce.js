const e=JSON.parse('{"key":"v-78ae943f","path":"/web-blog/c-javascript/28-Ajax%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1.html","title":"Ajax\u5F02\u6B65\u901A\u4FE1","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"\u5E38\u89C1\u670D\u52A1\u5668","slug":"\u5E38\u89C1\u670D\u52A1\u5668","link":"#\u5E38\u89C1\u670D\u52A1\u5668","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662FAjax(\u5F02\u6B65\u7684JavaScript\u548CXML)","slug":"\u4EC0\u4E48\u662Fajax-\u5F02\u6B65\u7684javascript\u548Cxml","link":"#\u4EC0\u4E48\u662Fajax-\u5F02\u6B65\u7684javascript\u548Cxml","children":[]},{"level":2,"title":"ajax\u5F02\u6B65\u901A\u4FE1","slug":"ajax\u5F02\u6B65\u901A\u4FE1-1","link":"#ajax\u5F02\u6B65\u901A\u4FE1-1","children":[{"level":3,"title":"1\u3001\u521B\u5EFAXMLHttpRequest\u5BF9\u8C61","slug":"_1\u3001\u521B\u5EFAxmlhttprequest\u5BF9\u8C61","link":"#_1\u3001\u521B\u5EFAxmlhttprequest\u5BF9\u8C61","children":[]},{"level":3,"title":"2\u3001open(method,url);\u521D\u59CB\u5316\u8BF7\u6C42","slug":"_2\u3001open-method-url-\u521D\u59CB\u5316\u8BF7\u6C42","link":"#_2\u3001open-method-url-\u521D\u59CB\u5316\u8BF7\u6C42","children":[]},{"level":3,"title":"3\u3001send(data);\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42","slug":"_3\u3001send-data-\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42","link":"#_3\u3001send-data-\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42","children":[]},{"level":3,"title":"4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6\uFF0C\u76D1\u542C\u54CD\u5E94\u72B6\u6001","slug":"_4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6-\u76D1\u542C\u54CD\u5E94\u72B6\u6001","link":"#_4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6-\u76D1\u542C\u54CD\u5E94\u72B6\u6001","children":[]}]},{"level":2,"title":"\u83B7\u53D6\u54CD\u5E94\u6570\u636E(\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E)","slug":"\u83B7\u53D6\u54CD\u5E94\u6570\u636E-\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E","link":"#\u83B7\u53D6\u54CD\u5E94\u6570\u636E-\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E","children":[{"level":3,"title":"1\u3001onreadystatechange : \u54CD\u5E94\u4E8B\u4EF6","slug":"_1\u3001onreadystatechange-\u54CD\u5E94\u4E8B\u4EF6","link":"#_1\u3001onreadystatechange-\u54CD\u5E94\u4E8B\u4EF6","children":[]},{"level":3,"title":"2\u3001readystate : \u54CD\u5E94\u72B6\u6001","slug":"_2\u3001readystate-\u54CD\u5E94\u72B6\u6001","link":"#_2\u3001readystate-\u54CD\u5E94\u72B6\u6001","children":[]},{"level":3,"title":"3\u3001state \uFF1A\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA","slug":"_3\u3001state-\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA","link":"#_3\u3001state-\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA","children":[]},{"level":3,"title":"4\u3001responseText : \u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F","slug":"_4\u3001responsetext-\u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F","link":"#_4\u3001responsetext-\u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F","children":[]}]},{"level":2,"title":"\u7EFC\u5408\u6D4B\u8BD5","slug":"\u7EFC\u5408\u6D4B\u8BD5","link":"#\u7EFC\u5408\u6D4B\u8BD5","children":[]}],"git":{"updatedTime":1663776209000,"contributors":[{"name":"fengling68","email":"lvjianping_268@163.com","commits":1}]},"filePathRelative":"web-blog/c-javascript/28-Ajax\u5F02\u6B65\u901A\u4FE1.md"}');export{e as data};
