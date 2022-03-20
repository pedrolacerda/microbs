/*
 * validate.js
 */

// Third-party packages
const hasbin = require('hasbin')
const semver = require('semver')

// Main packages
const logger = require('../../../logger')
const utils = require('../../../utils')
const validate = require('../../../commands/validate')

/**
 * Validate kind installation
 */
const validateKindInstallation = () => {
  if(hasbin.sync('kind'))
    validate.logSuccess('kind is installed')
  else
    validate.logFailure('kind is not installed')
}

/**
 * Validate kind version
*/
const validateKindVersion = () => {
  const result = utils.exec('kind version', true)
  if (result.stdout) {
    try {
      versionActual = semver.clean(result.stdout.match(/kind v([^ ]+) /)[1])
      versionRequired = semver.clean('0.12.0')
      if (semver.gte(versionActual, versionRequired))
        validate.logSuccess(`kind is correct version [using=${versionActual}, required>=${versionRequired}]`)
      else
        validate.logFailure(`kind is incorrect version [using=${versionActual}, required>=${versionRequired}]`)
    } catch (e) {
      logger.error(e)
    }
  } else {
    logger.warn(result.stderr)
  }
}

module.exports = async () => {
  validateKindInstallation()
  validateKindVersion()
}
