---
title: Guide.
description: A how to guide for this site.
template: Home
---

<h3 class="text-blue text-left mb-3 text-2xl">
 How to guide
</h3>

<h4 class="text-green">Setup</h4>
<p>Run npm install in the project root and then one of the npm commands below</p>


<h4 class="text-green mt-4">NPM Commands</h4>
<p>npm run dev - builds the site locally with hot reloading</p>
<p>npm run build - builds the site for production, site root is the dist folder within the project</p>


<h4 class="text-green mt-4">Adding pages</h4>
<p>Create a markdown .md at the root level or in a sub folder</p>

<table class="mt-4 w-2/3">
<tr>
<th>Relative Path</th>
<th>Page Routing</th>
</tr>
<tr>
<td>/README.md</td>
<td>/</td>
</tr>
<tr>
<td>/guide/README.md</td>
<td>/guide/</td>
</tr>
<tr>
<td>/about.md</td>
<td>/about.html</td>
</tr>
</table>

<h4 class="text-green mt-4">Navigation Links</h4>
<p>These are added through config.js or you can modify the Navbar vue component directly</p>

<h4 class="text-green mt-4">Tags</h4>
<p>These are a data property on the ArticleList layout file (need to be dynamic really)</p>


<h4 class="text-green mt-4">Issues / Enhancements</h4>
<ul>
<li>Consistent styling of headers, buttons, boxes</li>
<li>fix JS</li>
<li>Network page - company logos</li>
<li>Image sizes consistent on headers and engine </li>
<li>add all network partners linkedins and make more clickable</li>
<li>Homepage - mobile view, image and buttons and content</li>
<li>Mobile padding and margins</li>
<li>Dynamic tags - drive by the tags on projects</li>
<li>Error handling when no hero image on Layout.vue</li>
<li>Remove tailwind classes no used on site</li>
<li>header images</li>
<li>white behind text</li>
<li>test on mobile devices</li>
<li>test all links</li>
<li>Hi Res project images</li>
<li>Single template with heroImage: /eye.svg </li>
<li>move to tailwind/simeple js</li>
<li>make legals prettier</li>
<li>...</li>
</ul>