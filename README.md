![Penn State Libraries Logo](https://metadata.libraries.psu.edu/psu_libraries.png)

# Researcher Metadata Profile Demo

This is a static HTML site used to demonstrate the capabilities of the [PSU Research Metadata](https://metadata.libraries.psu.edu) application's faculty profile [API](https://metadata.libraries.psu.edu/api_docs/swagger_docs/v1#!/user/findUserProfile). A copy of it is currently hosted [here](https://profile-demo.libraries.psu.edu/index.html). On this demo site, you can load a profile for a faculty member (assuming that they are in the database) by appending their Penn State WebAccess ID (`pjh18`, for example) to the end of the URL like so:  [https://profile-demo.libraries.psu.edu/index.html#pjh18](https://profile-demo.libraries.psu.edu/index.html#pjh18) and refreshing the page.

## Development

If you're running the Penn State Research Metadata app locally and want to use that as the data source for this site in development, you can locally change the `profile_api_url` in `profile_files/profile.js` in this project to use the hostname for your local application server. If you do this, be careful not to accidentally commit and deploy this change. Othewise, you can just leave the URL as-is and use the deployed Metadata app as the data source.

If you have Ruby and WEBrick installed, you can serve this site locally by going into the root of this project and running `ruby -run -e httpd . -p 9090`. The site will then be available locally at [http://localhost:9090/index.html](http://localhost:9090/index.html).

## Deployment

There is currently no automated deployment for this site. To deploy:

1. Connect to the Penn State VPN
2. SSH as the deploy user to the server:  `ssh -p 1855 deploy@researchprofile1prod.vmhost.psu.edu`
3. Go to the document root for the site:  `cd /var/www/sites/metadata_profile_demo`
4. Fetch changes from GitHub:  `git fetch`
5. Merge any new changes - for example, if the master branch is currently checked out:  `git merge origin/master`
