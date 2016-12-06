'use strict'

const ui = require('cli-styles')
const esc = require('ansi-escapes')
const chalk = require('chalk')
const wrap = require('prompt-skeleton')



const deactivate = function () {
	if (this.value === false) return this.bell()
	this.value = false
	this.render()
}
const activate = function () {
	if (this.value === true) return this.bell()
	this.value = true
	this.render()
}



const SwitchPrompt = {
	  reset: function () {
		this.value = this.initialValue
		this.render()
	}

	, _: function (c) {
		if (c === ' ') {
			this.value = !this.value
			this.render()
		} else if (c === '1') {
			this.value = true
			this.render()
		} else if (c === '0') {
			this.value = false
			this.render()
		} else return this.bell()
	}

	, delete: deactivate
	, left: deactivate
	, right: activate
	, down: deactivate
	, up: activate



	, abort: function () {
		this.done = this.aborted = true
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}

	, submit: function () {
		this.done = true
		this.aborted = false
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}



	, render: function (first) {
		if (first) this.out.write(esc.cursorHide)

		this.out.write(esc.eraseLine + esc.cursorTo(0) + [
			  ui.symbol(this.done, this.aborted)
			, chalk.bold(this.msg)
			, ui.delimiter(this.done)
			, (this.value ? this.inactiveText : chalk.cyan.underline(this.inactiveText))
			, chalk.gray('/')
			, (this.value ? chalk.cyan.underline(this.activeText) : this.activeText)
		].join(' '))
	}
}



const switchPrompt = (msg, activeText = 'on', inactiveText = 'off', value = false) => {
	if ('string' !== typeof msg) throw new Error('Message must be string.')

	value = !!value
	const p = Object.assign(Object.create(SwitchPrompt), {
		msg, activeText, inactiveText, value, initialValue: value,
		done: false, aborted: false
	})

	return wrap(p)
}

module.exports = Object.assign(switchPrompt, {SwitchPrompt})
