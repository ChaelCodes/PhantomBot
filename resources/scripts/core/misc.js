!function(){function n(n,e,t){var r;for(r in n)if(t>-1){if(n[r][t]==e)return!0}else if(n[r]==e)return!0;return!1}function e(n){return $.inidb.exists("visited",n)}function t(n){var e;return $.inidb.exists("followed",n)?!0:(e=$.twitch.GetUserFollowsChannel($.username.resolve(n.toLowerCase()),$.channelName),200==e.getInt("_http"))}function r(){return y}function a(n){return null==n||void 0==n?0:typeof n.length instanceof java.lang.String?(typeof n.length).equalsIgnoreCase("number")?n.length:n.length:"number"==typeof n.length?n.length:n.length}function o(n){if($.consoleLn("[CHAT] "+n),$.channel){if(!n.substr(0,1).equals("."))return void $.channel.say(n);$.getIniDbBoolean("settings","response_@chat")&&($.getIniDbBoolean("settings","response_action")&&!n.substr(0,2).equals("/w")?$.channel.say("/me "+n.replace(/^\/me/,"")):$.channel.say(n))}}function u(){return parseInt(java.lang.System.currentTimeMillis())}function i(n){return 0==n?n:($.random=new java.security.SecureRandom,Math.abs($.random.nextInt())%n)}function s(n,e){return n==e?n:$.rand(e)+n}function l(n){return null==n?null:n[$.randRange(0,n.length-1)]}function c(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}return n}function g(n,e){return Math.floor(Math.random()*(e-n+1)+n)}function d(n,e){if(n==e)return n;try{var t,r=Packages.com.gmt2001.HttpRequest,a=Packages.java.util.HashMap,o=Packages.org.json.JSONObject,u=new o("{}"),i=new o("{}"),s=new a(1),l=$.rand(65535);if(s.put("Content-Type","application/json-rpc"),i.put("apiKey","0d710311-5840-45dd-be83-82904de87c5d").put("n",1).put("min",n).put("max",e).put("replacement",!0).put("base",10),u.put("jsonrpc","2.0").put("method","generateIntegers").put("params",i).put("id",l),t=r.getData(r.RequestType.GET,"https://api.random.org/json-rpc/1/invoke",u.toString(),s),t.success){var c=new o(t.content).getJSONObject("result").getJSONObject("random").getJSONArray("data");if(c.length()>0)return c.getInt(0)}else 0==t.httpCode?$.logError("misc.js",478,"Failed to use random.org: "+t.exception):$.logError("misc.js",480,"Failed to use random.org: HTTP"+t.httpCode+" "+t.content)}catch(g){$.logError("misc.js",484,"Failed to use random.org: "+g)}return $.randRange(n,e)}function f(n){return $.trueRandRange(0,n)}function p(n,e,t){return e>n&&n>t}function h(n){var e=["th","st","nd","rd"],t=n%100;return n+(e[(t-20)%10]||e[t]||e[0])}function m(n,e){return Math.ceil(n/e*100)}function b(n,e,t){return $.inidb.exists(n,e)?"true"==$.inidb.get(n,e):t}function v(n,e,t){$.inidb.set(n,e,t.toString())}var y="";$.list={contains:n},$.user={isKnown:e,isFollower:t},$.arrayShuffle=c,$.getCurrentHostTarget=r,$.getIniDbBoolean=b,$.getOrdinal=h,$.getPercentage=m,$.outOfRange=p,$.rand=i,$.randElement=l,$.randInterval=g,$.randRange=s,$.say=o,$.setIniDbBoolean=v,$.strlen=a,$.systemTime=u,$.trueRand=f,$.trueRandElement=trueRandElement,$.trueRandRange=d}();
