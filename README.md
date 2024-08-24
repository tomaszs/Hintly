## ✨ Hinty - Intelligent Hints For Your Code In 1 Millisecond

Hinty lets you define intelligent hints that will display in your code in a matter of 1 millisecond. Works for every project

### You have to recalculate stuff in your mind back and forth? Add Hinty:

```
{
    "regex": "1rem",
    "message": "16px",
    "fileRegex": ".*\\.scss"
},
```

### Have to re-check documentation every time you use some API? Add Hinty:

```
{
    "regex": "flex-direction:",
    "message": "row - horizontal, column - vertical",
    "fileRegex": ".*\\.scss"
},
```

### You want to spot legacy code? Add Hinty:

```
{
    "regex": ":focus[^-]",
    "message": "Use focus-visible",
    "fileRegex": ".*\\.(css|scss)",
    "category": "css"
},
```

### You make same typos? Add Hinty:

```
    {
    "regex": "text-decoration: underscore;",
    "message": "It's underline",
    "fileRegex": ".*\\.scss"
    },
```

### Want your team to follow coding guidelines? Add Hinty:

```
{
    "regex": "ngClass",
    "message": "if conditional: change to class and [class.something]='something' if possible",
    "fileRegex": ".*\\.component\\.html",
    "category": "angular"
},
```

### And more!

The extension comes with 80 rules for web development for CSS, SCSS, JavaScript, TypeScript, HTML, Angular, and React and 8 rules for SQL.
Just copy them from rulesets folder.

You can also write your own rules. It's easy and fast.

Regex let's you build complex rules as well!

## Installation

* Go to Visual Studio Code
* Open Extensions
  * View -> Extensions, or:
  * Windows, Linux: <kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>X</kbd>
  * MacOS: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>X</kbd>
* Install "Hinty"

Here you can see what you're looking for:

https://marketplace.visualstudio.com/items?itemName=tomasz-smykowski.assistant

## How to create a hint?

### 1. Choose the level for your hint:

#### User level Hintly

* Press <kbd>F1</kbd> to show command palette
* Write/find  "Preferences: Open Settings (JSON) and click it

#### Workspace level Hintly

* If you don't have it, choose file "Save Workspace As..."

* Press <kbd>F1</kbd> to show command palette

* Write/find "Preferences: Open Workspace Settings (JSON)" and click it

### 2. Add your first hint

Paste the code, so that the file looks like this:

```
{
    ...YOUR CONTENT...,
    assistant": {
        "rules": [
            {
                "regex": "hello Hinty",
                "message": "hello Developer :-)",
                "fileRegex": ".*\\.txt"
            },
        ]
    }
}
```

### 3. Choose File -> New Text File, and Type "hello Hinty"

## Parameters

Parameter|Meaning
---------|-----------
regex|Finds places where message should be displayed. It's done with Regex
modifiers|Regex modifiers. Default value: g. 
message|Message that should be displayed when the code fragment matches the regex
fileRegex|Indicates on what files the hint should be checked. e.g. ```"fileRegex": ".*\\.ts"```, matches all TypeScript files
category|Used to group hints visually

## Plain text instead of Regex

If you want to use a plain text instead of Regex, paste it here: https://www.regex-escape.com/online-regex-escaper.php. The page will escape Regex's special characters, so that you can use plain text without any effort.

## Regex cheatsheet

Regex|Meaning
---------|-----------
.*|characters
.|one character
\\.|dot
\s|whitespace
\t|tab
\n|new line
[0-9]|any digit between 0 and 9
[A-Za-z]|a latin alphabet character
[^-]|any character except dash (-)

Regex|Meaning
---------|-----------
^|beginning of a string or line
$|end of a string or line

Regex|Meaning
---------|-----------
cats?|matches "cat" and "cats"
cat[1-3]*|matches "cat", but also "cat2" and "cat1323" etc.
cat[1-3]+|matches "cat2" and "cat1323" etc. but not "cat"
cat[0-9]{3}|matches cat046 or cat963 etc.
(ts\|js)|matches "ts" and "js"
\\(|open bracket

Modifier|Meaning
---------|-----------
g|find all occurances in file
m|multiline
s|dot matches new line characters
i|case insensitive
gi|find all occurances case insensitively

Learn more: https://www.rexegg.com/regex-quickstart.php

## How to test hints?

I recommend this page: https://regex101.com/

## 🎁 Bonus  - Ready Hints For You

Here you can find over a hundredred ready to use rules:

- [webdev.json (by Tomasz Smykowski)](https://github.com/tomaszs/Assistant/blob/master/rulesets/webdev.json)
- [sql.json (by Chris Young)](https://github.com/tomaszs/Assistant/blob/master/rulesets/sql.json)

## Licence

You can:

- install extension,
- use the extension,
- use rules

for free for whatever you want, including commercial use

## FAQ

### Where I can read about how softwar engineers use the extension?

Please read an articles of rules authors. They covers ideas for rules and concept of how to write them: 

Angular, CSS, JS:
https://medium.com/@tomaszs2/8-visual-studio-code-assistant-rules-for-nasty-angular-bugs-9f186277e0ab

SQL (by Chris Young):
https://dev.to/ronsoak/doing-the-impossible-using-assistant-to-make-a-sql-linter-and-how-you-can-make-it-lint-whatever-you-want-2ke2

### What's the difference between Hinty and AIs like ChatGPT or Copilot?

Hinty is like AI on steroids:

1. Gives you a hint in 1ms
2. You don't have to ask Hinty to help you
3. The hint is given precisely where you need it
4. Hinty doesn't lie
5. Hinty is 100% accurate every time

### What is the difference between Hinty and SonarLint?

1. You don't need to connect to a server to use Hinty making setup as easy as installing the extension
2. Writing rules is extremely easy with Hinty, so everyone can do it right away
3. Messages show up right above the code you write in miliseconds. You can immediately fix your code

### What is the difference between Hinty and regular Linters

1. Hinty is realtime. You don't need to wait for the linting process to finish. Hinty makes the coding process a much smoother experience
2. Messages show up above the code you write when you write it. You don't need to look into "Problems tab" and navigate back to the place where situation occurred. So you don't loose an eye off the code you write
3. Writing Hinty rules is extremely easy. Everyone can do it right away

## Notes for contributors (you probably don't need these)

### Installation
- If you face "Error: Failed to unzip downloaded vscode at", during npm run test go to ".vscode-test" folder and extract ZIP manually
- If you face "Running extension tests from the command line is currently only supported if no other instance of Code is running" close VSCode and run npm run test from command line / bash

### Publishing rules

1. Update README and CHANGELOG
2. Commit and push

### Publishing extension

1. Update README and CHANGELOG
2. Update version in package.json
3. Commit and push (login to GitHub)
4. npm install -g @vscode/vsce
5. npm run build
6. login to extension manager (with b@)
7. update package
tbd: how to do it via vsce publish

## Authors

* Tom Smykowski

## Contributors

* Chris Young - SQL
