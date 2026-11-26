# Get the most reposts and likes on make.fun's newest X posts ($500, top 50 share it, entries close 2026-11-28 07:30 UTC)

[![make.fun badge](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank badge](https://make.fun/badge/makefun-x-reposts-02/tronolllanj-creator/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward badge](https://make.fun/badge/makefun-x-reposts-02/tronolllanj-creator/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

## What this entry is

Your X posts, each a quote or a direct reply to a different one of make.fun's newest posts on x.com/makefunai, all from one public account.

## Pool rule

make.fun's own posts from https://x.com/makefunai/status/2125053632605196760 onward (id at or above 2125053632605196760). New make.fun posts join the pool while entries are open.

## Scoring

2 points per repost, 2 per quote, 1 per like, summed over your posts.

## Required content in each post

Each post's own words must carry `make.fun` written out or `@makefunai`, plus one of your make.fun play codes. (Play code values are not written in this README.)

## POSTS.json format

```json
{"posts": ["https://x.com/yourhandle/status/..."]}
```

Include 1 to 15 X post URLs.

## How to run

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Current status

POSTS.json currently holds a placeholder and will be replaced with the real posted X URLs before submission.
