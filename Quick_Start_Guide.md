# Profile Page Quick Start Guide

This guide is meant to provide you with a quick tour of this code. It can help you to understand how to build your own faculty profile site that leverages the Penn State Research Metadata Database, or you can use it as a starting point that you can customize to meet your needs.

## Introduction
First, take a look at the [live demo site](https://profile-demo.libraries.psu.edu/index.html#pjh18). This is a hosted copy of the code that you'll find here.

As you can see, profile pages can include biographical information, publications, presentations, grants, and other faculty data. This data will come directly from the Metadata Database which is updated several times per year (usually after the end of each semester) at a minimum. This means that your faculty's profiles will be automatically updated, rather than needing to be updated by you.

To see what a specific faculty member's profile looks like on the live demo, you can load it (assuming that they are in the database) by appending their Penn State WebAccess ID (`pjh18`, for example) to the end of the URL like so: `https://profile-demo.libraries.psu.edu/index.html#pjh18` and refreshing the page.

## Site structure

Typically, when creating a faculty profile directory site, the home page will be a list of a specific set of faculty members. That page will then link to a detailed profile page for each faculty member. This source code provides only the page for showing the detailed profile. It does not contain a page that serves as the directory/list, so this is something that you will need to construct yourself.

In order to fetch the dynamic profile content for a given faculty member, the detailed profile page needs a user ID (i.e. `pjh18` in the demo example above). This ID is used to make an API call to the Metadata Database to request the profile data for that person.

In `js/profile.js`, the user ID is parsed out of the page URL, and the URL for the API call is constructed like so:
```javascript
var user_id = window.location.hash.substr(1);
var profile_api_url = 'https://stage.metadata.libraries.psu.edu/v1/users/' + user_id + '/profile';
```

This is something that you'll probably need to change as you create your own profile directory site. You'll be linking to and rendering each profile detail page for your specific list of faculty members, so you can embed the user ID for each faculty member right in each page without needing to parse it out of the URL. Likewise, since the Metadata Database does not provide profile photos, you'll need to provide your own. So at a minimum, each profile detail page on your site will need to be rendered such that it provides a unique user ID and profile photo URL. The rest of the content (i.e. the header, footer, and dynamic profile data) could be shared between pages, or you may wish to provide additional information or specific customizations on each individual profile detail page.

## Customizing the content

`index.html` contains all of the markup for this site which uses the [Handlebars](https://handlebarsjs.com/) Javascript templating library to render the dynamic profile data from the Metadata Database. In the `<body>` of this document, you'll find the static layout for the page. In the `<head>` you'll find a tag, `<script id="profile-template" type="text/x-handlebars-template">`, that contains the Handlebars template for the dynamic content. This template gets rendered into the `<div id="profile">` tag within the body when the page loads. Changing this template will allow you to alter, rearrange, or remove any part of the dynamic content (profile photo, bio info, publications, presentations, etc.), while changing the markup in the body will allow you to customize the content of the page header, footer, etc.

## Customizing the styling

- You can edit `css/screen.css` if you want to add your own styling changes to pre-existing classes.
- You can edit `css/app.css` if you'd like to completely replace the provided styles with a new stylesheet.
