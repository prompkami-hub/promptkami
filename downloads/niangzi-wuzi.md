# 🎬 【古风先婚后爱・深情错付】82秒爆款全套提示词库 (保姆级实操手册)

> **产品简介**
> 这是一个开箱即用的AI视频工作流，照着做就能复现一条 56 万播放量级的古风甜宠剧情片。包含完整 46 镜的文生图、图生视频提示词，两位主角的基准脸垫图配方，以及逐项实测的剪辑拼接参数。
>
> 全片的戏核是一个**双向误会**：他偷喝绝嗣药，她以为是要困住她，其实是怕她生产丧命。本手册把这个结构的镜位节奏完整拆给你。
>
> **🧰 推荐工具栈：**
> *   **文生图 (选其一)：** 即梦 AI / SeaArt / Midjourney v7 / Flux.1 dev
> *   **图生视频 (选其一)：** 小云雀 Seedance / 即梦 Seedance 2.0 / 可灵 1.6 / Runway Gen-4
> *   **剪辑：** 剪映专业版（或 Premiere Pro）

---

## 🛠️ 第一步：全局基础设定 (每次生图必备)

这条片子的高级感来自两件事：**全片只有一种光源**（暖烛/暖阳），以及**人物始终占据画面近景**。所以每次生图都要带上下面的负向词压掉杂色与杂物，并且必须先把两张基准脸生成好存盘，后面 46 镜全部靠它们垫图，否则脸会每镜漂移。

### 🚫 通用负向提示词 (Negative Prompt)
*用法：每一镜的文生图都把这一整串粘贴到负向框，一个字都不要删。*
```text
celebrity likeness, named real actor, recognizable public figure, real person face, copyrighted franchise character, named existing drama character, trademarked logo, brand text, watermark, signature, subtitle, caption text, modern clothing, wristwatch, glasses, plastic skin, waxy skin, airbrushed skin, extra fingers, six fingers, fused fingers, malformed hands, extra limbs, deformed face, asymmetric eyes, crossed eyes, lazy eye, blurry face, lowres, jpeg artifacts, oversaturated, neon colors, cool blue cast, fluorescent lighting, harsh flash, flat lighting, cluttered background, modern furniture, power lines, text overlay, chinese characters on screen, distorted jewelry, broken hairpin geometry, duplicated hair ornament, melted embroidery, nsfw, nudity, cleavage, suggestive pose
```

### 👩🏻 女主基准脸 (垫图用)
*用法：先单独把这一张生出来，挑一张正脸最干净、五官最清晰的存盘，后面每一镜都拿它当垫图（权重调到最高档），这是全片脸不漂移的唯一办法。*
```text
22-year-old East Asian beauty, oval face with soft rounded jaw, large almond eyes with warm brown iris, long fluttering lashes, straight thin nose bridge, full lips with coral-red lip tint, pale porcelain skin with faint peach blush on cheekbones, subtle red-pink eyeshadow swept outward at outer corner, small vermilion floral mark painted between brows, long jet-black hair in loose Tang-dynasty updo with trailing side strands, ornate gold-and-pearl hair crown with dangling pearl strings, red bridal hanfu with gold phoenix embroidery and wide crossed collar, soft warm candlelight from camera left, shallow depth of field, cinematic portrait, photorealistic, 9:16 vertical
```

### 👨🏻 男主基准脸 (垫图用)
*用法：同上，先生成存盘。他有红喜服与灰蓝常服两套造型，但**脸部关键词逐字不变**，只在尾部替换服装描述，这样跨幕换装后还是同一个人。*
```text
25-year-old East Asian man, sharp narrow face with defined jawline, long upward-slanting phoenix eyes with cool grey-brown iris, thick straight brows, high straight nose, thin pale lips, fair cool-toned skin, slightly tousled jet-black shoulder-length hair with loose front strands falling over brow, no facial hair, aloof restrained expression, red bridegroom hanfu with gold dragon embroidery and high collar, warm candlelight from camera right, shallow depth of field, cinematic portrait, photorealistic, 9:16 vertical
```

---

## 🎞️ 第二步：分镜逐帧实操 (46镜全量)

*操作指南：每一镜都先用「文生图提示词」出一张静帧（务必带上对应角色的基准脸垫图），满意了再把这张静帧喂给图生视频工具，配上「图生视频提示词」生成 1-3 秒动态片段。*

### 📜 第一幕：一道圣旨 (色调：冷调庭院→暖红喜堂)

