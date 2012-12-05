betterCheckbox
========
betterCheckbox is a jquery plugin that allows you to customize your checkbox forms using CSS.

Browser Support
--------

betterCheckbox has been tested and should work in
- Internet Explorer 9
- Safari
- Firefox
- Chrome
- Opera

Examples
--------

You can find some examples [here](http://www.michalkowalkowski.com/betterCheckbox).

Usage
--------

If you want to use default style include betterCheckbox and its stylesheet on your page before `</body>` tag

```html
<link href="betterCheckbox.css" type="text/css" rel="stylesheet">
<script src="/path/to/betterCheckbox.min.js"></script>
```
  			
Then just add it to one of DOMs elements

```html
<script>
$('#elementsID').betterCheckbox();
</script>
```			


API
--------
Settable Options
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
<th>Data Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>boxClass</td>
<td>Name of the class you want to use for the checkbox</td>
<td>string</td>
<td>'betterCheckbox-box'</td>
</tr>						
<tr>
<td>tickClass</td>
<td>Name of the class you want to use for the checkmark</td>
<td>string</td>
<td>'betterCheckbox-tick'</td>
</tr>						
<tr>
<td>tickInnerHTML</td>
<td>Set innerHTML for checkmark div (you can use text as a checkmark)</td>
<td>string</td>
<td>' '</td>
</tr>						
<tr>
<td>disabledBoxClass</td>
<td>Name of the class you want to add to the checkbox when disabled</td>
<td>string</td>
<td>'disabled'</td>
</tr>						
<tr>
<td>disabledTickClass</td>
<td>Name of the class you want to add to the checkmark when disabled</td>
<td>string</td>
<td>'disabled'</td>
</tr>							
</tbody>
</table>

Methods

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>disable</td>
<td>Disables the checkbox</td>
</tr>						
<tr>
<td>enable</td>
<td>Enables the checkbox</td>
</tr>						
<tr>
<td>check</td>
<td>Checks the checkbox</td>
</tr>						
<tr>
<td>uncheck</td>
<td>Unchecks the checkbox</td>
</tr>						
<tr class="last">
<td>destroy</td>
<td>Removes plugin functionality</td>
</tr>						
</tbody>
</table>

Other checkbox plugins
-------
If you don't want to style checkbox yourself, or you are looking for some specific look, try those plugins:
[Fancy checkboxes and radio buttons](http://webdesign.maratz.com/lab/fancy-checkboxes-and-radio-buttons/demo.html)
[jqTransform](http://www.dfc-e.com/metiers/multimedia/opensource/jqtransform/)
[jQuery checkbox](http://widowmaker.kiev.ua/checkbox/)
[iOS Checkboxes](http://ios-checkboxes.awardwinningfjords.com/)
[Niceforms](http://www.emblematiq.com/lab/niceforms/demo/niceforms.html)
[jQuery Fancy Custom Radio-button and Checkbox](http://blogs.digitss.com/javascript/jquery-javascript/jquery-fancy-custom-radio-and-checkbox/)

Coming Soon
-------
betterRadio
				
License
-------
betterCheckbox plugin is released under [MIT license](http://opensource.org/licenses/mit-license.php).

Credits
-------
betterCheckbox plugin was created by [Michał Kowalkowski](https://github.com/michalkow). You can contact me at [kowalkowski.michal@gmail.com](mailto:kowalkowski.michal@gmail.com)
