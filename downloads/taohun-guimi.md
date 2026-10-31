# 🎬 【现代都市·逃婚甜宠】76.63秒爆款全套提示词库 (保姆级实操手册)

> **产品简介**
> 这是一个开箱即用的 AI 视频工作流，覆盖「闺房筹划 → 双机通话 → 机场会合 → 男主线并行 → 当场截人 → 双线收口」完整 48 镜。包含每一镜的文生图首帧、图生视频运镜，以及实测得出的剪辑拼接与 BGM 拐点参数。
>
> 原片为 AI 扩散生成（画面自带生成工具署名），本手册只复刻**可复用的制作方法**：构图、光线、运镜、剪辑节奏、角色一致性策略。不复制任何具体人物形象，所有角色名以占位符给出，请自行替换。
>
> **🧰 推荐工具栈：**
> *   **文生图 (选其一)：** 即梦 Seedance / SeaArt / Midjourney v7 / Flux.1 dev
> *   **图生视频 (选其一)：** 即梦 Seedance 2.0+ / 可灵 2.1 / 海螺 Hailuo / Runway Gen-4
> *   **剪辑：** 剪映专业版（或 Premiere Pro / DaVinci Resolve）

---

## 🛠️ 第一步：全局基础设定 (每次生图必备)

这条片子的高级感来自**三件一致**：同一张脸、同一种光、同一条色调线。48 镜里只有两种光源方案（暖白高调家居光 / 冷蓝夜景机场光），绝不混用。所以每次生图都要带上负向词，并先把四张基准脸生成好存档，后续每一镜都用它们垫图。

### 🚫 通用负向提示词 (Negative Prompt)
*用法：每一镜生图都原样粘贴，一个词都不要删 —— 后半段的肖像与品牌挡位是合规项，不是可选项。*
```text
low quality, blurry, oversaturated, plastic skin, waxy texture, deformed hands, extra fingers, fused fingers, broken anatomy, asymmetric eyes, cross-eyed, melted hair, floating limbs, text artifacts, garbled characters, distorted letters, watermark, logo, signature, jpeg artifacts, harsh flash, mixed color temperature, cold light mixed with warm light, cluttered background, multiple heads, duplicate person, celebrity likeness, recognizable public figure, named real actor, real person face match, copyrighted franchise character, real brand logo, trademarked label, readable brand name on luggage or phone
```

### 👩🏻 女主「{女主名}」基准脸 (垫图用)
*用法：先单独生成这一张，挑一张正脸最干净、五官最清楚的存档，之后 48 镜里凡有女主出现的都把它当垫图，权重拉到最高。*
```text
young east asian woman in her early twenties, oval face with soft jawline, fair luminous skin, long straight jet-black hair with full straight bangs just above the eyebrows, large round dark-brown almond eyes, slightly upturned inner corners, natural thick lashes, small straight nose, full glossy coral-red lips, delicate collarbone, slender frame, neutral calm expression, soft front key light, shallow depth of field, photorealistic cinematic portrait, 85mm lens look, vertical 9:16 composition
```

### 👧🏻 闺蜜「{闺蜜名}」基准脸 (垫图用)
*用法：同上。她和女主必须一眼分得开 —— 分辨点是发型（双马尾 + 缎带）与色系（粉蓝），不是脸。*
```text
young east asian woman in her early twenties, round softer face than the lead, fair skin, long black hair tied into two low ponytails with pale-blue satin ribbons, wispy side strands framing the face, soft wide dark eyes, rounded nose tip, small pink lips, gentle sleepy expression, pastel-blue sleeveless dress with small polka dots and lace trim, soft diffused window light, photorealistic cinematic portrait, 85mm lens look, vertical 9:16 composition
```

### 👨🏻 男主「{男主名}」基准脸 (垫图用)
*用法：同上。他是全片唯一的冷光角色，生成基准脸时就要把冷蓝侧逆光写进去，否则后面十几镜接不上。*
```text
tall young east asian man in his late twenties, sharp angular face, high nose bridge, defined jaw, pale cool-toned skin, layered medium-length black hair with textured wispy fringe falling over the brows, narrow upturned dark eyes with cool intense gaze, thin well-defined lips, wearing a black three-piece suit with black shirt, dark patterned tie, small metal lapel pin and a thin silver chain detail, cool blue-tinted side rim light, dark bokeh city background, photorealistic cinematic portrait, 85mm lens look, vertical 9:16 composition
```

### 🧑🏻 弟弟「{弟弟名}」基准脸 (垫图用)
*用法：同上。他和男主同属一个家族，所以骨相要相近但气质相反 —— 男主冷、他明亮外放，靠服装与表情区分，不要靠改脸。*
```text
young east asian man in his early twenties, boyish bright face with softer jaw than his elder brother, fair skin, short layered black hair with a light-brown dyed streak at the crown, large expressive dark eyes, raised brows, wide open grin showing teeth, wearing an unbuttoned loose white shirt over a plain black crew-neck tee, layered thin silver chain necklaces, warm amber lamp light from the left, dark modern interior behind, photorealistic cinematic portrait, 85mm lens look, vertical 9:16 composition
```

---

