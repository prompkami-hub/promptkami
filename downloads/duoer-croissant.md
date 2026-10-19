# 🎬 【可颂吉祥物梗图动画】19秒爆款全套提示词库 (保姆级实操手册)

> **产品简介**
> 这是一个开箱即用的AI动态图形工作流。包含完整9镜的渲染函数、动效参数，以及详细的剪辑拼接参数。
>
> **🧰 推荐工具栈：**
> *   **矢量绘图/角色资产 (选其一)：** Figma / Adobe Illustrator / Rive / Lottie Creator
> *   **动效制作 (选其一)：** After Effects (Bodymovin/Lottie 插件) / Rive / Spine / Blender Grease Pencil 2D
> *   **剪辑：** CapCut / Premiere Pro / Final Cut Pro

---

## 🛠️ 第一步：全局基础设定 (每次生图必备)

本片是纯矢量 UI 动画（学习类 App 风格的吉祥物梗图；角色须用你自己的原创设计），不涉及任何扩散模型垫图；此处"基准脸"替换为角色与风格的固定设定（色板、角色扁平资产、UI 组件），用于保证逐镜资产一致性。

### 🚫 通用负向提示词 (Negative Prompt)
*用法：渲染/绘制任何镜头前先确认排除以下项，防止资产跑偏：*
```text
no gradients on character fill, no photorealistic texture, no skin pores, no outline inconsistency, no off-model owl beak color, no serif font in subtitles, no drop shadow on flat background layers, no 3D perspective distortion, no motion blur on static UI cards, recognizable brand mascot, trademarked character design, any existing app official mascot, real brand logo or storefront signage
```

### 👩🏻 女主角（紫发女生）全局样式常量
*用法：先建立角色矢量资产库（头部/刘海/身体为独立图层组），再在每镜复用，保证发色、脸型、服装跨镜一致：*
```text
flat vector 2D character, young woman, bob-length purple hair with center-parted bangs, round face, half-closed sleepy almond eyes with flat dark eyebrows, peach skin tone flat fill no shading, small round rosy cheeks, dark purple turtleneck sweater, no outline stroke, solid flat color blocks only, flat mobile-app illustration style, vector shapes only no gradients
```

### 🥐 原创吉祥物（自有角色×可颂融合体）全局样式常量
*用法：角色会在第二镜後从"猫头鹰"渐变造型为"猫头鹰头+可颂身体"，两种形态需共用同一张脸资产（眼睛/喙）以保证识别度：*
```text
flat vector mascot, your own original mascot head, round gradient-free body in your own palette merged with croissant pastry shape at torso, large white oval eyes with black pupils, simple geometric facial features of your own design, cream-colored croissant-fold texture rendered as flat geometric arcs on lower body, no outline stroke, solid flat color fill, kawaii mascot style, vector shapes only
```

---

## 🎞️ 第二步：分镜逐帧实操 (9镜全量)

*操作指南：先用 Figma/Illustrator 搭建静态关键帧资产 -> 再用 After Effects/Rive 做位移与形变动效 -> 最后导入字幕条与词卡 UI 组件。*

### 🛋️ 第一幕：开场独白（灰度卧室）

**【镜头 1】(0-3.2s)**
*   **📝 对应字幕：** Today, I wanted to eat（今天，我想吃点东西）
*   **🖼️ 渲染函数（静态场景资产）：**
```text
flat vector illustration, desaturated grayscale living room interior, arched window with crescent moon visible outside, round wall mirror, fireplace with candle on mantel, framed picture frame, bookshelf with potted plant, young woman with purple hair slumped forward on dark wooden desk resting on folded arms, droopy sleepy expression, flat 2D mobile-app illustration style, no gradients, portrait aspect ratio 9:16
```
*   **🎬 动效参数：**
```text
static wide shot no camera movement, subtitle word-by-word reveal animation "Today," then full line "I wanted to eat" fading in top-center, each word appears in a rounded white pill-shaped tile below the caption with 80ms stagger delay, character held in static slumped pose throughout, 30fps linear ease on text opacity
```

### 💭 第二幕：想象可颂（思维泡泡）

**【镜头 2】(3.2-4.4s)**
*   **📝 对应字幕：** a croissant（念作 kwaah-SAANT）
*   **🖼️ 渲染函数（思维泡泡资产）：**
```text
flat vector illustration, same grayscale living room, white rounded thought-bubble cloud shape rising above woman's head with two small trailing circle bubbles, original mascot head peeking inside the thought bubble, pink pronunciation tooltip tag reading phonetic spelling attached to upper right of bubble, woman still slumped in foreground grayscale, flat 2D style no gradients
```
*   **🎬 动效参数：**
```text
thought bubble scale-up pop-in animation from 0 to 100% over 300ms with slight overshoot bounce, owl mascot head fades in inside bubble 150ms after bubble appears, pink pronunciation tag slides in from right edge, subtitle word tile "a" appears bottom-left, static camera
```

