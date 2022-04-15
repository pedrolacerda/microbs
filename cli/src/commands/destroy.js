/**
 * Run the destroy command(s) of the given plugin(s).
 * Start with the application services, then the observability solution,
 * then the Kubernetes cluster.
 */

// Main packages
const config = require('../config')
const context = require('../context')
const hooks = require('../hooks')
const logger = require('../logger')
const plugins = require('../plugins')
const rollout = require('./rollout')

module.exports.run = async () => {
  const args = context.get('args')
  const pluginTypes = [ 'alerts', 'obs', 'k8s' ]

  // Determine which plugins(s) to invoke for this command.
  const all = (!args.alerts && !args.app && !args.k8s && !args.obs)

  // Remove the application services, if given.
  if (all || args.app) {
    await hooks.run('before_destroy_app')
    await rollout.run({ action: 'delete' })
    await hooks.run('after_destroy_app')
  }

  // Invoke the 'destroy' command for each plugin that implements it.
  for (var i in pluginTypes) {
    let pluginType = pluginTypes[i]
    if (all || args[pluginType]) {
      var pluginName = config.get(`deployment.plugins.${pluginType}`)
      var plugin = plugins[pluginType][pluginName]
      if (plugin) {
        if (plugin.destroy) {
          await hooks.run(`before_destroy_${pluginType}`)
          await plugin.destroy()
          await hooks.run(`after_destroy_${pluginType}`)
        } else {
          logger.debug(`The '${pluginName}' ${pluginType} plugin does not implement the 'destroy' command.`)
        }
      } else {
        logger.debug(`No ${pluginType} plugin was defined in the config file.`)
      }
    }
  }
}
