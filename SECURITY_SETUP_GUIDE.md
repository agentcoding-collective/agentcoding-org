# GitHub Security Setup - Manual Configuration Guide

This document provides step-by-step instructions for configuring GitHub repository security settings that cannot be automated through files.

**Repository**: agentcoding-collective/agentcoding-org

## ✅ Automated Setup (Already Complete)

The following have been implemented via repository files:

- ✅ CODEOWNERS file (requires @alessandroraffa approval)
- ✅ CI/CD workflow (build, type-check)
- ✅ CodeQL security scanning (weekly + PRs)
- ✅ Security audit workflow (weekly dependency checks)
- ✅ Pull request template
- ✅ Issue templates (bug report, feature request)
- ✅ Contributing guidelines
- ✅ Enhanced .gitignore for secrets

## 🔧 Manual Configuration Required

### 1. Enable Branch Protection Rules

**Navigate to**: Settings → Branches → Add rule

**Branch name pattern**: `main`

**Configure the following settings**:

#### Protect matching branches

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: `1`
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Add required checks:
    - `build-and-test` (from CI workflow)
    - `analyze` (from CodeQL workflow)

- ✅ **Require conversation resolution before merging**

- ✅ **Require signed commits** (optional but recommended)

  ```bash
  # To enable signed commits locally:
  git config commit.gpgsign true
  ```

- ✅ **Require linear history**
  - Prevents merge commits, keeps history clean

- ✅ **Do not allow bypassing the above settings**
  - Applies rules even to admins

- ✅ **Restrict who can push to matching branches**
  - Add specific collaborators only
  - Consider limiting to repository owner initially

- ❌ **Allow force pushes**: NO
- ❌ **Allow deletions**: NO

**Click**: "Create" or "Save changes"

---

### 2. Enable Security Features

**Navigate to**: Settings → Code security and analysis

#### Dependency graph

- ✅ Enable (should be on by default for public repos)

#### Dependabot alerts

- ✅ Enable
- Automatically notifies of vulnerable dependencies

#### Dependabot security updates

- ✅ Enable
- Automatically creates PRs to update vulnerable dependencies

#### Code scanning

- ✅ Enable CodeQL analysis
- Should detect your `.github/workflows/codeql.yml` file
- If not detected, click "Set up" → "Set up this workflow"

#### Secret scanning

- ✅ Enable
- Automatically detects committed secrets
- ✅ Enable push protection (prevents pushing secrets)

---

### 3. Configure Repository Settings

**Navigate to**: Settings → General

#### Features

```yaml
✅ Issues
✅ Projects
❌ Wiki (use docs/ folder or GitHub Pages instead)
✅ Discussions (for Q&A and community)
❌ Sponsorships (unless accepting donations)
```

#### Pull Requests

```yaml
✅ Allow squash merging (recommended)
- Default to pull request title for squash commits
❌ Allow merge commits
❌ Allow rebase merging
✅ Always suggest updating pull request branches
✅ Allow auto-merge
✅ Automatically delete head branches
```

#### Archives

```yaml
❌ Do not include Git LFS objects in archives
```

---

### 4. Set Up Notifications

**Navigate to**: Your profile → Settings → Notifications

**For this repository**:

- ✅ **Watching**: All Activity
- ✅ Email notifications for:
  - Pull requests
  - Issues
  - Security alerts
  - Dependabot alerts
  - Actions workflow runs (optional, can be noisy)

---

### 5. Configure Actions Permissions

**Navigate to**: Settings → Actions → General

#### Actions permissions

```yaml
✅ Allow all actions and reusable workflows (if comfortable)
OR
✅ Allow [organization] and select non-[organization] actions and reusable workflows
```

#### Workflow permissions

```yaml
◉ Read and write permissions (needed for security-audit workflow to create issues)
✅ Allow GitHub Actions to create and approve pull requests
```

---

### 6. Set Up Deploy Keys or Secrets (if needed for deployment)

**Navigate to**: Settings → Secrets and variables → Actions

**Add repository secrets**:

Example for Cloudflare Pages deployment:

```yaml
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

**Important**: Never commit these values to the repository!

---

### 7. Configure Rulesets (Optional - Advanced)

**Navigate to**: Settings → Rules → Rulesets

This is a newer alternative/addition to branch protection rules with more granular control.

**Consider enabling**:

- Require status checks for all branches (not just main)
- Restrict file path changes (e.g., protect `.github/` folder)
- Metadata restrictions

---

### 8. Enable Code Review Assignment (Optional)

**Navigate to**: Settings → Code review assignment

If you add team members later:

- ✅ Enable auto assignment
- ✅ Choose round robin or load balance
- Set minimum number of reviewers

---

## 📋 Verification Checklist

After configuration, verify:

- [ ] Create a test branch and PR to verify:
  - [ ] CI workflow runs automatically
  - [ ] CodeQL analysis runs
  - [ ] PR requires approval to merge
  - [ ] Status checks must pass before merge
  - [ ] Can't bypass branch protection

- [ ] Verify security scanning:
  - [ ] Check Security tab for CodeQL results
  - [ ] Verify Dependabot is active (may take 24 hours)
  - [ ] Test secret scanning with a dummy secret (then remove it!)

- [ ] Test templates:
  - [ ] Create a new issue - templates should appear
  - [ ] Create a new PR - template should pre-fill

---

## 🚀 Quick Setup via GitHub CLI (Alternative)

If you have `gh` CLI installed:

```bash
# Enable vulnerability alerts
gh api repos/agentcoding-collective/agentcoding-org/vulnerability-alerts -X PUT

# Enable automated security fixes
gh api repos/agentcoding-collective/agentcoding-org/automated-security-fixes -X PUT

# Note: Branch protection must still be configured via UI
```

---

## 📊 Monitoring

### Regular Tasks

**Weekly**:

- Review Dependabot PRs and merge security updates
- Check security audit workflow results
- Review any CodeQL alerts

**Monthly**:

- Audit repository access and collaborators
- Review open issues and PRs
- Update dependencies proactively

**Quarterly**:

- Review and update security policies
- Assess if new security features are available
- Update documentation

---

## 🆘 Troubleshooting

### CI Workflow Not Running

1. Check: Settings → Actions → General → Actions permissions
2. Verify: `.github/workflows/ci.yml` is in main branch
3. Create a test PR to trigger workflow

### CodeQL Not Running

1. Check: Security → Code scanning alerts → Set up
2. Verify: `.github/workflows/codeql.yml` exists
3. Language must be correctly specified (JavaScript)

### Dependabot Not Creating PRs

1. Wait 24 hours after enabling
2. Check: Insights → Dependency graph → Dependabot
3. Verify: package.json and pnpm-lock.yaml are committed

### Branch Protection Not Working

1. Verify you're testing from a non-admin account (or enable "Include administrators")
2. Check rule is enabled for correct branch pattern
3. Ensure status checks exist (run CI workflow first)

---

## 📚 Additional Resources

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub Security Features](https://docs.github.com/en/code-security)
- [Dependabot Configuration](https://docs.github.com/en/code-security/dependabot)
- [CodeQL Documentation](https://codeql.github.com/docs/)

---

## ✅ Setup Complete!

Once all manual steps are completed:

1. Test the setup with a dummy PR
2. Invite collaborators (if any)
3. Document any custom rules or exceptions
4. Share this guide with team members

**Security is an ongoing process. Review and update regularly!**