---

### 🚶 第三幕：出门去买（街景行走）

**【镜头 3】(4.4-7.3s)**
*   **📝 对应字幕：** so I went to a place（于是我去了一个地方）
*   **🖼️ 渲染函数（街景资产）：**
```text
flat vector illustration, grayscale city street exterior, pastel pink and cream colored bakery storefront building labeled "<你的店名> Patisserie" in rounded bold lettering, striped pink and cream awning, display window showing matcha-green pastries (cake slices, cupcake, roll cake, macarons), blue arched windows on upper floor, "OPEN" sign on door, woman with purple bob hair seen from behind walking toward the shop on gray sidewalk with white dashed road lines, flat 2D style
```
*   **🎬 动效参数：**
```text
camera static wide shot, woman's back-view sprite walks in place with subtle bob/sway cycle (idle-walk loop, 2-frame alternation every 400ms), subtitle word tiles stagger-reveal "So" then "I" then "went" then "to" "a" "place" each 400ms apart, background buildings remain static, no parallax
```

### 🏪 第四幕：进店（故障转场 + 招牌特写）

**【镜头 4】(7.3-10.0s)**
*   **📝 对应字幕：** that sells croissant（念作 cwahh-SONT）
*   **🖼️ 渲染函数（招牌特写+内部柜台资产）：**
```text
flat vector illustration, extreme close-up zoom on bakery signboard "<你的店名> Patisserie" and awning edge with "OPEN" sign cropped at frame top, transitioning to pastel pink interior counter scene with espresso machine, bean grinder, potted plant, matcha pastry display shelf with circular leaf-logo sticker, flat 2D style no gradients
```
*   **🎬 动效参数：**
```text
RGB chromatic-aberration glitch wipe transition lasting 2-3 frames (red/green/blue channel split offset horizontally, scanline flicker), rapid zoom-push into signboard during glitch, settles into interior counter wide shot, subtitle word tiles "that" "sells" then pink pronunciation tooltip "cwahh-SONT" slides in, 30fps
```

---

### 🛒 第五幕：购买与升天彩蛋

**【镜头 5】(10.0-11.8s)**
*   **📝 对应字幕：** and I bought（我买了）
*   **🖼️ 渲染函数（柜台特写资产）：**
```text
flat vector illustration, pastel pink bakery counter close-up, two original mascot heads stacked vertically behind wooden counter edge (larger head in front, smaller head peeking from behind), small whole croissant pastry resting on counter, potted plant to the right, purple-haired woman's rounded hair-top silhouette visible at bottom-left frame edge, flat 2D style
```
*   **🎬 动效参数：**
```text
static close-up shot, owl mascot heads bob gently up and down (idle breathing loop, 2px vertical offset every 500ms), subtitle word tiles "And" then "I" then "bought" stagger-reveal, no camera movement
```

**【镜头 6】(11.8-14.3s)**
*   **📝 对应字幕：** a croissant（念作 cwoi-SSUNT，彩蛋升天镜头）
*   **🖼️ 渲染函数（天堂云阶资产）：**
```text
flat vector illustration, whimsical heaven cutaway scene, pastel blue sky background with sparkle star accents, glowing golden archway with classical pillars, golden staircase ascending into clouds, original mascot glowing with soft radial light halo standing at top of staircase, fluffy white cloud shapes framing composition, flat 2D style
```
*   **🎬 动效参数：**
```text
comedic exaggeration cutaway shot, static camera, owl mascot gently glows pulsing halo (radial glow opacity oscillates 70-100% every 600ms), sparkle star particles twinkle at randomized intervals, subtitle word tile "a" with pink pronunciation tooltip "cwoi-SSUNT" held on screen, scene transitions from counter shot via soft cross-dissolve
```

---

### 🏠 第六幕：返家路上

**【镜头 7】(14.3-17.3s)**
*   **📝 对应字幕：** and I returned home with the croissant（念作 kwa-SONE，我带着可颂回家了）
*   **🖼️ 渲染函数（返程街景资产）：**
```text
flat vector illustration, same pastel bakery storefront exterior now in warm golden-hour lighting with soft yellow glow spilling from open doorway onto sidewalk, purple-haired woman walking away from shop in profile view, holding your original mascot-croissant hybrid character against her chest with both arms, flat 2D style no gradients
```
*   **🎬 动效参数：**
```text
camera static medium shot, woman walking cycle (profile idle-walk loop, 2-frame leg alternation every 400ms), owl-croissant mascot held static in her arms with subtle bob matching her stride, subtitle word tiles stagger-reveal "And" "I" "return" "home" then second line "with" "the" plus pink pronunciation tooltip "kwa-SONE", warm golden light gradient overlay static
```

