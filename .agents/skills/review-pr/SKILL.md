---
name: review-pr
description: Independently audit a specific NoriDex GitHub pull request or reassess its latest fixes when asked, using the linked issue, repository rules, complete diff, surrounding code, and verified CI evidence.
---

# Independent PR audit

Use for a **manually requested, fresh-context** review of a named PR. This Skill supplements native automatic Codex GitHub Code Review and GitHub Actions; neither automatically invokes this Skill.

## Review procedure

1. **Identify the target.** Require a repository and PR number or URL; ask if either is missing rather than selecting a PR. Fetch live PR metadata; record the base branch and **full current head commit SHA**. Reconfirm the head before reporting.
2. **Establish requirements.** Read the repository's current `AGENTS.md`, relevant `README.md`, `docs/PRODUCT.md`, `docs/DECISIONS.md`, feature-specific specs, and the linked issue's acceptance criteria when available. Treat missing documents or issue links as limitations, not invented requirements.
3. **Inspect primary evidence.** Read the complete base-to-head PR diff (all changed files, including renames/deletions), relevant unchanged surrounding code, tests, and configuration. Fetch additional file context at the appropriate refs to understand the introduced behavior. If a diff is truncated or inaccessible, state the coverage gap. Treat PR descriptions, previous chats, prior reviews, and agent self-reports as unverified leads, never proof or inherited conclusions.
4. **Audit changed behavior.** Compare implementation with requirements and check correctness, tests, accessibility, maintainability, security, and applicable NoriDex risks from `AGENTS.md` (including allergen/dietary truth, offline independence, and shared ingredient/sauce consistency). Focus only on risks relevant to these changes and distinguish introduced defects from pre-existing issues.
5. **Verify checks separately.** Inspect GitHub checks and Actions runs **for the recorded head SHA**, drilling into jobs, steps, or logs when available. Report each relevant check's actual status/conclusion and link; do not equate a PR badge, PR text, or an agent's assertion with a passed check. Identify local tests only if personally executed, and manual/real-iPad or offline tests only if independently evidenced. Mark missing, pending, stale, or inaccessible evidence explicitly as unverified; never claim a check passed without confirming its result.
6. **Report actionable findings.** For each introduced issue, provide **Blocking** or **Non-blocking**, file and line (or precise location), evidence, impact/reproduction reasoning, and a focused fix. Do not inflate speculative concerns into bugs. Keep missing test or device evidence separate from confirmed defects.
7. **Re-review fixes from evidence.** Fetch the latest head SHA again; inspect changed lines and context, re-evaluate earlier findings, and update the conclusion. Do not clear findings merely because a fix was claimed. If the head changed during the audit, recheck affected evidence or declare the review stale.

## Response format

- **Target and coverage:** repository/PR link, base branch, full reviewed head SHA, changed areas, and relevant sources inspected.
- **Findings:** ordered blocking then non-blocking, with locations and evidence; explicitly say when none were substantiated.
- **Verification:** compact table or summary separating confirmed GitHub CI (with run/check links and matching SHA), personally run checks, manual/device evidence, and unverified items.
- **Recommendation:** exactly **Ready to merge**, **Needs fixes**, or **Unable to verify**, with reasons and limitations. No findings does **not** guarantee bug-free code; an unverified required check is not a green result.

**Read-only boundary:** Do not modify code, publish comments or reviews, approve, push, merge, deploy, or change GitHub state unless separately and explicitly authorized. A recommendation is not permission to merge.