## 🎞️ 第二步：分镜逐帧实操 (48镜全量)

*操作指南：每一镜都先用文生图生成首帧（务必带上对应角色的基准脸垫图），确认脸对了再把这张首帧丢进图生视频，粘贴运镜提示词产出 2-3 秒片段；全部 48 段生成完再进剪辑。*

### 🏠 第一幕：出逃前·闺房筹划 (0-9.77s)

**【镜头 1】(0-1.3s)**
*   **📝 对应字幕：** 无字幕（左上角粉色描边角标「出逃前...」）
*   **🖼️ 文生图提示词：**
```text
reflection in a tall frameless mirror of a young woman in a white off-shoulder lace-trim loungewear set, she leans against a pale wall edge with one hand raised to the wall, long black hair with bangs, only her reflection sharp while a blurred dark wooden door frame crosses the foreground bottom-left, bright overexposed window light from behind, high-key warm white interior, soft milky haze, photorealistic, vertical 9:16, shallow depth of field
```
*   **🎬 图生视频提示词：**
```text
very slow push in toward the mirror reflection, the blurred foreground door frame drifts slightly left as the camera advances, her fingers press a little harder against the wall, hair strands sway gently, light bloom breathes brighter, no cut, 1.3 seconds
```

**【镜头 2】(1.3-3.87s)**
*   **📝 对应字幕：** 他不在家
*   **🖼️ 文生图提示词：**
```text
extreme close-up of the lower half of a young woman's face, glossy coral-red lips curling into a small conspiratorial smile, chin and jawline sharp, strands of long black hair falling diagonally across the frame, dark soft-focus background on the left with a tiny warm highlight, bright rim light grazing the cheek, photorealistic skin with fine texture, vertical 9:16, 85mm macro look
```
*   **🎬 图生视频提示词：**
```text
the lips part slightly and the corner lifts into a fuller smile, chin tilts up a few degrees, loose hair strands drift across the lower frame, camera holds nearly still with a micro handheld float, background highlight slowly defocuses, 2.6 seconds
```

**【镜头 3】(3.87-4.6s)**
*   **📝 对应字幕：** 无字幕（动作：转身离开镜前）
*   **🖼️ 文生图提示词：**
```text
mid-body shot of a young woman in a white long-sleeve top and a white tiered ruffled mini skirt with a satin bow at the waist, caught mid-turn walking away from a mirror, hair swinging, a dark door frame slicing the left third of the frame, bright blown-out window light filling the right side, warm white high-key interior, motion energy, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she completes the turn and takes one quick step forward, the ruffled skirt flares and settles, hair swings across her shoulder, camera pans right to follow her for a short beat, 0.7 seconds
```

**【镜头 4】(4.6-5.1s)**
*   **📝 对应字幕：** 无字幕（动作：俯身整理床铺）
*   **🖼️ 文生图提示词：**
```text
close-up from a low angle of a white sheer sleeve and a satin bow at a woman's waist as she bends forward over a bed, foreground filled with out-of-focus white bedding, only the fabric folds and the bow in focus, extremely bright high-key white light, almost monochrome white on white, photorealistic fabric texture, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the sleeve sweeps across the frame from right to left as she reaches down, white bedding ripples in the foreground, the bow bounces once, handheld camera dips slightly with the motion, 0.5 seconds
```

**【镜头 5】(5.1-6.3s)**
*   **📝 对应字幕：** 无字幕（动作：侧卧枕上偷笑）
*   **🖼️ 文生图提示词：**
```text
a young woman lies on her side on a bed, cheek pressed into a plush off-white pillow, eyes lowered and lips curved in a private pleased smile, one hand resting flat on the duvet beside her face, long black hair spilling over the pillow, soft warm window light from the upper left, creamy white bedding filling the frame, photorealistic, vertical 9:16, shallow focus on the eye
```
*   **🎬 图生视频提示词：**
```text
her smile widens slightly and her fingers curl into the duvet, eyelashes flutter once, camera drifts a slow 10cm arc to the right around her face, pillow fibers catch the light, 1.2 seconds
```

**【镜头 6】(6.3-9.77s)**
*   **📝 对应字幕：** 无字幕（动作：举起手机准备打电话）
*   **🖼️ 文生图提示词：**
```text
over-the-shoulder close-up of a woman's hand holding up a plain unbranded white smartphone, the blank phone back facing camera and filling the left third of the frame, behind it her face is partly visible in soft focus with one dark eye looking at the screen, bright blown-out window behind, white bedding below, high-key warm interior, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the hand tilts the phone slowly toward her face and the focus racks from the phone back to her eye, she blinks and her gaze shifts to the screen, slight handheld sway, background bloom pulses, 3.4 seconds
```

---

### 📞 第二幕：双机通话·约定一起跑 (9.77-22.3s)