**【镜头 1】(0-2s)**
*   **📝 对应字幕：** 我和{夫君名}是从小斗到大的死对头
*   **🖼️ 文生图提示词：**
```text
22-year-old East Asian beauty with oval face and large almond eyes, vermilion floral mark between brows, jet-black Tang updo with gold-pearl hair crown, pale blue-white gauze hanfu, standing in a cool-toned stone courtyard, a young man in grey-blue robe turned away in soft-focus background, overcast diffused daylight, close-up on her face turning toward him, shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on her face, she turns her head slightly toward the blurred figure behind her, eyelashes flicker once, loose hair strands drift in light breeze, background figure stays soft and unmoving, no camera shake, 2 seconds
```

**【镜头 2】(2-3.63s)**
*   **📝 对应字幕：** 我和{夫君名}是从小斗到大的死对头
*   **🖼️ 文生图提示词：**
```text
wide shot of a cool stone courtyard with weathered balustrade, young woman in pale blue-white gauze hanfu on the left facing a 25-year-old man in grey-blue embroidered robe on the right, both in three-quarter view mid-argument, arms slightly raised, overcast flat daylight, mossy stone steps, bamboo in soft-focus background, cinematic wide, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static locked camera, she flings one sleeve upward in irritation, he tilts his chin away dismissively, their robes sway, leaves drift past in the foreground, no zoom, 1.6 seconds
```

**【镜头 3】(3.63-5.07s)**
*   **📝 对应字幕：** 结果一道圣旨
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a pale yellow imperial silk edict scroll held in two hands, dense vertical calligraphy-like brushstrokes rendered as abstract ink texture (no readable characters), gold dragon border, a dark-robed herald silhouette blurred behind it, single hard beam of sunlight from a doorway raking across the silk, dust motes in the light shaft, dramatic chiaroscuro, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow tilt down the scroll as the hands unroll it further, dust motes drift through the light beam, silk surface catches a travelling highlight, herald silhouette remains still, 1.4 seconds
```

**【镜头 4】(5.07-6.3s)**
*   **📝 对应字幕：** 我俩成了夫妻
*   **🖼️ 文生图提示词：**
```text
22-year-old East Asian beauty in red bridal hanfu with gold phoenix embroidery, gold-and-pearl hair crown with dangling pearl strings, vermilion floral mark between brows, red veil half lifted beside her face, standing beside a 25-year-old man in red bridegroom hanfu, deep red silk drapery filling the background, dense warm candlelight from both sides, medium close two-shot, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on the two-shot, the red veil edge lifts and falls in a draft, candle flames flicker out of focus behind them, both hold still and look forward, 1.2 seconds
```

**【镜头 5】(6.3-7.67s)**
*   **📝 对应字幕：** {夫君名}
*   **🖼️ 文生图提示词：**
```text
close-up portrait of 22-year-old East Asian beauty in red bridal hanfu, elaborate gold-pearl hair crown with hanging pearl strings framing her face, vermilion floral mark between brows, red-pink eyeshadow, coral-red lips slightly parted, looking directly into camera with a provocative half-smile, deep red silk background, warm candlelight from camera left, shallow depth of field, cinematic beauty close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
micro push in on her face, she parts her lips to speak, chin lifts a fraction, pearl strings on the hair crown sway gently, candlelight warms one cheek, 1.4 seconds
```

---

### 🕯️ 第二幕：立约 (色调：浓烛红帐)

**【镜头 6】(7.67-9.1s)**
*   **📝 对应字幕：** 咱们明人不说暗话
*   **🖼️ 文生图提示词：**
```text
tight close-up of 25-year-old East Asian man with long phoenix eyes and cool grey-brown iris, thick straight brows, tousled jet-black hair falling over one brow, red bridegroom hanfu high collar with gold dragon embroidery, standing very close to a woman's blurred red-clad shoulder in the foreground, deep red silk and candle bokeh behind him, warm rim light from camera right, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on his eyes, pupils shift once toward her, jaw tightens, the blurred red shoulder in the foreground rises slightly with her breath, candle bokeh drifts, 1.4 seconds
```

**【镜头 7】(9.1-10.8s)**
*   **📝 对应字幕：** 等我给你生下一儿半女
*   **🖼️ 文生图提示词：**
```text
over-the-shoulder two-shot, 22-year-old East Asian beauty in red bridal hanfu seen from behind-three-quarter with her gold-pearl hair crown in sharp focus, facing the 25-year-old man in red bridegroom hanfu whose face is turned down toward her, their foreheads nearly touching, deep red silk canopy, dense warm candlelight, heavy shallow depth of field, cinematic intimate, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push in, he lowers his head another inch toward her, she holds her chin raised, pearl strings sway between their faces, candle flames flicker, no cut, 1.7 seconds
```

**【镜头 8】(10.8-12.47s)**
*   **📝 对应字幕：** 便和离放我自由
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a hand in a red gold-embroidered sleeve resting on dark red brocade, fingers slowly curling into a loose fist, another hand in red sleeve just entering frame edge, deep red silk and gold thread texture filling the frame, warm candlelight raking across the embroidery, very shallow depth of field, cinematic detail shot, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera with slight handheld drift, the fingers close into a fist then release, the second hand advances a few centimetres, embroidery catches a moving highlight, 1.7 seconds
```

