// 名言数据库
const quotes = {
    red: [  // 热情、积极的名言
        { text: "生命不息，奋斗不止。", author: "孙中山" },
        { text: "星星之火，可以燎原。", author: "毛泽东" },
        { text: "不想当将军的士兵不是好士兵。", author: "拿破仑" },
        { text: "当你全力以赴的时候，全世界都会为你让路。", author: "美国谚语" },
        { text: "成功不是终点，失败也不是终结，唯有勇气才是永恒。", author: "温斯顿·丘吉尔" },
        { text: "没有什么能够阻挡太阳升起。", author: "《肖申克的救赎》" },
        { text: "燃烧吧，青春！", author: "北野武" },
        { text: "不要等待机会，而要创造机会。", author: "乔治·萧伯纳" },
        { text: "生命是一场盛大的冒险。", author: "《飞屋环游记》" },
        { text: "要么创造点什么，要么就去死。", author: "海明威" },
        { text: "永不言弃。", author: "《洛奇》" },
        { text: "勇气是控制恐惧的能力，而不是没有恐惧。", author: "马克·吐温" },
        { text: "我们的征途是星辰大海。", author: "《银河英雄传说》" },
        { text: "热爱生命，热爱每一天。", author: "《肖申克的救赎》" },
        { text: "梦想还是要有的，万一实现了呢？", author: "《中国合伙人》" },
        { text: "不要让任何人告诉你，你做不到。", author: "《当幸福来敲门》" },
        { text: "人生就是一场马拉松。", author: "村上春树" },
        { text: "激情是成功的催化剂。", author: "《社交网络》" },
        { text: "每个人都有潜在的能量，只是很容易被习惯所掩盖。", author: "王石" },
        { text: "把不可能变成可能。", author: "《钢铁侠》" }
    ],
    yellow: [  // 乐观、愉快的名言
        { text: "微笑着面对人生。", author: "卓别林" },
        { text: "快乐是一种心态，与外界环境无关。", author: "达赖喇嘛" },
        { text: "生活中最美好的事物都是免费的。", author: "柯妮莉亚·芬克" },
        { text: "今天的太阳真好啊。", author: "日本谚语" },
        { text: "每一天都是一个新的开始。", author: "《返老还童》" },
        { text: "保持童心就是永远年轻。", author: "沃尔特·迪士尼" },
        { text: "生活就像一盒巧克力，你永远不知道下一颗是什么味道。", author: "《阿甘正传》" },
        { text: "快乐是一种选择。", author: "《寻梦环游记》" },
        { text: "阳光总在风雨后。", author: "《狮子王》" },
        { text: "保持微笑，因为生活是美好的。", author: "《美丽人生》" },
        { text: "每个人都值得快乐。", author: "《飞屋环游记》" },
        { text: "笑是人类最美的语言。", author: "《摔跤吧！爸爸》" },
        { text: "幸福是一种选择。", author: "《美丽心灵》" },
        { text: "生活总是充满惊喜。", author: "《天空之城》" },
        { text: "快乐是一种能力。", author: "罗素" },
        { text: "今天的太阳依然很温暖。", author: "《千与千寻》" },
        { text: "乐观是一种生活态度。", author: "海伦·凯勒" },
        { text: "每一天都是礼物。", author: "《死亡诗社》" },
        { text: "快乐是一种传染病。", author: "伏尔泰" },
        { text: "生活就是一场冒险。", author: "《哈利·波特》" }
    ],
    blue: [  // 平静、深邃的名言
        { text: "宁静致远。", author: "诸葛亮" },
        { text: "大海的波浪越大，表明海水越深。", author: "歌德" },
        { text: "内心的平静来自于对生活的理解。", author: "爱因斯坦" },
        { text: "静水流深。", author: "中国谚语" },
        { text: "真正的平静来自内心。", author: "《禅与摩托车维修艺术》" },
        { text: "海纳百川，有容乃大。", author: "林则徐" },
        { text: "天空越黑暗，星星越闪亮。", author: "《星际穿越》" },
        { text: "智者如水。", author: "老子" },
        { text: "沉默是一种力量。", author: "《肖申克的救赎》" },
        { text: "内心的宁静才是真正的财富。", author: "《小王子》" },
        { text: "心若止水，宁静致远。", author: "《论语》" },
        { text: "平静是一种力量。", author: "《禅与摩托车维修艺术》" },
        { text: "深邃的思考源于宁静的心灵。", author: "叔本华" },
        { text: "大智若愚。", author: "老子" },
        { text: "真正的智慧来自内心的平静。", author: "佛陀" },
        { text: "安静是一种美德。", author: "《挪威的森林》" },
        { text: "深海的宁静蕴藏着无限的力量。", author: "《海底两万里》" },
        { text: "平静是最高级的享受。", author: "亚里士多德" },
        { text: "内心的宁静是外在的力量。", author: "《瓦尔登湖》" },
        { text: "沉默是金。", author: "中国谚语" }
    ],
    black: [  // 深沉、哲理的名言
        { text: "人生如戏，戏如人生。", author: "莎士比亚" },
        { text: "真理往往是简单的。", author: "爱因斯坦" },
        { text: "认识自己是最艰难的功课。", author: "泰勒斯" },
        { text: "生活不是等待暴风雨过去，而是学会在雨中跳舞。", author: "《肖申克的救赎》" },
        { text: "人生最重要的不是所站的位置，而是所朝的方向。", author: "奥利弗·霍姆斯" },
        { text: "命运掌握在自己手中。", author: "《教父》" },
        { text: "过去不能改变，但未来可以。", author: "《蝙蝠侠：黑暗骑士》" },
        { text: "生活就是一场修行。", author: "《功夫》" },
        { text: "真相往往就在眼前。", author: "《盗梦空间》" },
        { text: "人生最大的敌人是自己。", author: "《搏击俱乐部》" },
        { text: "人生的意义在于寻找意义。", author: "维克多·弗兰克" },
        { text: "存在即合理。", author: "黑格尔" },
        { text: "我思故我在。", author: "笛卡尔" },
        { text: "知识就是力量。", author: "培根" },
        { text: "生活不能等待别人来安排。", author: "《教父》" },
        { text: "人生最大的敌人是自己的懒惰。", author: "《搏击俱乐部》" },
        { text: "真相往往是痛苦的。", author: "《黑客帝国》" },
        { text: "选择大于努力。", author: "《闻香识女人》" },
        { text: "人生如棋，落子无悔。", author: "《围棋少年》" },
        { text: "生命的意义在于付出。", author: "《辛德勒的名单》" }
    ],
    gray: [  // 中性、平和的名言
        { text: "平凡中孕育着伟大。", author: "普希金" },
        { text: "生活就是一面镜子。", author: "萨克雷" },
        { text: "时间是最好的老师。", author: "柏拉图" },
        { text: "平淡是真。", author: "胡适" },
        { text: "生活需要平衡。", author: "《寻梦环游记》" },
        { text: "简单是最高级的复杂。", author: "达芬奇" },
        { text: "生活不在于活得长，而在于活得好。", author: "《肖申克的救赎》" },
        { text: "平凡的日子里藏着extraordinary的秘密。", author: "《怦然心动》" },
        { text: "生活就是一个不断学习的过程。", author: "《心灵捕手》" },
        { text: "每个人都是自己人生的作者。", author: "《返老还童》" },
        { text: "平凡的生活也是一种幸福。", author: "《东京物语》" },
        { text: "生活需要节奏。", author: "《海上钢琴师》" },
        { text: "平衡是人生的智慧。", author: "《千年女优》" },
        { text: "简单是一种美。", author: "《小森林》" },
        { text: "生活就是一个过程。", author: "《饮食男女》" },
        { text: "平淡中见真情。", author: "《岁月神偷》" },
        { text: "生活需要仪式感。", author: "《天使爱美丽》" },
        { text: "平常心是道。", author: "《禅》" },
        { text: "生活就是一杯白水。", author: "《茶之道》" },
        { text: "平和是一种境界。", author: "《一代宗师》" }
    ]
};

// 当前选择的颜色
let currentColor = null;

// 为每个颜色按钮添加点击事件
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        const mood = button.dataset.mood;
        currentColor = color;
        
        // 更新显示区域的样式
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.className = `quote-display ${color}`;
        
        // 生成新的名言
        generateQuote();
    });
});

// 生成随机名言
function generateQuote() {
    if (!currentColor) {
        alert('请先选择一个心情色！');
        return;
    }

    const quotesList = quotes[currentColor];
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const quote = quotesList[randomIndex];

    // 更新显示
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.querySelector('.quote-text').textContent = quote.text;
    quoteDisplay.querySelector('.quote-author').textContent = `—— ${quote.author}`;
} 