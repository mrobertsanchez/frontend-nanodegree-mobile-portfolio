# Website performance Optimization Portfolio Project

To view optimized files please navigate to 'dist' directory

### Part 1: Optimize PageSpeed Insights score for index.html

#### Optimizations Performed to index.html

1. style.css has been inlined to index.html
2. `async` tag has been added to perfmatters.js since this is an unnecessary script for rendering the page
3. Google Analytics JS caused poor pagespeed insights score. Script has been removed resulting in higher performance
4. [HTML Minifier](https://kangax.github.io/html-minifier/) used to Minify index.html

#### Optimizations Performed to images used in index.html

1.  pizzeria.jpg (located in 'dist/views/images') optimized and renamed as pizzeria-optimized.jpg to same directory reducing image size from 2079 KB to 32 KB. *Optimized photo provided by Google's [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/).*
2. pizzeria-optimized.jpg further optimized by resizing pizzeria-optimized.jpg to avoid unnecessary inline css. New image renamed to pizzeria-small.jpg. This reduced image size from 32 KB to 3 KB. Gulp was used in combination with ImageMagick. *See Gulp Documentation.*
3. profile-pic.jpg (located in 'dist/images') optimized and renamed as profile-pic.jpg to same directory. *Optimized photo provided by Google's [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)*

#### Results

The following [Pagespeeds Insights](https://developers.google.com/speed/pagespeed/insights/) score was made after the above optimizations were made:

1. Mobile - 100/100
2. Desktop - 99/100

### Part 2: Optimize 'dist/views/pizza.html' and 'dist/views/js/main.js' to run at 60 FPS

#### Optimizations Performed to pizza.html

1. styles.css and bootstrap-grid.css have been inlined to pizza.html
A. added `will-change:transform` to class "mover" for additional optimization
2. [HTML Minifier](https://kangax.github.io/html-minifier/) used to Minify pizza.html

#### Optimizations Performed to images used in pizza.html

1. Replaced pizzeria.jpg used in pizza.html with already optimized pizzeria-optimized.jpg. *See Part 1 optimization techniques.*
2. Optimized pizza.png (located in 'dist/views/images') used in pizza.html and renamed to pizza-min.png to same directory reducing size to 10 KB. *[Compress PNG](http://compresspng.com/) used to optimize image*

#### Optimizations Performed to main.js

1. Bottleneck was discovered with function `updatePositions()` In order to reduce bottleneck the function was revised by revising `var phase` to call predefined variable, `locationNumbers`, outside of the `for` loop. Variable, `scrollTop` was removed from inside of the `for` loop and in its place a new variable, `scrollNumber` was created to create array in variable `locationNumbers`. By revising `updatePositions` the overall FPS increased dramatically due to the reduction of paint in the rendering process.
2. Bottleneck was discovered with function, `resizePizzas`. To correct, the following improvements were made:
 1. `var dx` was determined to be unnecessary and removed in its entirety from `function changePizzasSizes`.
 2. `function determineDX` and all its internal contents removed
 3. `var newSize` removed
 4. `var checkPizzaSizes = document.querySelectorAll(".randomPizzaContainer");` Added to resizePizzas outside of for loop replacing `document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;` inside of the for loop. For loop will now use `var checkPizzaSlices` that is predefined outside of for loop avoiding bottleneck.
3. [JS Compress](https://jscompress.com/) used to minify main.js

#### Results

As a result of making the above optimizations, a consistent 60 FPS was achieved.

### Optimization References and Tools Used

1. [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=en-US&utm_source=PSI&utm_medium=incoming-link&utm_campaign=PSI) for some optimized images and testing
2. [JS Compress](https://jscompress.com/) for JS minimization
3. [HTML Minify](https://kangax.github.io/html-minifier/) for CSS and HTML minimization
4. [Compress PNG](http://compresspng.com/) to optimize PNG images
5. Gulp was used for image resize of pizzeria.jpg. For instructions on how this one done, please visit [gulp-image-resize](https://www.npmjs.com/package/gulp-image-resize) repro.
6. Special Thanks to [MDN web docs](https://developer.mozilla.org/en-US/) for information on benefits of sparingly using `will-change` to assist browser to optimize web pages