### 🎀 第七幕：粉色转场特写

**【镜头 8】(17.3-19.0s)**
*   **📝 对应字幕：** and then（紧接着）
*   **🖼️ 渲染函数（纯色背景特写资产）：**
```text
flat vector illustration, solid flat magenta-pink background no gradient, extreme close-up centered on your original mascot-croissant hybrid character with soft white radial glow halo outline, cropped at shoulders showing small peach-colored hand nubs gripping croissant-fold body edges, flat 2D style
```
*   **🎬 动效参数：**
```text
hard-cut transition from previous warm-toned scene straight to flat magenta background (no cross-dissolve, single-frame cut), mascot held in static centered close-up with gentle glow-halo pulse, subtitle word tile "And" then full line "and then" stagger-reveal, static camera
```

---

### 😋 第八幕：咬下去的punchline

**【镜头 9】(19.0-19.81s)**
*   **📝 对应字幕：** I ate the croissant（我吃掉了那个可颂，画面以此结束）
*   **🖼️ 渲染函数（咬食特写资产）：**
```text
flat vector illustration, solid flat magenta-pink background, close-up profile shot of purple-haired woman with mouth open wide biting into your original mascot-croissant hybrid character held in her hand, visible pink tongue and white teeth detail, mascot's expression shows wide-eyed open-mouth surprise with small pink tongue visible, flat 2D style no gradients
```
*   **🎬 动效参数：**
```text
static close-up shot, woman's jaw animates open-to-bite in single quick motion (2-frame bite action over 200ms), subtitle word tiles reveal "I" "ate" then "the" "croissant" with final word tile flashing green highlight background (correct-answer UI feedback color) to signal lesson-complete state, small blurred green barcode/scan-line graphic flickers briefly above subtitle at final frame, video ends on this frame at 19.807s
```

---

## ✂️ 第三步：后期录屏与拼接参数

本片本质是程序化 UI 动画输出（非实拍剪辑），下表参数面向"用动效软件渲染导出"而非"剪辑素材拼接"。

| 参数项 | 设置标准 (照做即可) |
| :--- | :--- |
| **转场特效 / 帧率与录屏** | 固定 30fps 输出；镜4(7.3s)为 RGB 故障风格硬切转场（2-3 帧色差分离）；镜6→7 为柔和交叉溶解；镜7→8 为单帧硬切（无溶解）；其余镜头间为瞬切 |
| **时长节奏** | 镜2(3.2-4.4s)、镜6(11.8-14.3s，升天彩蛋)、镜8(17.3-19.0s)为情绪/梗图特写镜，节奏放慢；镜1、3、7为叙事推进镜，保持匀速 |
| **字幕样式** | 顶部居中粗体白字黑描边，逐词弹出式词卡 UI（圆角白色胶囊按钮），念法提示用粉色圆角标签浮于右上角；镜9末词"croissant"命中时词卡变绿色高亮（学习类 App 常见的"答对"反馈绿） |
| **BGM (配乐)**| 全片轻快卡通音效为主，无需连续 BGM；关键音效节点：0s(场景入场叮咚声)、3.2s(思维泡泡"叮"声)、7.3s(故障转场"嗡"音爆)、11.8s(升天彩蛋"天使合唱"音效)、19.0s(咬一口"咔嚣"音效+答对"叮咚"音效) |
| **导出画质** | 尺寸 720x1280（9:16竖屏）/ 帧率 30fps / 编码 H.264 / 码率 ≥685kbps（实测源文件 685737bps） |

---

## 💡 【附赠】买家专属高阶技巧
1.  **词卡 UI 组件化：** 把"白色圆角词卡"做成一个可复用的 Rive/Lottie 组件，输入文字自动排版、自动做 stagger 入场动画，不用逐镜手搭。
2.  **吉祥物形态渐变技巧：** 猫头鹰→猫头鹰可颂混合体的"变身"不需要逐帧骨骼绑定，用两套独立矢量资产在关键帧做 crossfade（透明度交叉淡化）即可，比形变动画省时且更稳定。
3.  **故障转场素材库：** RGB 色差故障转场（镜4）可以用 After Effects 自带的 "Glitch" 插件模板或 Rive 的 Shader 节点一次性做成模板，之后所有镜头切换直接套用，不需要每次重新调参数。
