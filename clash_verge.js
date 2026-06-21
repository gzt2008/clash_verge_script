// ================= 常量定义 =================

// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query"    // 腾讯DoH
];

// 国外DNS服务器
const foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query",      // Yandex DNS
  "https://1.1.1.1/dns-query",        // Cloudflare DNS
  "https://8.8.4.4/dns-query"         // Google DNS
];

// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "+.in-addr.arpa",
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "1.2.4.8"],
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers],
  "direct-nameserver": [...domesticNameservers],
  "nameserver-policy": {
    "geosite:private,cn": domesticNameservers
  }
};

// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "text", 
  "interval": 86400
};

const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/reject.yaml"
  },
  "adblock": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://gcore.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomo.yaml",
    "path": "./ruleset/adblock.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/applications.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/private.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/lancidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/cncidr.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/direct.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/proxy.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/tld-not-cn.yaml"
  },
  "Apple": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Apple.list",
    "path": "./ruleset/Apple.list"
  },
  "GoogleFCM": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/GoogleFCM.list",
    "path": "./ruleset/GoogleFCM.list"
  },
  "GoogleCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/GoogleCN.list",
    "path": "./ruleset/GoogleCN.list"
  },
  "Telegram": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Telegram.list",
    "path": "./ruleset/Telegram.list"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Netflix.list",
    "path": "./ruleset/Netflix.list"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/YouTube.list",
    "path": "./ruleset/YouTube.list"
  },
  "Bahamut": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Bahamut.list",
    "path": "./ruleset/Bahamut.list"
  },
  "BilibiliHMT": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/BilibiliHMT.list",
    "path": "./ruleset/BilibiliHMT.list"
  },
  "Bilibili": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Bilibili.list",
    "path": "./ruleset/Bilibili.list"
  },
  "OpenAi": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/OpenAi.list",
    "path": "./ruleset/OpenAi.list"
  },
  "NetEaseMusic": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/NetEaseMusic.list",
    "path": "./ruleset/NetEaseMusic.list"
  },
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Steam.list",
    "path": "./ruleset/Steam.list"
  },
  "Epic": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Epic.list",
    "path": "./ruleset/Epic.list"
  },
  "Sony": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Sony.list",
    "path": "./ruleset/Sony.list"
  },
  "Nintendo": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Nintendo.list",
    "path": "./ruleset/Nintendo.list"
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Microsoft.list",
    "path": "./ruleset/Microsoft.list"
  },
  "OneDrive": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/OneDrive.list",
    "path": "./ruleset/OneDrive.list"
  },
  "Bing": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Bing.list",
    "path": "./ruleset/Bing.list"
  },
  "ChinaMedia": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaMedia.list",
    "path": "./ruleset/ChinaMedia.list"
  },
  "ProxyMedia": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ProxyMedia.list",
    "path": "./ruleset/ProxyMedia.list"
  }
};

// 规则
const rules = [
  // 1. 本地与直连 
  "RULE-SET,applications,🎯 全球直连",
  "RULE-SET,private,🎯 全球直连",
  "RULE-SET,lancidr,🎯 全球直连,no-resolve",
  "RULE-SET,cncidr,🎯 全球直连,no-resolve",
  "RULE-SET,direct,🎯 全球直连",

  // 2. 广告拦截
  "RULE-SET,reject,🛑 广告拦截",
  "RULE-SET,adblock,🛑 广告拦截",

  // 3. 特定应用分流 
  "RULE-SET,OpenAi,💬 OpenAi",
  "RULE-SET,Telegram,📲 电报消息",
  "RULE-SET,YouTube,📹 油管视频",
  "RULE-SET,Netflix,🎥 奈飞视频",
  "RULE-SET,Bahamut,📺 巴哈姆特",
  "RULE-SET,BilibiliHMT,📺 哔哩哔哩",
  "RULE-SET,Bilibili,📺 哔哩哔哩",
  "RULE-SET,NetEaseMusic,🎶 网易音乐",
  
  // 4. 游戏平台
  "RULE-SET,Steam,🎮 游戏平台",
  "RULE-SET,Epic,🎮 游戏平台",
  "RULE-SET,Sony,🎮 游戏平台",
  "RULE-SET,Nintendo,🎮 游戏平台",

  // 5. 微软与苹果 
  "RULE-SET,Bing,Ⓜ️ 微软Bing",
  "RULE-SET,OneDrive,Ⓜ️ 微软云盘",
  "RULE-SET,Microsoft,Ⓜ️ 微软服务",
  "RULE-SET,Apple,🍎 苹果服务",

  // 6. Google 分流 
  "RULE-SET,GoogleFCM,📢 谷歌FCM",
  "RULE-SET,GoogleCN,🎯 全球直连",

  // 7. 媒体分流
  "RULE-SET,ChinaMedia,🌏 国内媒体",
  "RULE-SET,ProxyMedia,🌍 国外媒体",

  // 8. 通用代理 
  "RULE-SET,gfw,🚀 节点选择",
  "RULE-SET,tld-not-cn,🚀 节点选择",
  "RULE-SET,proxy,🚀 节点选择",

  // 9. 最终 fallback
  "GEOSITE,CN,🎯 全球直连",
  "GEOIP,CN,🎯 全球直连,no-resolve",
  "MATCH,🐟 漏网之鱼"
];

// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    // --- 核心出口 ---
    {
      ...groupBaseOption,
      "name": "🚀 节点选择",
      "type": "select",
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "proxies": ["♻️ 自动选择", "🇭🇰 香港节点", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点", "🇰🇷 韩国节点", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "♻️ 自动选择",
      "type": "url-test",
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },

    // --- 地区自动测速组 ---
    {
      ...groupBaseOption,
      "name": "🇭🇰 香港节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)港|HK|hk|Hong Kong|HongKong|hongkong",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
    },
    {
      ...groupBaseOption,
      "name": "🇨🇳 台湾节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)台|新北|彰化|TW|Taiwan",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cn.svg"
    },
    {
      ...groupBaseOption,
      "name": "🇸🇬 新加坡节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)新加坡|坡|狮城|SG|Singapore",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
    },
    {
      ...groupBaseOption,
      "name": "🇯🇵 日本节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"
    },
    {
      ...groupBaseOption,
      "name": "🇺🇲 美国节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "🇰🇷 韩国节点",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)KR|Korea|KOR|首尔|韩|韓",
      "tolerance": 50,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/kr.svg"
    },

    // --- 应用分流组 ---
    {
      ...groupBaseOption,
      "name": "💬 OpenAi",
      "type": "select",
      "proxies": ["♻️ 自动选择", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点", "🇰🇷 韩国节点"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "📲 电报消息",
      "type": "select",
      "proxies": ["♻️ 自动选择", "🇭🇰 香港节点", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点", "🇰🇷 韩国节点"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "📹 油管视频",
      "type": "select",
      "proxies": ["♻️ 自动选择", "🇭🇰 香港节点", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点", "🇰🇷 韩国节点"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
    {
      ...groupBaseOption,
      "name": "🎥 奈飞视频",
      "type": "select",
      "proxies": ["🚀 节点选择", "🇸🇬 新加坡节点", "🇭🇰 香港节点", "🇯🇵 日本节点", "🇺🇲 美国节点"],
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/netflix.svg"
    },
    {
      ...groupBaseOption,
      "name": "📺 巴哈姆特",
      "type": "select",
      "proxies": ["🇨🇳 台湾节点", "🚀 节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/Bahamut.svg"
    },
    {
      ...groupBaseOption,
      "name": "📺 哔哩哔哩",
      "type": "select",
      "proxies": ["🎯 全球直连", "🇨🇳 台湾节点", "🇭🇰 香港节点"],
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg"
    },
    {
      ...groupBaseOption,
      "name": "🎶 网易音乐",
      "type": "select",
      "include-all": true,
      "filter": "(?i)网易|音乐|NetEase|Music",
      "proxies": ["DIRECT", "🚀 节点选择"],
    },
    {
      ...groupBaseOption,
      "name": "🎮 游戏平台",
      "type": "select",
      "proxies": ["🚀 节点选择", "♻️ 自动选择", "DIRECT", "🇭🇰 香港节点", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点", "🇰🇷 韩国节点"],
    },
    {
      ...groupBaseOption,
      "name": "Ⓜ️ 微软Bing",
      "type": "select",
      "proxies": ["🚀 节点选择", "DIRECT", "🇺🇲 美国节点"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bing.svg"
    },
    {
      ...groupBaseOption,
      "name": "Ⓜ️ 微软云盘",
      "type": "select",
      "proxies": ["DIRECT", "🚀 节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/onedrive.svg"
    },
    {
      ...groupBaseOption,
      "name": "Ⓜ️ 微软服务",
      "type": "select",
      "proxies": ["🚀 节点选择", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "🍎 苹果服务",
      "type": "select",
      "proxies": ["DIRECT", "🚀 节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "🌍 国外媒体",
      "type": "select",
      "proxies": ["🚀 节点选择", "♻️ 自动选择", "🇭🇰 香港节点", "🇨🇳 台湾节点", "🇸🇬 新加坡节点", "🇯🇵 日本节点", "🇺🇲 美国节点"],
    },
    {
      ...groupBaseOption,
      "name": "🌏 国内媒体",
      "type": "select",
      "proxies": ["DIRECT", "🇭🇰 香港节点", "🇨🇳 台湾节点"],
    },
    {
      ...groupBaseOption,
      "name": "📢 谷歌FCM",
      "type": "select",
      "proxies": ["DIRECT", "🚀 节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "🛑 广告拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "🎯 全球直连",
      "type": "select",
      "proxies": ["DIRECT", "🚀 节点选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "🐟 漏网之鱼",
      "type": "select",
      "proxies": ["🚀 节点选择", "♻️ 自动选择", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 添加判断：为每个节点设置 udp = true
  if(config["proxies"]) {
    config["proxies"].forEach(proxy => {
      proxy.udp = true;
    });
  }

  // 返回修改后的配置
  return config;
}