**【镜头 7】(9.77-13.27s)**
*   **📝 对应字幕：** 无字幕（右上角粉色角标「{女主昵称}」· 画面右下角起画中画小窗）
*   **🖼️ 文生图提示词：**
```text
a young woman lies prone across a wide bed in a white long-sleeve top, propped on her elbows, holding a plain unbranded white phone to her ear, bare legs kicked up behind her, mouth open mid-sentence, bright sunlit window and a grey sofa behind her, high-key warm white bedroom, photorealistic, vertical 9:16, wide shot with generous headroom for a picture-in-picture inset
```
*   **🎬 图生视频提示词：**
```text
she kicks her legs slowly behind her and rocks her shoulders while talking, free hand toying with the duvet, camera holds a wide static frame with the faintest breathing zoom, warm light steady, 3.4 seconds
```

**【镜头 8】(13.27-15.07s)**
*   **📝 对应字幕：** 没有呢我才不要去联姻
*   **🖼️ 文生图提示词：**
```text
close-up of a young woman holding a plain unbranded white phone to her ear, chin lifted, lips parted mid-protest with a petulant expression, large dark eyes glancing up and away, long black hair falling forward, bright overexposed window light behind creating a halo on her hair, warm white high-key background, photorealistic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
she tosses her head to flick hair off her cheek while speaking, eyes roll upward in mock complaint, the phone presses closer to her ear, camera pushes in 5% very slowly, hair halo shimmers, 1.8 seconds
```

**【镜头 9】(15.07-16.5s)**
*   **📝 对应字幕：** 无字幕（左上角粉色角标「鬼点子生成中...」）
*   **🖼️ 文生图提示词：**
```text
extreme macro close-up of one human eye and the bridge of a nose, the iris dark brown with a single bright catchlight, lashes sharp, skin luminous and poreless-smooth, the rest of the face falling into creamy out-of-focus white, a dark hair strand crossing the upper frame, high-key warm light, photorealistic macro portrait, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the pupil contracts slightly then the eye narrows into a scheming squint, one lash blink, camera creeps in another 8% on the iris, catchlight slides a hair to the left, 1.4 seconds
```

**【镜头 10】(16.5-17.9s)**
*   **📝 对应字幕：** 无字幕（动作：指尖揪住绒毛枕角）
*   **🖼️ 文生图提示词：**
```text
macro close-up of slender fingers pinching the corner of a fluffy white faux-fur pillow, individual fiber strands catching the light, a soft pale-blue polka-dot fabric visible out of focus on the right, extremely bright high-key white, almost abstract texture study, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the fingers knead the fur slowly and release, fibers spring back and shiver, camera drifts right a few centimetres revealing more of the blue polka-dot fabric, 1.4 seconds
```

**【镜头 11】(17.9-19.23s)**
*   **📝 对应字幕：** 要不你跟我一起跑吧
*   **🖼️ 文生图提示词：**
```text
medium close-up of a young woman in a white lace-trim camisole with a loose white knit cardigan slipping off one shoulder, holding a plain unbranded white phone to her ear, lips parted on a bold suggestion, hair lifted slightly as if by a breeze, bright soft-focus city window behind, warm white high-key light, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she leans in toward camera as she speaks, eyebrows lifting on the proposal, hair floats upward and resettles, the cardigan slides a little further down her arm, camera pushes in gently, 1.3 seconds
```

**【镜头 12】(19.23-19.83s)**
*   **📝 对应字幕：** 啊？跑去哪儿？
*   **🖼️ 文生图提示词：**
```text
close-up of a second young woman with two low ponytails tied with pale-blue ribbons, wearing a pale-blue polka-dot dress, holding a plain unbranded phone to her ear, mouth open in startled confusion, eyes wide, seated against a cream tufted sofa with a soft pink-and-grey painting blurred behind, warm diffused light, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
her eyes widen further and her head jerks back a fraction in surprise, a ponytail swings, the phone slips slightly in her grip, camera holds static, 0.6 seconds
```

**【镜头 13】(19.83-20.6s)**
*   **📝 对应字幕：** 啊？跑去哪儿？（续）
*   **🖼️ 文生图提示词：**
```text
three-quarter profile close-up of the ponytailed young woman in the pale-blue polka-dot dress, phone at her ear, lips still shaped on a question, bright overexposed window filling the left half of the frame, her face catching a strong warm rim light, cream sofa behind, photorealistic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she turns her head a few degrees toward camera while listening, blinks twice, free hand rises to tuck a ponytail back, camera floats a slow handheld drift upward, window bloom breathes, 0.8 seconds
```

**【镜头 14】(20.6-22.3s)**
*   **📝 对应字幕：** 没人（右上角粉色角标「{女主昵称}~」）
*   **🖼️ 文生图提示词：**
```text
night airport interior, two young women crouched low behind a plain unbranded silver hard-shell suitcase, the lead in a dark camisole peering over the top with a mischievous grin, warm bokeh ceiling lights and blue-tinted glass walls behind, cool blue ambient with warm highlight pops, reflective polished floor, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the lead rises a few centimetres to peek further over the suitcase then ducks back, her companion leans in behind her, bokeh lights shift as the camera pans slightly right, 1.7 seconds
```

---
### ✈️ 第三幕：机场会合·互相打气 (22.3-31.03s)

