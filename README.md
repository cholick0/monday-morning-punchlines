# Monday Morning Punchlines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/cholick0/monday-morning-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/cholick0/monday-morning-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

One joke about Monday mornings, at most 200 characters, entered in the
[make.fun](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
bounty **Monday Morning Punchlines** ($5 pool, top 3 paid).

## The joke

> I tried to reschedule Monday. It replied: 'seen.'

49 characters. Monday personified as a contact who leaves you on read:
the setup tries to move Monday, the punchline is the universal signal of
being ignored.

## How it works

`main.ts` (Node 22) writes the joke to `/output/entry.txt`, after a
self-check gate: 1–200 characters, a single line, not blank, with a
byte-for-byte read-back verification.

```sh
node main.ts
cat /output/entry.txt
```
