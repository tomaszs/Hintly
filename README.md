## ✨ Hinty - AI+ Hints For Your Code In 1 Millisecond

<img src="https://github.com/tomaszs/Hintly/blob/master/images/hinty.png" width="64"/>

Hinty lets you define intelligent hints that will display in your code in a matter of 1 millisecond. Works for every project

![Hinty Demo](https://github.com/tomaszs/Hintly/blob/master/images/hinty.gif "Hinty Demo")

### You have to recalculate stuff in your mind back and forth? Add Hinty:

```
{
    "regex": "1rem",
    "message": "16px",
    "fileRegex": ".*\\.(css|scss)"
},
```

### Have to re-check documentation every time you use some API? Add Hinty:

```
{
    "regex": "flex-direction:",
    "message": "row - horizontal, column - vertical",
    "fileRegex": ".*\\.(css|scss)"
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
    "fileRegex": ".*\\.(css|scss)"
    "category": "css"
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

## Installation

* Go to Visual Studio Code
* Open Extensions
  * View -> Extensions, or:
  * Windows, Linux: <kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>X</kbd>
  * MacOS: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>X</kbd>
* Install "Hinty"

Here you can see what you're looking for:

https://marketplace.visualstudio.com/items?itemName=tomasz-smykowski.assistant

## 🎁 Ready Made Hints For You

Here you can find over a hundred ready to use rules:

- [webdev.json (by Tomasz Smykowski)](https://github.com/tomaszs/Assistant/blob/master/rulesets/webdev.json)
- [sql.json (by Chris Young)](https://github.com/tomaszs/Assistant/blob/master/rulesets/sql.json)

The clue of Hinty is that you can create easily your own hints. Hints for you programming language, framework, and coding guidelines. For yourself or your team! See how easy it is!

## Creating A Hint

### 1. Open settings

Press <kbd>F1</kbd> to show command palette, and choose:

* Preferences: Open Settings (JSON), or
* Preferences: Open Workspace Settings (JSON)

**Pro-tip** Workspaces are great to create different hints for different projects. Open a folder with your project and choose "Save workspace as..." to create a workspace

### 2. Write a hint

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

### 3. Save

Create a new file ```File``` -> ```New Text File```, type "hello Hinty" and ```Save```

**Pro-tip** After you just have created a new file, you have to save it to see your first hint. Later you won't have to do it.

## Parameters

Parameter|Meaning
---------|-----------
regex|Finds places where message should be displayed
modifiers|Regex modifiers. Default value: g 
message|Message that should be displayed when the code fragment matches the regex
fileRegex|Indicates on what files the hint should be checked. e.g. ```"fileRegex": ".*\\.ts"```, matches all TypeScript files
category|Used to group hints visually in settings

## Plain Text

If you want to use a plain text instead of Regex, paste it here: https://www.regex-escape.com/online-regex-escaper.php.

The page will escape Regex's special characters, so that you can use plain text without any effort.

## Regex

.* - characters\
. - one character\
\\\\. - dot\
\s - whitespace\
\t - tab\
\n - new line\
[0-9] - any digit between 0 and 9\
[A-Za-z] - a latin alphabet character\
[^-] - any character except dash (-)

^ - beginning of a string or line\
$ - end of a string or line

cats? - matches "cat" and "cats"\
cat[1-3]* - matches "cat", but also "cat2" and "cat1323" etc.\
cat[1-3]+ - matches "cat2" and "cat1323" etc. but not "cat"\
cat[0-9]{3} - matches cat046 or cat963 etc.\
(ts\|js) - matches "ts" and "js"\
\\\\( - open bracket

g - find all occurrences in file\
m - multiline\
s - dot matches new line characters\
i - case insensitive\
gi - find all occurrences case insensitively

More Regex syntax: https://www.rexegg.com/regex-quickstart.php.

Regex testing: https://regex101.com/

## Success stories

Webdev:
https://medium.com/@tomaszs2/8-visual-studio-code-assistant-rules-for-nasty-angular-bugs-9f186277e0ab

SQL:
https://dev.to/ronsoak/doing-the-impossible-using-assistant-to-make-a-sql-linter-and-how-you-can-make-it-lint-whatever-you-want-2ke2

## Hinty vs AI

Hinty is like AI on steroids (AI+):

1. Gives you a hint in 1ms
2. You don't have to ask Hinty to help you
3. The hint is given precisely where you need it
4. Hinty doesn't lie
5. Hinty is 100% accurate every time

## Hinty vs SonarLint

1. You don't need to connect to a server to use Hinty making setup as easy as installing the extension
2. Writing rules is extremely easy with Hinty, so everyone can do it right away
3. Messages show up right above the code you write in milliseconds. You can immediately fix your code

## Hinty vs linters

1. Hinty is realtime. You don't need to wait for the linting process to finish. Hinty makes the coding process a much smoother experience
2. Messages show up above the code you write when you write it. You don't need to look into "Problems tab" and navigate back to the place where situation occurred. So you don't loose an eye off the code you write
3. Writing Hinty rules is extremely easy. Everyone can do it right away

## Notes For Contributors (you probably don't need these)

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
7. click three dots next to the package in the list
8. update package


## License

You can:

- install extension,
- use the extension,
- use rules with the extension

for private or commercial projects.

You can't:

- use rules to create competing stuff
- use rules for machine learning
- re-publish or share rules publicly without explicit attribution

## Authors

* Tom Smykowski

## Contributors

* Chris Young - SQL
