# Portfolio

Website displaying my frontend skills, recent projects, skills and contact information.


## View

Go to [this](https://liamcodes.dev) website to view my portfolio.

[Pagespeed insights](https://pagespeed.web.dev/analysis/https-liamcodes-dev/blzqdqte4h?form_factor=desktop) and [HTTP observatory report](https://developer.mozilla.org/en-US/observatory/analyze?host=liamcodes.dev).

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