**【镜头 15】(22.3-24.2s)**
*   **📝 对应字幕：** 真的没人追来吗（右上角粉色角标「{闺蜜昵称}~」）
*   **🖼️ 文生图提示词：**
```text
two young women leaning side by side over the handle of a plain unbranded silver suitcase in a night airport hall, faces close together turned toward each other, the lead in a dark camisole on the left, her friend in a pale-blue dress on the right, warm orange bokeh lights behind them against cool blue glass, polished reflective floor, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
both heads turn slightly toward each other as they whisper, the friend glances nervously off-frame then back, hands shift on the suitcase handle, camera eases in a few centimetres, bokeh softly pulses, 1.9 seconds
```

**【镜头 16】(24.2-27.1s)**
*   **📝 对应字幕：** 怕什么走了
*   **🖼️ 文生图提示词：**
```text
tight close-up of the lead woman's face in three-quarter profile, glossy red lips parted on a confident line, eyes cutting sideways toward her friend who is only a dark blurred shape at the right edge, a blurred hand and suitcase handle crossing the lower foreground, cool blue night light with a warm edge highlight on her cheekbone, photorealistic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
her eyes flick fully sideways then forward, chin lifts in decision, the blurred foreground hand pushes the suitcase handle down, camera holds with a micro float, 2.9 seconds
```

**【镜头 17】(27.1-29.1s)**
*   **📝 对应字幕：** 无字幕（动作：两人在行李箱旁对视定下决心）
*   **🖼️ 文生图提示词：**
```text
medium two-shot of two young women standing shoulder to shoulder behind a plain unbranded silver suitcase in a night airport, both looking at each other, the lead calm and the friend uncertain, cool blue glass wall and scattered warm ceiling bokeh behind, hands resting on the suitcase handle, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the friend nods once hesitantly, the lead squeezes her hand on the handle, both straighten up, camera arcs a slow 15 degrees to the left around them, 2.0 seconds
```

**【镜头 18】(29.1-30.0s)**
*   **📝 对应字幕：** 无字幕（动作：转身走向光处）
*   **🖼️ 文生图提示词：**
```text
low rear view of a young woman in a dark fitted mini skirt walking away toward a bright blown-out light source at the end of a night airport corridor, her silhouette rimmed by the glare, polished floor reflecting the light into a long streak, strong backlight, cool blue surroundings, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she takes two strides deeper into the glare and her silhouette thins as the light swallows her edges, the floor reflection stretches, camera tracks forward behind her at walking pace, 0.9 seconds
```

**【镜头 19】(30.0-31.03s)**
*   **📝 对应字幕：** 无字幕（左上角粉色描边角标「出逃中...」）
*   **🖼️ 文生图提示词：**
```text
wide rear two-shot of two young women walking away across a glossy night airport floor, one in a pale-blue mini dress with white socks and tall boots, the other in a dark camisole and shorts with tall boots, pulling a plain unbranded silver suitcase between them, huge blue-tinted glass facade ahead, warm ceiling lights scattered above, symmetric receding composition, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
both walk forward in step, the suitcase wheels roll and wobble slightly, the blue dress sways, camera follows from behind at a steady glide, reflections slide across the floor, 1.0 seconds
```

---

### 🌃 第四幕：男主线并行·弟弟知情 (31.03-49.8s)

**【镜头 20】(31.03-32.0s)**
*   **📝 对应字幕：** 无字幕（动作：男主低头，侧脸极近）
*   **🖼️ 文生图提示词：**
```text
extreme close-up of the side of a young man's head and ear, layered black hair with textured wispy strands, jaw tense, lowered gaze, only the hair and the curve of the ear in sharp focus with the rest falling into near-black shadow, a single cool blue rim light tracing the hairline, very dark moody interior, photorealistic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
the head tilts down another few degrees, hair strands shift, the rim light slides along the jaw as he moves, camera drifts a slow 10cm to the right revealing a sliver of his cheek, 1.0 seconds
```

**【镜头 21】(32.0-33.43s)**
*   **📝 对应字幕：** 无字幕（动作：俯身签字）
*   **🖼️ 文生图提示词：**
```text
over-the-shoulder shot of a young man in a black three-piece suit bending over a desk signing a blank sheet of paper with a slim dark pen, his face in three-quarter profile with a cool intense gaze down at the page, another man's dark shoulder blurred in the foreground left, cool blue night window bokeh behind, metal lapel pin and thin silver chain catching the light, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the pen completes a stroke across the page, he straightens up slightly and lifts his eyes off-frame, the foreground shoulder shifts, camera pushes in slowly past it, 1.4 seconds
```

**【镜头 22】(33.43-35.73s)**
*   **📝 对应字幕：** 无字幕（动作：落地窗前转身站定）
*   **🖼️ 文生图提示词：**
```text
full body shot of a young man in a black three-piece suit standing before a floor-to-ceiling window at night, hands loose at his sides, looking straight at camera with a cold level gaze, a vast city of blue and white bokeh lights behind him, strong cool blue backlight separating his silhouette, dark reflective floor, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
he shifts his weight onto one leg and his head turns a few degrees toward camera, suit jacket settles, the city bokeh behind drifts subtly out of focus, camera pulls back very slowly, 2.3 seconds
```

