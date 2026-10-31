# 🎬 【古风仙侠·投壶套圈甜宠】27.78秒爆款全套提示词库 (保姆级实操手册)

> **产品简介**
> 这是一个开箱即用的 AI 视频工作流，覆盖「投壶邀局 → 一圈飞出 → 套中了谁 → 四目相对」完整 10 镜。包含每一镜的文生图首帧、图生视频运镜，以及实测得出的剪辑拼接与 BGM 拐点参数。
>
> 原片为 AI 扩散生成的「AI 漫剧」风格（半写实国风 CG），本手册只复刻**可复用的制作方法**：构图、光线、运镜、剪辑节奏、角色一致性策略。角色均为可复用原型模板（身份只给通用职衔），不复制任何具体作品的人物形象。
>
> **🧰 推荐工具栈：**
> *   **文生图 (选其一)：** 即梦 Seedance / SeaArt / Midjourney v7 / Flux.1 dev
> *   **图生视频 (选其一)：** 即梦 Seedance 2.0+ / 可灵 2.1 / 海螺 Hailuo / Runway Gen-4
> *   **剪辑：** 剪映专业版（或 Premiere Pro / DaVinci Resolve）

---

## 🛠️ 第一步：全局基础设定 (每次生图必备)

这条片子只有**一个场景、一种光、一条动线**：春日樱园的一场投壶套圈，从头到尾都是同一片花树与同一束斜射晨光。所以一致性全压在三件事上 ---- 同一张脸、同一个光向、同一套首饰。每次生图都带上负向词，并先把三张基准脸生成好存档，之后每一镜都用它们垫图。

### 🚫 通用负向提示词 (Negative Prompt)
*用法：每一镜生图都原样粘贴，一个词都不要删 ---- 后半段的肖像与版权挡位是合规项，不是可选项。*
```text
low quality, blurry, oversaturated, plastic skin, waxy texture, deformed hands, extra fingers, fused fingers, broken anatomy, asymmetric eyes, cross-eyed, melted hair, floating limbs, text artifacts, garbled characters, distorted letters, readable chinese characters, watermark, logo, signature, jpeg artifacts, harsh flash, mixed color temperature, cold light mixed with warm light, modern clothing, modern architecture, cluttered background, multiple heads, duplicate person, broken ring shape, elliptical hoop with uneven thickness, celebrity likeness, recognizable public figure, named real actor, real person face match, copyrighted franchise character, named existing manhua character, trademarked mascot
```

### 👸🏻 公主基准脸 (垫图用)
*用法：先单独生成这一张，挑一张正脸最干净、首饰最完整的存档，之后凡有公主出现的镜头都把它当垫图，权重拉到最高。*
```text
young east asian noblewoman in her late teens, oval face with soft rounded jaw, porcelain-fair luminous skin, large bright almond eyes with warm brown irises and long upswept lashes, delicate straight nose, small full coral-red lips, thin wispy fringe over the brows, hair gathered into an elaborate high updo, ornate gilded headdress of layered filigree phoenix wings set with pearls and carnelian beads and fine dangling chains, a small pearl-and-gold floral ornament centred on the forehead, pale pink and blush gradient hanfu with wide draping sleeves and a sheer gauze overlay, pearl collar necklace, warm low morning sunlight from the upper left, semi-realistic chinese xianxia illustration, highly detailed CG render, soft bloom, vertical 9:16
```

### 🧝🏻 国师基准脸 (垫图用)
*用法：同上。他是全片的反差点 ---- 唯一的冷白色块落在暖粉花海里，生成基准脸时就要把这个对比写进去，否则后面几镜的视觉重量立不住。*
```text
tall slender young man of ethereal bearing, pale flawless skin, long flowing silver-white hair worn half-up, fine loose strands catching the light, sharp refined features with a high nose bridge and narrow downcast eyes, dark slender brows, thin pale lips, calm unreadable expression, an openwork silver coronet of thin curling leaf shapes set with a teal cabochon at the brow and a small red-and-pearl pendant dropping beside the temple, long amethyst drop earrings, layered ivory-white robes with a faint lilac inner collar and soft purple embroidery at the sleeve, warm backlight rimming the hair into a halo, semi-realistic chinese xianxia illustration, highly detailed CG render, soft bloom, vertical 9:16
```

### 👧🏻 宫女基准脸 (垫图用)
*用法：同上。她只在开场两镜出现，但那两镜决定了观众是否听清规则 ---- 所以要生成得朴素、不抢戏，只要一张能把圈递出去的脸。*
```text
young east asian maidservant in her early twenties, round gentle face, fair skin, simple smooth centre-parted hair gathered into a low neat bun with a single small floral hairpin, soft dark eyes, modest smile, plain pale-yellow and cream gradient hanfu with a narrow sash and no jewellery, warm morning sunlight from the upper left, blurred garden of blossom trees behind, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```

