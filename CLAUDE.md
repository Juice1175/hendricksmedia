@AGENTS.md

## Commands

### check your brain
When the user says "check your brain", do the following:
1. Read `~/claude-memory/Claude Code/Memory/README.md`
2. Find and read the latest file (by date) in `~/claude-memory/Claude Code/Sessions/`
3. Output a short summary with three sections:
   - **Current State** — tools, repo, live site, any env status
   - **Last Thing Done** — what was accomplished in the most recent session
   - **Next Step** — the first item from "Pick Up Here"
