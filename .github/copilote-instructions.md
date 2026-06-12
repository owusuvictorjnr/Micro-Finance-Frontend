# Prooject Rules


This is a financial application.


Never use:

- any
- @ts-ignore
- @ts-nocheck


Always:

- use Zod validation
- use strick typing
- use Prisma types
- use Server Actions
- sanitize user inputs


Authentication:

- RBAC required
- JWT verification required
- permission checks reqiured


Database:

- use transactions where money is involved
- never trust client input


Code Quality:

- avoid duplicate  logic
- prefer reusable services
- maintain feature-first architecture


Security:

- prevent XSS
- prevent SQL injection
- prevent CSRF