---

## 🎞️ 第二步：分镜逐帧实操 (10镜全量)

*操作指南：每一镜都先用文生图生成首帧（务必带上对应角色的基准脸垫图），确认脸对了再把这张首帧丢进图生视频，粘贴运镜提示词产出片段；全部 10 段生成完再进剪辑。*

### 🌸 第一幕：投壶邀局 (0-5.07s)

**【镜头 1】(0-0.73s)**
*   **📝 对应字幕：** 公主快来试试
*   **🖼️ 文生图提示词：**
```text
a young maidservant in a pale-yellow gradient hanfu stands in a sunlit blossom garden holding a stack of slender golden rings flat on her palms, turned three-quarters away from camera and looking off-frame with a smile, rows of small ceramic prize jars and bowls of red fruit laid out on the stone path below, two seated figures blurred in the middle distance, blossom trees and a low tiled wall soft behind, warm low morning sunlight from the upper left, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she lifts the stack of rings slightly higher as she calls out, head turning a few degrees further toward the off-frame princess, petals drift down through the sunbeams, camera holds a static frame with the faintest breathing push, 0.7 seconds
```

**【镜头 2】(0.73-3.03s)**
*   **📝 对应字幕：** 套中了就是你的
*   **🖼️ 文生图提示词：**
```text
side view of a young noblewoman in a blush-pink hanfu with an ornate gilded phoenix headdress reaching out to take a stack of golden rings from a maidservant's hands, both hands meeting at frame centre over the stone path, prize jars arranged on the ground below, blossom garden and two seated figures blurred behind, warm morning sunlight raking from the upper left, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the princess's fingers close around the rings and she draws them toward herself, the headdress chains swing and settle, the maidservant's hands withdraw from frame, camera eases in a slow 8% push on the exchange, 2.3 seconds
```

**【镜头 3】(3.03-5.07s)**
*   **📝 对应字幕：** 看本公主套一个最贵的
*   **🖼️ 文生图提示词：**
```text
medium close-up of a young noblewoman in a blush-pink hanfu turned back over her shoulder toward camera, one arm raised holding a single slender golden ring up beside her face, lips parted in a confident playful boast, elaborate gilded phoenix headdress with pearl strands framing her face, a pearl-and-gold ornament on her forehead, blossom trees and warm sunbeams blown out behind her, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she tips her chin up and her eyes slide toward camera with a mischievous glint, the raised ring tilts as her wrist cocks back ready to throw, headdress strands sway, sunbeams flare brighter behind, camera pushes in 6% slowly, 2.0 seconds
```

---

### 💫 第二幕：一圈飞出 (5.07-10.60s)

**【镜头 4】(5.07-9.43s)**
*   **📝 对应字幕：** 无字幕（动作：金圈脱手飞向花树，远处白影由虚转实）
*   **🖼️ 文生图提示词：**
```text
a slender golden ring hangs in mid-air tumbling slowly toward a great blossoming cherry tree, a sweep of pale pink sleeve fabric blurred across the lower foreground, god rays slanting down through the canopy, a tall white-robed figure standing far beneath the tree rendered completely out of focus, mossy stone path and scattered pink shrubs below, warm low backlight, deep atmospheric haze, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the sleeve sweeps out of frame as the ring tumbles away into the depth of the garden, the camera pushes in steadily along the ring's path and the distant white-robed figure resolves from a soft blur into a sharp standing silhouette, petals drift across the sunbeams throughout, one continuous move with no cut, 4.4 seconds
```

**【镜头 5】(9.43-10.60s)**
*   **📝 对应字幕：** 无字幕（动作：金圈落在银冠上）
*   **🖼️ 文生图提示词：**
```text
extreme close-up from behind and above of an openwork silver coronet of thin curling leaf shapes set with a teal cabochon, resting on long flowing silver-white hair, a slender golden ring settling down over the coronet and coming to rest against it, soft warm backlight blowing out the blossom background to pale cream, fine hair strands catching the light, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the golden ring drops the last few centimetres and settles against the silver coronet with a tiny bounce, silver hair strands lift and fall from the impact, the blown-out background flares brighter for a beat, camera holds extremely still, 1.2 seconds
```

---
### 😳 第三幕：套中了谁 (10.60-16.00s)

