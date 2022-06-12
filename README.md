oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sparcs-cli
$ sparcs COMMAND
running command...
$ sparcs (--version)
sparcs-cli/0.0.0 darwin-arm64 node-v16.13.2
$ sparcs --help [COMMAND]
USAGE
  $ sparcs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sparcs hello PERSON`](#sparcs-hello-person)
* [`sparcs hello world`](#sparcs-hello-world)
* [`sparcs help [COMMAND]`](#sparcs-help-command)
* [`sparcs plugins`](#sparcs-plugins)
* [`sparcs plugins:install PLUGIN...`](#sparcs-pluginsinstall-plugin)
* [`sparcs plugins:inspect PLUGIN...`](#sparcs-pluginsinspect-plugin)
* [`sparcs plugins:install PLUGIN...`](#sparcs-pluginsinstall-plugin-1)
* [`sparcs plugins:link PLUGIN`](#sparcs-pluginslink-plugin)
* [`sparcs plugins:uninstall PLUGIN...`](#sparcs-pluginsuninstall-plugin)
* [`sparcs plugins:uninstall PLUGIN...`](#sparcs-pluginsuninstall-plugin-1)
* [`sparcs plugins:uninstall PLUGIN...`](#sparcs-pluginsuninstall-plugin-2)
* [`sparcs plugins update`](#sparcs-plugins-update)

## `sparcs hello PERSON`

Say hello

```
USAGE
  $ sparcs hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sparcs-kaist/sparcs-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `sparcs hello world`

Say hello world

```
USAGE
  $ sparcs hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `sparcs help [COMMAND]`

Display help for sparcs.

```
USAGE
  $ sparcs help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sparcs.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `sparcs plugins`

List installed plugins.

```
USAGE
  $ sparcs plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sparcs plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `sparcs plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sparcs plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sparcs plugins add

EXAMPLES
  $ sparcs plugins:install myplugin 

  $ sparcs plugins:install https://github.com/someuser/someplugin

  $ sparcs plugins:install someuser/someplugin
```

## `sparcs plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sparcs plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sparcs plugins:inspect myplugin
```

## `sparcs plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sparcs plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sparcs plugins add

EXAMPLES
  $ sparcs plugins:install myplugin 

  $ sparcs plugins:install https://github.com/someuser/someplugin

  $ sparcs plugins:install someuser/someplugin
```

## `sparcs plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ sparcs plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ sparcs plugins:link myplugin
```

## `sparcs plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sparcs plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sparcs plugins unlink
  $ sparcs plugins remove
```

## `sparcs plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sparcs plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sparcs plugins unlink
  $ sparcs plugins remove
```

## `sparcs plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sparcs plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sparcs plugins unlink
  $ sparcs plugins remove
```

## `sparcs plugins update`

Update installed plugins.

```
USAGE
  $ sparcs plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
