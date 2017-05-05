# iptools-jquery-expandable-list [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-expandable-list.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-expandable-list)

jQuery expandable list plugin

## Features

Show only a defined number of list elements on page load and more on demand.

## Requirements

- jQuery 1.11.3 or greater

## Example

```html
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>

<script src="src/iptools-jquery-expandable-list.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('.list').iptExpandableList({
      visibleItems: 3
    });
  });
</script>
```

## Options

Name                | Default                    | Type    | Description
:-------------------|:---------------------------|:--------|:-----------
visibleItems        | `5`                        | int     | Number of initially visible items
showMoreButtonLabel | `Show more`                | string  | Label of show more button
showLessButtonLabel | `Show less`                | string  | Label of show less button
showMoreButtonClass | `button--show-more`        | string  | Class of show more button
showLessButtonClass | `button--show-less`        | string  | Class of show less button
initializedClass    | `initialized`              | string  | Class added to element after initialization
animationDuration   | `500`                      | int     | Animation speed in miliseconds.

## Contributions

### Bug reports, suggestions

- File all your issues, feature requests [here](https://github.com/interactive-pioneers/iptools-jquery-expandable-list/issues)
- If filing a bug report, follow the convention of _Steps to reproduce_ / _What happens?_ / _What should happen?_
- __If you're a developer, write a failing test instead of a bug report__ and send a Pull Request

### Code

1. Fork it ( https://github.com/[my-github-username]/iptools-jquery-expandable-list/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Develop your feature by concepts of [TDD](http://en.wikipedia.org/wiki/Test-driven_development), see [Tips](#tips)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Tips

Following tasks are there to help with development:

- `grunt watch:bdd` listens to tests and source, reruns tests
- `grunt qa` run QA task that includes tests and JSHint
- `grunt build` minify source to dist/

## Licence
Copyright © 2015-2017 Interactive Pioneers GmbH. Licenced under [GPL-3](LICENSE).
