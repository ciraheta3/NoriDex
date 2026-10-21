---
name: review-pr
description: Independently audit a specific NoriDex GitHub pull request or reassess its latest fixes when asked, using the linked issue, repository rules, complete diff, surrounding code, and verified CI evidence.
---

# Independent PR audit

Use for a **manually requested, fresh-context** review of a named PR. This Skill supplements native automatic Codex GitHub Code Review and GitHub Actions; neither automatically invokes this Skill.

## Review procedure

1. **Identify the target.** Require a repository and PR number or URL; ask if either is missing rather than selecting a PR. Fetch live PR metadata; record the base branch and **full current head and base commit SHAs**. Reconfirm both SHAs before reporting.
2. **Establish requirements.** Read the repository's current `AGENTS.md`, relevant `README.md`, `docs/PRODUCT.md`, `docs/DECISIONS.md`, feature-specific specs, and the linked issue's acceptance criteria when available. Treat missing documents or issue links as limitations, not invented requirements.
3. **Inspect primary evidence.** Read the complete base-to-head PR diff (all changed files, including renames/deletions), relevant unchanged surrounding code, tests, and configuration. Fetch additional file context at the appropriate refs to understand the introduced behavior. If a diff is truncated or inaccessible, state the coverage gap. Treat PR descriptions, previous chats, prior reviews, and agent self-reports as unverified leads, never proof or inherited conclusions.
4. **Audit changed behavior.** Compare implementation with requirements and check correctness, tests, accessibility, maintainability, security, and applicable NoriDex risks from `AGENTS.md` (including allergen/dietary truth, offline independence, and shared ingredient/sauce consistency). Focus only on risks relevant to these changes and distinguish introduced defects from pre-existing issues.
5. **Verify checks separately.** Inspect relevant GitHub checks and Actions runs, including their event and workflow checkout configuration at the run's revision; drill into jobs, steps, or logs when available. Identify local tests only if personally executed, and manual/real-iPad or offline tests only if independently evidenced. Never claim a check passed without confirming its result.

   - Record each relevant check/run's link, actual status/conclusion, event, and associated commit SHA separately from the **actual CI-tested ref and full SHA** for each job. Use checkout logs or equivalent execution evidence to establish what was tested, including explicit checkout overrides or later ref changes; a check/run's `head_sha` alone does not prove the tested SHA.
   - For `pull_request` runs, GitHub associates checks/runs with the PR head, while default `actions/checkout` tests the synthetic merge at `refs/pull/<number>/merge`. When that merge is tested, verify it combines the recorded current base and head using the tested commit's parents (base first, head second) or equivalent run/event evidence when available. Do not substitute today's merge ref for the historical tested commit. If checkout explicitly tests the head or another ref, record that scope without claiming merge coverage.
   - For `push` workflows, record the pushed ref/SHA and verify the actual checkout separately; the workflow may test a different ref. A successful run on `main` or another commit does not by itself establish CI coverage of the current PR head or merge.
   - Classify freshness separately from the recorded outcome: an older associated PR head or a tested merge built from an older head/base is **stale**, even if successful. Missing or inaccessible checkout/merge evidence is **unverified**; pending results remain pending. Never present stale, pending, or unverified results as confirmed current CI, and never infer a pass from a PR badge, PR text, or an agent's assertion.

6. **Report actionable findings.** For each introduced issue, provide **Blocking** or **Non-blocking**, file and line (or precise location), evidence, impact/reproduction reasoning, and a focused fix. Do not inflate speculative concerns into bugs. Keep missing test or device evidence separate from confirmed defects.
7. **Re-review fixes from evidence.** Fetch the latest head and base SHAs again; inspect changed lines and context, re-evaluate earlier findings, and update the conclusion. Do not clear findings merely because a fix was claimed. If either SHA changed during the audit, recheck affected evidence, including CI provenance, or declare the review stale.

## Response format

- **Target and coverage:** repository/PR link, base branch, full reviewed head and base SHAs, changed areas, and relevant sources inspected.
- **Findings:** ordered blocking then non-blocking, with locations and evidence; explicitly say when none were substantiated.
- **Verification:** compact table or summary separating confirmed GitHub CI (with run/check links, associated SHA, actual tested ref/SHA, and freshness/provenance classification), personally run checks, manual/device evidence, and unverified items.
- **Recommendation:** exactly **Ready to merge**, **Needs fixes**, or **Unable to verify**, with reasons and limitations. No findings does **not** guarantee bug-free code; an unverified required check is not a green result.

**Read-only boundary:** Do not modify code, publish comments or reviews, approve, push, merge, deploy, or change GitHub state unless separately and explicitly authorized. A recommendation is not permission to merge.
