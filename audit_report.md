# 📊 Audit Report: VulnerableVault

## ✅ Summary

- **Contract Name**: VulnerableVault
- **Audit Date**: May 2025
- **Auditor**: [Your Name]
- **Status**: ✖ Vulnerable

---

## ⚠️ Issues Found

### 1. Reentrancy Attack

- **Severity**: High
- **Location**: withdraw()
- **Description**: The contract transfers Ether to `msg.sender` before updating the balance, allowing reentrant calls.
- **Recommendation**: Use a [checks-effects-interactions](https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html) pattern or `ReentrancyGuard`.

---

## ✅ Recommendations Implemented

In `FixedVault.sol`, the `nonReentrant` modifier from OpenZeppelin was used to mitigate reentrancy.

---