**【镜头 9】(12.47-14.3s)**
*   **📝 动作描述：** 屏息
*   **🖼️ 文生图提示词：**
```text
extreme close-up of red bridal hanfu collar and pale throat, chin and lower lip just inside the top of frame, gold phoenix embroidery and a red gemstone pendant on the collarbone, warm candlelight from camera left creating a soft highlight on the skin, deep red bokeh behind, very shallow depth of field, cinematic sensual-restrained detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
micro push in, the throat swallows once, the pendant shifts with her breath, a candle highlight travels slowly across the gold embroidery, no other motion, 1.8 seconds
```

**【镜头 10】(14.3-15s)**
*   **📝 动作描述：** 发丝垂落
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a gold-and-pearl bridal hair crown with dangling pearl strings against deep red silk, loose jet-black hair strands falling across the frame, white pearl clusters catching warm specular highlights, out-of-focus red background, macro detail, warm candlelight, cinematic texture shot, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow drift down along the pearl strings, the hair strands sway once as if she tilts her head, pearls catch travelling highlights, 0.7 seconds
```

**【镜头 11】(15-15.73s)**
*   **📝 对应字幕：** 那你好好休息
*   **🖼️ 文生图提示词：**
```text
very tight close-up of 25-year-old East Asian man's eyes and nose bridge, long upward-slanting phoenix eyes with cool grey-brown iris, thick straight brows, tousled black hair strands across his brow, red high collar at the bottom of frame, deep red candlelit bokeh behind, warm rim light on the cheekbone, cinematic macro portrait, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera, his eyes lower once then lift back to her, a single blink, hair strands drift, candlelight flickers across the iris, 0.7 seconds
```

**【镜头 12】(15.73-16.5s)**
*   **📝 动作描述：** 转身
*   **🖼️ 文生图提示词：**
```text
close-up of a red gold-embroidered sleeve and shoulder turning away from camera, deep red silk drapery behind, a sliver of pale throat and jaw at the frame edge, warm candlelight raking the embroidery, motion-blurred foreground silk, very shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the shoulder rotates away from camera, red silk sweeps across the lens in soft motion blur, candlelight sweeps with it, 0.7 seconds
```

**【镜头 13】(16.5-18.27s)**
*   **📝 动作描述：** 烛影
*   **🖼️ 文生图提示词：**
```text
close-up of 22-year-old East Asian beauty's profile in red bridal hanfu, eyes cast downward, long lashes lit from behind, gold-pearl hair crown half in shadow, a candle flame burning in the near foreground out of focus, deep red drapery behind, strong warm backlight creating a rim on her nose and lips, cinematic low-key, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in past the foreground candle flame, the flame wavers and briefly flares, her lashes lower further, rim light pulses with the flame, 1.8 seconds
```

**【镜头 14】(18.27-19.63s)**
*   **📝 动作描述：** 合拢
*   **🖼️ 文生图提示词：**
```text
extreme close-up of two hands in red gold-embroidered sleeves, one hand resting over the other on dark red brocade, pale slender fingers interlocking loosely, gold thread and red gemstone details around them, warm candlelight from the upper left, deep red bokeh, macro cinematic detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, the upper hand slides to cover the lower one completely and the fingers interlace, sleeve silk shifts, highlight travels over the gold thread, 1.4 seconds
```

**【镜头 15】(19.63-22.03s)**
*   **📝 动作描述：** 帐影
*   **🖼️ 文生图提示词：**
```text
deep red silk bed canopy filling the frame, heavy folds backlit so the fabric glows crimson, a soft human silhouette barely readable behind the translucent layer, a warm candle glow bleeding through from the right, almost abstract composition, cinematic mood shot, photorealistic texture, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the silk canopy sways slowly as if disturbed by movement behind it, the glow behind brightens then dims, the silhouette shifts once and settles, 2.4 seconds
```

**【镜头 16】(22.03-25.03s)**
*   **📝 对应字幕：** 不如就从今夜开始吧
*   **🖼️ 文生图提示词：**
```text
beauty close-up of 22-year-old East Asian woman in red bridal hanfu lying back against deep red silk, head tilted, gold-pearl hair crown spread around her, vermilion floral mark between brows, red-pink eyeshadow, coral lips parted, looking up past camera with a challenging gaze, strong warm candlelight from the upper left, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on her face from a slightly high angle, her lips part to speak, eyes track upward to meet the camera, pearl strings settle against the silk, candlelight pulses, 3 seconds
```

---

### 🌿 第三幕：一年无孕 (色调转冷：天光青灰)

**【镜头 17】(25.03-27.13s)**
*   **📝 动作描述：** 推窗
*   **🖼️ 文生图提示词：**
```text
backlit shot of traditional wooden lattice windows and a round auspicious-pattern wooden screen, blown-out white daylight flooding through the lattice, a dark vertical pillar splitting the frame, deep silhouette foreground, extreme contrast between the white window light and the dark interior, cinematic high-key backlight, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push toward the window, light intensity rises and blooms slightly, a faint shadow crosses the lattice from outside, dust motes drift in the light, 2.1 seconds
```

**【镜头 18】(27.13-28.7s)**
*   **📝 动作描述：** 系带
*   **🖼️ 文生图提示词：**
```text
extreme close-up of two pale hands tying a red silk sash with blue-and-red butterfly embroidery around a red hanfu waist, gold thread accents, soft daylight from the left, shallow depth of field, warm skin tones against red and gold fabric, macro cinematic detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, the fingers pull the sash tight and smooth the butterfly embroidery flat, the silk ripples once, a soft highlight travels across the gold thread, 1.6 seconds
```

**【镜头 19】(28.7-29.9s)**
*   **📝 对应字幕：** 一整年过去
*   **🖼️ 文生图提示词：**
```text
22-year-old East Asian beauty in pale blue-green everyday hanfu with white inner collar, hair in a simpler low updo with small white pearl pins, vermilion floral mark between brows, seated by a window, holding a small red lacquered bowl, soft diffused daylight from camera left, blurred wooden interior behind, medium close-up, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in, she lifts the red lacquered bowl a few centimetres and looks down into it, her shoulders fall with a breath, daylight shifts faintly, 1.2 seconds
```

**【镜头 20】(29.9-31.33s)**
*   **📝 对应字幕：** 肚子毫无动静
*   **🖼️ 文生图提示词：**
```text
close-up of a pale blue-green hanfu waist and a hand resting flat on the lower abdomen over the fabric, white inner layer visible at the collar edge, soft diffused daylight, blurred wooden lattice background, shallow depth of field, restrained cinematic detail shot, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera, the hand presses gently against the abdomen then withdraws, the fabric settles, light stays constant, 1.4 seconds
```

**【镜头 21】(31.33-33.33s)**
*   **📝 对应字幕：** 大夫难道是我不能生
*   **🖼️ 文生图提示词：**
```text
22-year-old East Asian beauty in pale blue-green hanfu, hair in low updo with white pearl pins, one index finger raised to her temple in a thinking gesture, brows drawn together in worry, looking off-frame toward an unseen physician, soft daylight from the right, blurred wooden interior, medium close-up, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slight push in, her finger taps her temple twice, her brows draw tighter, eyes flick up toward the off-frame listener, 2 seconds
```

**【镜头 22】(33.33-35.57s)**
*   **📝 对应字幕：** 夫人不如问问您夫君
*   **🖼️ 文生图提示词：**
```text
interior medium wide shot through an open wooden doorway, a 25-year-old man in grey-blue embroidered robe standing in the next room holding a dark bowl, seen past the shoulder of a seated woman in pale blue-green hanfu in the near foreground, cool diffused daylight from the far window, wooden beams and lattice framing, deep staging, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera with deep staging, the distant man raises the dark bowl toward his mouth, the foreground shoulder turns slightly as if noticing, dust drifts in the window light, 2.2 seconds
```

**【镜头 23】(35.57-37.47s)**
*   **📝 对应字幕：** 公子这绝嗣药再喝下去
*   **🖼️ 文生图提示词：**
```text
close-up of 25-year-old East Asian man in grey-blue embroidered robe with high collar, long phoenix eyes lowered toward a dark bowl held in both hands, tousled black hair falling over his brow, thin lips pressed flat, cool side daylight from a lattice window, blurred wooden interior, shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in, he lifts the dark bowl toward his lips without drinking yet, his eyes stay down, steam rises faintly from the bowl, 1.9 seconds
```

**【镜头 24】(37.47-38.93s)**
*   **📝 对应字幕：** 您身子会坏的
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a dark ceramic bowl of near-black medicinal liquid held in pale hands, the liquid surface catching a single window highlight, grey-blue robe sleeve edges around it, cool daylight, very shallow depth of field, macro cinematic detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, the bowl tilts slightly and the dark liquid surface ripples, the highlight slides across it, the hands tighten their grip, 1.5 seconds
```

