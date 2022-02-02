A simple personal site accessible at [https://www.ericmchoi.dev](https://www.ericmchoi.dev/). Written with Next.js.

## Preview

![Preview](https://user-images.githubusercontent.com/21096047/152234209-c32ff370-7bd8-40c8-92a4-3089ef5d7a69.png)

## Developing
To start developing, clone the repository and install the dependencies:

```bash
git clone git@github.com:ericmchoi/personal-site-2022.git
cd personal-site-2022
npm install
```
Then start the development server:
```bash
npm run dev
```
A development version of the site can then be seen at [http://localhost:3000](http://localhost:3000).

## Adding projects
Information for projects listed on the site are stored in ```projects``` folder as markdown files. The site takes the front matter of these files to populate the projects list. To add a new project, simply copy the contents of one of the existing files and paste it into a new file, adjusting values as necessary.
