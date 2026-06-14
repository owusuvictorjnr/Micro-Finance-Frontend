
# Project Overview

This is a financial management application for a Susu/Microfinance institution.

Code quality and security are critical.

---

# TypeScript Rules

Never use:

- any
- @ts-ignore
- @ts-nocheck

Always:

- Use strict typing
- Use interfaces/types
- Use Zod validation

---

# Security Rules

Always:

- Validate all inputs
- Sanitize user input
- Protect against XSS
- Protect against CSRF
- Use RBAC

Never:

- Trust client-side data
- Expose secrets
- Hardcode credentials

---

# Database Rules

All financial operations must use database transactions.

Always maintain audit logs.

Never update balances directly without transaction safety.

---

# Architecture Rules

Use Feature-First Architecture.

Features belong in:

src/features/

Shared UI belongs in:

src/components/ui

Business logic belongs in:

services/

Validation belongs in:

schemas/

---

# Code Quality

Prefer:

- reusable code
- composable hooks
- server actions

Avoid:

- duplicate logic
- large components
- large files

Maximum file size:

500 lines