**【镜头 6】(10.60-12.00s)**
*   **📝 对应字幕：** 无字幕（动作：公主愣住，双眼睁大）
*   **🖼️ 文生图提示词：**
```text
tight close-up of a young noblewoman's face filling the frame, large bright eyes wide in stunned disbelief, lips parted in a small open gasp, porcelain-fair skin, pearl-and-gold ornament on the forehead, ornate gilded phoenix headdress with pearl strands and carnelian beads crowding the top of the frame, pearl collar necklace at the lower edge, blossom garden dissolved into warm cream bokeh behind, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
her pupils widen and her mouth opens a fraction further, one slow blink, the headdress pearl strands swing gently to a stop, camera creeps in another 8% on her eyes, 1.4 seconds
```

**【镜头 7】(12.00-16.00s)**
*   **📝 对应字幕：** 国师
*   **🖼️ 文生图提示词：**
```text
medium close-up of a tall slender young man with long silver-white hair in layered ivory robes, head lowered and eyes downcast, one hand raised to lift a slender golden ring away from his silver coronet, long amethyst drop earrings catching the light, faint lilac embroidery at his collar, a great blossoming cherry branch filling the upper background in soft pink bokeh, strong warm backlight rimming his hair into a halo, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
his fingers close on the golden ring and draw it slowly off the coronet, his lowered gaze follows it down, loose silver strands slide across his cheek, the backlit halo breathes brighter then eases, camera drifts a slow 12cm to the right around him, 4.0 seconds
```

---

### 👀 第四幕：四目相对 (16.00-27.78s)

**【镜头 8】(16.00-19.67s)**
*   **📝 对应字幕：** 无字幕（动作：公主举扇半遮，与国师相对而立）
*   **🖼️ 文生图提示词：**
```text
two-shot in profile, a young noblewoman in blush-pink hanfu on the left raising a round silk fan painted with a thin plum branch up to the level of her chin, facing a tall white-robed silver-haired man on the right who looks down at her, blossom branches crowding the top of the frame, petals suspended in the air between them, a seated figure blurred far behind, strong warm backlight flooding from between them, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she lifts the fan a few more centimetres to half-hide her face while her eyes stay fixed on him, he tilts his head slightly down toward her, petals drift down between them, the backlight blooms as the camera pushes slowly in on the gap between the two profiles, 3.7 seconds
```

**【镜头 9】(19.67-21.83s)**
*   **📝 对应字幕：** 你倒是有眼光
*   **🖼️ 文生图提示词：**
```text
close-up profile of a tall silver-haired young man looking down and slightly off-frame with a faint knowing curve at the corner of his mouth, silver coronet with a teal cabochon at his brow, long amethyst earring swinging beside his jaw, fine white hair strands lifted by the air, the edge of a round silk fan and a blurred dark updo entering the lower left foreground, warm hazy backlight, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
his eyes lower a few degrees to meet hers and the faint curve of his mouth deepens as he speaks, a single silver strand drifts across his cheek, the blurred foreground fan edge rises slightly, camera holds with a micro float, 2.2 seconds
```

**【镜头 10】(21.83-27.78s)**
*   **📝 对应字幕：** 真套中了一个最贵的
*   **🖼️ 文生图提示词：**
```text
extreme close-up double profile filling the frame, a young noblewoman's eye and brow on the left with a pearl-and-gold forehead ornament and wispy dark fringe, the silver-haired man's pale profile on the right, the translucent edge of a round silk fan painted with a thin plum branch crossing the lower half between them, her gaze slid sideways toward him, everything behind blown out to warm cream light, a single petal suspended at the frame edge, semi-realistic chinese xianxia illustration, highly detailed CG render, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
her eye slides further sideways toward his profile and her lashes lower once in a slow blink, the fan edge drifts a few millimetres upward, a petal floats down past the frame edge, the cream backlight breathes brighter and then settles, camera makes one continuous very slow push in across the whole beat with no cut, 6.0 seconds
```

---

## ✂️ 第三步：后期剪辑与拼接参数

10 段素材生成完照这张表拼。时间码与音量值都是从原片实测得出的，不是估的 ---- 这条片子只有 27.78 秒却给了两个 4 秒以上的长镜，节奏分配是它的核心手艺。

