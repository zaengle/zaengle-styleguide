<!doctype html>
<html class="no-js" lang="">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Styleguide</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="/styleguide.css">
</head>

<body>
	 <header class="styleguide-header">
		<svg class="styleguide-zaengle-icon" viewBox="0 0 221.522 221.522" width="25%" height="25%"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M60.76 149.37v18.987h6.143l19.074-18.988M75.14 168.357h86.255V149.37h-67.18M147.617 52.532h-85.59V71.52h66.664"></path><path d="M221.522 0H0v221.522h221.522V0zm-53.165 74.317v.004c0 .192.005.383-.032.57-.016.08-.035.156-.058.234-.03.103-.048.208-.09.308-.04.1-.095.192-.148.286-.04.07-.07.145-.115.213-.107.16-.23.36-.365.496l-67.492 67.246h63.995c1.603 0 3.038 1.1 3.038 2.704v24.77c0 1.605-1.434 2.906-3.037 2.906H57.967c-1.603 0-2.903-1.3-2.903-2.905v-24.77c0-.014.004-.026.004-.04.002-.176.02-.353.053-.528.02-.09.052-.175.078-.262.028-.094.05-.19.087-.28.042-.102.1-.195.153-.29.04-.07.07-.143.114-.21.107-.16.23-.314.365-.45l66.975-67.1H59.418c-1.603 0-3.088-1.296-3.088-2.9V49.544c0-1.604 1.485-2.71 3.088-2.71h106.086c1.603 0 2.852 1.106 2.852 2.71v24.772z"></path><path d="M64.97 143.673h26.85l66.644-66.457h-27.367M136.896 71.52h25.765V52.532h-6.838"></path></g><path opacity=".5" d="M122.124 77.216h46.5L155.21 89.04l-40.126-4.796"></path></svg>
		<h1 class="styleguide-pagetitle"><strong>HiBot!</strong> Component Library <span>By Zaengle</span></h1>
	 </header>

	 <div class="styleguide-wrapper" data-sticky-wrap>
				<nav class="styleguide-nav">
				<div class="styleguide-js-sticky" data-margin-top="15">
						<ul class="styleguide-nav-list">
								<li class="styleguide-nav-title">Introduction</li>
								<li class="styleguide-nav-active"><a href="">What is a design system</a></li>
						</ul>

						<ul class="styleguide-nav-list">
								<li class="styleguide-nav-title">Introduction</li>
								<li><a href="/">Typography</a></li>
								<li><a href="/">Buttons</a></li>
								<li><a href="/">Forms</a></li>
								<li><a href="/">Radio Buttons</a></li>
								<li><a href="/">Modal</a></li>
						</ul>
						</div>
				</nav>
				<main class="styleguide-content">
						<h1 class="styleguide-heading styleguide-header--first">Typography</h1>
						<p class="styleguide-details">Commonly used components are extracted from Tailwind's vast array of utility classes.</p>
		
<h2 class="styleguide-heading">Headings</h2>
<article class="styleblock">
		<section class="styleblock_example">
				<p> Some Code?</p>
		</section>

		<pre class="styleblock_code"><code class="language-javascript">
		let Sticky = require('sticky-js');
		let sticky = new Sticky('.styleguide-js-sticky'); 
		</code></pre>
</article>

<h2 class="styleguide-heading">Buttons</h2>
<article class="styleblock">
		<section class="styleblock_example">
			<button class="btn btn--purple mb-2">
				<span class="btn__text">Button</span>
			</button>

			<button class="btn btn--purple ">
					<svg class="btn__icon" width="16" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 9.3L5.1 7.243a.611.611 0 0 0-.75 0L0 10.714v.472C0 11.614.45 12 1 12h14c.55 0 1-.343 1-.814v-.472l-4.35-3.471a.611.611 0 0 0-.75 0L8.35 9.3a.54.54 0 0 1-.7 0zm5.45-3.171l2.55 2.057c.2.171.35.085.35-.129V3.643c0-.257-.15-.3-.35-.129L13.1 5.571c-.25.129-.25.386 0 .558zM1 0C.45 0 0 .343 0 .814v.129l7.6 6.086c.2.171.55.171.75 0L16 .857V.814C16 .386 15.55 0 15 0H1zM0 3.643v4.414c0 .257.15.3.35.129L2.9 6.129c.2-.172.2-.429 0-.6L.35 3.47c-.2-.128-.35-.085-.35.172z" fill-rule="nonzero"/></svg>
				<span class="btn__text">Button</span>
			</button>
		</section>

		<pre class="styleblock_code"><code class="language-html">
<?php echo htmlentities('
		<button class="btn btn--purple mb-2">
			<span class="btn__text">Button</span>
		</button>

		<button class="btn btn--purple ">
				<svg class="btn__icon" width="16" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 9.3L5.1 7.243a.611.611 0 0 0-.75 0L0 10.714v.472C0 11.614.45 12 1 12h14c.55 0 1-.343 1-.814v-.472l-4.35-3.471a.611.611 0 0 0-.75 0L8.35 9.3a.54.54 0 0 1-.7 0zm5.45-3.171l2.55 2.057c.2.171.35.085.35-.129V3.643c0-.257-.15-.3-.35-.129L13.1 5.571c-.25.129-.25.386 0 .558zM1 0C.45 0 0 .343 0 .814v.129l7.6 6.086c.2.171.55.171.75 0L16 .857V.814C16 .386 15.55 0 15 0H1zM0 3.643v4.414c0 .257.15.3.35.129L2.9 6.129c.2-.172.2-.429 0-.6L.35 3.47c-.2-.128-.35-.085-.35.172z" fill-rule="nonzero"/></svg>
			<span class="btn__text">Button</span>
		</button>
'); ?>
		</code></pre>
</article>

<h2 class="styleguide-heading">Headings</h2>
<article class="styleblock">
		<section class="styleblock_example">
				PHP Guidlines
		</section>

		<pre class="styleblock_code"><code class="language-php">
// Good
class Url
{
    /** 
     * @param string $url
     * 
     * @return \Spatie\Url\Url
     */
    public static function fromString(string $url): Url
    {
        // ...
    }
}

// Bad: The description is redundant.
class Url
{
    /**
     * Create a url from a string.
     * 
     * @param string $url
     * 
     * @return \Spatie\Url\Url
     */
    public static function fromString(string $url): Url
    {
        // ...
    }
}
		</code></pre>
</article>

<h2 class="styleguide-heading">Headings</h2>
<article class="styleblock">
		<section class="styleblock_example">
				<p> Some Code?</p>
		</section>

		<pre class="styleblock_code"><code class="language-javascript">
		let Sticky = require('sticky-js');
		let sticky = new Sticky('.styleguide-js-sticky'); 
		</code></pre>
</article>

				</main>
		</div>

	 <footer class="styleguide-footer">
				<p>&copy; Copyright Zaengle. All rights reserved.</p>
	 </footer>

	 <script src="/styleguide.js"></script>
</body>

</html>