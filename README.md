# Assistant - Realtime Linter & Quality Assurance For Your Team

Are you annoyed that your notes on hard to fix issues are not available when you need them the most - while coding? Is setting standards for the team code broken even if you have a centralized place for rules because it i hard to keep tabs on them all the time? 

Never make the same mistakes again!

At last there is a solution to these problems. Let me present you a groundbreaking Visual Studio Code extension. Assistant will boost your team code quality and performance.

No more looking into documentation. Now you don't need to search through piles of notes to find what you need. Now you can write notes that will pop-up exactly when you or your team member writes a code that they apply to. 

The extension is designed to make the process super easy:

1) Write notes and define RegEx rules when they should show up
2) Use your favourite version control software to share rules
3) Rules will automatically show up for all team member when they need them

## Instruction

1. Open Visual Studio Code Workspace:
a) If you don't have it, choose file "Save Workspace As..."
b) Press CTRL + ALT + P to open options
c) Find "Preferences: Open Workspace Settings (JSON) and open it
2. In the section settings add a item "assistant" and under it an item "rules" and under it an array of rules.

Each rule should contain:
regex - a string with a RegEx rule
message - text that should be displayed when the rule is trigerred

## Demo

Example workspace configuration for Angular/TypeScript. It informs about a bad boolean Input declaration in Angular component. Normally it does not trigger build or linter errors and is a hard to track problem:

```

{
	.....
	"settings": {
		"assistant": {
			"rules": [
				{
					"regex": "@Input\\\\(\\\\) .*: false;",
					"message": "Define property value with =, not with:"
				}
			]
    }
	},
  .....
}
```

Result:

![](demo.gif)

## Modifiers

On default RegEx rules are processed with a 'g' modifier. You can change this behaviour. For example by adding an 'i' modifier to make the rule case insensitive. All RegEx modifiers are supported by the extension. How to add modifier?

1) Add a property "modifiers" to a rule and put there modifier letters. For example: 'gi'.
2) Add a property "modifiers" on top of assistant JSON settings to set global modifiers for your rules



## Installation

1. Go to Visual Studio Code
2. Go to Extensions from left side bar
3. Find "Assistant" by Tomasz Smykowski
4. Install it
5. Copy above rule and test if it works
6. Boost your development speed and quality

Extension in the Visual Studio Code Marketplace:

https://marketplace.visualstudio.com/items?itemName=tomasz-smykowski.assistant

## Autors

Tomasz Smykowski (http://tomasz-smykowski.com)