---

### 🥣 第四幕：总比娘子没了强 (色调：冷灰竹影)

**【镜头 25】(38.93-41.63s)**
*   **📝 对应字幕：** 不喝不行
*   **🖼️ 文生图提示词：**
```text
close-up of 25-year-old East Asian man in grey-blue embroidered robe drinking from a dark bowl, head tilted back, the bowl rim covering his mouth and nose, only his lowered phoenix eyes and brows visible above it, cool daylight from the left, blurred pale interior, shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera, he drinks fully and slowly lowers the bowl away from his face, his throat moves once, his eyes close briefly then open, 2.7 seconds
```

**【镜头 26】(41.63-43.07s)**
*   **📝 对应字幕：** 总比娘子没了强
*   **🖼️ 文生图提示词：**
```text
tight close-up of 25-year-old East Asian man's face in grey-blue robe, long phoenix eyes looking slightly off camera with a quiet resigned expression, thin pale lips still faintly wet, tousled black hair across his brow, blurred bamboo greenery behind him, cool overcast daylight, shallow depth of field, cinematic emotional close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push in on his face, his eyes drift down then lift, one slow blink, a faint exhale moves his shoulders, bamboo leaves sway softly behind, 1.4 seconds
```

**【镜头 27】(43.07-46.2s)**
*   **📝 对应字幕：** 想断我自由？
*   **🖼️ 文生图提示词：**
```text
low-angle close-up of a dark bowl being set down on a wooden table edge, seen from beneath the table line, blurred bamboo and pale daylight beyond, a pale hand still on the bowl rim, strong negative space, cool desaturated palette, cinematic unusual angle, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the hand releases the bowl and withdraws out of frame, the bowl settles with a tiny wobble, bamboo shadows shift across the table, hold on the empty bowl, 3.1 seconds
```

