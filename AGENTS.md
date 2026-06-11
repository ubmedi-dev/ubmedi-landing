# Text Encoding Rules

## Scope
This repository may contain Korean text and mixed legacy encodings.
Avoid mojibake and accidental re-encoding above all else.

## Mandatory Rules
- Before reading or editing an existing text file that may contain Korean, first determine:
  - likely encoding
  - BOM presence
  - newline style
- If mojibake is suspected, do not save the file until the encoding interpretation is credible.
- Preserve the original encoding, BOM, and newline style for existing files.
- Treat "convert to UTF-8" as a separate, explicit task.
- New files should follow repository convention. If there is no clear rule, prefer UTF-8 and state whether BOM is used.
- Do not use ambiguous write paths by default, such as shell redirection or convenience commands without explicit encoding control.
- After writing, reopen the file and verify representative Korean lines.
- If any of the following appears, stop and report:
  - replacement characters
  - unexpected `?`
  - unintended BOM change
  - unintended newline conversion
  - whole-file diffs without a business reason

## Reporting Format
For each changed text file, report:
- path
- detected or preserved encoding
- BOM presence
- newline style
- how verification was performed
- whether representative Korean text remained intact
