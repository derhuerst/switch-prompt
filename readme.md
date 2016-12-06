# switch-prompt

**A CLI prompt with an [iOS-style on/off switch](https://developer.apple.com/ios/human-interface-guidelines/ui-controls/switches/).**

[![asciicast](https://asciinema.org/a/95216.png)](https://asciinema.org/a/95216)

[![npm version](https://img.shields.io/npm/v/switch-prompt.svg)](https://www.npmjs.com/package/switch-prompt)
[![dependency status](https://img.shields.io/david/derhuerst/switch-prompt.svg)](https://david-dm.org/derhuerst/switch-prompt)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/switch-prompt.svg)

*switch-prompt* uses [*cli-styles*](https://github.com/derhuerst/cli-styles) and [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a look & feel consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```shell
npm install switch-prompt
```


## Usage

```
switchPrompt(question, [activeText], [inactiveText], [defaultValue])
```

```javascript
const switchPrompt = require('switch-prompt')
switchPrompt('Send anonymous usage data?', 'yes', 'no', true)
.on('data', (e) => console.log('Interim value', e.value))
.on('submit', (v) => console.log('Submitted with', v))
.on('abort', (v) => console.log('Aborted with', v))
```


## Related

- [`text-prompt`](https://github.com/derhuerst/text-prompt)
- [`date-prompt`](https://github.com/derhuerst/date-prompt)
- [`mail-prompt`](https://github.com/derhuerst/mail-prompt)
- [`multiselect-prompt`](https://github.com/derhuerst/multiselect-prompt)
- [`number-prompt`](https://github.com/derhuerst/number-prompt)
- [`range-prompt`](https://github.com/derhuerst/range-prompt)
- [`select-prompt`](https://github.com/derhuerst/select-prompt)
- [`tree-select-prompt`](https://github.com/derhuerst/tree-select-prompt)
- [`cli-autocomplete`](https://github.com/derhuerst/cli-autocomplete)


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/switch-prompt/issues).
