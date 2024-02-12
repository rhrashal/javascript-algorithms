# javascript-algorithms

##  script in javascript, for disabled and read-only attributes remove form site and run a script of javascript from chrome bookmark
  ### 1. Create a New Bookmark:
  Right-click on your bookmarks bar or bookmarks menu and select "Add page" or "Add bookmark" (the exact wording may vary depending on your browser version).
  
  ### 2. Name Your Bookmark:
  Give your bookmark a descriptive name, such as "Run JavaScript".
  
  ### 3. Set the URL/Location:
  In the URL/location field, enter the following JavaScript code:

```js

javascript: (function() {


	function enableFormElements() {
		var formElements =
			document.querySelectorAll('input,textarea, select');
		formElements.forEach(function(element) {
			element.removeAttribute('disabled');
			element.removeAttribute('readonly');
		});
	}
	enableFormElements();
	
	
})();

```