**【镜头 28】(46.2-47.73s)**
*   **📝 对应字幕：** 门都没有
*   **🖼️ 文生图提示词：**
```text
close-up of 22-year-old East Asian beauty in pale blue-green hanfu peering around a wooden door frame, only half her face visible, large almond eyes narrowed in suspicion, vermilion floral mark between brows, cool daylight on one cheek and deep shadow on the other, blurred interior behind her, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on her half-hidden face, her eyes narrow further and flick toward the off-frame table, she leans a few centimetres further around the door frame, 1.5 seconds
```

**【镜头 29】(47.73-49.7s)**
*   **📝 对应字幕：** 我连夜就把他那绝嗣药
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a pale hand lifting a small dark ceramic medicine jar in dim night interior, a single warm oil-lamp glow from the right rim-lighting the fingers and the jar, deep black surroundings, blurred wooden shelf behind, very shallow depth of field, cinematic low-key night detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the hand lifts the jar out of frame in one smooth motion, the lamp highlight slides off the ceramic, the dark background stays still, 2 seconds
```

**【镜头 30】(49.7-52.87s)**
*   **📝 动作描述：** 竹影
*   **🖼️ 文生图提示词：**
```text
tall green bamboo grove seen from a low angle under a wooden eave, bright overcast daylight filtering through the leaves, the eave beams framing the top of frame, no people, cool green and grey palette, soft natural depth of field, cinematic transition landscape, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow rise along the bamboo stalks, leaves sway in a light breeze, dappled light shifts across the eave beams, no people enter frame, 3.2 seconds
```

**【镜头 31】(52.87-55.1s)**
*   **📝 动作描述：** 转念
*   **🖼️ 文生图提示词：**
```text
close-up of 25-year-old East Asian man in grey-blue embroidered robe seated by a bright window, both hands resting on the table, head turned down and away, long phoenix eyes unfocused, tousled black hair over his brow, high-key daylight blowing out the window behind him, shallow depth of field, cinematic contemplative close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera with a faint drift, he turns his head slowly toward the window, his fingers tap the table once and stop, window light flares slightly, 2.2 seconds
```

**【镜头 32】(55.1-56.23s)**
*   **📝 对应字幕：** 恭喜少爷
*   **🖼️ 文生图提示词：**
```text
medium shot of a 25-year-old man in grey-blue embroidered robe seated at a table, a woman in red hanfu standing behind his shoulder in soft focus, white gauze curtains billowing in the near foreground, bright daylight from an open pavilion, warm wooden interior, layered depth, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the white gauze curtain billows across the foreground and clears again, he lifts his head sharply, the red-clad figure behind him shifts, 1.1 seconds
```

---

### 🎊 第五幕：夫人有喜了 (色调回暖：暖阳纱帘)

**【镜头 33】(56.23-57.27s)**
*   **📝 对应字幕：** 夫人有喜了
*   **🖼️ 文生图提示词：**
```text
close-up of 25-year-old East Asian man in grey-blue embroidered robe turning his head toward camera in surprise, long phoenix eyes widened, thick brows lifted, tousled black hair falling across his brow, bright blown-out daylight behind him, blurred pavilion interior, shallow depth of field, cinematic reaction close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
fast subtle push in, his head snaps toward camera, eyes widen and hold, a single sharp blink, hair strands bounce with the motion, 1 second
```

**【镜头 34】(57.27-58.23s)**
*   **📝 动作描述：** 纱帘
*   **🖼️ 文生图提示词：**
```text
extreme close-up of white translucent gauze curtain billowing across frame in bright daylight, a faint grey-blue robed silhouette behind the fabric, high-key exposure with the fabric almost blown out, soft folds catching light, abstract transitional composition, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
the gauze curtain sweeps fully across the lens and begins to clear, the silhouette behind becomes slightly more defined, light blooms then settles, 1 second
```

**【镜头 35】(58.23-60.3s)**
*   **📝 动作描述：** 并坐
*   **🖼️ 文生图提示词：**
```text
medium wide shot inside an open wooden pavilion, a 25-year-old man in grey-blue robe and a 22-year-old woman in red hanfu seated side by side on a low bench seen from behind-three-quarter, white gauze curtains on both sides, green garden and bright sky beyond the open frame, warm late-afternoon daylight, layered cinematic staging, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static wide, the gauze curtains drift inward on a breeze, she turns her head toward him, he stays facing forward, garden leaves move softly beyond, 2.1 seconds
```

**【镜头 36】(60.3-62.13s)**
*   **📝 对应字幕：** 这孩子是谁的
*   **🖼️ 文生图提示词：**
```text
close-up of 25-year-old East Asian man in grey-blue embroidered robe, long phoenix eyes with cool grey-brown iris looking directly off-camera at her, jaw set, thin lips closed, tousled black hair over his brow, soft warm daylight from the left, blurred white gauze and greenery behind, shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push in, his eyes hold steady on her without blinking, then one slow blink, his jaw shifts a fraction, gauze drifts behind him, 1.8 seconds
```

**【镜头 37】(62.13-65.43s)**
*   **📝 动作描述：** 噤声
*   **🖼️ 文生图提示词：**
```text
beauty close-up of 22-year-old East Asian woman in red hanfu with gold-pearl hair crown and red gemstone forehead ornament, vermilion floral mark between brows, red-pink eyeshadow, coral-red lips pressed together, large almond eyes glancing sideways with guilt, warm soft daylight, blurred pale background, very shallow depth of field, cinematic beauty close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
micro push in on her face, her eyes slide further sideways away from his gaze, lips press tighter then relax, pearl strings sway, 3.3 seconds
```

**【镜头 38】(65.43-66.1s)**
*   **📝 动作描述：** 侧目
*   **🖼️ 文生图提示词：**
```text
tight close-up of 25-year-old East Asian man's profile in grey-blue robe, long phoenix eye and straight nose in sharp focus, thick brow lowered, tousled black hair strands over the temple, soft warm daylight rimming his cheekbone, deeply blurred pale background, cinematic macro profile, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, his eye shifts toward her once and holds, a single blink, hair strands drift across his temple, 0.7 seconds
```

**【镜头 39】(66.1-66.93s)**
*   **📝 动作描述：** 攥袖
*   **🖼️ 文生图提示词：**
```text
extreme close-up of a pale hand gripping a red hanfu sleeve with blue-and-red butterfly embroidery, knuckles whitening, gold thread catching warm light, blurred wooden pavilion behind, very shallow depth of field, macro cinematic tension detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, the fingers tighten on the sleeve then slowly release, the embroidered fabric creases and smooths, highlight shifts over the gold thread, 0.8 seconds
```

**【镜头 40】(66.93-68.53s)**
*   **📝 动作描述：** 对视
*   **🖼️ 文生图提示词：**
```text
two-shot close-up, 22-year-old East Asian woman in red hanfu with gold-pearl hair crown on the right facing a 25-year-old man in grey-blue robe on the left, their faces close and both turned toward each other, warm soft daylight from above, blurred white gauze behind, shallow depth of field, cinematic intimate two-shot, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on the two-shot, both lift their eyes to meet at the same moment, her lips part slightly, neither moves otherwise, 1.6 seconds
```

---

### 💞 第六幕：视若己出 (色调：暖阳柔光)

**【镜头 41】(68.53-71.53s)**
*   **📝 动作描述：** 抚发
*   **🖼️ 文生图提示词：**
```text
close-up of a 25-year-old man in grey-blue embroidered robe raising one hand toward a woman's cheek, his fingers just touching her jaw, her face in soft three-quarter view with gold-pearl hair crown, both lit by warm low-angle afternoon sun, deeply blurred garden bokeh behind, very shallow depth of field, cinematic tender close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push in, his hand settles fully against her jaw, his thumb moves once across her cheek, she leans a fraction into the touch, bokeh shimmers, 3 seconds
```

**【镜头 42】(71.53-73.4s)**
*   **📝 动作描述：** 低头
*   **🖼️ 文生图提示词：**
```text
tight close-up of 25-year-old East Asian man in grey-blue robe looking down with lowered lashes, long phoenix eyes nearly closed, thin lips slightly parted, tousled black hair falling forward, strong warm backlight creating a bright rim on his hair and jaw, dark blurred foreground, cinematic low-key warm portrait, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static camera, his lashes lower further and he exhales, head tips down another inch, the warm rim light pulses gently, 1.9 seconds
```

**【镜头 43】(73.4-75.5s)**
*   **📝 动作描述：** 掌温
*   **🖼️ 文生图提示词：**
```text
extreme close-up of two hands clasped together, one pale slender hand enclosed by a larger hand, red hanfu sleeve with butterfly embroidery and grey-blue robe sleeve meeting around them, warm golden side light, deeply blurred garden bokeh, macro cinematic detail, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
static macro, the larger hand closes more fully over the smaller one, thumbs shift, the sleeves settle together, golden highlight travels across the skin, 2.1 seconds
```

**【镜头 44】(75.5-76.6s)**
*   **📝 动作描述：** 阖眼
*   **🖼️ 文生图提示词：**
```text
beauty close-up of 22-year-old East Asian woman in red hanfu, eyes closed, long lashes resting, vermilion floral mark between brows, coral-red lips relaxed, gold-pearl hair crown with red gemstone ornament framing her face, warm golden light across one cheek, deeply blurred background, cinematic serene close-up, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
micro push in, her lashes tremble once while staying closed, her lips curve into the faintest smile, pearl strings sway gently, 1.1 seconds
```

**【镜头 45】(76.6-78.93s)**
*   **📝 对应字幕：** 是谁的都没关系
*   **🖼️ 文生图提示词：**
```text
close-up of 22-year-old East Asian woman in red hanfu with gold-pearl hair crown and red gemstone forehead ornament, large almond eyes open and looking slightly up at him, vermilion floral mark between brows, coral lips parted in surprise, warm golden light from camera left, deeply blurred warm bokeh, shallow depth of field, cinematic, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
slow push in on her face, her eyes widen slightly as she listens, lips part a little further, a single blink, warm bokeh drifts behind her, 2.3 seconds
```

**【镜头 46】(78.93-82.11s)**
*   **📝 对应字幕：** 我会对他视若己出
*   **🖼️ 文生图提示词：**
```text
over-the-shoulder two-shot, a 25-year-old man in grey-blue embroidered robe facing a 22-year-old woman in red hanfu with gold-pearl hair crown, his face toward her in three-quarter view, her profile in the near foreground, both bathed in warm late-afternoon sun, deeply blurred green garden bokeh, very shallow depth of field, cinematic closing two-shot, photorealistic, 9:16 vertical
```
*   **🎬 图生视频提示词：**
```text
very slow push in on the two-shot, he lowers his head toward her as he speaks, she tilts her face up to meet him, both hold the look as the frame slowly softens, no cut, 3.2 seconds
```

---

## ✂️ 第三步：后期剪辑与拼接参数

把 46 段生成好的视频按镜号顺序排进时间线，然后照下表设置即可。全片靠硬切推进，不要加花哨转场。

| 参数项 | 设置标准 (照做即可) |
| :--- | :--- |
| **转场特效** | 全片 **45 个切点全部硬切**，一个淡入淡出都不要加。唯一的例外是镜 34 与镜 17 这两处「纱帘/窗光扫过镜头」的自然遮挡，用素材本身的白光过曝当转场，不要再叠转场特效。 |
| **时长节奏** | 均镜 1.78 秒。情绪特写镜（镜 9、10、11、38、39、44）压到 **0.7-1.1 秒**，让情绪像心跳一样跳过去；长镜（镜 27 的 3.1 秒空碗、镜 30 的 3.2 秒竹影、镜 37 的 3.3 秒噤声、镜 41 的 3.0 秒抚发、镜 46 的 3.2 秒收尾）必须留足，**一秒都别剪短**——这五个长镜是全片的呼吸点。 |
| **字幕样式** | 思源黑体 Bold / 字号约占画面宽度 1/14 / 纯白填充 + 2px 纯黑描边 + 轻微下方阴影 / 居中、底部约 65% 位置（1920 高的片子落在 y≈1254-1304）。**全片 26 条字幕，20 镜不给字幕**——不要每镜都加字，留白的 20 镜就是让观众自己看脸的。 |
| **BGM (配乐)**| 单曲古风弦乐铺底，按实测音量包络给四个拐点：**43.21 秒压到全片最低 3.5%**（她听完「总比娘子没了强」的那一秒静默，这里几乎要静音）；40-48 秒整段保持低位 30% 左右；**56.42 秒拉到峰值 100%**（「夫人有喜了」）；68-72 秒维持次高 65%（抚发到交握）。结尾 80-82 秒回落到 40% 淡出，不要在末镜上加音效。 |
| **导出画质** | 1080x1920 / 30fps / H.264 / 目标码率 2200 kbps（原片实测 2171 kbps）。原片 82.11 秒、23.6 MB，按这个档位导出体积与观感都对得上。 |

---

## 💡 【附赠】买家专属高阶技巧

1.  **把最关键的那句台词给「喝药的人」，不给「说话的人」。** 这条片子 56 万播放的真正原因是镜 26 那句「总比娘子没了强」——他不是在跟她解释，是在跟劝他的人自言自语，而她躲在门后听见了（镜 28）。同样的信息如果让他当面对她说，就变成了普通的深情告白；让她偷听到，观众才会替她一起误会、再一起恍然大悟。做先婚后爱的反转片，**真相永远不要由当事人亲口交代**，让它从第三方的劝阻里漏出来。

2.  **43.21 秒那一秒的静默，比任何配乐都值钱。** 实测音量在那里掉到全片最低的 3.5%，正压在她听到真相的瞬间（镜 27 的空碗长镜）。这里千万不要加弦乐煽情，也不要加碗落桌的音效——前面 43 秒都有乐，突然什么都没有，观众的耳朵会自己把注意力推到画面上。全片最响的 56.42 秒（「夫人有喜了」）之所以炸，就是因为前面给了这 3 秒的空。

3.  **全片只用一种光源，靠光强不靠色温分段落。** 46 镜从头到尾只有暖烛与暖阳，连一盏冷光都没有；喜堂幕是浓烈的暖红（镜 4-16），无孕幕只是把同一种光拉成青灰的高调天光（镜 17-24），绝嗣药幕再降到冷灰竹影（镜 25-31），结尾又回到暖金（镜 41-46）。新手最容易犯的错是给「悲伤段」配冷蓝光、给「甜蜜段」配暖橙光，结果整条片的颜色是脏的。**要层次就调光强与曝光，不要调色温。**

4.  **圣旨、药方这类道具上的字，全部交给抽象墨迹。** 镜 3 的圣旨提示词里我写的是 `abstract ink texture (no readable characters)`，这是故意的——AI 生成的汉字几乎必然缺笔画或错结构，一眼就假，而且观众会忍不住去读。做法是只给「密集竖排墨迹 + 金龙边框 + 一道硬光打在绢面上」，字反而不要清楚。药碗同理，只给近黑的液面与一点高光，不给任何标签。

5.  **替换掉原片的生成工具水印与剧中人名，否则没法商用。** 原片开场前 3 秒画面下方压着生成工具的署名条（本手册已按中国《生成式人工智能服务管理暂行办法》把它移到角落保留、而不是删除——AI 生成标识依法不能去掉，但可以缩小移位）。你自己做的时候用付费档导出就没有这条。另外本手册把剧中角色名统一写成 `{夫君名}` 占位符，**你的成片里要换成自己原创的名字**，不要沿用原剧人名；标签里那些真人演员姓名也不要照抄，那是别人的蹭量标签，跟画面内容无关。
