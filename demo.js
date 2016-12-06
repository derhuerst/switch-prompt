'use strict'

const switchPrompt = require('./index')

switchPrompt('Send anonymous usage data?', 'yes', 'no', true)
.on('abort', (v) => console.log(`Aborted with ${v}.`))
.on('submit', (v) => console.log(`Submitted with ${v}.`))
