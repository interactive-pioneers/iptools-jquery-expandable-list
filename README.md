# iptools-jquery-expandable-list [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-expandable-list.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-expandable-list)

jQuery expandable list plugin

## Features

Show only a defined number of list elements on page load and more on demand.

## Requirements

- jQuery >=1.11.3 <4.0.0

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

## Licence
Copyright © 2015-2017 Interactive Pioneers GmbH. Licenced under [GPL-3](LICENSE).
