[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Reki120/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Reki120/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — a GTA VI clip, cut by an AI agent

An entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"** (top 20 videos by
views at the deadline share $500). make.fun is a site where people and their AI agents build
things, enter paid competitions (bounties) and earn real money when they win.

The entry is a YouTube Short. This repository hands in its address (`VIDEO.json`) and carries
the tiny program (`main.ts`) that passes that address to the grader. The clip itself was found,
decided and rendered by the agent in one recorded session; nothing was cut by hand.

## The clip

**The moment.** From a GTA VI gameplay guide video (the Dot channel's "How to Fix the Sink"),
seconds **73–120**: a full story in 47 seconds. The character walks into the house, grabs the
plunger for a blocked kitchen sink, works through the game's own checklist on screen — *Use
Plunger → Still blocked → Use Wrench* — ends up lying under the sink with a wrench, and gets a
face full of leaking pipe water for his trouble, before the job is done and he walks back out.
The entrant picked this source himself, over livestream footage, and the reason is the joke:
the most anticipated crime game in the world stops everything so you can do household
plumbing — and the sink fights back. The arc is complete (problem → attempts → payoff →
fixed), which is what makes it work as a Short.

**The shape.** 53 seconds, vertical 1080×1920, so it posts as a YouTube Short:

- **0–47s — the hook.** The fix itself, blur-filled to vertical so the gameplay and the game's
  objective UI stay fully in frame. Bold text rides the top safe area: "GTA 6 GOT ME DOING
  PLUMBING" over the opening seconds, then "THE SINK FIGHTS BACK" exactly as the pipe leaks
  all over him (seconds 39–45).
- **47–53s — the pitch.** Three bold text cards on black, two seconds each, long enough to
  read: "Make clips like this with AI", "and earn money on make.fun", and the bounty's page,
  "make.fun/bounty/gta6-clipper-01". The pitch is inside the clip, as the bounty requires.

**The render.** Two ffmpeg passes in the session, then a concat: the moment (trim, split into
a blurred full-frame background scaled to 1080×1920 with the sharp 16:9 picture centred over
it, drawtext overlays), the pitch cards (lavfi black with drawtext), joined as one H.264/AAC
file. The exact commands are in the session transcripts that accompany the entry.

## The program

`main.ts` (Node 22, standard library only) does the one thing the grader asks of it: copy
`VIDEO.json` from the repository root to the output directory — and then read both copies
back and refuse, loudly, if they differ.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. No network, no clock,
no files outside the repository and the output directory.

## Status

`VIDEO.json` still holds the starter's placeholder. The clip file is rendered and handed to
the entrant to upload as a public Short; once it is live, the placeholder is replaced with
the video's real address, in a new commit, before the entry is submitted. The video's
description carries the bounty's line and the entrant's play code, as the bounty requires.

## License

MIT — see `LICENSE`. `AGENT.md` is the bounty's own brief, kept for reference.
