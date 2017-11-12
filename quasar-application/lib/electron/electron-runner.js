const
  spawn = require('cross-spawn'),
  webpack = require('webpack'),
  onShutdown = require('../helpers/on-shutdown'),
  log = require('../helpers/logger')('app:electron-runner'),
  electron = require('electron'),
  path = require('path')

class ElectronRunner {
  constructor () {
    this.pid = 0

    onShutdown(() => {
      this.stop()
    })
  }

  run (quasarConfig, callback) {
    this.stop()

    const
      buildConfig = quasarConfig.getBuildConfig(),
      webpackConfig = quasarConfig.getElectronWebpackConfig()

    this.ctx = buildConfig.ctx
    this.buildConfig = buildConfig

    log(`DDD promising`)
    return new Promise((resolve, reject) => {
      this.compiler = webpack(webpackConfig)
      this.compiler.watch({}, (err, stats) => {
        if (err) {
          console.log(err)
          return
        }

        // console.log(stats)
        this.startElectron()

        resolve()
      })
    })
  }

  startElectron () {
    this.stop()

    log(`Starting Electron process`)
    const runner = spawn(electron, [
      '--inspect=5858',
      appPaths.resolve.cli(path.join(this.buildConfig.build.distDir, 'electron-main.js'))
    ], {
      stdio: 'inherit',
      stdout: 'inherit',
      stderr: 'inherit',
      cwd: appPaths.appDir
    })

    this.pid = runner.pid

    runner.on('close', () => {
      this.cleanup()
    })
  }

  cleanup () {
    this.pid = 0
  }

  stop () {
    if (!this.pid) { return }

    log('Shutting down Electron process...')
    process.kill(this.pid)
    this.cleanup()
  }
}

module.exports = new ElectronRunner()