**【镜头 23】(35.73-36.3s)**
*   **📝 对应字幕：** 无字幕（动作：快步穿过走廊）
*   **🖼️ 文生图提示词：**
```text
medium shot of a young man in a black suit striding briskly down a warm amber-lit corridor toward camera, one hand adjusting his cuff, jacket swinging open, hair lifted by the motion, warm wall sconces streaking behind him, shallow depth of field, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
he takes two fast strides closer and the jacket flares, the cuff snaps into place, camera retreats ahead of him at the same speed keeping framing constant, wall lights streak past, 0.6 seconds
```

**【镜头 24】(36.3-37.17s)**
*   **📝 对应字幕：** 无字幕（动作：转头看向画外）
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in a dark navy-black three-piece suit turning his head sharply toward camera-left, sharp jaw and high nose bridge catching a cool blue edge light, cold narrow eyes, dark marble wall behind with a faint vertical highlight, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
the head completes the turn and the eyes land hard on something off-frame left, one brow lifts a millimetre, hair fringe settles, camera holds static with a micro handheld tremor, 0.9 seconds
```

**【镜头 25】(37.17-40.3s)**
*   **📝 对应字幕：** 哥，什么事这么急
*   **🖼️ 文生图提示词：**
```text
a young man in an unbuttoned loose white shirt over a plain black tee lounges back on a dark leather sofa, one arm draped along the backrest, relaxed amused expression, a tall warm floor lamp glowing behind his shoulder, dark modern living room, warm amber key light from the left, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
he shrugs one shoulder and tilts his head while speaking, the draped arm taps the backrest twice, lamp glow steady, camera eases in a slow 8% push, 3.1 seconds
```

**【镜头 26】(40.3-43.53s)**
*   **📝 对应字幕：** 你嫂子把你老婆也拐走了
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in a black suit and black shirt, head slightly lowered, delivering a flat loaded line with the faintest edge of a smirk, cool blue night bokeh filling the dark background, a strong cold rim light down the left side of his face, metal lapel pin glinting, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
his lips move through the line and the smirk deepens on the last word, eyes stay locked forward, camera pushes in 10% very slowly, background bokeh compresses, 3.2 seconds
```

