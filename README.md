cellery
=======

Design, develop, build, run, manage your cells anywhere

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cellery.svg)](https://npmjs.org/package/cellery)
[![CircleCI](https://circleci.com/gh/NipunaPrashan/cellery/tree/master.svg?style=shield)](https://circleci.com/gh/NipunaPrashan/cellery/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/NipunaPrashan/cellery?branch=master&svg=true)](https://ci.appveyor.com/project/NipunaPrashan/cellery/branch/master)
[![Codecov](https://codecov.io/gh/NipunaPrashan/cellery/branch/master/graph/badge.svg)](https://codecov.io/gh/NipunaPrashan/cellery)
[![Downloads/week](https://img.shields.io/npm/dw/cellery.svg)](https://npmjs.org/package/cellery)
[![License](https://img.shields.io/npm/l/cellery.svg)](https://github.com/NipunaPrashan/cellery/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cellery
$ cellery COMMAND
running command...
$ cellery (-v|--version|version)
cellery/1.0.0 linux-x64 node-v11.0.0
$ cellery --help [COMMAND]
USAGE
  $ cellery COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cellery autocomplete [SHELL]`](#cellery-autocomplete-shell)
* [`cellery build [NAME] [OPTIONS]`](#cellery-build-name-options)
* [`cellery configure`](#cellery-configure)
* [`cellery help [COMMAND]`](#cellery-help-command)
* [`cellery images`](#cellery-images)

## `cellery autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ cellery autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ cellery autocomplete
  $ cellery autocomplete bash
  $ cellery autocomplete zsh
  $ cellery autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `cellery build [NAME] [OPTIONS]`

Build an immutable cell image with required dependencies

```
USAGE
  $ cellery build [NAME] [OPTIONS]

OPTIONS
  -h, --help     show CLI help
  -t, --tag=tag  Image tag in the 'name:tag' format

EXAMPLES
  $ cellery build my-project
  $ cellery build my-project -t 1.0.0
```

_See code: [src/commands/build.ts](https://github.com/NipunaPrashan/cellery/blob/v1.0.0/src/commands/build.ts)_

## `cellery configure`

Configure the cellery context that you are working on

```
USAGE
  $ cellery configure

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ cellery configure
```

_See code: [src/commands/configure.ts](https://github.com/NipunaPrashan/cellery/blob/v1.0.0/src/commands/configure.ts)_

## `cellery help [COMMAND]`

display help for cellery

```
USAGE
  $ cellery help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `cellery images`

List cell images

```
USAGE
  $ cellery images

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ cellery images
```

_See code: [src/commands/images.ts](https://github.com/NipunaPrashan/cellery/blob/v1.0.0/src/commands/images.ts)_
<!-- commandsstop -->
