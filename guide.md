---
title: Guide.
description: A how to guide for this site.
heroImage: /eye.svg
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

<li>Projects page</li>
<li>Consistent styling</li>
<li>Network page - company logos</li>
<li>add all network partners linkedins</li>
<li>add customers to front page</li>
    <li>No responsive work done - need to add the css for mobile</li>
    <li>Dynamic tags - drive by the tags on projects</li>
    <li>Error handling when no hero image on Layout.vue</li>
    <li>Deploy to netlify and test forms</li>
    <li>Remove tailwind classes no used on site</li>
    <li>...</li>
    <li>privacy policy</li>
<li>debug nav</li>
<li>Fix homepage - mobile view, image and buttons</li>
<li>Mobile padding and margins</li>
<li>header images</li>
<li>white behind text</li>
<li>Consistent styling of headers, buttons, boxes</li>
<li>Projects page</li>
<li>Network page</li>
<li>Rewrite intro text for engine</li>
<li>...</li>
</ul>