**【镜头 27】(43.53-45.3s)**
*   **📝 对应字幕：** 我哪里来的老婆
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in an open white shirt over a black tee throwing his head back in an incredulous open-mouthed laugh, silver chain necklaces swinging, a crystal tumbler of amber liquor and a decanter blurred in the lower foreground catching warm light, dark gym-like interior behind, warm amber key, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the laugh peaks and his head rocks forward again, chains swing and settle, the foreground glass catches a moving highlight, camera floats a handheld drift to the left, 1.8 seconds
```

**【镜头 28】(45.3-47.17s)**
*   **📝 对应字幕：** 昨天家里商量联姻定下的
*   **🖼️ 文生图提示词：**
```text
very tight close-up of a young man's face in black suit and black shirt, filling the whole frame, lips parted mid-sentence, cold narrow eyes fixed slightly off-camera, textured black hair falling over the brow, almost monochrome blue-black lighting with one sharp highlight on the nose bridge, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
he speaks the line without blinking, only the jaw and lips move, the highlight on his nose bridge shifts a fraction, camera holds extremely still, 1.9 seconds
```

**【镜头 29】(47.17-49.8s)**
*   **📝 对应字幕：** 就是你一直暗恋的那个女生
*   **🖼️ 文生图提示词：**
```text
medium close-up of a young man in an open white shirt over a black tee leaning forward from a dark leather chair, grin fading into dawning realisation, brows beginning to lift, warm amber wall light raking from the right, dark marble panel behind, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the grin drops away as he leans further forward, eyes widening by degrees, one hand grips the chair arm, camera pushes in steadily through the whole beat, 2.6 seconds
```

---
### 💢 第五幕：当场截人·算账 (49.8-67.33s)

**【镜头 30】(49.8-52.1s)**
*   **📝 对应字幕：** {女主名}应该等急了
*   **🖼️ 文生图提示词：**
```text
medium shot of a young woman in a brown ruched asymmetric camisole and olive shorts walking through a night airport corridor with a plain unbranded leather shoulder bag, one hand lifting the strap, head lowered checking her step, a restroom pictogram sign blurred on the wall behind her, warm amber corridor light mixed with cool blue from the left, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she walks two steps toward camera adjusting the bag strap on her shoulder, hair sways forward, the wall sign slides out of frame behind her, camera retreats ahead of her at walking pace, 2.3 seconds
```

**【镜头 31】(52.1-52.6s)**
*   **📝 对应字幕：** {女主名}应该等急了（续）
*   **🖼️ 文生图提示词：**
```text
macro close-up of a man's hand in a black suit sleeve closing firmly around a woman's slender wrist from behind, her bare arm and a sliver of brown fabric visible, blurred blue-grey airport background, hard cool side light picking out the tendons of the gripping hand, photorealistic, vertical 9:16, 100mm macro
```
*   **🎬 图生视频提示词：**
```text
the fingers tighten around the wrist and her arm jerks back a few centimetres in resistance, the suit cuff slides, camera snaps in a fast 15% push on the grip, 0.5 seconds
```

**【镜头 32】(52.6-53.2s)**
*   **📝 对应字幕：** 无字幕（动作：被抓住后惊愕回头）
*   **🖼️ 文生图提示词：**
```text
close-up of a young woman whipping her head around to look back over her shoulder, lips parted in shock, eyes wide and startled, long black hair flying across the frame, cool blue-grey blurred airport background, hard side light on her cheekbone, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
the head completes the turn and the hair whips past her face before settling, her eyes lock onto something off-frame and widen further, camera jolts slightly with the motion, 0.6 seconds
```

**【镜头 33】(53.2-55.0s)**
*   **📝 对应字幕：** 老婆又敢乱跑
*   **🖼️ 文生图提示词：**
```text
two-shot of a young woman in a brown camisole standing face to face with a tall young man in a black suit in a bright night airport hall, she looks up at him and he looks down at her with a cold amused expression, blown-out white light from a glass wall behind them, their figures rimmed by the glare, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
he leans down a few degrees toward her as he speaks and she tips her chin up to meet it, the gap between them narrows, camera arcs slowly 10 degrees around the pair, backlight blooms, 1.8 seconds
```

**【镜头 34】(55.0-56.9s)**
*   **📝 对应字幕：** {男主名}！你怎么...
*   **🖼️ 文生图提示词：**
```text
close-up of a young woman's face turned up and slightly away, mouth open mid-exclamation, eyes rolled up toward the man beside her whose dark hair and shoulder fill the right third of the frame out of focus, soft blue bokeh behind, warm highlight on her forehead and nose, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
she gets half the sentence out before her mouth stalls open, eyes darting up and sideways, the blurred shoulder on the right advances closer, camera holds with a slight handheld rise, 1.9 seconds
```

**【镜头 35】(56.9-58.6s)**
*   **📝 对应字幕：** 老婆亲了抱了
*   **🖼️ 文生图提示词：**
```text
tight profile two-shot, a young man's face lowered close beside a young woman's cheek and jaw, his lips near her temple, her chin lifted and eyes closed, both profiles rimmed by a bright warm backlight that blows out the background entirely, hair strands glowing at the edges, intimate but fully clothed, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
he closes the last centimetres toward her temple while speaking, her chin lifts a fraction more, backlight flares brighter then settles, camera drifts a slow 8cm to the left, 1.7 seconds
```

**【镜头 36】(58.6-60.7s)**
*   **📝 对应字幕：** 现在连名分都不肯给我一个
*   **🖼️ 文生图提示词：**
```text
close-up of a young man's face in three-quarter profile, black suit, delivering a wry grievance with lowered brows and a faint bitter curl of the lip, a blurred suggestion of a woman's shoulder in the foreground left, warm amber bokeh dots scattered behind against dark blue, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
he speaks the line and the bitter curl deepens, eyes flick down then back up to her, the foreground shoulder shifts closer, camera pushes in 7% slowly, 2.1 seconds
```

**【镜头 37】(60.7-62.53s)**
*   **📝 对应字幕：** 到底谁占谁便宜
*   **🖼️ 文生图提示词：**
```text
medium two-shot of a young woman in a brown camisole and a tall young man in a black suit standing close and facing each other in a night airport hall, she tilts her head up challenging him, warm bokeh ceiling lights and blue glass behind, a blurred metal railing crossing the lower foreground, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she takes a half step in and lifts her face toward his, he holds his ground and looks down, the gap closes to almost nothing, camera pushes in through the foreground railing, 1.8 seconds
```

**【镜头 38】(62.53-63.97s)**
*   **📝 对应字幕：** 无字幕（动作：吻落下）
*   **🖼️ 文生图提示词：**
```text
extreme close-up profile of two faces meeting in a kiss, only lips, chins and the bridge of a nose in frame, glossy highlights on both mouths, long dark hair falling across the lower left, a wash of warm backlight blowing out everything behind into pure white, fully clothed shoulders at the frame edge, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
the lips press and hold, both heads tilt a few degrees in unison, hair strands drift down across the frame, backlight blooms slowly brighter, camera holds extremely still, 1.4 seconds
```

**【镜头 39】(63.97-65.2s)**
*   **📝 对应字幕：** 无字幕（动作：睁开的眼睛，含泪光）
*   **🖼️ 文生图提示词：**
```text
extreme macro close-up of a single open eye, dark brown iris with a bright elongated catchlight, lower lid faintly flushed pink, lashes sharp and separated, a dark hair strand crossing the upper frame, skin luminous and smooth, cool neutral light, the rest of the face dissolving into soft focus, photorealistic macro, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
the pupil dilates slightly and the eye blinks once slowly, the catchlight slides across the iris, a faint tremble in the lower lid, camera creeps in another 6%, 1.2 seconds
```

**【镜头 40】(65.2-67.33s)**
*   **📝 对应字幕：** 无字幕（动作：吻的极近特写 · 全片音量峰值）
*   **🖼️ 文生图提示词：**
```text
extreme close-up of two mouths and the underside of a jaw in a kiss, filling the entire frame, warm skin tones, glossy lip highlights, a single bright specular rim along the upper lip, everything behind blown to soft white, fully clothed, photorealistic cinematic, vertical 9:16, 100mm macro
```
*   **🎬 图生视频提示词：**
```text
the kiss deepens a fraction and both heads rotate slowly a few degrees, specular highlights travel across the lips, the white background pulses brighter at the peak then eases, camera holds dead still, 2.1 seconds
```

**【镜头 41】(67.33-69.53s)**
*   **📝 对应字幕：** 我们回去慢慢算
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in a black suit in three-quarter profile, hair slightly disordered, delivering a low promise with a satisfied half-smile, a blurred bright foreground shape crossing the lower right, cool blue night airport bokeh behind with a warm highlight on his cheek, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
he says the line and the half-smile settles into something quieter, eyes drop to her then lift away, the blurred foreground shape drifts out of frame, camera pulls back very slowly, 2.2 seconds
```

