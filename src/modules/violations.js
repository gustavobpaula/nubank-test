/**
 * Return list array of violations
 *
 * @param {Array} [violations=[]] lisf of violations
 * @param {String} violation - new violation
 * @returns Array
 */
export const addViolation = (violations = [], violation) => {
  violations.push(violation)
  return violations
}
