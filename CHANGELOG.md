# Change Log

All notable changes to the "Hinty" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.8] 24.08.2024

- Second Readme rewrite
- Removed unnecessary images
- Added GIF illustration
- Added logo to Readme
- 116 web development hints (omg!)

## [1.0.0] 23.08.2024

- After two years of usage and reaching almost 2k developers worldwide extension proved to be stable. That's why it's getting 1.0.0 version
- Narrowed rulesets to specific file extensions to improve performance. E.g. TypeScript rules are only checked against TypeScript files ("fileRegex": ".*\\.ts")
- Renamed rulesets to .json for syntax checking and color highlighting
- Reorganized rulesets
- Grouped webdev rules into webdev.json for convenience (JavaScript, TypeScript, CSS, SCSS, Angular, React). Since rulesets can narrow filenames, it's ok to copy all rules, because it won't hinder performance. SQL is separately because idk what extensions should it handle
- Rewritten Readme.md file with Regex cheat-sheet and more
- New logo

## [0.17.0]

- Rebranding to "Hinty". Linter -> Hinter -> Hinty
- Hinty brand hero

## [0.16.0]

- Now rules can have fileRegex property that indicates what files should the rule be tested against

## [0.15.0]

- New rules. Reached 50 rules.

## [0.14.0]

- Article with SQL rules

## [0.13.0]

- Information how to become a patron

## [0.11.0]

- Added support of multiline regex (modifiers: 's')
- Performance improvement
- New rules for Angular
- First rules for CSS (SCSS) and JS. Also a general rule

## [0.9.0]

- Unit tests
- Rulesets: Added file with rulesets, and rule-set for Angular
- Readme: Minor updates
- Readme: Link to rule-set for Angular/TypeScript
- Readme: Added comparison to regular Linters and SonarLint
- Readme: Added instruction how to add rules to user settings

## [0.8.0]

- Now you can set up RegEx modifiers for rules and globally for workspace eg. 'gi' for case insensitive rules
- Autocomplete will help you write Hinty rules and indicate spelling mistakes
- Instruction for the extension is clearer
- Notes does not show up in configuration file anymore
- Performance improvement

## [0.0.1]

- Initial release
