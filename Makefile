build:
	rm -rf dist/template
	cp -r template dist/template
	make uglify

uglify:
	rm -f dist/stylesheet/stylesheet.min.css
	rm -f dist/javascript/click.min.css
	npx uglifycss stylesheet/stylesheet.css > dist/stylesheet/stylesheet.min.css
	npx uglifyjs javascript/click.js -o dist/javascript/click.min.js

local:
	make build
	rm -rf /opt/lampp/htdocs/site/catalog/view/theme/fanes/template
	rm -rf /opt/lampp/htdocs/site/catalog/view/theme/fanes/stylesheet
	rm -rf /opt/lampp/htdocs/site/catalog/view/theme/fanes/javascript/click.min.js`
	cp -r dist/template /opt/lampp/htdocs/site/catalog/view/theme/fanes/template
	cp -r dist/stylesheet /opt/lampp/htdocs/site/catalog/view/theme/fanes/stylesheet
	cp -r dist/javascript/click.min.js /opt/lampp/htdocs/site/catalog/view/theme/fanes/javascript/click.min.js