| 参数项 | 设置标准 (照做即可) |
| :--- | :--- |
| **转场特效** | 全片 **硬切，零转场**，9 个接缝一个叠化都不要。唯一可以考虑的是镜 4→5（金圈飞出接落冠特写）之间给 1-2 帧的亮度闪光，强化"命中"那一瞬；其余接缝靠景别跳变（全景→极近特写）自然断开。 |
| **时长节奏** | 均镜 **2.78 秒**，但分布极不均：开场三镜交代规则压在 0.7-2.3 秒（信息要快），而**两个长镜各占 4.0-6.0 秒** ---- 镜 4（金圈飞行 4.4s）与镜 10（双侧脸收尾 6.0s）合起来就是全片 37% 的时长。短镜给信息，长镜给情绪，中间不要插碎镜稀释。 |
| **字幕样式** | 白色粗黑体 + 细黑描边，居中偏下（约画幅 77% 高度），对白出现即显、说完即隐。全片只有 **6 条字幕**，另外 4 镜完全无字幕靠画面叙事 ---- 不要给每一镜都配字幕，留白才显得贵。 |
| **BGM (配乐)** | 轻快古风弦乐（笛 + 琵琶 + 弹拨）。节奏对齐以下实测拐点：**0.95s 冲到全片峰值 100%**（游戏开场的热闹）→ 4.0s 落到 77% → 7.2s 降到 72%（金圈飞行的悬停感）→ **12.47s 再回 99% 次峰**（国师抬手取圈的揭晓）→ **13.11s 骤降到全片最低 34%**（揭晓后那一口屏息，这一秒几乎抽掉配乐）→ 17.8s 69% → **22.19s 再压到 35%**（收尾长镜的留白）→ 24.8s 回升到 85% 收束。 |
| **导出画质** | **1080x1920 / 30fps / 2200 kbps 以上 / H.264 / AAC 192k**。竖版满画幅，不要加黑边、不要做复合画布。 |

---

## 💡 【附赠】买家专属高阶技巧

**1. 规则本身就是包袱 ---- 这是全片唯一的机关。** 镜 2 那句「套中了就是你的」说的是地上那些瓶瓶罐罐，镜 3 公主接着说「套一个最贵的」，观众自然以为她在挑奖品。结果圈落在了**人**的头上，于是镜 10 那句「真套中了一个最贵的」把前面两句一次性兑现。写这类短甜剧时，**前置的规则台词必须说得足够随意**，像交代游戏玩法一样，观众才不会提前猜到。规则一旦被当成伏笔念出来，反转就死了。

**2. 四秒的空镜比四个短镜值钱。** 镜 4 用整整 4.4 秒只做一件事：金圈飞向花树，而树下那个白影**从完全虚焦慢慢变实**。这一镜生成难度几乎最低（没有脸、没有对白、动作单一），却承担了全片最大的悬念 ---- 观众一边看着圈飞，一边在猜那团白色是什么。新手会把这 4 秒切成四个 1 秒的快切来"显得有节奏"，那等于把悬念提前揭掉。

**3. 用一把扇子解决掉最难的构图。** 镜 8 和镜 10 都是男女近距离对视 ---- 这是 AI 最容易崩的构图（两张脸同框、视线要对上、五官还得跨镜一致）。原片的解法是**在两人之间插一把半透明圆扇**：扇面挡住了女主的下半脸与两人之间的空隙，于是"视线对位"只需要做对一双眼睛，而不是两张完整的脸。更妙的是遮挡本身就是古风的暧昧语言。做双人近景怕崩的，这一招最稳。

**4. 全片只有一种光，靠的是同一个时刻。** 10 镜从头到尾都是**低角度暖晨光从左上斜射**，穿过花树形成可见光束，背景常常直接过曝成奶白。没有一盏冷光、没有一次夜景、没有逆光转顺光。好处是跨镜一致性极高（光向错了观众一眼就看出接不上），代价是必须在提示词里每一镜都重复写光向 ---- 本手册每条文生图提示词末尾都带着它，别删。

**5. 冷白色块是唯一的视觉重音。** 整个画面是暖粉（花、公主、宫女、阳光）堆出来的，所以国师那一身**银白 + 象牙白 + 淡紫**在里面是全片唯一的冷色。这不是配色偏好，是**注意力调度** ---- 镜 4 那团虚焦白影之所以能勾住人，正因为它是画面里唯一不属于暖粉体系的东西。你换角色时可以改设定，但要保留这个"一个冷色块对抗整片暖色"的结构。

**6. 圈和字都别让模型随便画。** 金圈要在提示词里写明 `slender golden ring`（细圆环），并在负向词里挡掉 `broken ring shape` 与 `elliptical hoop with uneven thickness` ---- AI 画圆环极易画成粗细不均的歪椭圆，而这条片子有三镜都以圈为主体，歪一个就废一镜。同理负向词里加了 `readable chinese characters`：场景里的匾额、灯笼、瓶身一律让它保持虚化，AI 生成的汉字几乎必然缺笔画，放大一眼就假。

**7. 换成你自己的角色，不要照搬。** 本手册的三张基准脸是**可复用的原型模板**（年龄段、脸型、发色、首饰与服饰廓形），身份只给通用职衔（公主 / 国师 / 宫女），不对应任何具体作品的人物。请按你自己的企划改写五官与服装，并始终保留负向词里的 `celebrity likeness` / `recognizable public figure` / `named existing manhua character` / `copyrighted franchise character` 四条挡位 ---- 它们挡的是模型无意间生成出可识别的真人面孔或已有作品角色，是合规项。