---
### 🔁 第六幕：出逃失败·双线收口 (69.53-76.63s)

**【镜头 42】(69.53-70.67s)**
*   **📝 对应字幕：** 无字幕（左上角粉色描边角标「出逃失败...」）
*   **🖼️ 文生图提示词：**
```text
rear view of a young man in a black suit leading a young woman in a brown camisole and olive shorts by the wrist across a glossy airport floor toward a bright glass exit, her shoulder angled back in token resistance, a plain unbranded bag on her arm, strong backlight through the glass turning both into near-silhouettes, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
he walks forward and her steps stutter to keep up, her free arm swings back once, the glass glare widens as they approach, camera follows behind at a steady glide, 1.1 seconds
```

**【镜头 43】(70.67-71.4s)**
*   **📝 对应字幕：** 无字幕（角标「出逃失败...」续）
*   **🖼️ 文生图提示词：**
```text
wide rear silhouette of a man in a black suit and a woman in brown walking out through a revolving glass door into pure white glare, their bodies reduced to dark outlines, long reflections streaking across the polished floor toward camera, extreme backlight, almost monochrome, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
both step into the doorway and the glare swallows their edges until only outlines remain, the floor reflections stretch and shimmer, camera holds a wide static frame, 0.7 seconds
```

**【镜头 44】(71.4-71.97s)**
*   **📝 对应字幕：** 无字幕（动作：被拉着走时回头）
*   **🖼️ 文生图提示词：**
```text
medium shot of a young woman in a brown camisole being pulled forward by the wrist, her torso twisting back and her head turned over her shoulder toward camera-left, hair flying, a black suit sleeve and hand entering from frame-left, blue-grey airport glass and planters behind, photorealistic cinematic, vertical 9:16
```
*   **🎬 图生视频提示词：**
```text
she twists further back against the pull and her hair fans out, the gripping hand stays locked, her mouth opens to speak, camera tracks laterally with them, 0.6 seconds
```

**【镜头 45】(71.97-72.47s)**
*   **📝 对应字幕：** 等下，{女主名}还在等我
*   **🖼️ 文生图提示词：**
```text
close-up profile of a young woman in a brown camisole speaking urgently over her shoulder, lips parted mid-protest, long black hair streaming behind her from the forward motion, bare shoulder and collarbone in frame, soft blue bokeh airport background, warm highlight along her profile, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
she calls out the line while being pulled forward, hair streaming back, head straining further over her shoulder, camera moves with her keeping the profile framed, 0.5 seconds
```

**【镜头 46】(72.47-73.63s)**
*   **📝 对应字幕：** 等下，{女主名}还在等我（续）
*   **🖼️ 文生图提示词：**
```text
close-up of a young woman turned three-quarters toward camera, mouth open on an urgent plea, brows drawn together, eyes wide and pleading, long black hair in motion, a tall blue-lit airport pillar with a numeral sign blurred behind her, cool blue ambient with warm rim, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
her head completes the turn toward camera as she finishes the plea, brows pulling tighter, hair settling across one shoulder, camera eases in 8% on her face, 1.2 seconds
```

