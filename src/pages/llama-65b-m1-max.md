---
layout: "../layouts/BlogPost.astro"
title: "Running LLaMA 65B on a 64GB M1 MacBook Max with llama.cpp"
publishDate: "3/11/2023"
published: true
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">65B running on m1 max/64gb! 🦙🦙🦙🦙🦙🦙🦙 <a href="https://t.co/Dh2emCBmLY">pic.twitter.com/Dh2emCBmLY</a></p>&mdash; Lawrence Chen (@lawrencecchen) <a href="https://twitter.com/lawrencecchen/status/1634507648824676353?ref_src=twsrc%5Etfw">March 11, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


More detailed instructions here: https://til.simonwillison.net/llms/llama-7b-m2

There are several more steps required to run 13B/30B/65B.

Go star llama.cpp: https://github.com/ggerganov/llama.cpp

# Setup

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
```

```bash
make
```

```bash
pip install torch numpy sentencepiece # you might want to do this in a virtual env
```

## Updates

There are now helper scripts for quantizing weights:

https://twitter.com/ggerganov/status/1635381312432529415

```
python3 convert-pth-to-ggml.py models/7B/ 1

./quantize.sh 7B
```


## 65B

```bash
python3 convert-pth-to-ggml.py models/65B/ 1
```

```bash
./quantize ./models/65B/ggml-model-f16.bin ./models/65B/ggml-model-q4_0.bin 2
./quantize ./models/65B/ggml-model-f16.bin.1 ./models/65B/ggml-model-q4_0.bin.1 2
./quantize ./models/65B/ggml-model-f16.bin.2 ./models/65B/ggml-model-q4_0.bin.2 2
./quantize ./models/65B/ggml-model-f16.bin.3 ./models/65B/ggml-model-q4_0.bin.3 2
./quantize ./models/65B/ggml-model-f16.bin.4 ./models/65B/ggml-model-q4_0.bin.4 2
./quantize ./models/65B/ggml-model-f16.bin.5 ./models/65B/ggml-model-q4_0.bin.5 2
./quantize ./models/65B/ggml-model-f16.bin.6 ./models/65B/ggml-model-q4_0.bin.6 2
./quantize ./models/65B/ggml-model-f16.bin.7 ./models/65B/ggml-model-q4_0.bin.7 2
```

```
./main -m ./models/65B/ggml-model-q4_0.bin -t 8 -n 128 -p "when is the singularity going to kill us?"
```

## 30B

```bash
./quantize ./models/30B/ggml-model-f16.bin   ./models/30B/ggml-model-q4_0.bin 2
./quantize ./models/30B/ggml-model-f16.bin.1 ./models/30B/ggml-model-q4_0.bin.1 2
./quantize ./models/30B/ggml-model-f16.bin.2 ./models/30B/ggml-model-q4_0.bin.2 2
./quantize ./models/30B/ggml-model-f16.bin.3 ./models/30B/ggml-model-q4_0.bin.3 2
```

```bash
./main -m ./models/30B/ggml-model-q4_0.bin -t 8 -n 128 -p "never gonna"
```