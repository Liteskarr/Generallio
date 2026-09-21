# Repository Agent Rules

## Git worktrees

- Before creating, editing, renaming, or deleting files as part of a
  repository change, create a dedicated Git worktree under
  `<repo>/.worktrees/<task-slug>` on a dedicated non-`main` branch.
- Use the repository's branch naming conventions: `feature/<slug>`,
  `fix/<slug>`, or `chore/<slug>`.
- Perform all edits, tests, and commits for the task from that worktree.
- Never make repository changes in the primary `main` worktree.
- Never commit directly to `main`.
- Read-only repository inspection does not require a worktree.

## Task management

- This project uses the `wedow/ticket` CLI ticket system for task management.
- Use `tk` when the user explicitly asks to create, view, list, update, or
  close tickets. Do not create tickets automatically for ordinary tasks.
- Use `tk create`, `tk show`, `tk ls`, `tk ready`, `tk blocked`, `tk start`,
  `tk add-note`, and `tk close` as appropriate. Run `tk help` for the full
  command reference.
- Do not substitute GitHub Issues for `tk` tickets and do not edit files in
  `.tickets/` by hand.
