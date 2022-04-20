require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  "selenium": {
    "start_process": true,
    "server_path": "node_modules/selenium-standalone/.selenium/selenium-server/3.8.1-server.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "node_modules/selenium-standalone/.selenium/chromedriver/2.40-x64-chromedriver",
      "webdriver.gecko.driver": "",
      "webdriver.edge.driver": ""
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": "screenshots"
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