**【镜头 47】(73.63-74.13s)**
*   **📝 对应字幕：** 她有人接
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in a black suit in three-quarter profile, cold flat expression delivering a dismissive two-beat line, a woman's wrist still held in his hand visible at the lower frame edge, warm vertical light strips and blue glass blurred behind him, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
he says the line without turning his head, only the eyes flick sideways once, the hand at the lower edge tightens, camera holds static, 0.5 seconds
```

**【镜头 48】(74.13-76.63s)**
*   **📝 对应字幕：** 你还是先担心你自己吧
*   **🖼️ 文生图提示词：**
```text
close-up of a young man in a black suit and black shirt turning to face camera almost frontally, one brow raised, lips curling into a slow knowing smile, cold narrow eyes, cool blue-grey airport bokeh filling the background, a soft warm highlight along his jaw, photorealistic cinematic, vertical 9:16, 85mm
```
*   **🎬 图生视频提示词：**
```text
the head finishes turning to camera and the knowing smile spreads on the last word, one brow holds raised, the background bokeh slowly defocuses further, camera pushes in a final slow 10% then stops, 2.5 seconds
```

---

## ✂️ 第三步：后期剪辑与拼接参数

48 段素材生成完照这张表拼。时间码与音量值都是从原片实测得出的，不是估的 —— 尤其 BGM 那一行，拐点落在哪一秒是这条片子节奏的核心。

| 参数项 | 设置标准 (照做即可) |
| :--- | :--- |
| **转场特效** | 全片 **硬切，零转场**，47 个接缝一个叠化都不要。唯一的例外处理是幕与幕之间：靠色调跳变（暖白 ↔ 冷蓝）天然形成段落感，不需要加特效。镜 31（抓手腕）与镜 32（回头）之间可以给 1-2 帧的闪白，强化"被截住"的突兀感。 |
| **时长节奏** | 均镜 **1.60 秒**，但分布是刻意不均的：对白镜 1.8-3.2 秒（最长镜 7 / 26 均为 3.2-3.5 秒，都是说长句），**反应镜与特写压到 0.5-0.9 秒**（镜 31/32/45/47 全在 0.6 秒以内）。幕 6 收口段七镜总共只占 7.1 秒，节奏要明显快于前面。 |
| **字幕样式** | 白色粗黑体 + 细黑描边，居中，位置**随镜浮动**（不固定在同一 y），对白出现即显、说完即隐。另有一套**粉色描边小角标**压在左上或右上角（「出逃前...」「鬼点子生成中...」「出逃中...」「出逃失败...」以及通话时的人名角标），字号约为正文字幕的 60%，是这条片子的包装标识，不要省。 |
| **BGM (配乐)** | 轻快电子流行，节奏对齐以下实测拐点：**2.5s 起 56%** 进入 → **14.0s 升到 84%**（提出"我才不要去联姻"）→ **21.0s 骤降到全片最低 17%**（机场蹲在箱后那声"没人"，这一秒几乎静音，是全片最关键的留白）→ 25.5s 回到 61% → 37.0s 71% → **55.9s 86%**（当场撞见）→ **62.8s 95% → 66.9s 全片峰值 98%**（吻的极近特写）→ **69.5s 回落到 52%**（"我们回去慢慢算"）→ 72.2s 83% → 75.4s 88% 收尾不淡出，硬切结束。 |
| **导出画质** | **1080x1920 / 30fps / 2200 kbps 以上 / H.264 / AAC 128k**。竖版满画幅，不要加黑边、不要做复合画布。 |

---

## 💡 【附赠】买家专属高阶技巧

**1. 画中画是这条片子最便宜的技术红利。** 幕 2 整段双人通话（镜 7-15）用的是**主画面 + 右下角小窗**的双框结构 —— 这招省掉了"两人同框"这个 AI 最难生成的构图。两个人各自在自己的房间里打电话，各生成一组独立素材，剪辑时把一方缩成小窗叠上去就行。不需要让模型同时画两张正确的脸，也不需要处理视线对位。小窗尺寸约主画面的 22%，带 2px 白描边 + 轻微圆角，位置固定在右下。

**2. 色温就是时间线，也是人物线。** 全片只有两种光：**幕 1-2 的暖白高调家居光**（闺房，几乎过曝，白衣白床白墙）和**幕 3-6 的冷蓝夜景机场光**。男主从第一次出场（镜 20）到最后一镜，**从未沾过一丝暖光** —— 他是冷的那一边；女主则从暖白被拉进冷蓝。所以不要给男主的镜头加暖色调整，也不要给闺房段加冷光，混了就脏。

**3. 最后两镜才是全片的产品点，别当普通结尾拍。** 女主喊的是「等下，{女主名}还在等我」 —— 她惦记的是闺蜜。男主回的是「她有人接」，意思是**弟弟已经去接她了**（这正是幕 4 那段兄弟对话埋下的伏笔）。然后再补一句「你还是先担心你自己吧」。两条线在最后 3 秒合成一句话，而这句话之所以成立，全靠幕 4 那四十秒看似无关的兄弟戏。写这类双线甜宠时，**次要线不是凑时长，是结尾那一句的弹药**。

**4. 道具一律写 plain unbranded。** 行李箱、手机、肩包、机场标识牌 —— 本手册里全部加了 `plain unbranded`。原因有两个：AI 生成的伪商标字母几乎必然缺笔画或扭曲，放大一眼就假；而且真实品牌标识不能用于商用。机场的编号牌与指示牌同理，让它保持模糊虚化，不要让模型去"写字"。

**5. 把最短的镜头留给反应，不要留给台词。** 48 镜里有 8 个在 0.7 秒以内，全部是**无台词的反应或特写**：抓手腕的手（0.5s）、惊愕回头（0.6s）、被拉着回头（0.6s）、"她有人接"的冷脸（0.5s）。这些镜头生成成本最低（画面简单、运动幅度小），但承担了全片最大的情绪跳变。新手容易把短镜头用来塞台词，结果字幕来不及看完 —— 反过来做才对。

**6. 换成你自己的角色，不要照搬。** 本手册的四张基准脸是**可复用的原型模板**（年龄段、脸型、发型、服饰廓形），不是对某个具体人物的还原配方。请按你自己的企划改写五官描述与服装，并始终保留负向词里的 `celebrity likeness` / `recognizable public figure` / `named real actor` 三条挡位 —— 它们挡的是模型无意间生成出可识别真人面孔，是合规项。原片的来源频道在标签里挂了大量影视剧名与演员名做流量，那套做法不要学。
