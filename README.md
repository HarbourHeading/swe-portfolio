# Portfolio

Website displaying my frontend skills, recent projects, skills and contact information.

NOTE: .htaccess is only for apache servers. The node dockerfile does not support it, and therefore does not use it in that environment.
In production, make sure it is used. You can verify by doing `curl -I https://example.com` from terminal/CMD.

[Pagespeed insights](https://pagespeed.web.dev/analysis/https-liamcodes-dev/n0unr31gkh?form_factor=desktop) (A+, 130/100) and [HTTP observatory report](https://developer.mozilla.org/en-US/observatory/analyze?host=liamcodes.dev) (99 Performance Mobile and Desktop). Website is ~3MB in Memory (According to snapshot taken 02/20/25)

## Getting started

### Docker

To test what it would look like in production, I recommend using docker to serve the webpage.

1. Clone repo:

`git clone https://github.com/HarbourHeading/swe-portfolio.git`

2. Change directory into repo:

`cd swe-portfolio`

3. Build dockerfile:

`docker build -t swe-portfolio:latest .`

4. Run docker container:

`docker run -it -p 3000:3000 -d swe-portfolio:latest`
