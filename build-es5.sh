set -e

DIR="./node_modules"


cd test-project

if [ -d "$DIR" ]; then
    echo "Project dependencies already installed"
else
    echo "Project installing dependencies."
    npm i
fi

cd ..
cd test-library

if [ -d "$DIR" ]; then
    echo "Library dependencies already installed"
else
    echo " Library installing dependencies."
    npm i
fi

rm -rf /dist
ng build --project library-test --prod
cp -r dist/library-test ../test-project/node_modules

cd ..
cd test-project
rm -rf /dist

echo "Building project with target ES5 and generating angular element"
ng build --prod --output-hashing=none --tsConfig=tsconfig.es5.json 
cat dist/test-project/{runtime,polyfills,scripts,main}.js > custom_element/element.js

echo "element generated... ouput: custom_element/"
start custom_element/index.html
